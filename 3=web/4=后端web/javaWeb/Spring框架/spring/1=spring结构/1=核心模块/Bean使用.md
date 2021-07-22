## bean 快速入门

### 导包 - pom.xml

```java
方式一
    // Libraries 
    lib 文件夹中添加需要的第三方 spring 包，然后
方式二
    // maven 项目中，插件配置 
    pom.xml 中的 project 标签
```



### 配置实例 - User.xml

```xml
<!-- bean 实例, bean.xml
	IDEA 的 maven 项目中改文件最好放在 resources 文件下 
-->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

        <bean id="user" class="com.ssg.test.User">
            <property name="name" value="lili"></property>
            <property name="age" value="18"></property>
        </bean>
</beans>
```

### java 对象

```java
package com.ssg.test;

public class User {

    private String name;
    private int age;

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
    
    public void show() {
        System.out.println("姓名" + name + "年龄为" + age);
    }

}

```



### 获取 bean 对象

```java
  
public class UserTest {
    @Test
    public void test(){
        //1 加载 spring 配置文件， 参看 api
        ApplicationContext context =
                new ClassPathXmlApplicationContext("classpath:user.xml");
        //2 获取配置创建的对象
        User user = context.getBean("user", User.class);
        System.out.println(user);
        user.show();
    }

}

@Test
public void testAdd() {
     // 1 加载 spring 配置文件
    // 参数1: 
     ApplicationContext context =
     			new ClassPathXmlApplicationContext("bean.xml");
     //2 获取配置创建的对象
    // 参数1 ：  bean 的 id
    // 参数2 ： java 对象,类型的选择
    // getBean("user") 
    // getBean(User.class) 只能找单例模式
     User user = context.getBean("user", User.class);
     System.out.println(user);
     user.add();
}
```



## 类实例创建

### 介绍

```java


创建的时候赋值   
    有参构造
创建之后属性赋值    
    无参构造 + set 方法
 
// =================
依赖注入的方式
    // 就是如何创建对象
    构造函数注入  -- spring
    setter 注入  -- spring
    接口注入      -- mabtis    
    
// =================    
    
构造函数注入 				  setter 注入
没有部分注入 				  有部分注入
不会覆盖 setter 属性 		   会覆盖 setter 属性
任意修改都会创建一个新实例     任意修改不会创建一个新实例
适用于设置很多属性 			适用于设置少量属性    
```



### 无参构造

```java
    public class Book {
        public Book(){};
    }

	// 默认也是执行无参数构造方法完成对象创建
	// class 中就是 spring 进行创建的对象， 默认执行无参构造函数
	<bean id="book" class="com.learn.Book"></bean>
```

### 有参数构造

```java
// 有参构造函数创建对象

public class Orders {
     //属性
     private String oname;
     private String address;
     //有参数构造
     public Orders(String oname,String address) {
     	this.oname = oname;
     	this.address = address;
     } 
}
// 在 spring 配置文件中进行配置
// 可以省略 name 但是最好不要省略
<bean id="orders" class="com.atguigu.spring5.Orders">
     <constructor-arg name="oname" value="电脑"></constructor-arg>
     <constructor-arg name="address" value="China"></constructor-arg>
    // 第一个参数
     <constructor-arg index="1" value="China"></constructor-arg>
</bean>
    
```

### 工厂方法

```java
// 工厂静态方法
public class StaticFactoryBean {
    public static UserDao createUserDao(){    
    return new UserDaoImpl();
    }
}
// bean 配置
<bean id="userDao" class="com.itheima.factory.StaticFactoryBean" 
      factory-method="createUserDao" />
    
// 工厂实例    
public class StaticFactoryBean {
    public static UserDao createUserDao(){    
    	return new UserDaoImpl();
    }
}    

// bean 配置
<bean id="factoryBean" class="com.itheima.factory.DynamicFactoryBean"/>
<bean id="userDao" factory-bean="factoryBean" factory-method="createUserDao"/>
```



## 类字段

### 介绍

