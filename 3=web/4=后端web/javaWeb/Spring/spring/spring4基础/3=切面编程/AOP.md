## 介绍

```java
基础
     Aspect Oriented Programming 的缩写
（1）面向切面编程（方面），
    通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。     
	AOP 是 OOP 的延续
（2）通俗描述：不通过修改源代码方式，在主干功能里面添加新功能
特点 
    是函数式编程的一种衍生范型。
    利用AOP可以对业务逻辑的各个部分进行隔离，
优势
    在程序运行期间，在不修改源码的情况下对方法进行功能增强
    减少重复代码，提高开发效率，并且便于维护
```

## 底层原理

### 介绍

```java
原理
    动态代理

类型
    JDK 代理 :  
		基于接口的动态代理技术
         创建接口实现类代理对象，增强类的方法
	cglib 代理：
        基于父类的动态代理技术
    	创建子类的代理对象，增强类的方法
```

### jdk 代理

![image-20210310182641970](image-20210310182641970.png)

### CGLIB 动态代理

![image-20210310182959113](image-20210310182959113.png)



## 使用

- 编写核心业务代码（目标类的目标方法）

- 编写切面类，切面类中有通知(增强功能方法)

- 在配置文件中，配置织入关系，即将哪些通知与哪些连接点进行结合

## 实现切入点

### 基础

```java
连接点
    类中那些方法可以增强，这些方法可以称为连接点
切入点
    // 可以增强的，但是并不需要全部增强
    实际被真正增强的方法
通知（增强）    
    概念
    	// 方法中增加的代码
    	实际增强的部分
    分类
    	前置通知 	before
    	后置通知 	AfterReturning
    	异常通知	AfterThrowing
    	环绕通知	Around
    	最终通知	After
切面
	是一个动作， 把通知应用到切入点过程            
```

### 表达式

```java
作用
    知道对哪个类里面的哪个方法进行增强
语法结构
    execution([权限修饰符] [返回类型] [类全路径] [方法名称]([参数列表]) )
注意
    权限修饰符： 可以省略
    返回类型
    	* 表示任何
    类全路径
    	包名.类名.方法名:  * 表示任何
        包名、类名之间： 
            一个点：表示当前包下的类
            两个点：表示当前包及其子包下的类
    参数
    	两个点： 表示任意个数，任意类型的参数列表
例子
    // 对 com.atguigu.dao.BookDao 类里面的 add 进行增强
    execution(* com.atguigu.dao.BookDao.add(..))
    // 对 com.atguigu.dao.BookDao 类里面的所有的方法进行增强
    execution(* com.atguigu.dao.BookDao.* (..))
    
execution(public void com.itheima.aop.Target.method())	
execution(void com.itheima.aop.Target.*(..))
execution(* com.itheima.aop.*.*(..))
execution(* com.itheima.aop..*.*(..))
execution(* *..*.*(..))
```

## 通知

### 介绍

```java
    概念
    	// 方法中增加的代码
    	实际增强的部分
    分类
    	前置通知 	before
    	后置通知 	AfterReturning
    	异常通知	Throwing
    	环绕通知	Around
    	最终通知	After
语法
	<aop:通知类型 method=“切面类中方法名” pointcut=“切点表达式"></aop:通知类型>
```

### xml 通知

![图片5](%E5%9B%BE%E7%89%875.png)

### 注解通知

![图片7](%E5%9B%BE%E7%89%877.png)

## xml开发

### 基础

```java
介绍
    一般都是基于 AspectJ 实现 AOP 操作
    AspectJ 不是 Spring 组成部分，独立 AOP 框架，
    一般把 AspectJ 和 Spirng 框架一起使用，进行 AOP 操作
使用方式
    （1）基于 xml 配置文件实现
	（2）基于注解方式实现（使用）
引用依赖
    aspects --> springsource(net.sf.cglib; org.aopalliance; aspectj.weaver)
    aop
    
使用
    Spring 框架监控切入点方法的执行。
    一旦监控到切入点方法被运行，使用代理机制，动态创建目标对象的代理对象，
    根据通知类别，在代理对象的对应位置，将通知对应的功能织入，完成完整的代码逻辑运行。
    
代理方式使用
    框架会根据目标类是否实现了接口来决定采用哪种动态代理的方式。
```

### 快速入门

```java
①导入 AOP 相关坐标

②创建目标接口和目标类（内部有切点）

③创建切面类（内部有增强方法）

④将目标类和切面类的对象创建权交给 spring

⑤在 applicationContext.xml 中配置织入关系

⑥测试代码
```

### 配置

#### 坐标

```xml
<!--导入spring的context坐标，context依赖aop-->
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-context</artifactId>
  <version>5.0.5.RELEASE</version>
</dependency>
<!-- aspectj的织入 -->
<dependency>
  <groupId>org.aspectj</groupId>
  <artifactId>aspectjweaver</artifactId>
  <version>1.8.13</version>
</dependency>
```





#### xml 文件

