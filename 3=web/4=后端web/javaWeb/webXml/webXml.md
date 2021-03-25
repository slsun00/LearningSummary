## 介绍

## 相关概念

```java
xml
    
PCDATA 
    指的是被解析的字符数据（Parsed Character Data）
命名空间
    // xml 的概念
    使用前缀来提供避免元素命名冲突的方法。
```





## servlet 版本

```java
Servlet 2.3中，子元素必须按照DTD文件语法描述中指定的顺序出现
在Servlet 2.4中，顺序并不重要    
```



## web-app

```java
介绍
    web-app： 部署描述符的根元素 

解读
    (？)表示子元素是可选的，而且只能出现一次。星号
    (*)表示子元素可在部署描述符中出现零次或多次
23 个子元素
    
<!ELEMENT web-app 
(
	icon?, 
    display-name?, 
    description?,
    distributable?, 
    context-param*, 
   //filter*, 
   //filter-mapping*,
   //listener*, 
   //servlet*, 
   //servlet-mapping*, 
   //session-config?,
    mime-mapping*, 
    welcome-file-list?,
   //error-page*, 
    taglib*, 
    resource-env-ref*, 
    resource-ref*,
    security-constraint*, 
    login-config?, 
    security-role*,
    env-entry*,
    ejb-ref*, 
    ejb-local-ref*
)> 
```





### icon

```java
icon元素用来指定GIF格式或JPEG格式的小图标(16×16)或大图标(32×32)的文件名。
```

### display-name

```XML
display-name元素包含的就是XML编辑器显示的名称。
<display-name>Online Store Application</display-name>    
```

### description

```xml
提供有关部署描述符的信息
<!ELEMENT description (#PCDATA)>
```

### distributable

```xml
告诉servlet/JSP容器，编写将在分布式Web容器中部署的应用
<!ELEMENT distributable EMPTY>
<app-web>
    <distributable/>
</app-web>

```

### taglib

```xml
介绍
	描述JSP定制标记库。
    
语法
<!ELEMENT taglib (taglib-uri, taglib-location)>
<!ELEMENT taglib-uri (#PCDATA)>
<!--
	Web应用中的标记库的URI。
	taglib-uri元素的值与WEB-INF目录相对应。
-->    
<!ELEMENT taglib-location (#PCDATA)>
<!--
	包含一个位置，其中可以找到标记库的标记库描述符(TLD)文件。
-->   

```

## 头文件系列

### 介绍

```java
web.xml
	不同版本的头文件是不一样的， 注意区别
注意打包
    // 个人猜测， 低版本使用 
    war			
    war exploded
```

### 2.3

```xml
实际上是一个XML文件，包含了很多描述servlet/JSP应用的各个方面的元素
    
    
<?xml version="1.0" encoding="ISO-8859-1"?>    
    这个头指定了XML的版本号以及所使用的编码。 

<!DOCTYPE web-app
	PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
    http://java.sun.com/dtd/web-app_2_3.dtd">  
	DOCTYPE
        声明, 指定文件类型定义(DTD)，可以通过它检查XML文档的有效性。
     web-app
        定义该文档(部署描述符，不是DTD文件)的根元素 
    PUBLIC
        意味着DTD文件可以被公开使用 
    "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
        	DTD由Sun 维护。
        该信息也表示它描述的文档类型是DTD Web Application 2.3，而且DTD是用英文书写的。 
    URL"http://java.sun.com/dtd/web-app_2_3.dtd"
        表示D文件的位置

<?xml version="1.0" encoding="ISO-8859-1"?>  
<!DOCTYPE web-app PUBLIC 
    "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN" 
    "http://java.sun.com/dtd/web-app_2_3.dtd">  
   
<web-app>  
   
</web-app> 
```

### 2.4

```xml
<?xml version="1.0" encoding="UTF-8"?>  
<web-app id="WebApp_9" version="2.4" xmlns="http://java.sun.com/xml/ns/j2ee"   
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
    xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">  
   
</web-app> 
```

### 2.5

```xml
<?xml version="1.0" encoding="UTF-8"?>  
   
<web-app xmlns="http://java.sun.com/xml/ns/javaee"  
   
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
   
xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"  
   
version="2.5">  
   
</web-app>  

```

### 3.0

```xml
<?xml version="1.0" encoding="UTF-8"?>  
   
<web-app  
        version="3.0"  
        xmlns="http://java.sun.com/xml/ns/javaee"  
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">  
   
</web-app> 

```

## param 系列

