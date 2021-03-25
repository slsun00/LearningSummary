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



## 对象创建

### 介绍

```java
// 对于类属性赋值
创建的时候赋值   
    有参构造
创建之后属性赋值    
    无参构造 + set 方法
    
// 对于类方法操作
   使用的是切面 aop
```

### 创建时赋值 -- 有参构造

```java
介绍
    主要利用有参构造函数
语法例子
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



### 创建后赋值 - 无参构造

#### 空对象

```java
    public class Book {
        public Book(){};
    }

	// 默认也是执行无参数构造方法完成对象创建
	// class 中就是 spring 进行创建的对象， 默认执行无参构造函数
	<bean id="book" class="com.learn.Book"></bean>
```

#### 非空对象

##### 方法介绍

```java
set 方法
     <property> 标签
    	// property 就是通过 属性的 set 方法进行赋值
    	对应的就是执行： 成员属性的 set 方法
    	自动进行类型转换
 
set 方法化简    
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

区别
	构造方法
        标签中使用： constructor
        设定：构造函数
    set方法    
        标签中使用： property
        设定： set 方法            

// ------------------------------------------------------            
例子
    // 定义属性和对应的 set 方法
    public class Book {
         // 属性
         private String bname;   
         //创建属性对应的 set 方法
         public void setBname(String bname) {
             this.bname = bname;
         }
    }

	// 在 spring 配置文件配置对象创建，配置属性注入
	<bean id="book" class="com.atguigu.spring5.Book">
         <!--使用 property 完成属性注入
             name：类里面属性名称    value：向属性注入的值
         -->
         <property name="bname" value="易筋经"></property>
    </bean>
```



##### 普通成员

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

	// 在 spring 配置文件配置对象创建，配置属性注入
	<bean id="book" class="com.atguigu.spring5.Book">
         <!--使用 property 完成属性注入
             name：类里面属性名称    value：向属性注入的值
         -->
         <property name="bname" value="易筋经"></property>
         <property name="bauthor" value="达摩老祖"></property>
    </bean>
        
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



##### 类成员

###### 外部引用

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

###### 内部嵌套

```java
注意
   
// bean 嵌套
<bean id="userService" class="com.atguigu.spring5.service.UserService">
    // 注意是如何引入另一个类对象的
 	 <property name="userDaoImpl">
    	//  引用内部 bean ，不能被获取到，只能内部使用
         <bean id="userDaoImpl" class="com.atguigu.spring5.dao.UserDaoImpl">        	 
         </bean>
     </property>
</bean> 

```



##### 集合成员

###### 使用

```java
介绍
    // 下面类型可以相互嵌套、自身嵌套
    创建类，定义数组、list、map、set 类型属性，生成对应 set 方法
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
 <!-- // array 类型属性注入-->
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



###### 集合复用

```xml
// 引入名称空间 util
xmlns:util="http://www.springframework.org/schema/util"
xsi:schemaLocation="http://www.springframework.org/schema/beans 
				http://www.springframework.org/schema/beans/spring-beans.xsd
 				http://www.springframework.org/schema/util 
				http://www.springframework.org/schema/util/spring-util.xsd"  

// util 标签完成 list 集合注入提取
// xml 
// util:array、list、map、set property
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



#### 级联属性

```java
介绍
    级联： 属性的属性
    级联操作： 修改属性的属性
    // Person.Car.name
    public class Person{
        private Car car;
    }
	public class Car {
        private String name;
    }


<bean id="Person" class="com.atguigu.spring5.Person">
    // 声明 car 的时候，把名字改了
 	<property name="car" ref="car01"></property>
    // 属性的属性改变
    <property name="car.name" value="666"></property> // 赋值
</bean> 
// 内部类的内部赋值    
<bean id="car" class="com.atguigu.spring5.Car">
</bean>
```



## 对象工厂





### 静态工厂

```java
介绍
    工厂本身不用创建对象，
    通过静态方法调用 ，对象 = 工厂类.工厂方法名（）
// 静态工厂
public class StaticFactoryBean {
    public static UserDao createUserDao(){    
    	return new UserDaoImpl();
    }
}
// bean.xml 配置
<bean 
    id="userDao" 
    class="com.itheima.factory.StaticFactoryBean" 
    factory-method="createUserDao" 
>
    <!--方法参数-->
	<construct-arg name="" value="">        
        
</bean>        
    

```

### 实例工厂

```java
介绍
    工厂本身需要创建对象，
    通过静态方法调用 ，对象 = 工厂类.工厂方法名（）
    
// 工厂实例    
public class StaticFactoryBean {
    public static UserDao createUserDao(){    
    	return new UserDaoImpl();
    }
}    

// bean.xml 配置
// 先配置出实例工厂对象
<bean id="factoryBean" class="com.itheima.factory.DynamicFactoryBean"/>
// 再配置使用那个工厂创建    
<bean id="userDao" factory-bean="factoryBean" factory-method="createUserDao"/>
```

### factoryBean 工厂

```java
介绍
    普通 bean
        // bean.xml 中配置的 bean 标签
        在配置文件中定义 bean 类型就是返回类型
	工厂 bean（FactoryBean）
    	在配置文件定义 bean 类型可以和返回类型不一样

