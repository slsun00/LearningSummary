## Spring

## 配置

### pom.xml

```xml
// 坐标
<!--此处需要注意的是，spring5 及以上版本要求 junit 的版本必须是 4.12 及以上-->
<!--springtest-->
  <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>5.0.2.RELEASE</version>
    </dependency>
    <!--junit-->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
    <!--Spring坐标-->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>
    <!--spring-web-->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-web</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>

    <!--SpringMVC坐标-->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>
    <!--Servlet坐标-->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>3.0.1</version>
      <scope>provided</scope>
    </dependency>
    <!--Jsp坐标-->
    <dependency>
      <groupId>javax.servlet.jsp</groupId>
      <artifactId>javax.servlet.jsp-api</artifactId>
      <version>2.2.1</version>
      <scope>provided</scope>
    </dependency>


组件扫描
介绍
    spring 和 springMVC 是各自扫描各自的，各自管各自的

命名空间 & 约束地址： context mvc

组件扫描
    // SpringMVC基于Spring容器，
    //所以在进行SpringMVC操作时，需要将Controller存储到Spring容器中，
    // 如果使用@Controller注解标注的话，就需要使用
    <context:component-scan base-package=“com.itheima.controller"/>
    </context:component-scan>
        
注意
    可以设置哪些文件可以扫描或者不扫描， 不过只用设置 controller

```

### web.xml 

```java
文件目录
    webapp
    	|- WEB-INF
			|- web.xml
    		 |- HelloWeb-servlet.xml 
    	|- 
介绍
    位于 webapp/ 下
作用
    在初始化 HelloWeb DispatcherServlet 时，
    框架将尝试加载位于该应用程序此目录中文件名为 [servlet-name]-servlet.xml 的应用程序内容


    
    
servlet 监听器
   servlet 监听器 ContextLoaderListener 自定义该文件的名称和位置
   不再使用默认文件名 [servlet-name]-servlet.xml 和默认位置 WebContent/WEB-INF
    // 注意 IDEA 中的是 spring 配置文件
    <context-param>
       <param-name>contextConfigLocation</param-name>
       <param-value>/WEB-INF/HelloWeb-servlet.xml</param-value>
    </context-param>
    <listener>
       <listener-class>
          org.springframework.web.context.ContextLoaderListener
       </listener-class>
    </listener>
```

### xxxservlet.xml

```java
文件目录
    webapp
    	|- WEB-INF
			|- web.xml
    		 |- HelloWeb-servlet.xml 

    
标签解读
    

[servlet-name]-servlet.xml 
    文件将用于创建 bean 定义，重新定义在全局范围内具有相同名称的任何已定义的 bean。

<context:component-scan>
    标签将用于激活 Spring MVC 注释扫描功能，
    该功能允许使用注释，如 @Controller 和 @RequestMapping 等等。
InternalResourceViewResolver 
    将使用定义的规则来解决视图名称。
    按照上述定义的规则，一个名称为 hello 的逻辑视图将发送给位于 /WEB-INF/jsp/hello.jsp 中实现的视图。

    
实例
<beans>    
  // 注意 IDEA 中的是 spring 配置文件
   <context:component-scan base-package="com.tutorialspoint" />

   <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
      <property name="prefix" value="/WEB-INF/jsp/" />
      <property name="suffix" value=".jsp" />
   </bean>
</beans>
       
```