```xml
context-param
	<!--全局作用域参数，位于 servletContentext 中 -->
    含有一对参数名和参数值，用作应用的servlet上下文初始化参数
    数名在整个Web应用中必须是惟一的。
init-param
	<!--这个和 context-param 一样，用来配置参数-->



<!ELEMENT context-param (param-name, param-value, description?)>
<!ELEMENT param-name (#PCDATA)>
	<!--参数名称-->
<!ELEMENT param-value (#PCDATA)>
	<!--参数的值-->
<!ELEMENT description (#PCDATA)>

<web-app>
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <!--这里报错，不用管，IDEA 检查而已-->
        <param-value>applicationContex.xml</param-value>
    </context-param>
        <!--可用description 子元素来描述参数-->
</web-app>



```



## filter 系列

```XML
filter
	<!--声明 Web 应用中的过滤器-->
	用于指定Web容器中的过滤器。在请求和响应对象被servlet处理之前或之后，
	可以使用过滤器对这两个对象进行操作
filter-mapping
	<!--声明 Web 应用中的过滤器映射-->
	过滤器被映射到
		一个servlet ：过滤器作用于servlet上
		一个URL模式 ：过滤器应用于与URL模式匹配的 URL 的资源
	执行顺序
		过滤是按照部署描述符的filter-mapping元素出现的顺序执行的。
<web-app>
    <filter>
        <!--过滤器名， 全局唯一：sevlet 类名 -->
        <filter-name>Encryption Filter</filter-name>
        <!--过滤器类的完全限定的名称：servlet类 全路径-->
        <filter-class>com.branysoftware.EncryptionFilter</filter-class>
        
        <!---->
         <init-param>
            <param-name>name</param-name>
            <param-value>lili</param-value>
        </init-param>
        
    </filter>
    
    <filter-mapping>
        <!--filter 中过滤器名 -->
        <filter-name>Encryption Filter</filter-name>
		<!--url 模式， 访问 url 的资源-->
        <url-pattern>/*</url-pattern>
        <!--sevlet 模式， 调用该 servlet -->
        <servlet-name>EncryptionFilteredServlet</servlet-name>
    </filter-mapping>
</web-app>


<!------------------------------------------------------------------------------------------->
<!ELEMENT filter (icon?, filter-name, display-name?, description?,filter-class, init-param*)>
<!ELEMENT filter-name (#PCDATA)>
<!ELEMENT filter-class (#PCDATA)>

<!ELEMENT filter-mapping (filter-name, (url-pattern | servlet-name))>
<!ELEMENT filter-name (#PCDATA)>
<!ELEMENT url-pattern (#PCDATA)>
<!ELEMENT servlet-name (#PCDATA)>
```

## listener 系列

```xml
介绍
	注册一个监听器类，可以在Web应用中包含该类。
	使用listener元素，可以收到事件什么时候发生以及用什么作为响应的通知。

<!ELEMENT listener (listener-class)>
<!ELEMENT listener-class (#PCDATA)>

<web-app>
    <listener>
    	<listener-class>MyAppListener</listener-class>
    </listener>
</web-app>


```

## servlet 系列

