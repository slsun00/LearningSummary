## 分布式Session登陆（需要整理）

## == 后端cookie 设置 ==

```java
场景应用
    我们知道用户登录后，需要存储 session 信息，session 信息通常是存储在服务器的内存中的，不能持久化(服务器重启失效)，多台服务器也不能共存。为了解决这个问题，我们可以将 session 存到几个服务器共享的地方里去，比如 Redis，只要在一个内网中，几台服务器可以共享 Redis (Redis本质也是装在某台服务器中)

前端
    1. 用户填写登陆表单，登陆表单的数据传给前端框架(vue 的 data, react 的 state)
    2. 前端通过 axios 的 data 进行传递
    
后端
    1. controller 进行 requestbody 解析请求携带的结构体（包含登陆信息）
    2. service 层将得到的登陆信息进行校验
    	通过手机号从数据库查询用户的详细信息，
    		密码核对
    		是否被禁用用户
    	将需要各个模块需要共享的账户信息（id,name,头像）聚合下，封装为一个 jwtToken 字符串返回
    // 注意
    /*
    	token 是存在数据库，是token这个数据结构的内部字段存储在服务器，
    	不是说组装的成品放在后端
    */
前端
    将 response 的 token(jwtToken) 放入cookie,然后设置下父域
    最后将首页进行跳转
```





## 前端



## 后端

### controller

```java
@ApiOperation(value = "会员登录")
@PostMapping("login")
public R login(@RequestBody LoginVo loginVo) {
    String token = memberService.login(loginVo);
    return R.ok().data("token", token);
}

@Controller
@Slf4j
public class LoginController {
    @Autowired
    private UserService userService;
    /**
     * 登录功能
     * 验证用户名和密码，登录成功，生成token，存入到redis中
     * 登录成功
     */
    @PostMapping("/doLogin")
    @ResponseBody
    public Result<String> doLogin(
        HttpServletResponse response,
        @RequestParam("username") String username,
        @RequestParam("password") String password
    ) {
        //登录
        log.info("用户登录：username:{}, password:{}", username, password);
        //判断用户名是否存在
        String token = userService.login(response, username, password);
        return Result.success(token);
    }
}
```

### service

```java
/**
 * 用户业务逻辑实现类
 * MyBatis Plus 版本
 */
@Service
public class UserServiceImpl implements UserService {
    public static final String COOKIE_NAME_TOKEN = "token";
    /**
     * token过期时间，2天
     */
    public static final int TOKEN_EXPIRE = 3600 * 24 * 2;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RedisUtil redisUtil;

    @Override
    public String login(HttpServletResponse response, String username, String password) {
        //判断用户名是否存在
        User user = findByUsername(username);
        if (user == null) {
            throw new GlobalException(CodeMsg.USERNAME_NOT_EXIST);
        }
        //验证密码，这里为了例子简单，密码没有加密
        String dbPass = user.getPassword();
        if (!password.equals(dbPass)) {
            throw new GlobalException(CodeMsg.PASSWORD_ERROR);
        }
        //生成cookie
        String token = UUID.randomUUID().toString().replace("-", "");
        
        // 将 token  存入数据库，写入 cookie
        addCookie(response, token, user);
        return token;
    }

// ============================================================    
    @Override
    public User findByUsername(String username) {
        return userMapper.findByUsername(username);
    }
    @Override
    public User getByToken(HttpServletResponse response, String token) {
        if (StringUtils.isEmpty(token)) {
            return null;
        }
        User user = JSON.parseObject(redisUtil.get(COOKIE_NAME_TOKEN + "::" + token), User.class);
        //重置有效期
        if (user == null) {
            throw new GlobalException(CodeMsg.USER_NOT_LOGIN);
        }
        addCookie(response, token, user);
        return user;
    }
    private void addCookie(HttpServletResponse response, String token, User user) {
        //将token存入到redis
        redisUtil.set(COOKIE_NAME_TOKEN + "::" + token, JSON.toJSONString(user), TOKEN_EXPIRE);
        //将token写入cookie
        Cookie cookie = new Cookie(COOKIE_NAME_TOKEN, token);
        cookie.setMaxAge(TOKEN_EXPIRE);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
}
```

### 请求(参数)验证 -

```java

/**
 * 用户参数验证，验证是否有token
 */
@Service
public class UserArgumentResolver implements HandlerMethodArgumentResolver {
    @Autowired
    private UserService userService;
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        Class<?> clazz = parameter.getParameterType();
        return clazz == User.class;
    }
    @Override
    public Object resolveArgument(
        MethodParameter parameter, 
        ModelAndViewContainer mavContainer,                                  
        NativeWebRequest webRequest, WebDataBinderFactory binderFactory
    ) throws Exception {
        
        HttpServletRequest request = webRequest.getNativeRequest(HttpServletRequest.class);
        HttpServletResponse response = webRequest.getNativeResponse(HttpServletResponse.class);
        String paramToken = request.getParameter(UserServiceImpl.COOKIE_NAME_TOKEN);
        String cookieToken = getCookieValue(request, UserServiceImpl.COOKIE_NAME_TOKEN);
        
        // 验证
        if (StringUtils.isEmpty(cookieToken) && StringUtils.isEmpty(paramToken)) {
            // return null;
            throw new GlobalException(CodeMsg.USER_NOT_LOGIN);
        }
        String token = StringUtils.isEmpty(paramToken) ? cookieToken : paramToken;
        return userService.getByToken(response, token);
    }
    
    
    private String getCookieValue(HttpServletRequest request, String cookiName) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null || cookies.length <= 0) {
            // return null;
            throw new GlobalException(CodeMsg.TOKEN_INVALID);
        }
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(cookiName)) {
                return cookie.getValue();
            }
        }
        return null;
    }
}
```

### WebConfig

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Autowired
    UserArgumentResolver userArgumentResolver;
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        //所有方法执行前，都会验证参数，检查token是否存在
        argumentResolvers.add(userArgumentResolver);
    }
    /**
     * 解决跨域
     * @return
     */
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig());
        return new CorsFilter(source);
    }
    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        return corsConfiguration;
    }
}
```



### entity

```java
package com.atguigu.guli.service.ucenter.entity.vo;

@Data
public class LoginVo implements Serializable {
    private static final long serialVersionUID = 1L;
    private String mobile;
    private String password;
}
```



