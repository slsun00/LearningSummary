

## 介绍

```java
跨域产生
    // 跨域问题 是针对ajax的一种限制
    跨域问题是浏览器对于ajax请求的一种安全限制：
    	一个页面发起的ajax请求，只能是与当前页域名相同的路径，这能有效的阻止跨站攻击
    浏览器从一个域名的网页去请求另一个域名的资源时，域名、端口、协议任一不同，都会出现跨域的问题。
                
            
问题
    实际生产环境中，肯定会有很多台服务器之间交互，地址和端口都可能不同，这需要我们解决跨域问题
                
                
跨域资源共享
    是请求的源和服务端的源不是“同源”，
    而服务端又没有设置允许的跨域资源共享，所以请求的响应被浏览器给拦截掉了         
```

## 跨域访问限制

```java
跨域限制
	// 非同源，共有三种行为受到限制
    （1） Cookie、LocalStorage 和 IndexDB 无法读取。
    （2） DOM 无法获得。
    （3） 请求的响应被拦截。 
    
同源
    只有在同源的，才允许访问相同的cookie、localStorage或是发送Ajax请求等等
    
浏览器
    //     // XMLHttpRequest 和 Fetch API 遵循同源策略 
    浏览器限制从脚本内发起的跨域 HTTP 请求。      
    使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，
```



## 同源/跨域产生

```java
同源策略
  是同源的请求才能相互访问
   // 本质  
    限制了从一个源加载的文档或脚本如何与来自另一个源的资源进行交互，是用于隔离潜在恶意文件的重要安全机制

产生场景
   前后端交互： 中间需要通过浏览器发送请求，会产生跨域问题
   服务器之间： 没有跨域的问题
    
产生    
	//同源、同域
        就是指"协议+域名+端口"三者相同
    	协议： 
    		http https
    	域名：
    		主域名 www.jd.com 与 www.taobao.com  ，jd 、taobao 就是主域名
    		子域名 www.jd.com 与 miaosha.jd.com ，www 、miaosha 就是子域名
    	端口
    		www.jd.com:8080 与 www.jd.com:8081 
		ip地址
		   // : 一个ip地址可以对应多个域名，但是一个域名只有一个ip地址                
            即便两个不同的域名指向同一个ip地址，也非同源     
    //非同源：跨域
		非同源就是跨域，               
```



## 跨域危害

```java
// 请求伪造
1.老李购买鱼竿，并登录了银行的网站输入账号密码进行了支付，浏览器在本地缓存了银行的Cookie2.
老李点击钓鱼网站，钓鱼网站使用老李登录银行之后的Cookie，伪造成自己是老李进行了转账操作。
这个过程就是著名的CSRF(Cross Site Request Forgery)，跨站请求伪造， 
正是由于可能存在的伪造请求，导致了浏览器的不安全
```



## CORS - 跨域资源共享

### 介绍

```java
介绍    
    // 规范化的跨域请求解决方案，安全可靠。    
    Cross Origin Resource Sharing ：跨域资源共享， 一种 w3c 标志    
    允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了AJAX只能同源使用的限制    
    是对ajax请求的限制，cors对静态资源没有跨域限制
```

### 实现机制

```java
/* 	
//  报文交互	
前端 	   ==> 资源（origin） == 请 求==>    
浏览器   ==>  跨域 HTTP 请求 ==>   请求头中携带一个字段 origin
服务端   ==>  资源（host）  ==>  响应报文中带有允许访问的信息

*/
当一个资源(origin)通过脚本向另一个资源(host)发起请求
	响应报文中
    	// 包含了正确 CORS 响应头请求报文      
    	自动将当前资源的域添加在请求头中一个叫 Origin 的 Header 中响应报文
	作用
        响应报文中设置额外的 HTTP 响应头来告诉浏览器，
        运行在某个 origin 上的 Web 应用被准许访问来自不同源服务器上的资源，不用浏览器进行拦截
```

#### 请求分类

```java
    简单请求(simple request)和非简单请求(not-so-simple request)简单请求        
        1) 请求方法是以下三种方法之一：     	
            HEAD   GET  POST    
        2) 请求头 header 中 不超出以下几种字段：  
        	// 无自定义的请求头信息
		    {Accept、 Accept-Language、Content-Language、Last-Event-ID }
            Content-Type：只限于三个值    		
                application/x-www-form-urlencoded 、    		
                multipart/form-data、    		
                text/plain
    非简单请求    
        // 凡是不同时满足简单请求两个条件，就属于非简单请求        
        可能对服务器数据产生副作用的 HTTP 请求方法    	
        (特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求)，跨域过程
```



#### 请求报文

```java
  

// 简单请求    
浏览器    	
    // 浏览器先发送（执行）请求然后再判断是否跨域
    1. 发起的ajax请求是简单请求时，会在请求头中携带一个字段 origin    	
    2. 根据响应报文发送请求
	{
    	请求头： 哪个请求需要进行跨域
               Origin: http://manage.handou.com	
    	响应头： 表示是否允许进行跨域访问
              Access-Control-Allow-Origin
    
}

服务器    	
    服务器根据 origin 决定是否允许其跨域	
    允许跨域的话：  响应报文会携带相应信息
           
    // 非简单请求    
    	浏览器    
            // CORS 规范要求， 就要求浏览器先发送一个预检请求，预检通过后再发送实际的请求 
            // 在简单请求的基础上增加一下字段：
            会在正式通信之前，增加一次HTTP查询请求,先使用 OPTIONS 方法发起一个预检请求，
            { // 预检请求 (preflight request)
              请求跨域：自定义请求头 . 发送到服务器
                  // 下来会用到的请求方式 content-type ,比如 put
                  Access-Control-Request-Headers: content-type
               响应头中：判断服务器是否允许跨域访问。
                   “Access-Control-Allow-Headers”: “Content-Type”  
			 缓存：预检命令是可以缓存
                  服务器端设置 “Access-Control-Max-Age”: “3600”     
        }

 	   服务器    	
    		确认允许之后，浏览器才能发起实际的 HTTP 请求    
    注意    	
        在预检请求的返回中，服务器端也可以通知客户端，    	
        是否需要携带身份凭证(包括 Cookies 和 HTTP 认证相关的数据)报文样式 	
	       
```



