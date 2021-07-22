## 注解解读

### @AliasFor





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

```java

类注入-对象创建
	@Component		用在类上用于实例化Bean
    @Service		业务逻辑，使用在service层类（servlet）上用于实例化Bean
    @Controller		控制器，使用在web层类上用于实例化Bean
    @Repository      持久化， 使用在dao层类上用于实例化Bean
    @Scope	
    
属性注入
    @Autowired：
    @Qualifier()：
    @Resource()：   
    @Value： 		
    @PostConstruct	   
    @PreDestroy		 
    @ComponentScan
    @Bean
    @Import    
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

@ConfigurationProperties
@EnableConfigurationProperties
```

### 数据库

```java
Transactional
```

## web 

###  == mvc == 

```java
// 前端 -- http 请求
	RequestMapping
        
// 前端 -- url 参数解析
     @RequestParam 
	@PathVariable 
	@RequestHeader  
	@CookieValue    
        
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
@Null			@NotNull
@AssertTrue		@AssertFalse
@Min(value)		@Max(value)
@DecimalMin(value)		@DecimalMax(value)

@Size(max, min)
@Digits(integer, fraction)
@Past
@Future
@Pattern (value)

// 扩展注解
@Email
@Length（属性{	min 	max        }）
@NotEmpty
@Range
@Valid 

    
```



## 其他

### @conditional









#  test

