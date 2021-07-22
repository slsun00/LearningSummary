## session 操作

```java
@Autowired
HttpSession session;
//添加sessionKey
session.setAttribute("name", "admin");
//获取session
session.getAttribute("name")
//删除
session.removeAttribute("name");

// session 序列化后，存入字符串


@Controller
public class MainControler {
    
    @RequestMapping("/index")
    public String showindex(){
        return "index";
        }
    
    
    @RequestMapping("/login")
    public String showlogin(){
         return "login";
         }    
    
    
    @RequestMapping("/yanzheng")
    //也可以添加标注@ResponseBody 返回数据给页面（js跳转）
    public String yanzheng(User user ,HttpServletRequest request){
        //只是密码的简单判断，哈哈。当然也可以连数据判断
        if("1234".equals(user.getPassword())){
            request.getSession().setAttribute("users", user.getName());
            //先添加到session,在跳转
            return "index";
        }else {
            return "login";
        }
    }
}
————————————————
版权声明：本文为CSDN博主「xiaowenshuma」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xiaowenshuma/article/details/82951279
```