#### 响应报文

```java
介绍
    就是服务器设置额外的 HTTP 响应头，告诉浏览器允许 Origin 上的请求访问服务器上的资源
    此时浏览器就不会将该响应拦截掉了

    
        
    // 跨域设置
    // 简单请求的响应   
    	// 允许哪个域名(Origin 的值)进行跨域，是一个具体域名或者*（代表任意域名）
   		 响应头设置        Access-Control-Allow-Origin            
        // 必须的                       
            Access-Control-Allow-Credentials            
                是否允许携带cookie，默认情况下，cors不会携带cookie，除非这个值是true        
            Access-Control-Expose-Headers            
                是否可以向请求额外暴露的响应头    
            默认响应头的值 ： 6个        
                Cache-Control、        
                Content-Language、        
                Content-Type、        
                Expires、        
                Last-Modified、        
                Pragma    
     // 额外设置        
    // 需要返回其他的响应头给前端        
   		 可以通过在 Access-Control-Expose-Headers 中指定。
    
========================================================================================    
    // 非简单请求    
        与简单请求相比，除了Origin以外，多了两个头：	
        Access-Control-Request-Method：接下来会用到的请求方式，比如PUT	
        Access-Control-Request-Headers：会额外用到的头信息
```

### == CORS实现 ==

### jsonp

#### 介绍

```java
介绍
    JSON with Padding
    为了解决跨域请求资源而产生的解决方案,
	一种依靠开发人员创造出的一种非官方跨域数据交互协议。
产生原因
	//  利用 <script> 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。          
    1.AJAX直接请求普通文件存在跨域无权限访问的问题,不管是静态页面也好.
    2.不过我们在调用js文件的时候又不受跨域影响,比如引入jquery框架的,或者是调用相片的时候
    3.凡是拥有scr这个属性的标签都可以跨域例如<script><img><iframe>
    4.如果想通过纯web端跨域访问数据只有一种可能,那就是把远程服务器上的数据装进js格式的文件里.
	5.而json又是一个轻量级的数据格式,还被js原生支持
	6.为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，
        该协议的一个要点就是允许用户传递一个callback 参数给服务端，        
        
注意	   
    JSONP请求一定需要对方的服务器做支持才可以。 
与 ajax 区别    
    相同    	
        都是客户端向服务器端发送请求，从服务器端获取数据的方式    
    不同    	
      AJAX 
        属于同源策略，    	
      JSONP 
        属于非同源策略(支持跨域请求)优势    
        简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题缺点     
        需要服务的支持     
        只能发起GET请求， 
        不安全可能会遭受XSS攻击。
```

#### 使用例子

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <title>Insert title here</title>



    <script type="text/javascript" src="http://web.cn/js/message.js"></script>
    </head>
    <body>
        <div id='testdiv'></div>
        <!--页面加载， 自动进行 src 请求， src 得到的返回体中的 data 即数据-->
		<script type="text/javascript">
            var message = function(data) {
                alert(data[1].title);
            };
        </script>
    </body>
</html>
```

### jQuery

```java
介绍
    jquery已经把跨域封装到ajax上了,而且封装得非常的好,使用起来也特别方便
    
```



### 反向代理服务器

```java
介绍    
    同源策略是浏览器需要遵循的标准    
    服务器向服务器请求就无需遵循同源策略过程    
    // 用nginx把跨域反向代理为不跨域，支持各种请求方式   
    1.接受客户端的请求    
    2.将请求转发给实际的服务器    
    3.将服务器的响应结果返回给客户端例子    
    Nginx就是类似的反向代理服务器，可以通过配置Nginx代理来解决跨域问题。
```

### 服务端支持

```java
介绍    
    最安全的还是服务端来设置允许哪些来源的请求    
    即服务端在接收到请求之后，对允许的请求源设置 Access-Control-Allow-Origin 的响应头优势     
    在服务端进行控制是否允许跨域，可自定义规则	支持各种请求方式
缺点    
    会产生额外的请求使用    
    浏览器端    	
        目前，所有浏览器都支持该功能（IE10以下不行）。    	
        整个CORS通信过程，都是浏览器自动完成，不需要用户参与。    
    服务端    	
        CORS通信与AJAX没有任何差别，因此你不需要改变以前的业务逻辑。    	
        只不过，浏览器会在请求中携带一些头信息，    	
        以此判断是否允许其跨域，然后在响应头中加入一些信息即可。这一般通过过滤器完成即可。    
    java    
    	// springboot    
            1. @CrossOrigin    
            2. 通过CorsRegistry设置全局跨域配置    
            3. 通过CorsFilter设置全局跨域配置    
    //===============    
    SpringMVC
    	已经帮我们写好了CORS的跨域过滤器：CorsFilter 直接用即可    
    	服务端可以通过拦截器统一实现，不必每次都去进行跨域判定的编写    
```



