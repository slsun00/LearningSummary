# 注解解读

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



## @AliasFor

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



# spring 注解

## xml 配置

```java

```



## 类注入-对象创建

### 基础

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

### configuration

```java
@Configuration	
	用于指定当前类是一个 Spring 配置类，当创建容器时会从该类上加载注解
	被标注的类是一个配置类，内部可以声明一个或多个@Bean方法, 
	配置类也是组件
        
        
语法
{@Configuration(
	proxyBeanMethods=
    	true(full)  : 
    		保持单例模式，组件出现依赖使用
    		代理 bean 方法，得到是一个代理对象，代理对象调用方法，springBoot 检查这个保持组件单实例
    		证每个@Bean方法被调用多少次返回的组件都是单实例
    	false (liter): 
    		多实例模式
    		每个@Bean方法被调用多少次返回的组件都是新创建的
    		springBoot 不会检查，没有组件使用，就使用，加载快
)}        
语法例子
/* 当前类算是一个 MyConfig.xml 文件
	内部的 bean 标注的方法，其返回值 对象会注入到 spring 容器中
	MyConfig.xml 中
    <bean class="User"></bean>
*/	
@Configuration
public class MyConfig{
    @Bean
    public User user01() {
        return new User();
    }
}        
```

### import

```java
介绍
	自动在容器中创建组件
语法格式    
    
    
语法例子
// 给容器中自动创建出这两个类型的组件、默认组件的名字就是全类名     
@Import({User.class, DBHelper.class})
public class MyConfig{
    
}   
```



## 属性注入

### 普通

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



## 方法注入

### 方法增强 - aop

```java
@Before
@After

@AfterReturning
属性（
	value  : 切入点表达式
	returning: 返回值        
    
）


@Throwing
属性（
	value  : 切入点表达式
	throwing: 
    
）        

```

### around

```java
@Around
标注方法参数(
	ProceedingJoinPoint pjp
		// 获取目标方法参数
    	pjp.getArgs() 
    	// 执行目标方法 method.involk(object,args) , 记得把返回值返回出去
    	pjp.proceed(目标函数参数)
    
)   
属性(

)    

// 语法例子    
try {
    // 就是利用反射调用目标方法即可，就是method . invoke(obj ,args )
    System. out. println(" [环绕前置通知] [ "+name+"方法开始] ") ;
    // 方法执行，否否则方法无法执行
    proceed = pjp. proceed(args);
	System . out . println(" [环绕返回通知] [ "+name+ "方法返回，返回值"+proceed+"] ") ;
} catch (Exception e) {
	System. out . println(" [环绕异常通知] [ "+name+"]方法出现异常，异常信息: "+e);
    // 异常一定要抛出, 让外界知道有异常
     throw new RuntimeException("")
} finally{
	System. out . println(" [环绕后置通知] [ "+name+"]方法结束");
}

//反射调用后的返回值也一定返回出去
return proceed ;
    

```

### order

```java
指定多切面类的时候，切面类的优先级	
```

### bean

```java
@Bean	
	使用在方法上，标注将该方法的返回值存储到 Spring 容器中
	默认单例   
                
介绍
	配合 @Configuration  使用
        
语法
@Bean(
属性：{
    value == name   以方法名作为 id
	String initMethod() default "";
	String destroyMethod() default "(inferred)";       
}        
)}   

例子 
@Configuration
public class MyConfig{
    @Bean("tom")
    public User user01() {
        return new User();
    }
}        
```



## 数据库

### 介绍

```java
        @PropertySource	
	@Configuration //配置类
    @ComponentScan(basePackages = "com.atguigu") //组件扫描
    @EnableTransactionManagement //开启事务
```

### 	@Transactional

