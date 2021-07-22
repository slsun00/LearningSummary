# 信息查询

## == 前端拦截 cookie ==

```java
前端
    1. 判断cookie 中的token是否存在， 
    	不存在:则不发送获取用户信息的请求
    	存在:  token 信息，前端就发送信息查询的请求
    
后端
    1. 对 request header 进行解析，将 token值进行解析，
    	1.1 可以将解析后的数据（都是你需要的数据）返回给前端
    	1.2 根据传过来的 token 中的关键数据
```

## 前端

### api

```js
getLoginInfo() {
    return request({
        baseURL: 'http://localhost:8160',
        url: '/api/ucenter/member/get-login-info',
        method: 'get',
        // 通过请求头发送token
        // 这个可以改良，在拦截器中进行设置
        headers: { 'token': cookie.get('guli_jwt_token') }
    })
}
```

### 页面脚本

```js
<script>
import loginApi from '~/api/login'
import cookie from 'js-cookie'
    
export default {

  data() {
    return {
      userInfo: null
    }
  },

  created() {
    this.getUserInfo()
  },

  methods: {
    getUserInfo() {
      // 如果cookie中token不存在，则不显示用户信息
      if (!cookie.get('guli_jwt_token')) {
        return
      }
      // 如果token存在，则根据token解析用户登录信息
      loginApi.getLoginInfo()
          .then(response => {
            // 渲染页面
            this.userInfo = response.data.userInfo
          })
    }
  }
}
</script>
```



## 后端

### controller

```java
// 注意：因为需要在请求中传递header参数，因此可以在postman中测试
// jwt 是一个token 自包含的信息
@ApiOperation(value = "根据token获取登录信息")
@GetMapping("get-login-info")
public R getLoginInfo(HttpServletRequest request){

    try{
        // 这个逻辑是有一定问题的，就是说默认已经要要展示的数据全部放在了 jwtToken 中了
        // 这个工具方法是自己定义的，用来解析request header 中的token数据
        JwtInfo jwtInfo = JwtUtils.getMemberIdByJwtToken(request);
        return R.ok().data("userInfo", jwtInfo);
    }catch (Exception e){
        log.error("解析用户信息失败，" + e.getMessage());
        throw new GuliException(ResultCodeEnum.FETCH_USERINFO_ERROR);
    }
}
```

## == 后端验证 cookie ==