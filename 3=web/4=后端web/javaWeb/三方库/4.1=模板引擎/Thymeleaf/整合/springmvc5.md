## 待整理

```java
https://www.yiibai.com/thymeleaf/thymeleaf-bean-value.html
```



## 使用

```java
    Java SE 8Maven 3.5.2
    Jetty Maven plugin 9.4.8
    Eclipse Oxygen.2 Release (4.7.2)
    
        
    Spring MVC 5.0.3.RELEASE
    Servlet API 4.0.0
    Thymeleaf 3.0.9.RELEASE


```

## web.xml

```xml
 <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.0.3.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.thymeleaf</groupId>
            <artifactId>thymeleaf-spring5</artifactId>
            <version>3.0.9.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <!-- Embedded Apache Tomcat required for testing war -->

            <plugin>
            <groupId>org.eclipse.jetty</groupId>
            <artifactId>jetty-maven-plugin</artifactId>
            <version>9.4.8.v20171121</version>
         </plugin>
        </plugins>
    </build>
</project>
```

## spring-mvc.xml 配置

```java

@Configuration
@EnableWebMvc
@ComponentScan("com.yiibai.spring.controller")
public class MvcWebConfig implements WebMvcConfigurer {

   @Autowired
   private ApplicationContext applicationContext;

   /*
    * STEP 1 - Create SpringResourceTemplateResolver
    * */
   @Bean
   public SpringResourceTemplateResolver templateResolver() {
      SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();   
      templateResolver.setCharacterEncoding("UTF-8");
      templateResolver.setApplicationContext(applicationContext);
      templateResolver.setPrefix("/WEB-INF/views/");
      templateResolver.setSuffix(".html");
      return templateResolver;
   }

   /*
    * STEP 2 - Create SpringTemplateEngine
    * */
   @Bean
   public SpringTemplateEngine templateEngine() {
      SpringTemplateEngine templateEngine = new SpringTemplateEngine();      
      templateEngine.setTemplateResolver(templateResolver());
      templateEngine.setEnableSpringELCompiler(true);

      return templateEngine;
   }

   /*
    * STEP 3 - Register ThymeleafViewResolver
    * */
   @Override
   public void configureViewResolvers(ViewResolverRegistry registry) {
      ThymeleafViewResolver resolver = new ThymeleafViewResolver();
      resolver.setTemplateEngine(templateEngine());
      registry.viewResolver(resolver);
   }

}

```

## 创建Thymeleaf模板/视图

```xml
// src/main/webapp/WEB-INF/views/index.html

<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
    <head>
    <meta charset="UTF-8">
    <title>SpringMVC5+Thymeleaf示例</title>
    </head>
    <body>
        <h1>Spring MVC + Thymeleaf Hello World example</h1>
        <p th:text="${message}"></p>
    </body>
</html>

```

## 创建控制器

```java

@Controller
public class MyController {

   @GetMapping("/")
   public String index(Model model) {
      model.addAttribute("message", "Hello Spring MVC 5!");
      return "index";
   }
}
```

## 运行程序

```jav
使用以下maven命令来运行您的应用程序。
mvn jetty:run(该命令从其源代码部署webapp，而不是构建war)。
在浏览器的地址栏中输入:http:// localhost:8080 来测试应用程序




//原文出自【易百教程】，商业转载请联系作者获得授权，非商业请保留原文链接：https://www.yiibai.com/thymeleaf/thymeleaf-springmvc5.html


```