```XML
介绍
	<servlet></servlet>
	<servlet-mapping></servlet-mapping>

<!--servlet-->
<!ELEMENT servlet (
icon?, 
servlet-name, 
	<!--定义servlet的名称，该名称在整个应用中必须是惟一的: servlet 类
	-->
display-name?, 
description?,
(servlet-class|jsp-file), 
	<!--
	servlet-class元素：
		用来指定servlet的完全限定的名称：
		servlet 全类名, 自己写的或者是 spring 等提供的类
	jsp-file元素：用来指定应用中JSP文件的完整路径。这个完整路径必须由a/开始。
	-->
init-param*, 	
	<!--
		与 context-param 元素具有相同的元素描述符
		使用init-param子元素将初始化参数名和参数值传递给servlet。
	-->
load-on-startup?, 
	<!--
  当启动Web容器时，此元素自动将servlet加入内存，例化servlet，调用init方法
  来避免第一个servlet请求的响应因为servlet载入内存所导致的任何延迟。
  如果load-on-startup元素存在，而且也指定了jsp-file元素，
	则JSP文件会被重新编译成servlet，同时产生的servlet也被载入内存。

  加载顺序
 	 值小的： servlet将先被加载。
     空或负值: 则由Web容器决定什么时候加载servlet。
     值相同: 则由Web容器决定先加载哪一个servlet。
	-->
run-as?,
	<!--
	重写用于调用Web应用中servlet所设定的Enterprise JavaBean(EJB)的安全身份。
	Role-name是为当前Web应用定义的一个安全角色的名称。
	-->
security-role-ref*
	<!--
	定义一个映射，
	该映射在servlet中用isUserInRole (String name)调用的角色名与为Web应用定义的安全角色名之间进行。
	-->
)>
<!ELEMENT servlet-name (#PCDATA)>
<!ELEMENT servlet-class (#PCDATA)>
<!ELEMENT jsp-file (#PCDATA)>
<!ELEMENT init-param (param-name, param-value, description?)>
<!ELEMENT load-on-startup (#PCDATA)>
<!ELEMENT run-as (description?, role-name)>
<!ELEMENT role-name (#PCDATA)>

<!--servlet-mapping-->
<!ELEMENT servlet-mapping (servlet-name, url-pattern)>
<!ELEMENT servlet-name (#PCDATA)>
<!ELEMENT url-pattern (#PCDATA)>

<!--security-role-ref-->
<!ELEMENT security-role-ref (description?, role-name, role-link)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT role-name (#PCDATA)>
<!ELEMENT role-link (#PCDATA)>
    <!--
        role-link元素用来将安全角色引用链接到已定义的安全角色。
        role-link元素必须含有已经在security-role元素中定义的一个安全角色的名称。
    -->




<web-app>
    <!-- Faces Servlet -->
    <servlet>
        <servlet-name>Faces Servlet</servlet-name>
        <servlet-class>javax.faces.webapp.FacesServlet</servlet-class>
        <load-on-startup> 1 </load-on-startup>
    </servlet>
    <!-- Faces Servlet Mapping -->
    <servlet-mapping>
        <servlet-name>Faces Servlet</servlet-name>
        <url-pattern>/faces/*</url-pattern>
    </servlet-mapping>
</web-app>


```

## Session 系列

```xml
介绍
session-config
	为Web应用中的javax.servlet.http.HttpSession对象定义参数。

语法
<!ELEMENT session-config (session-timeout?)>
<!ELEMENT session-timeout (#PCDATA)>
    <!--
        用来指定默认的会话超时时间间隔，以分钟为单位。
        该元素值必须为整数, 零或负数，则表示会话将永远不会超时。
    -->


<web-app>
    <session-config>
   	 	<session-timeout>30</session-timeout>
    </session-config>
</web-app>
```

## error 系列

```xml
介绍

error-page元素
	用于将一段错误代码或一个异常类型映射到Web应用中的资源路径，
	在产生特殊的HTTP错误或指定的Java异常时，将显示相关的资源。
出现位置
	error-page ---- servlet 错误处理

<!ELEMENT error-page ((error-code | exception-type), location)>
<!ELEMENT error-code (#PCDATA)>
	<!--
	包含HTTP错误代码,
	出现具体的错误代码，调用对应的 servlet
	-->
<!ELEMENT exception-type (#PCDATA)>
	<!--
	Java异常类型的完全限定的名称
	出现具体的java 错误类型，调用对应的 servlet
	-->
<!ELEMENT location (#PCDATA)>
	<!--
	Web应用中的资源相对于应用目录的路径。location的值必须从a/开始。
	-->

每次产生HTTP 404错误代码时，下面的部署描述符可使Web容器显示error404.html页面：
<web-app>
    <error-page>
        <error-code>404</error-code>
        <location>/error404.html</location>
    </error-page>
</web-app>
```



## 未整理