```java
对一个类的成员属性进行赋值
    
构造函数赋值
    类成员
set方法    
set - p 属性   
    
    
区别
    构造方法
        标签中使用： constructor
        设定：构造函数
    set方法    
        标签中使用： property
        设定： set 方法
```

### 普通字段

#### java 类

```java
    // 定义属性和对应的 set 方法
    public class Book {
         //创建属性
         private String bname;
         private String bauthor;
         //创建属性对应的 set 方法
         public void setBname(String bname) {
         this.bname = bname;
         }
         public void setBauthor(String bauthor) {
         this.bauthor = bauthor;
         } 
    }
```

#### property - set

```xml
介绍
	// 一个 set 方法对应一个 bean 的 property 标签
     <property> 标签
    	对应的就是执行： 成员属性的 set 方法
    	自动进行类型转换
    

    
//=================================    

	// 在 spring 配置文件配置对象创建，配置属性注入
	<bean id="book" class="com.atguigu.spring5.Book">
         <!--使用 property 完成属性注入
             name：类里面属性名称    value：向属性注入的值
         -->
         <property name="bname" value="易筋经"></property>
         <property name="bauthor" value="达摩老祖"></property>
    </bean>
```

####  p 属性 - set化简

```xml
// 添加 p 名称空间在配置文件中
<project
        xmlns="http://maven.apache.org/POM/4.0.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:p = "http://www.springframework.org/schema/p"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"
>
// bean 中注入
<bean id="book" 
    class="com.atguigu.spring5.Book" 
    p:userDao="userDao"
    p:bname="九阳神功" 
	p:bauthor="无名氏"
></bean>            
```



#### 特殊值

```java
       
// 特殊值        
（1）null 值
	介绍
        默认引用类型是 null 
        基本类型是 默认值
    // <property name="address" value=""></property>
    <property name="address">    
        <!--进行复杂赋值-->
        <null/>    
    </property>
（2）属性值包含特殊符号
    <!--属性值包含特殊符号
	 1 把<>进行转义 &lt; &gt;
	 2 把带特殊符号内容写到 CDATA <![CDATA[xxx]]>
	-->
    <property name="address">
        <value><![CDATA[<<南京>>]]></value>
    </property>

```



### 类字段

#### 外部引用

```java
介绍
    ref 表示： 外部引用
public class UserServiceImpl implements UserService {
    private UserDao userDao;
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;  
     } 
}

// xml 配置
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"/>
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl">
    <!--注入 userDao 对象
     	name 属性：类里面属性名称
     	ref 属性：创建 userDao 对象 bean 标签 id 值
     -->
    // 方式一
    <constructor-arg name="userDao" ref="userDao"></constructor-arg>
</bean>

// 使用无参构造
// 其他不变，只是使用无参构造， 设置 set 方法， 将方式一种的 constructor 标签换成 property
<property name="userDao" ref="userDao"/>    
```

#### 内部嵌套

```java
// bean 嵌套
<bean id="userService" class="com.atguigu.spring5.service.UserService">
    // 注意是如何引入另一个类对象的
 	 <property name="userDaoImpl">
         <bean id="userDaoImpl" class="com.atguigu.spring5.dao.UserDaoImpl">        	 
         </bean>
     </property>
</bean> 

```



### 集合字段

#### 介绍

```java
数组、
list、
map、
set 
properties        
```



#### 实例