api
    FactoryBean 是 spring 规定的一个接口， 
    只要是实现这个接口的实现类，spring 都认为是一个工厂,会自动调用工厂方法进行创建
    实现接口里面的方法，在实现的方法中定义返回的 bean 类型
   
代码
// 编写实现类    
    public class MyFactoryBeanImple implements FactoryBean<Book> {
        @Override
        Book getObject(){ return new Book(); };  // 返回创建的对象
        
         // 返回创建的对象的类型, spring 会自动调用这个方法确认创建对象的类型
        Class<?> @getObjectType(){ return Book.class }; 
        
        // 是否是单例模式
        boolean isSingleton() { return false };
    }
// bean.xml 配置
<!--spring自动调用 getObject 方法-->
<bean
    id="myFactoryBeanImple"
    class="com.learn.it.myFactoryBeanImple"
    
    ></bean>
```

## bean 生命周期

### 介绍

```java
生命周期
    从对象创建到对象销毁的过程
    
    
单例
	(容器启动)构造器 --> 初始化方法 --> (销毁前方法) --> (容器关闭)销魂方法
多例
	获取 bean(构造器 --> 初始化方法) --> (容器关闭)不会调用销魂方法
后置处理器
    (容器启动)构造器 --> 后置处理器 before --> 初始化方法 --> 后置处理器 after --> bean初始化
    --> (销毁前方法) --> (容器关闭)销魂方法
    
    
bean 声明周期

    
注意
    创建类，实现接口 BeanPostProcessor，才可以使用前后连个处理器
```

### 后置处理器

```java
介绍
    （1）bean 实例创建
    		（类无参构造） -- 成员初始化（set方法）
    （2）bean 实例处理
    		传递 bean 后置处理器的方法 postProcessBeforeInitialization
			调用 bean 的初始化的方法（// 需要进行配置初始化的方法）
    		bean 实例传递 bean 后置处理器的方法 postProcessAfterInitialization
    （3） bean 对象获取使用
    （4） 容器关闭时候，
    		调用 bean 的销毁的方法（// 需要进行配置销毁的方法）
注意
    无论 bean 是否有初始化方法， 后置处理器都会默认其有， 还会继续工作
public class MyBeanPost implements BeanPostProcessor {
   
     @Override
     public Object postProcessBeforeInitialization(Object bean, String beanName) 
        throws BeansException {
        	 System.out.println("在初始化之前执行的方法");
     		return bean;
	 }
    
    
     @Override
     public Object postProcessAfterInitialization(Object bean, String beanName) 
        throws BeansException {
             System.out.println("在初始化之后执行的方法");
             return bean;
     } 
}

// beam.xml
	<bean id="myBeanPost" class="com.atguigu.spring5.bean.MyBeanPost"></bean>
```



## 装配(赋值)

### 手动装配

```java
设置  name value 设置属性值
```

### 自动装配（自定义类型）

```java
介绍
    根据指定装配规则（属性名称或者属性类型），Spring 自动将匹配的属性值进行注入
使用
    bean 标签的autowire
```

### 引入外部文件

```java
空间添加
    xmlns:util="http://www.springframework.org/schema/util" 
 	xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
    				http://www.springframework.org/schema/beans/spring-beans.xsd 
     				http://www.springframework.org/schema/util 
    				http://www.springframework.org/schema/util/spring-util.xsd 
    				 http://www.springframework.org/schema/context 
    				http://www.springframework.org/schema/context/spring-context.xsd"

标签引入
    <!--引入外部属性文件--> 
    	<context:property-placeholder location="classpath:jdbc.properties"/>
    <!--配置连接池--> 
        <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
    		 <property name="driverClassName" value="${prop.driverClass}"></property>
    		 <property name="url" value="${prop.url}"></property>
    		 <property name="username" value="${prop.userName}"></property>
    		 <property name="password" value="${prop.password}"></property>
    	</bean>
外部文件
            
// jdbc.properties            
prop.driverClass=com.mysql.jdbc.Driver 
prop.url=jdbc:mysql://localhost:3306/userDb 
prop. userName=root 
prop. password=root            
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



### 对象创建

#### 介绍

```java
注解
    // 四个注解功能是一样的，都可以用来创建 bean 实例
    @Component		用在类上用于实例化Bean
    @Service		使用在service层类上用于实例化Bean
    @Controller		使用在web层类上用于实例化Bean
    @Repository    	 使用在dao层类上用于实例化Bean
语法格式
    <bean id="userService" class=".."/>
    @Service(value = "userService")
    @service    // 默认值是类名称，首字母小写
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



### 属性注入

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
    
    
语法格式
    <bean id="userService" class=".."/>
    @Qualifier(name = "userService") 
    @Qualifier("userService")  
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



