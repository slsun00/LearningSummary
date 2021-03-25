## 介绍

* Filter 过滤器它是 JavaEE 的规范。也就是接口 
* Filter 过滤器它的作用是：**拦截请求**，过滤响应。

![image-20210308112436715](image-20210308112436715.png)

## Filter 接口

### 使用

```java
public class AdminFilter implements Filter { 
    /*** doFilter 方法，专门用于拦截请求。可以做权限检查 */ 
    @Override 
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
          FilterChain filterChain) throws IOException, ServletException { 
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest; 
        HttpSession session = httpServletRequest.getSession(); 
        Object user = session.getAttribute("user"); 
        // 如果等于 null，说明还没有登录 
        if (user == null) { 
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest,servletResponse); 
            return; 
        } else { 
            // 让程序继续往下访问用户的目标资源 
            filterChain.doFilter(servletRequest,servletResponse); 
        } 
    }
}    
```

### 配置

```java
<!--filter 标签用于配置一个 Filter 过滤器--> 
<filter> 
    <!--给 filter 起一个别名--> 
    <filter-name>AdminFilter</filter-name> 
    <!--配置 filter 的全类名--> 
    <filter-class>com.atguigu.filter.AdminFilter</filter-class> 
</filter>
        
	<!--filter-mapping 配置 Filter 过滤器的拦截路径--> 
<filter-mapping> 
   		 <!--filter-name 表示当前的拦截路径给哪个 filter 使用--> 
    <filter-name>AdminFilter</filter-name> 
    	<!--url-pattern 配置拦截路径--> 
   		<!-- / 表示请求地址为：http://ip:port/工程路径/ 映射到 IDEA 的 web 目录  -->
		<!--/admin/* 表示请求地址为：http://ip:port/工程路径/admin/*-->
	<url-pattern>/admin/*</url-pattern> 
</filter-mapping>        
```