```java
// 创建类，定义数组、list、map、set 类型属性，生成对应 set 方法
public class Stu {
     //1 数组类型属性
     private String[] courses;
     //2 list 集合类型属性
     private List<String> list;
     //3 map 集合类型属性
     private Map<String,String> maps;
     //4 set 集合类型属性
     private Set<String> sets;
     public void setSets(Set<String> sets) {
        this.sets = sets;
     }
     public void setCourses(String[] courses) {
        this.courses = courses;
     }
     public void setList(List<String> list) {
        this.list = list;
     }
     public void setMaps(Map<String, String> maps) {
        this.maps = maps;
     } 
}

// xml 配置
<bean id="stu" class="com.atguigu.spring5.collectiontype.Stu">
 <!-- // 数组类型属性注入-->
 <property name="array">
     <array>
         <value>java 课程</value>
         <value>数据库课程</value>
     </array>
 </property>
 <!--// list 类型属性注入-->
 <property name="list">
 	<list>  
    	// <ref bean="course1"></ref>
    	 <value>张三</value>
 		 <value>小三</value>
 	</list>
 </property>
 <!-- // map 类型属性注入-->
 <property name="maps">
     <map>
    	// <entry key="JAVA" value-ref="java"></entry>
         <entry key="JAVA" value="java"></entry>
         <entry key="PHP" value="php"></entry>
     </map>
 </property>
 <!-- // set 类型属性注入-->
 <property name="sets">
     <set>
         <value>MySQL</value>
         <value>Redis</value>
     </set>
 </property>
  <!-- // properties 类型属性注入-->  
 <property name="properties">
    <props>
        <prop key="p1">ppp1</prop>
        <prop key="p2">ppp2</prop>
        <prop key="p3">ppp3</prop>
    </props>
</property>
    
</bean> 
```



#### 重复提取

```xml
// 引入名称空间 util
xmlns:util="http://www.springframework.org/schema/util"
xsi:schemaLocation="http://www.springframework.org/schema/beans 
				http://www.springframework.org/schema/beans/spring-beans.xsd
 				http://www.springframework.org/schema/util 
				http://www.springframework.org/schema/util/spring-util.xsd"  

// util 标签完成 list 集合注入提取
// xml 
<util:list id="bookList">
     <value>易筋经</value>
 	<value>九阴真经</value>
 	<value>九阳神功</value>
</util:list>

<!--2 提取 list 集合类型属性注入使用--> 
 <bean id="book" class="com.atguigu.spring5.collectiontype.Book">
 	<property name="list" ref="bookList"></property>
</bean>    
```



## 级联赋值？？？

```java
<bean id="userService" class="com.atguigu.spring5.service.UserService">
    // 注意是如何引入另一个类对象的
 	<property name="userDao" ref="userDaoImpl"></property>
    <property name="userDao.dname" value="财务部"></property> // 赋值
</bean> 
// 内部类的内部赋值    
<bean id="userDaoImpl" class="com.atguigu.spring5.dao.UserDaoImpl">
    <property name="dname" value="财务部"></property>  // 设置默认值
</bean>
```



## 成员方法

```java
// 使用的是切面 aop
```



## bean 注解

```java
介绍
    （1）注解是代码特殊标记，格式：
    （2）使用注解，注解作用在类上面，方法上面，属性上面
    （3）使用注解目的：简化 xml 配置
格式
    @注解名称(属性名称=属性值, 属性名称=属性值..)
注意
    Spring原始注解主要是替代<Bean>的配置
```

### 配置

#### xml 配置

```java
命名空间  ： context
    
    
引入 jar 包
    spring-aop-5.2.6.RELEASE.jar
注意
    // 如果扫描多个包，多个包使用逗号隔开; 扫描包上层目录

// 开启组件扫描
    <context:component-scan base-package="com.atguigu">
    </context:component-scan>     
    
作用
    指定哪个包及其子包下的Bean需要进行扫描以便识别使用注解配置的类、字段和方法。
精细扫描
    use-default-filters="false" 表示现在不使用默认 filter，自己配置 filter
	context:include-filter ，设置扫描哪些内容
    
// 到 atguigu 中，只扫描带有 expresstion 中到有controller 的类    
<context:component-scan base-package="com.atguigu" use-default-filters="false">
 	<context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>    

// ontext:exclude-filter： 设置哪些内容不进行扫描     
<context:component-scan base-package="com.atguigu" >
 	<context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>     
```

#### 完全注解开发