```java
属性

ioslation：
    事务隔离级     
    // <!--isolation 隔离级别 -->
    ISOLATION_DEFAULT			isolation_default
    ISOLATION_READ_UNCOMMITTED	 isolation_read_uncommitted
    ISOLATION_READ_COMMITTED	 isolation_read_committed
    ISOLATION_REPEATABLE_READ	 isolation_repeatable_read
    ISOLATION_SERIALIZABLE		 isolation_serializable
propagation    
	事务传播行为
   // 看事务传播级别  
  
    
// 注意
    编译时异常(检查异常)：需要try-catch 或者 throw, 默认不回滚
    运行时异常(非检查异常)：可以不处理， 默认回滚，
    
rollbackFor-Class[] :
	 // 回滚, 
	 设置出现哪些异常，进行事务回滚, 让本来不会滚的回滚
	 rollbackFor={NullPointerException. class,ArithmeticException.class}

rollbackForClassName-String[ ] :  全类名


noRollbackFor-Class [] :
	// 不回滚,
	设置出现哪些异常，不进行事务回滚， 让原本回滚的异常不回滚
        noRollbackFor={FileNotFoundException.class}
noRollbackForClassName- String [] :  全类名
	


    
    
    
   
timeout - int
    // 超时时间  timeout=3
    （1）事务需要在一定时间内进行提交，如果不提交进行回滚
    （2）默认值是 -1 ，设置时间以秒单位进行计算
5、readOnly - boolean ：是否只读
    （1）读：查询操作，写：添加修改删除操作
    （2）readOnly 默认值 false，表示可以查询，可以添加修改删除操作
    （3）设置 readOnly 值是 true，设置成 true 之后，只能查询
   
```



### properties 配置

#### @ConfigurationProperties

```java
@ConfigurationProperties(
使用:{
    通常要和 @Componet 连用
    可以直接解析 properties 中的键值对，不用指定文件，依靠前缀区分       
}
属性：{
    prefix = value  前缀
		prefix = "jdbc"  // jdbc.name       
	        
}    

)
```

#### @EnableConfigurationProperties

```java
@EnableConfigurationProperties(
介绍:{
    使用在 properties 文件中
    配合使用  
        @EnableConfigurationProperties 用在配置类上
        @ConfigurationProperties 使用在被配置类上
        
}
属性：{
    Class[] value  要装配进来的类。
        Car.class
}    
)

例子
@Componnent    
@ConfigurationProperties(prefix="user")   
Class User{}  

// 开启 User 绑定， 把 User 这个组件自动注册到容器中
@EnableConfigurationProperties(User.class)
Class MyConfig{}
```



## 其他

### @conditional

```java
@conditional(
作用：{
   	满足指定条件，才进行组件注入
}    
位置：{
    类
	方法        
}
属性：{
    Class[] value
}    
继承：{
    // 常用
    ConditionalOnBean
    ConditionalOnMissingBean
        
    ConditionalOnClass
    ConditionalOnMissingClass
        
    ConditionalOnResource        
        
}    
)

```

### @ImportResource

```java
@ImportResource(
用法{
    导入Spring的配置文件 
}    
属性{
    String[] value=location  "classpath:beans.xml"
	reader         
}
)
```



# springMVC 注解

```java
@RequestMapping()
@ResponseBody  //告知SpringMVC框架 不进行视图跳转 直接进行数据响应

```

### RequestMapping

```java
作用：
    // 告诉 springMVC 来处理什么请求,路径
    用于建立请求 URL 和处理请求方法之间的对应关系
    注解处理相应 URL 的方法
特点
    一个请求对应一个方法
属性值（
    value(): String[]
            （"/hello"） 这个/是可以省略，即使省略了，也是默认从当前项目下开始;
            指定处理的客户端的请求的URL。
            它和path属性的作用是一样的
    method(): RequestMethod[]
            // 默认 method=RequestMethod.GET, 注意在 RequestMethod 类中
            用于指定请求的方式，枚举方式的，不是指定类型就会报错

    params(): String[]
			规定请求参数， 它支持简单的表达式。
            要求请求参数的key和value必须和配置的一模一样
            例如：
                params = {"accountName"}，请求参数必须有accountName
                params = {"!accountName"}，请求参数不能有accountName
            	{"userName=123"} 请求参数必须有accountName, 且值为 123
                {"userName!=123"} 请求参数必须有accountName, 且值不能为 123
            	{"userName","password"}  请求参数含有多个
    headers(): String()
		规定请求头， 写法形式和 params 相同
                

    consumes(): String()
		只接受内容类型是哪种的请求，规定请求头中的Content- Type

    produces(): String()  
		告诉浏览器返回的内容类型是什么，给响应头中加上Conteht-Type:text/html;charset=utf-8

                	
)
标注位置(
	类上	:
		请求URL 的第一级访问目录,相当于 web 的根路径
	方法上 :
		// 与类上的使用@ReqquestMapping标注的一级目录一起组成访问虚拟路径                
		请求 URL 的第二级访问目录，
		若类上没有标注： 方法处标注 URL 先对应于 web 的根目录                
                        
)
返回值（
	返回值: 通过解析器解析为实际的物理视图。
   对于 InternalResourceViewResolver 视图解析器会做下面的解析
   通过 prefix + returnVal + 后缀的方式得到实际物理视图，然后做转发
）                
 
        
语法例子
@Controller
@RequestMapping('/book')
public class UserController {
    // http://localhost:8080/book/quick
    //  @RequestMapping(value="/quick", method=RequestMethod.GET, params = {"accountName"})
    @RequestMapping("/quick")
    public String save() {
        return "success.jsp";
			相对当前资源所在地址，即 http://localhost:8080/book
        	 默认形式是： forward: success.jsp
		return "/success.jsp";
        	从 web 引用下找这个资源
             默认形式是： forward: /success.jsp
}        

```