```XML









(5) Faces Servlet的servlet元素
在 JSF应用中，需要为Faces Servlet定义一个servlet元素，如下所示：





12. mime-mapping元素
mime-mapping元素将mime类型映射到扩展名。
<!ELEMENT mime-mapping (extension, mime-type)>
<!ELEMENT extension (#PCDATA)>
<!ELEMENT mime-type (#PCDATA)>
extension元素用来描述扩展名。mime-type元素则为MIME类型。
举个例子，下面的部署描述符将扩展名txt映射为text/plain：
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE web-app
PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
"http://java.sun.com/dtd/web-app_2_3.dtd">
<web-app>
<mime-mapping>
<extension>txt</extension>
<mime-type>text/plain</mime-type>
</mime-mapping>
</web-app>


13. welcome-file-list元素
当用户在浏览器中输入的URL不包含某个servlet名或JSP页面时，welcome-file-list元素可指定显示的默
认文件。
<!ELEMENT welcome-file-list (welcome-file+)>
<!ELEMENT welcome-file (#PCDATA)>
举个例子说明，假设用户在浏览器的地址框中输入http://www.mycompany.com/appName/等地址。如果在
Web应用的部署描述符中指定welcome-file-list元素，用户就会看到一个权限错误消息，或者是应用目录
下的文件和目录列表。如果定义了welcome-file-list元素，用户就能看到由该元素指定的具体文件。
welcome-file子元素用于指定默认文件的名称。welcome-file-list元素可以包含一个或多个welcome-
file子元素。如果在第一个welcome-file元素中没有找到指定的文件，Web容器就会尝试显示第二个，以
此类推。
下面是一个包含welcome-file-list元素的部署描述符。该元素包含两个welcome-file元素：第一个指定
应用目录中的main.html文件，第二个定义jsp目录下的welcom.jsp文件，jsp目录也在应用目录下。
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE web-app
PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
"http://java.sun.com/dtd/web-app_2_3.dtd">
<web-app>
<welcome-file-list>
<welcome-file>main.html</welcome-file>
<welcome-file>jsp/welcome.jsp</welcome-file>
</welcome-file-list>
</web-app>
如果用户键入的URL不包含servlet名称、JSP页面或其他资源，则不会在应用目录中找到main.html文件，
这时就会显示jsp目录下的welcome.jsp文件。






16. resource-env-ref元素
可以使用resource-env-ref元素来指定对管理对象的servlet引用的声明，该对象与servlet环境中的资源
相关联。
<!ELEMENT resource-env-ref (description?, resource-env-ref-name,
resource-env-ref-type)>
<!ELEMENT resource-env-ref-name (#PCDATA)>
<!ELEMENT resource-env-ref-type (#PCDATA)>
resource-env-ref-name元素是资源环境引用的名称，其值为servlet代码中使用的环境的入口名称。该名
称是一个与java:comp/env相对应的Java命名和目录接口(JNDI)名称，该名称在整个Web应用中必须是惟一
的。
17. resource-ref元素
resource-ref元素用于指定对外部资源的servlet引用的声明。
<!ELEMENT resource-ref (description?, res-ref-name,
res-type, res-auth, res-sharing-scope?)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT res-ref-name (#PCDATA)>
<!ELEMENT res-type (#PCDATA)>
<!ELEMENT res-auth (#PCDATA)>
<!ELEMENT res-sharing-scope (#PCDATA)>
resource-ref子元素的描述如下：
●        res-ref-name是资源工厂引用名的名称。该名称是一个与java:comp/env上下文相对应的JNDI
名称，并且在整个Web应用中必须是惟一的。
●        res-auth表明：servlet代码通过编程注册到资源管理器，或者是容器将代表servlet注册到资
源管理器。该元素的值必须为Application或Container。
●        res-sharing-scope表明：是否可以共享通过给定资源管理器连接工厂引用获得的连接。该元
素的值必须为Shareable(默认值)或Unshareable。
18. security-constraint元素
部署描述符中的security-constraint元素允许不通过编程就可以限制对某个资源的访问。
<!ELEMENT security-constraint (display-name?,
web-resource-collection+,
auth-constraint?, user-data-constraint?)>
<!ELEMENT display-name (#PCDATA)>
<!ELEMENT web-resource-collection (web-resource-name, description?,
url-pattern*, http-method*)>
<!ELEMENT auth-constraint (description?, role-name*)>
<!ELEMENT user-data-constraint (description?, transport-guarantee)>
(1) web-resource-collection元素
web-resource-collection元素标识需要限制访问的资源子集。在web-resource-collection元素中，可以
定义URL模式和HTTP方法。如果不存在HTTP方法，就将安全约束应用于所有的方法。
<!ELEMENT web-resource-collection (web-resource-name, description?,
url-pattern*, http-method*)>
<!ELEMENT web-resource-name (#PCDATA)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT url-pattern (#PCDATA)>
<!ELEMENT http-method (#PCDATA)>
web-resource-name是与受保护资源相关联的名称。http-method元素可被赋予一个HTTP方法，比如GET和
POST。



(2) auth-constraint元素
auth-constraint元素用于指定可以访问该资源集合的用户角色。如果没有指定auth-constraint元素，就
将安全约束应用于所有角色。
<!ELEMENT auth-constraint (description?, role-name*)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT role-name (#PCDATA)>
role-name元素包含安全角色的名称。


(3) user-data-constraint元素
user-data-constraint元素用来显示怎样保护在客户端和Web容器之间传递的数据。
<!ELEMENT user-data-constraint (description?, transport-guarantee)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT transport-guarantee (#PCDATA)>
transport-guarantee元素必须具有如下的某个值：
●        NONE，这意味着应用不需要传输保证。
●        INTEGRAL，意味着服务器和客户端之间的数据必须以某种方式发送，而且在传送中不能改变。
●        CONFIDENTIAL，这意味着传输的数据必须是加密的数据。
在大多数情况下，安全套接字层(SSL)用于INTEGRAL或CONFIDENTIAL。



19. login-config元素
login-config元素用来指定所使用的验证方法、领域名和表单验证机制所需的特性。
<!ELEMENT login-config (auth-method?, realm-name?,
form-login-config?)>
<!ELEMENT auth-method (#PCDATA)>
<!ELEMENT realm-name (#PCDATA)>
<!ELEMENT form-login-config (form-login-page, form-error-page)>
login-config子元素的描述如下：
●        auth-method指定验证方法。它的值为下面的一个：BASIC、DIGEST、FORM或 CLIENT-CERT
●        realm-name指定HTTP Basic验证中使用的领域名。
●        form-login-config指定基于表单的登录中应该使用的登录页面和出错页面。如果没有使用基
于表单的验证，则忽略这些元素。这个元素的定义如下，其中form-login-page用于指定显示登录页面的
资源路径， form-error-page则用于指定用户登录失败时显示出错页面的资源路径。这两个页面路径都必
须以a/开始，并与应用目录相对应。
<!ELEMENT form-login-config (form-login-page, form-error-page)>
<!ELEMENT form-login-page (#PCDATA)>
<!ELEMENT form-error-page (#PCDATA)>



20. security-role元素
security-role元素指定用于安全约束中的安全角色的声明。
<!ELEMENT security-role (description?, role-name)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT role-name (#PCDATA)>
21. env-entry元素
env-entry元素用于指定应用环境入口。
<!ELEMENT env-entry (description?, env-entry-name, env-entry-value?,
env-entry-type)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT env-entry-name (#PCDATA)>
<!ELEMENT env-entry-value (#PCDATA)>
<!ELEMENT env-entry-type (#PCDATA)>
env-entry-name元素包含Web应用环境入口的名称。该名称是一个与java:comp/env相对应的JNDI名称，并
且在整个应用中必须是惟一的。
env-entry-value元素包含Web应用环境入口的值。该值必须是一个字符串类型的值，并且对于指定类型的
构造函数是有效的，该函数获得一个String参数；或者对于java.lang.Character是有效的，
java.lang.Character对象是一个字符。
env-entry-type元素包含环境入口值的完全限定的Java类型，该环境入口值是Web应用代码所期望的。这
个env-entry-type元素的值必须是如下之一：
java.lang.Boolean
java.lang.Byte
java.lang.Character
java.lang.String
java.lang.Short
java.lang.Integer
java.lang.Long
java.lang.Float
java.lang.Double


22. ejb-ref元素
ejb-ref元素用于指定EJB的home接口的引用。
<!ELEMENT ejb-ref (description?, ejb-ref-name, ejb-ref-type, home,
remote, ejb-link?)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT ejb-ref-name (#PCDATA)>
<!ELEMENT ejb-ref-type (#PCDATA)>
<!ELEMENT home (#PCDATA)>
<!ELEMENT remote (#PCDATA)>
<!ELEMENT ejb-link (#PCDATA)>
ejb-ref-name包含EJB引用的名称。EJB引用是servlet环境中的一个入口，它与java:comp/env相对应。这
个名称在Web应用中必须是惟一的。为求一致性，推荐您的ejb-ref-name元素名称以ejb/开始。
ejb-ref-name元素包含引用的EJB的期望类型。这个值必须是Entity或Session。
home元素包含EJB的home接口的完全限定的名称。remote元素包含EJB的remote接口的完全限定的名称。
ejb-ref或ejb-local-ref元素中用到的ejb-link元素可指定EJB 引用被链接到另一个EJB。Ejb-link元素
的值必须是同一个J2EE应用单元中某个EJB的ejb-name。Ejb-link元素中的名称可以由指定ejb-jar的路径
名组成，该ejb-jar包含引用的EJB。目标bean的名称添加在后面，用字符a# 与路径名分隔。路径名与包
含引用EJB的Web应用的WAR相对应。这就允许我们惟一标识具有相同ejb-name的多个企业bean。


23. ejb-local-ref元素
ejb-local-ref元素用于声明对EJB的本地home的引用。
<!ELEMENT ejb-local-ref (description?, ejb-ref-name, ejb-ref-type,
local-home, local, ejb-link?)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT ejb-ref-name (#PCDATA)>
<!ELEMENT ejb-ref-type (#PCDATA)>
<!ELEMENT local-home (#PCDATA)>
<!ELEMENT local (#PCDATA)>
<!ELEMENT ejb-link (#PCDATA)>
local元素包含EJB本地接口的完全限定的名称。Local-home元素包含EJB本地home接口的完全限定的名称。 
```