```xml
<!--配置目标类-->
<bean id="target" class="com.itheima.aop.Target"></bean>
<!--配置切面类-->
<bean id="myAspect" class="com.itheima.aop.MyAspect"></bean>
<!--织入-->
<aop:config>
    <!--引用myAspect的Bean为切面对象-->
    <aop:aspect ref="myAspect">
        <!--配置Target的method方法执行时要进行myAspect的before方法前置增强-->
        <aop:before method="before" pointcut="execution(public void com.itheima.aop.Target.method())"></aop:before>
  
    </aop:aspect>
</aop:config>
```

### 切点表达式提取

```xml
介绍
    当多个增强的切点表达式相同时，
    可以将切点表达式进行抽取，在增强中使用 pointcut-ref 属性代替 pointcut 属性来引用抽取后的切点表达式。
<aop:config>
    <!--引用myAspect的Bean为切面对象-->
    <aop:aspect ref="myAspect">
        <aop:pointcut id="myPointcut" expression="execution(* com.itheima.aop.*.*(..))"/>
        <!--表示使用到的切点表达式和前面相同-->
        <aop:before method="before" pointcut-ref="myPointcut"></aop:before>
    </aop:aspect>
</aop:config>
```





## 注解开发

### 使用

```java
创建目标接口和目标类（内部有切点）

创建切面类（内部有增强方法）

将目标类和切面类的对象创建权交给 spring

在切面类中使用注解配置织入关系
// z注意开启
在配置文件中开启组件扫描和 AOP 的自动代理

测试

```



### 基础

```java

@Component
public class User {
    public void add(){
        System.out.println("user");
    }
}

@Component("userProxy")
@Aspect  //生成代理对象，增强的类，来增强其他类的方法
public class UserProxy {
     //前置通知
     //@Before 注解表示作为前置通知
     @Before(value = "execution(* com.atguigu.spring5.aopanno.User.add(..))")
     public void before() {
    	 System.out.println("before.........");
     }
     //后置通知（返回通知）， 返回值之后执行
     @AfterReturning(value = "execution(* com.atguigu.spring5.aopanno.User.add(..))")
     public void afterReturning() {
     	System.out.println("afterReturning.........");
     }
     //最终通知		方法之后执行
     @After(value = "execution(* com.atguigu.spring5.aopanno.User.add(..))")
     public void after() {
     	System.out.println("after.........");
     }
     //异常通知
     @AfterThrowing(value = "execution(* com.atguigu.spring5.aopanno.User.add(..))")
     public void afterThrowing() {
     	System.out.println("afterThrowing.........");
     }
     //环绕通知
     @Around(value = "execution(* com.atguigu.spring5.aopanno.User.add(..))")
     public void around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
     	System.out.println("环绕之前.........");
         //被增强的方法执行
         proceedingJoinPoint.proceed();
         System.out.println("环绕之后.........");
     }
}  
```

### 配置

#### xml配置

```java
xml 配置
 xmlns:context="http://www.springframework.org/schema/context" 
 xmlns:aop="http://www.springframework.org/schema/aop" 
  xsi:schemaLocation="http://www.springframework.org/schema/beans 
        http://www.springframework.org/schema/beans/spring-beans.xsd 
         http://www.springframework.org/schema/context 
        http://www.springframework.org/schema/context/spring-context.xsd 
         http://www.springframework.org/schema/aop 
        http://www.springframework.org/schema/aop/spring-aop.xsd" 

<!--组件扫描-->
<context:component-scan base-package="com.itheima.aop"/>

<!--aop的自动代理-->
<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
 
```

#### 完全注解

```java
// 创建配置类，不需要创建 xml 配置文件 
@Configuration
@ComponentScan(basePackages = {"com.atguigu"})
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class ConfigAop {
}
```



### 相同切入点提取

```java
介绍
    公共方法
    是在切面内定义方法，在该方法上使用@Pointcut注解定义切点表达式，然后在在增强注解中进行引用
    
@@Component("myAspect")
@Aspect
public class MyAspect {
    // 方式一：@Before("MyAspect.myPoint()")
    // 方拾二：@Before("Pointcut()")
    @Before("MyAspect.myPoint()")
    public void before(){
        System.out.println("前置代码增强.....");
    }
    @Pointcut("execution(* com.itheima.aop.*.*(..))")
    public void myPoint(){}
}    
    
    
    
    
//相同切入点抽取
// User 类的 add 方法    
@Pointcut(value = "execution(* com.atguigu.spring5.aopanno.User.add(..))")
public void pointdemo() {
}
//前置通知
//@Before 注解表示作为前置通知
@Before(value = "pointdemo()")
public void before() {
 	System.out.println("before.........");
}
```



### 多增强类

```java
介绍
    有多个增强类多同一个方法进行增强
    设置增强类优先级
语法例子
// 在增强类上面添加注解 @Order(数字类型值)，数字类型值越小优先级越高    
@Component
@Aspect
@Order(1)
public class PersonProxy
```

