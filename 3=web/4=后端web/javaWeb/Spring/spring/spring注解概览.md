## 注解解读

```java
1. 注解
    直接用到哪个总结哪个
2. 属性
    进入相关注解进行观看
注意
    @AliasFor("attribute")
    String value() default "";


    Alias 起别名
```



### @AliasFor

```java
介绍
    定义一个注解中的两个属性互为别名
	alias 起别名
语法例子
// 即:使用的时候
//    @MyAliasFor(value="123") 和 @MyAliasFor(attribute="123") 是一样的
public @interface MyAliasFor {
    // 通俗讲： 给 Value 设置别名为  attribute
    @AliasFor("attribute") 
    String value() default "";

    // 通俗讲： 给 attribute 设置别名为  Value
    @AliasFor("value")
    String attribute() default "";

    Class<? extends Annotation> annotation() default Annotation.class;
}
```



## == spring 注解 ==

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



### 类注入-对象创建

```java
介绍
    类上添加注解，可以快速将 bean 加入到 容器中
    spring 底层不会验证组件是否是到底是哪个注解，四个注解仅仅是语义不一样
对象创建
	@Component		用在类上用于实例化Bean
    @Service		业务逻辑，使用在service层类（servlet）上用于实例化Bean
    @Controller		控制器，使用在web层类上用于实例化Bean
    @Repository      持久化， 使用在dao层类上用于实例化Bean
    @Scope	
    
    
   
```



### 属性注入

```java
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
		
    @PostConstruct	 
    	方法上标注，该方法是Bean的初始化方法
    @PreDestroy		 
    	方法上标注，该方法是Bean的销毁方法
    

    @ComponentScan
    @Bean
    	给容器中添加组件，以方法名作为组件的 id 返回类型就是组件类型， 返回值为组件在容器中的实例

    @Import
```





### 异常处理

```java
@Controller_Advice :注解定义全局异常处理类
@Exception_Handler :注解声明异常处理方法        
  
```



### 其他

```java
@ComponentScan

@Mapper // org.apache.ibatis.annotations.Mapper;
	mybatis 进行接口编程的时候，对 mapper 接口进行标注        
```



##  aop方法注入

### 方法增强 - aop

```java
@Before
@After

@AfterReturning



@Throwing
   

```



## jdbc 数据集成访问

```java
@PropertySource	
@Configuration //配置类
@ComponentScan(basePackages = "com.atguigu") //组件扫描
@EnableTransactionManagement //开启事务
@Enable_Auto_Configuration（含义：{    是 compo}  
```



### 数据库

```java
@Transactional    事务注解
```

### 数据格式化

```java
@Data_Time_Format
@Number_Format
```



## web 

###  == mvc == 

### http 请求

```java
// 前端 -- http 请求类
	RequestMapping
        
        
// 前端 -- http 请求方法        
    @PostMapping("/xxx")     
    @PutMapping("/users/{userId}")
    @DeleteMapping("/users/{userId}")
    @PatchMapping("/profile")   //  PUT 不够用了之后才用 PATCH 请求去更新数据。  

```

### url 解析

```java
// 前端 -- url 参数解析
 
	@PathVariable 用于获取路径参数
    @RequestParam 用于获取查询参数
    @RequestBody  
        用于读取 Request 请求的 body 部分并且Content-Type 为 application/json 格式的数据
    @responseBody 
```

### json

```java
        
// json 
    @JsonIgnoreProperties 	作用在类上用于过滤掉特定字段不返回或者不解析。
    @JsonIgnore     一般用于类的属性上，作用和上面的@JsonIgnoreProperties 一样   
    @JsonFormat    一般用来格式化 json 数据       
    @JsonUnwrapped     扁平对象           

```





## 其他





## 数据库



## 其他

### @conditional









#  test