#### URL 模糊匹配

```java
Ant风格资源地址支持3种匹配符:
    ? 	替代一个字符
    * 	替代多个字符， 和一层路径
    **	替代多层路径

```



### @RequestParam

```java
介绍
    // 获取 url 中获取请求参数
    /book/[{user}pathVariable]?[{user=admin}requestParam]
    获取请求参数，即获取 ？ 后面的参数，但是不能获取响应参数（后半句有一位），
	请求的参数名称与Controller的业务方法参数名称不一致时，就需要通过@RequestParam注解显示的绑定
    
参数
    value：请求参数名称
	required：此在指定的请求参数是否必须包括，默认是true，提交时如果没有此参数则报错
	defaultValue：当没有指定请求参数时，则使用指定的默认值赋值

语法例子

<form action="${pageContext.request.contextPath}/quick16" method="post">
    <input type="text" name="name"><br>
    <input type="submit" value="提交"><br>
</form>
// 处理代码      
	@RequestMapping(value="/quick16")
    @ResponseBody
    public void save16(
    	// 从 url 中获取参数名为 name 的参数，并赋值给 username
    	// username = request.getParameter("name")
    	@RequestParam(value="name",required = false,defaultValue = "itcast") String username
		) throws IOException {
        System.out.println(username);
    }        
```

### @PathVariable

```java
介绍
    参数注解
    // Restful风格的参数
    /book/[{user}pathVariable]?[{user=admin}requestParam]
    获取路径参数，但是不能获取请求参数，即不能获取 ？ 后面的参数

参数
    value：请求路径参数
	required：此在指定的路径参数是否必须包括，默认是true，提交时如果没有此参数则报错
	defaultValue：当没有指定路径参数时，则使用指定的默认值赋值
    
作用    
    通过@PathVariable可以将URL中占位符参数绑定到控制器处理方法的入参中: 
语法例子
	// 语法实例
	@RequestMapping(" /delete/{id}")
        // 可以获取 URL 中的占位符
        public String delete (@PathVariable("id") Integer id){
        UserDao . delete(id);
        return "redirect: /user/list. action";
    }
```

### @RequestHeader

```java
介绍
	获得请求头信息，相当于web阶段学习的request.getHeader(name)
属性
    参数
    value：请求头的名称
	required：是否必须携带此请求头，提交时如果没有此参数则报错
	defaultValue：当没有指定请求头，则使用指定的默认值赋值
    
    
语法例子
    @RequestMapping("/quick17")
    @ResponseBody
    public void quickMethod17(
    	@RequestHeader(value = "User-Agent",required = false) String headerValue
	){
    	System.out.println(headerValue);
	}

```



### @CookieValue

```java
介绍
    获得指定Cookie的值
属性
    // 
    value：指定cookie的名称
	required：是否必须携带此cookie
语法例子
	@RequestMapping("/quick18")
    @ResponseBody
    public void quickMethod18(
    	@CookieValue(value = "JSESSIONID",required = false) String jsessionid
	){
    	System.out.println(jsessionid);
	}
    
```

## 数据格式化

### @DateTimeFormat

```java
介绍
    FormattingConversionServiceFactroyBean 内部已经注册了：JodaDateTimeFormatAnnotationFormatterFactroy
    支持对日期类型的属性使用
语法
{ @DateTimeFormat    
属性(
    pattern="yyyy-MM-dd",  // 日期格式
    iso =
    style
)
使用(
	java.util.Date、java.util.Calendar、java.long.Long 时间类型进行标注：
)}
配置
    // xml, 默认创建 ConversionService 实例
    <mvc:annotation-driven/>
例子
	// 规定提交的数据的格式        
    @DateTimeFormat(pattern="yyyy-MM-dd")
	private Date birth;        
```