```java
介绍
    // 这个是基于新注解来进行开发的
    不使用 xml 进行配置，
例子
    
（1）创建配置类，替代 xml 配置文件
@Configuration //作为配置类，替代 xml 配置文件
@ComponentScan(basePackages = {"com.atguigu"}) // 开启扫描
public class SpringConfig {
}

（2）编写测试类
@Test
public void testService2() {
     //加载配置类
     ApplicationContext context
                    = new AnnotationConfigApplicationContext(SpringConfig.class);
     UserService userService = context.getBean("userService", UserService.class);
     System.out.println(userService);
     userService.add();
}    
```



### 类创建

#### 介绍

```java
注解
    @Configuration 
    	用来标记类可以当做一个 bean 的定义，被Spring IOC 容器使用
    @Bean
    	表示此方法将要返回一个对象，作为一个 bean 注册进 Spring 应用上下文
    
    
    // 四个注解功能是一样的，都可以用来创建 bean 实例
    @Component		用在类上用于实例化Bean
    @Service		使用在service层类上用于实例化Bean
    @Controller		使用在web层类上用于实例化Bean
    @Repository    	 使用在dao层类上用于实例化Bean
语法格式
    <bean id="userService" class=".."/>
    @Service(value = "userService")
    @service    // 默认值是类名称，首字母小写
        
介绍
component        
	这将 java 类标记为 bean。
    它是任何 Spring 管理组件的通用构造型。
    spring 的组件扫描机制现在可以将其拾取并将其拉入应用程序环境中        
        
@Controller ：
    这将一个类标记为 Spring Web MVC 控制器。
    标有它的 Bean 会自动导入到 IoC 容器中        
        
@Service ：
    此注解是组件注解的特化。
    它不会对 @Component 注解提供任何其他行为
	可以在服务层类中使用 @Service 而不是 @Component        
        
@Repository ：
    这个注解是具有类似用途和功能的 @Component 注解的特化。
    它为 DAO 提供了额外的好处。
    它将 DAO 导入 IoC 容器，并使未经检查的异常有资格转换为 Spring DataAccessException        
```

#### 无参构造

```java
     // 无参构造
     @Component("userService") 
     public class UserService {
         public void add() {
             System.out.println("service add.......");
         } 
     }    

```

#### 有参构造

```java
介绍
    没有直接方法进行直接有参构造注解创建
方式一： 构造函数
    @Component                            
    public class Factory {                
        private String name;                                                    
        @Autowired                        
        public Factory(String name) {     
            this.name = name;             
        }                                                                
    }                                     
方式二：set 方法(推荐)
    @Component                            
    public class Factory {                
        private String name;                                                    
         @Autowired                         
         public void setName(String name) { 
             this.name = name;              
         }                                                                                         
    }
方式三： feild 注入
    @Component                            
    public class Factory {                
        @Autowired   ？？？ 带确认
        private String name;   // 类成员变量
    }
```



#### 工厂方法

```java
    @Component                            
    public class Factory {                
        private String name;                                                    
        @Autowired                        
		public Person create(String name){
            this.name = name
            return new Person(this.name)
        }                                                             
    }                                     

```



### 属性创建( 注入 )

#### 介绍

```java
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
    
@Required 
    应用于 bean 属性 setter 方法    
    
语法格式
    <bean id="userService" class=".."/>
    @Qualifier(name = "userService") 
    @Qualifier("userService")  
```

#### autowired

```java
介绍
    @Autowired 可以更准确地控制应该在何处以及如何进行自动装配。
  
    默认情况下，它是类型驱动的注入。
使用
    setter 方法，
    构造函数，
    属性
    具有任意名称和/或多个参数的 PN 方法。
   
例子
    public class Employee {
    
    @Autowired  // 用于对象创建
	private String age;
        
    private String name;
    
    @Autowired // 应用于 setter 方法
    public void setName(String name){
    	this.name=name;
    }
    public string getName(){
    	return name;
    } 
}   

缺点
    重写：你仍需用 和 配置来定义依赖，意味着总要重写自动装配。
	基本数据类型：你不能自动装配简单的属性，如基本数据类型，String字符串，和类。
	模糊特性：自动装配不如显式装配精确，如果有可能，建议使用显式装	
// ===================================================
no - 
    这是默认设置，表示没有自动装配。应使用显式 bean 引用进行装配。
byName - 
    它根据 bean 的名称注入对象依赖项。
    它匹配并装配其属性与 XML文件中由相同名称定义的 bean。
byType - 
    它根据类型注入对象依赖项。
    如果属性的类型与 XML 文件中的一个 bean 名称匹配，则匹配并装配属性。
    构造函数
		- 它通过调用类的构造函数来注入依赖项。
    	它有大量的参数。
    
autodetect - 
    首先容器尝试通过构造函数使用 autowire 装配，
    如果不能，则尝试通过 byType 自动装配 
```

