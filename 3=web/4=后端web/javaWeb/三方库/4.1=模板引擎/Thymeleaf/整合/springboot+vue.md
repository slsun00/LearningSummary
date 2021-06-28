

## // springboot

## 配置

### 依赖

```java
// springboot
	spring-boot-starter-web
// thymeleaf
	spring-boot-starter-thymeleaf        



    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.11</version>
            <scope>test</scope>
        </dependency>
        
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>

    <build>
    </build>

</project>
    
```

### application.properties

```java
// springboot 的官方文档的 templating peoperties

spring.thymeleaf.mode = html
spring.thymeleaf.prefix = classpath:/templates/
spring.thymeleaf.suffix = .html
spring.thymeleaf.cache = false    
```

### controller

```java
@Controller
public class HelloController {

    /*
    * model 存放数据， 放到 request 域中
    * 返回 String 表示视图
    *
    * 参数也可以是 httpServletRequest request
    * request.setAttribute("name", "lisi“);
    *
    * 总之就是放在 request 域中
    *
    * */

    @RequestMapping("/hello")
    public String hello(Model model) {


        // 添加数据
        model.addAttribute("name", "lisi");

        // 指定视图模板
        return "index";
    }
    
    
    
// resources/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<p th:text="${name}"></p>
</body>
</html>    
```

### 访问

```java
启动项目， 在 浏览器输入 localhost:8080/hello 就可以拿到渲染后的页面
```



## // vue

## 修改 Thymeleaf

```java
原因
    thymeleaf默认的校验规则是HTML5，但是这种规则太严格，需要改成LEGACYHTML5

nekohtml 介绍 
  一个简单地HTML扫描器和标签补偿器(tag balancer) ,
	使得程序能解析HTML文档并用标准的XML接口来访问其中的信息    
  能投扫描HTML文件并“修正”许多作者（人或机器）在编写HTML文档过程中常犯的错误
  能增补缺失的父元素、自动用结束标签关闭相应的元素，以及不匹配的内嵌元素标签
    
    
    
    
    
    
    
引包
    <dependency>
        <groupId>net.sourceforge.nekohtml</groupId>
        <artifactId>nekohtml</artifactId>
        <version>1.9.22</version>
    </dependency>

```

## 引入 vue

```html

<!DOCTYPE HTML>
<html lang="en"
      xmlns:th="http://www.thymeleaf.org">

<head th:include="console/header">
</head>

<body>

<script type="text/javascript" th:inline="javascript">
    var dealMeasureEnum = [[${dealMeasureEnum}]];
</script>

<style type="text/css">
</style>
    
<!-- import Vue.js -->
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
<!-- import stylesheet -->
<link href="https://cdn.bootcss.com/iview/2.14.0/styles/iview.css" rel="stylesheet">
<!-- import iView -->
<script src="https://cdn.bootcss.com/iview/2.14.0/iview.min.js"></script>



<div id="app">
	内部正常使用 vue 即可
</div>


</body>


<script type="text/javascript">
    /*<![CDATA[*/

    let app = new Vue({
        el: '#app',
        data() {
            return {}
        },
        created() {
        },
        methods: {        
        }
    })
    /*]]>*/
</script>
</html>


```



## 需要注意

```java


1.html模板页面中需要加入如下代码 
    // 加入命名空间，会有提示，而且防止报错
<html 
    lang="en" 
    xmlns:v-on="http://www.w3.org/1999/xhtml" 
    xmlns:th="http://www.thymeleaf.org" 
	xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity3">

2.script需要增加标签 
	<script th:inline="javascript">

3.html中获取数据 
	<input 
        th:value="${order.channelId}" 
         v-model="order.channelId"/>

4.在script中还需要使用注释标签将脚本代码包围起来
	// 防止在js代码中存在&符号的时候报下面的异常： 
    org.xml.sax.SAXParseException: 
        The entity name must immediately follow the ‘&’ in the entity reference. 

    //<![CDATA[ 
    var vue = new Vue({ 
    el: '#product-list', 
    data: { 
    order: { 
    channelId: '', 
    actCode: '', 
    channelUserId: '', 
    insertUserId: '', 
    sellerId: '', 
    src: '' 
    } 
    }, 
    methods: { 
    created() { 
    this.order = [[${order}]] 
    } 
    }) 
    //]]> 
    但是在html中可以通过将&改为&amp;的方式修改

5.在javascript中获取后端传过来的数据时 
	this.order = [[${order}]]

6.使用thymeleaf必须要有终止符（此问题在thymeleaf3中已经解决） 
    错误写法 
    <meta charset="UTF-8"> 
    正确写法 
    <meta charset="UTF-8" />

7.html代码中，不能使用vue的@click，而应该使用v-on:click

8.vue异常： 
Invalid handler for event “click”: got undefined原因为，在methods中没有定义对应方法

```