### @NumberFormat

```java
介绍
    FormattingConversionServiceFactroyBean 内部已经注册了：NumberFormatAnnotationFormatterFactroy
    支持对数字类型的属性， 可对类似数字类型的属性进行标注
    
语法
<@NumberFormat
属性（
	style="Style.NUMBER" {
    	用于指定样式类型, 类型为 NumberFormat.Style
             Style.NUMBER（正常数字类型）、
			Style.CURRENCY（货币类型）、 
             Style.PERCENT（百分数类型）
	}
	patter="#,###" {
        自定义样式, 类型为 String
    }    	
）>    
配置
    // xml, 默认创建 ConversionService 实例
    <mvc:annotation-driven/>    
例子
    
```

# JSR303

## 介绍

```java
以下每个注解都有一个 message 属性，属性值就是该注解校验出现错误的时候，显示在界面上的信息
```



## 基础注解

```java
@Null
	被注释的元素必须为null
@NotNull 
	被注释的元素必须不为null
@AssertTrue
	被注释的元素必须为true
@AssertFalse
	被注释的元素必须为false 
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
@Past
	被注释的元素必须是一个过去的日期
@Future
	被注释的元素必须是一个将来的日期
@Pattern (value)
	被注释的元素必须符合指定的正则表达式

```



## Hibernate Validator 扩展注解

```java
@Email
	被注释的元素必须是电子邮箱地址
@Length（
属性{
	min 
	max        
}）
	被注释的字符串的大小必须在指定的范围内
@NotEmpty
	被注释的字符串的必须非空
@Range
	被注释的元素必须在合适的范围内
        
@Valid 
      告知 springMVC 该 javaBean 需要校验
      并返回校验的结果，返回的是该参数之前的 javaBean 的校验结果，中间什么都别跟
      public String addEmp(@Valid Employee employee, BindingResult result){ ... }
```

## springMVC校验

```java

```



# mybits 注解

## 介绍

```java
基础
	MyBatis 3 构建在全面且强大的基于 Java 语言的配置 API 之上。
    它是 XML 和注解配置的基础。
    注解提供了一种简单且低成本的方式来实现简单的映射语句。
    
缺点
    但最强大的 MyBatis 映射并不能用注解来构建——我们真没开玩笑。
    而 C# 属性就没有这些限制，因此 MyBatis.NET 的配置会比 XML 有更大的选择余地
    
注解总概述
    https://mybatis.org/mybatis-3/zh/java-api.html#directoryStructure
```

## xml 配置

```xml

```



## mapper  标签

### select

```java
@Select	 方法	<select>	 
功能
    实现查询
属性
    value : sql语句
@SelectProvider    方法	<select>	 实现查询
```

### update delete insert

```java
@Insert	 方法	<insert>	实现新增
@Update	 方法	<update>	实现更新
@Delete	 方法	<delete>	实现删除

// 属性
    value	: sql 语句
// 例子
	@Insert("insert into user values(#{id},#{username},#{password},#{birthday})")
    public void save(User user);
        	
@InsertProvider	 方法	<insert>	实现新增
@UpdateProvider	 方法	<update>	实现更新
@DeleteProvider	 方法	<delete>	实现删除    

```

### resultMap



#### 子元素

##### constructor 

```xml
@ConstructorArgs 	方法 	<constructor>
```

##### association

```JAVA
@One 	N/A 	<association>
    实现一对一结果集封装
```

##### collection

```java
@Many 	N/A 	<collection>
    实现一对多结果集封装
```



##### id & result

```java
@Results	方法		 N/A
    可以与@Result 一起使用，封装多个结果集
    从版本 3.5.4 开始，该注解变为可重复注解。	
//  使用格式
    @Results（{
    	@Result（），
        @Result（）
	}）

@Result		N/A   	<result> <id>
    	实现结果集封装 
// 属性
    id		一个布尔值，表示该属性是否用于唯一标识和比较对象
    javaType	java 代码中的类
    jdbcType
    typeHandler
    
    column：数据库的列名
    property：需要装配的属性名
    one：需要使用的@One 注解（@Result（one=@One）（）））
    many：需要使用的@Many 注解（@Result（many=@many）（））    
```

##### discriminator

```java

```

## @Alias

```java
起别名
@Alias("stu")    
public class Student {}    
```