#### required

```java
@Required 
	// 该属性在对象创建的时候，不能为空必须设置值
	应用于 bean 属性 setter 方法。
    此注解仅指示必须在配置时使用 bean 定义中的显式属性值或使用自动装配填充受影响的 bean 属性。
    如果尚未填充受影响的 bean 属性，则容器将抛出 BeanInitializationException。
        
// 例子
public class Employee {
    private String name;
    
    @Required // 应用于 setter 方法
    public void setName(String name){
    	this.name=name;
    }
    public string getName(){
    	return name;
    } 
}        
```

#### Qualifier

```java
介绍
    当您创建多个相同类型的 bean 并希望仅使用属性装配其中一个 bean 时
    用@Qualifier 注解和 @Autowired 通过指定应该装配哪个确切的 bean 来消除歧义。
    
例子
public class Employee {
    private String name;
    @Autowired
    public void setName(String name) {
    	this.name=name;
	}
	public string getName() {   
        return name;
	} 
}

public class EmpAccount {
	private Employee emp;
    @Autowired
    @Qualifier(emp1)  // 指定了必须装配 id 为 emp1 的 bean。
    public void showName() {
    	System.out.println(“Employee name : ”+emp.getName);
	} 
}
```



#### 使用

```java
注意
    把 service 和 dao 对象创建，在 service 和 dao 类添加创建对象注解
    

@UserService
public class UserService {
     //定义 dao 类型属性
     //不需要添加 set 方法
     //添加注入属性注解
     @Autowired 
     private UserDao userDao;
     public void add() {
         System.out.println("service add.......");
         userDao.add();
     } 
}


// @Qualifier
//添加注入属性注解， 下面两个需要同时使用
@Autowired //根据类型进行注入
@Qualifier(value = "userDaoImpl1") //根据名称进行注入
private UserDao userDao;

// @Resource：
// 注意这个是 javax 的
// 可以根据类型注入，可以根据名称注入
@Resource(value = "userDaoImpl1") //根据类型进行注入
@Resource(name = "userDaoImpl1") //根据名称进行注入
private UserDao userDao;

// @Value：注入普通类型属性
// 可以结合配置文件进行设置值
// @Value("${jdbc.driver}")
@Value(value = "abc")
private String name;
```

### 其他

```java
@Scope			
	标注Bean的作用范围
     @Scope("singleton")
@PostConstruct	 使用在方法上标注该方法是Bean的初始化方法
@PreDestroy		 使用在方法上标注该方法是Bean的销毁方法
```



## spring新注解

### 类注解

```java
@Configuration	
	用于指定当前类是一个 Spring 配置类，当创建容器时会从该类上加载注解
@Import	用于导入其他配置类    
```

### 方法注解

```java
@Bean	
	使用在方法上，标注将该方法的返回值存储到 Spring 容器中
```

### 包注解

```java
@ComponentScan	
	用于指定 Spring 在初始化容器时要扫描的包。
     xml 配置文件中的 <context:component-scan base-package="com.itheima"/>一样
```

### properties 文件

```java
@PropertySource	
	用于加载.properties 文件中的配置
     @PropertySource("properties 文件路径")
```



## 模块化

```java
介绍
    Spring的配置内容非常多，这就导致Spring配置很繁杂且体积很大，
    所以，可以将部分配置拆解到其他配置文件中
语法格式
    // Spring主配置文件通过import标签进行加载
    // 引入
    <import resource="applicationContext-xxx.xml"/>
    
```



