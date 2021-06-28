## vscode

```java
https://github.com/varHarrie/varharrie.github.io/issues/10
```



## 原因

```java
spring全家桶是在 spring 的基础上做的封装， 所以很多配置都是通用的
相同的配置会导致使用混乱，而且他们都是通用的，没必要分开来学，这样会导致混乱的 
  
// SpringBoot是整合Spring技术栈的一站式框架
// SpringBoot是简化Spring技术栈的快速开发脚手架    
    
// springboot 自动配置了
	1. 自动配好Tomcat
        • 引入Tomcat依赖。
        • 配置Tomcat

	2. 引入SpringMVC全套组件
        • 自动配好SpringMVC常用组件（功能）
        • 自动配好Web常见功能，如：字符编码问题
        • SpringBoot帮我们配置好了所有web开发的常见场景
        • 默认的包结构
        • 主程序所在包及其下面的所有子包里面的组件都会被默认扫描进来
        • 无需以前的包扫描配置
   		 • 想要改变扫描路径，@SpringBootApplication(scanBasePackages="com.atguigu")
    3. 创建独立Spring应用， 内嵌web服务器， 自动配置Spring以及第三方功能

```





# == spring 注解 ==

```java
bean 核心
    类、属性：等对象的创建
    
aop
    方法    

jdbc
    数据库、配置文件
test
    测试    
    
web
    网络
        
```



##  bean 核心

```java

类注入-对象创建
	@Component		用在类上用于实例化Bean
     @Service		业务逻辑，使用在service层类（servlet）上用于实例化Bean
    @Controller		控制器，使用在web层类上用于实例化Bean
    @Repository      持久化， 使用在dao层类上用于实例化Bean
    @Scope	
    
属性注入
    属性注入
    @Autowired：
        使用在字段上用于根据属性类型进行自动装配，
        按照数据类型从 spring 容器中匹配
    @Qualifier()：
        根据名称进行注入， 结合@Autowired一起使用
        按照 id 值从容器中进行匹配
    @Resource()： 
        按照名称进行注入， 相当于@Autowired+@Qualifier 
        可以根据类型注入，可以根据名称注入   
    @Value：  
        注入普通类型属性 
		

    




    @import(User.class)        
        导入给容器中自动创建出这两个类型的组件、默认组件的名字就是全类名 

    
    @PostConstruct	   
    @PreDestroy		 

// 异常
    @ControllerAdvice :注解定义全局异常处理类
    @ExceptionHandler :注解声明异常处理方法   
 
        
        
// 待补充
@conditional 
    @ComponentScan        
```



##  aop方法注入

```java
@Before
@After
@Around
@AfterReturning

order


@Throwing
     
bean 生成bean 实例
    
    
    @PostConstruct	 
    	方法上标注，该方法是Bean的初始化方法
    @PreDestroy		 
    	方法上标注，该方法是Bean的销毁方法
	@Bean
    	给容器中添加组件，以方法名作为组件的 id 返回,类型就是组件类型， 
    	返回值为组件在容器中的实例            
@Before
@After
@AfterReturning
@Throwing
  
around
order
bean                    
```



## jdbc 数据集成访问

### 配置

```java
@PropertySource	
@Configuration //配置类
@ComponentScan(basePackages = "com.atguigu") //组件扫描
@EnableTransactionManagement //开启事务

@import
@importResource




@SpringBootConfifiguration
@ComponentScan
@EnableAutoConfiguration


// properties
@ConfigurationProperties  // 常用， 读取配置信息并与 bean 绑定
@EnableConfigurationProperties

    
```

### 数据库

```java
@Transactional
	被声明的测试方法的数据会回滚，避免污染测试数据。
```

## web 

###  == mvc == 

```java
// 前端 -- http 请求类
	RequestMapping
        
        
// 前端 -- http 请求方法        
    @PostMapping("/xxx")     
    @PutMapping("/users/{userId}")
    @DeleteMapping("/users/{userId}")
    @PatchMapping("/profile")   //  PUT 不够用了之后才用 PATCH 请求去更新数据。  

      
        
        
// 前端 -- url 参数解析
 	
	// 请求        
	@PathVariable 用于获取路径参数
    @RequestParam 用于获取查询参数
    @RequestBody  
        用于读取 Request 请求的 body 部分并且Content-Type 为 application/json 格式的数据

    // 响应        
    @responseBody 
	responseHeader        
        
        
// json 
    @JsonIgnoreProperties 	作用在类上用于过滤掉特定字段不返回或者不解析。
    @JsonIgnore     一般用于类的属性上，作用和上面的@JsonIgnoreProperties 一样   
    @JsonFormat    一般用来格式化 json 数据       
    @JsonUnwrapped     扁平对象           
        
//  前端 -- 参数校验JSR 注解  
        
// 类
// 字段
        @DateTimeFormat
        @NumberFormat
        
// 方法
// 参数
        
```



### jsr303

```java
// 基础注解

// 非空判断
    @Null(message="userId 不能为空")
        被注释的元素必须为null
    @NotNull 
        被注释的元素必须不为null
    @NotBlank 
        被注释的字符串非 null，并且必须包含一个非空白字符   
// boolean 判断            
    @AssertTrue
        被注释的元素必须为true
    @AssertFalse
        被注释的元素必须为false 
// 数字  
    @Min(value)
        被注释的元素必须是一个数字，其值必须大于等于指定的最小值
    @Max(value)
        被注释的元素必须是一个数字，其值必须小于等于指定的最大值
    @DecimalMin(value)
        被注释的元素必须是一个数字，其值必须大于等于指定的最小值
    @DecimalMax(value)
        被注释的元素必须是一个数字，其值必须小于等于指定的最大值
    @Size(max, min)
        被注释的元素的大小必须在指定的范围内
    @Digits(integer, fraction)
        被注释的元素必须是一个数字，其值必须在可接受的范围内
// 日期            
    @Past
        被注释的元素必须是一个过去的日期
    @Future
        被注释的元素必须是一个将来的日期

// 正则表达式            
    @Pattern(regexp = "((^Man$|^Woman$|^UGM$))", message = "sex 值不在可选范围")
	被注释的元素必须符合指定的正则表达式

// 扩展注解

@Email
	被注释的元素必须是电子邮箱地址
@Length
	被注释的字符串的大小必须在指定的范围内
@NotEmpty
	被注释的字符串的必须非空
@Range
	被注释的元素必须在合适的范围内
        
@Valid 
      // 一定一定不要忘记在类上加上 Validated 注解了，这个参数可以告诉 Spring 去校验方法参数
      告知 springMVC 该 javaBean 需要校验
     
```

# ===   springboot   ===

## bean核心

```java
SpringBootApplication
    表名该类是 springboot 的启动类



@ResrController
	@Controller和@ResponseBody的合集
    表示示这是个控制器 bean,并且是将函数的返回值直 接填入 HTTP 响应体中,是 REST 风格的控制器。
        
   
        

      
@Mapper // org.apache.ibatis.annotations.Mapper;
	mybatis 进行接口编程的时候，对 mapper 接口进行标注        
```



## aop 方法注入

## jdbc 数据集成访问

### 配置

```java
@SpringBootConfifiguration
```



### 数据库

## web

### == mvc ==

```java
```

