# ----- spring标签 ------

# beans

## 概述

```java
<!ELEMENT beans (param-name, param-value, description?)>
<!ELEMENT param-name (#PCDATA)>
<!ELEMENT param-value (#PCDATA)>
<!ELEMENT description (#PCDATA)>
```

## bean

### 介绍

```java
基础
    一个 bean 标签可以注册一个组件（对象、类）
```

### 子标签

#### property

```xml
<!ELEMENT property
属性（
    name	属性名，成员变量名
    value	属性值，成员变量属性值
）>
```

#### constructor 系列

```java
<!ELEMENT construcor-arg 
属性（
	name	属性名
    value	属性值
    index	java 类属性的第几个属性
    type	属性类型
）>
    
```



### 属性

#### id

```java
id是bean的唯一标识符，
在spring容器中不可能同时存在两个相同的id；
```

#### class

```java
类的全限定名（包名+类名），用“.”号连接；
// 默认执行类的无参构造    
com.learn.dao.impl.UserDaoImpl    
```

#### parent

```xml
指定bean的父类，class属性失效。
指定当前的 bean 配置继承于哪个
<bean id="person01" class="com.learn.Person"></bean>
<bean id="person02" parent="person01"></bean>
```

#### abstract

```java
设置bean是否为抽象类，这个类是抽象类的话，是不能被实例化的
    默认abstract="false",
<bean id="person01" class="com.learn.Person" abstract="false"></bean>
```

#### depends-on

```xml
是一个bean实例化的过程需要依赖于另一个bean的初始化，
    即被依赖的bean将会在需要依赖的bean初始化之前加载, 改变 bean 之间的创建顺序
    多个依赖bean之间用","号分割；
<!--创建person01 之前要先创建 person02 person03-->
<bean id="person01" class="com.learn.Person" depends-on="person03,person02"></bean>
<bean id="person02" class="com.learn.Person" ></bean>
<bean id="person03" class="com.learn.Person" ></bean>
```



#### scope

```java
// 作用范围
singleton：单例，
    // 默认
    加载 spring 文件的时候创建单例对象， getBean获得的对象都是同一个对象。
    // bean 生命周期
     // 容器启动的时候创建实例
    对象创建：当应用加载，创建容器时，对象就被创建了
	对象运行：只要容器在，对象一直活着
	对象销毁：当应用卸载，销毁容器时，对象就被销毁了

prototype：
    // 多实例
    调用 getBean 方法的时候进行创建对象， 只要重新获取该bean，都将返回一个不同的对象。
    // bean 生命周期
    // 容器启动的时候不创建实例
    对象创建：当使用对象时，创建新的对象实例
	对象运行：只要对象在使用中，就一直活着
	对象销毁：当对象长时间不用时，被 Java 的垃圾回收器回收了

request：
    web 环境下，同一次请求创建一个 Bean 实例，类似于servlet(没用)
    WEB   项目中，Spring   创建一个   Bean   的对象，将对象存入到   request   域中
	
session：
    web 环境下，同一次会话中对应一个bean 实例(没用)
    WEB项目中，Spring 创建一个   Bean   的对象，将对象存入到   session   域中
    
global session
    WEB   项目中，应用在   Portlet   环境，
    如果没有   Portlet   环境那么globalSession   相当于   session
```

#### factory-bean和factory-method

```java
设置了factory-bean属性后，
    将指定创建bean的工厂类对象，class属性将失效；

设置了factory-method属性后，将指定创建bean的工厂方法；
```

#### 生命周期属性

```xml
单例
	(容器启动)构造器 --> 初始化方法 --> (销毁前方法) --> (容器关闭)销魂方法
多例
	获取 bean(构造器 --> 初始化方法) --> (容器关闭)不会调用销魂方法

init-method
	介绍
		// 创建之后， 初始化方法
		
		<!--在创建一个bean之后调用该方法，必须是一个无参方法-->
		<bean init-method="myinit"></bean>
destroy-method
	介绍
		// 销毁之前
        在销毁bean之前可以执行指定的方法。
        注意：必须满足scope="singleton"，并且destroy方法参数个数不能超过1，并且参数类型只能为boolean。

```



#### name

```java
别名（alias）
    // 早期属性，为其他框架设置的，可以省略
    用法：java文件中使用 getBean("name")，可以
    支持设置多个别名，之间用英文逗号分割；
```

#### autowire

```java
介绍
    用于指定当前Bean的依赖关系的自动注入方式 , autowire（自动装配，默认为“default”）
    a
属性值    
no ： 
  	不进行自动装配

default：
    由上级标签的default-autowire属性确定。
    
byName ： 
    根据属性名自动装配。
    此选项将检查容器并根据名字查找与属性完全一致的bean，并将其与属性自动装配
	// 以属性名（car01）作为  去容器中找到这个组件，给他赋值, 找不到装配 null
    private Car car01  //ioc.getBean("car01")
byType值：
    表示通过class指定的类型来自动装配、
    如果存在多个该类型bean，那么抛出异常，并指出不能使用byType方式进行自动装配；
    如果没有找到相匹配的bean，则什么事都不发生，也可以通过设置dependency-check="objects" 让Spring抛出异常。
	// 以属性类型（Car）作为依据去容器中找，多个相同类型会报错
    private Car car01  //ioc.getBean("Car.class")
constructor值：
    表示使用构造函数的参数进行自动装配(参数的类型匹配)。
    没有：装配 null
    多个： 参数的名作为 id 进行赋值
    如果容器中没有找到与构造器参数类型一致的bean， 那么抛出异常

autodetect值：
    表示自动进行选择匹配方式，
    首先进行constructor自动装配，
    若不存在构造方法则使用byType方式进行自动装配；
    如果发现默认的构造器，那么将使用byType方式，否则采用 constructor。
    
```







#### lazy-init

```java
设置bean对象是否懒加载，
    如果设为true，则应用第一次用到bean时才实例化对象，
    否则在初始化spring容器时加载单例bean对象。（非单例不实例化）
```



#### primary

```java
当一个bean出现多个候选者时，设置primary="true"后，则优先使用该bean来自动装配。
```





## aop系列

```xml

<!ELEMENT aop:config
子表签(
	aop:pointCut
	aop:aspect
)>

<!ELEMENT aop:aspect
子表签(
	aop:before
)
属性(
	ref
)>

<!ELEMENT aop:before
子表签(
	
)
属性(
	mehtod
	pointcut
	aop:pointCut-ref
)>

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

    <!--引用myAspect的Bean为切面对象-->
    <aop:aspect ref="myAspect">
        <aop:pointcut id="myPointcut" expression="execution(* com.itheima.aop.*.*(..))"/>
        <!--表示使用到的切点表达式和前面相同-->
        <aop:before method="before" pointcut-ref="myPointcut"></aop:before>
    </aop:aspect>
```





## context  系类

##### component-scan

```dtd
context:component-scan
	spring可以自动去扫描base-pack下面或者子包下面的java文件，
	如果扫描到有@Component @Controller@Service等这些注解的类，则把这些类注册为bean

<!--context:component-scan-->
<!ELEMENT scontext:component-scan (context:include-filte?, context:exclude-filter)>
<!ELEMENT context:include-filter (#PCDATA)>
	<!--include-filter
		指定扫描那些
	-->
<!ELEMENT context:exclude-filter (#PCDATA)>
	<!--exclude-filter
		指定不扫描哪些
	-->

<!--------------------------------------------------------------------------------->
<!ATTLIST scontext:component-scan
	base-package 		包名		自动扫描的类
    <!--	
         告诉spring要扫描的包
      -->
	use-default-filters	 boolean   是否是使用默认的 filter
    <!--	
       false 表示不适用默认的，启用 context:xxx-filter 子标签
       true  使用默认的过滤器， 将 component 等注释的标签注册为 bean
      -->
>

<!ATTLIST context:include-filter， context:exclude-filter
	type 	固定的几个值    扫描规则
    expression	type的具体规则  规则表达式
>
<!-- type -->
Filter			 
	Type							
	Examples Expression	Description
annotation		
	org.example.SomeAnnotation		 
	滤器扫描使用注解所标注的那些类，通过expression属性指定要扫描的注释
assignable		
	org.example.SomeClass			
	过滤器扫描 派生于expression属性所指定类型的那些类
aspectj			
	org.example..*Service+			
	过滤器扫描与 expression属性 所指定的AspectJ表达式所匹配的那些类
regex			
	org.example.Default.*			
	使用自定义的org.springframework.core.type.TypeFliter实现类，该类由expression属性指定
custom			
	org.example.MyTypeFilter		
	Spring3新增自订Type,称作org.springframework.core.type.TypeFilter
```

# mvc系列

##### annotation

```xml
mvc:annotation-driven
<!ELEMENT mvc:annotation-driven>
	<!-- mvc 的注册驱动 -->
<!ATTLIST mvc:annotation-driven
	conversion-service	自定义的转化器的 name, 使用注定的转换器进行类型转换
>

语法例子
    <mvc:annotation-dirven/>
```

##### resources

```xml
mvc:resources
<!ELEMENT mvc:resources >  
<!--  开发资源的访问
-->
<!ATTLIST scontext:component-scan
	mapping 		映射地址，往服务端发送请求资源的地址
    location		开放的具体的资源的目录地址
>    
    
例子
    <mvc:resources mapping="/jsp/**" location="/js/">
    <mvc:resources mapping="/img/**" location="/img/">
```

##### default-servlet-handler

```xml
<!ELEMENT >
<!ELEMENT mvc:default-servlet-handler >
<!--  在访问资源的时候，springMVC 寻找相应的匹配地址，
	找不到， 就交由原始的容器（tomcat）寻找
-->

例子
	<mvc:default-servlet-handler/>
```

##### interceptors

```xml
<!ELEMENT mvc:interceptors(mvc:interceptors*)>

<!ELEMENT mvc:interceptor(
	mvc:mapping,  <!--对哪些资源进行拦截操作-->
	bean		 <!--要执行拦截操作的类的实例-->
)>


<!ELEMENT mvc:mapping>


<!ALLIST mvc:mapping
	path	
>

<!--配置拦截器-->
    <mvc:interceptors>
        <mvc:interceptor>
            <!--对哪些资源执行拦截操作-->
            <mvc:mapping path="/**"/>
            <bean class="com.itheima.interceptor.MyInterceptor1"/>
        </mvc:interceptor>
    </mvc:interceptors>
```





# --myhabits 标签 ----

# 介绍

```java
myBatis 只有两个标签
    configuration 配置标签
    mapper	映射标签
```



# configuration 标签

```java
介绍
    configuration 标签需要按照下面的顺序来写
    
    
    
<congfiguration 
子标签 (
    // properties?（属性）
    settings?（设置）
    // typeAliases?（类型别名）
    // typeHandlers?（类型处理器）
    objectFactory?（对象工厂）
    // plugins?（插件）
    // environments?（环境配置）
        environment?（环境变量）
            transactionManager（事务管理器）
            dataSource（数据源）
    databaseIdProvider?（数据库厂商标识）
    // mappers?（映射器）
)> 
```

## properties

```xml
介绍
	这些属性可以在外部进行配置，并可以进行动态替换。
位置
	 Java 属性文件中，
	 properties 元素的子元素中设置
```

### 属性值设置

```java
属性值加载顺序
	property  ---> resource 属性(外部配置文件)  --->  方法参数传递的属性(java代码)
	后面设置的会覆盖之前读取过的同名属性。

属性值设置
//1 property 
    <properties resource="org/mybatis/example/config.properties">
        <property name="username" value="dev_user"/>
        <property name="password" value="F2Fa3!33TYyg"/>
    </properties>
//2 jdbc.properties
    jdbc.name = "lili"
    jdbc.password = "123"
//3 java 方法设置
// 在 SqlSessionFactoryBuilder.build() 方法中传入属性值。例如
    SqlSessionFactory factory = 
   		new SqlSessionFactoryBuilder().build(reader, props);
    SqlSessionFactory factory = 
        new SqlSessionFactoryBuilder().build(reader, environment, props);
           
取值顺序 
	username 和 password 将会由 properties 元素中设置的相应值来替换
	driver 和 url 属性将会由 jdbc.properties 文件中对应的值来替换
```

![image-20210315123510997](C:/Users/11940/AppData/Roaming/Typora/draftsRecover/image-20210315123510997.png)

### 默认值设置

```java
介绍
	MyBatis 3.4.2 开始，你可以为占位符指定一个默认值
使用    
    // 默认属性开启
    <properties resource="org/mybatis/example/config.properties">
    <!-- 启用默认值特性 -->
    <property name="org.apache.ibatis.parsing.PropertyParser.enable-default-value" value="true"/> 
    </properties>
    // 默认属性设置
    <dataSource type="POOLED">
    <!-- 如果属性 'username' 没有被配置，'username' 属性的值将为 'ut_user' -->
    <property name="username" value="${username:ut_user}"/> 
    </dataSource>  
转义 ：  
    // 场景
    在属性名中使用了 ":" 字符 
    SQL 映射中使用了 OGNL 表达式的三元运算符（如： ${tableName != null ? tableName : 'global_constants'}）
    // 例子
    // 修改默认修改符
    <properties resource="org/mybatis/example/config.properties">
    	<!-- 修改默认值的分隔符 -->
  		<property name="org.apache.ibatis.parsing.PropertyParser.default-value-separator" value="?:"/> 
	</properties>
    // 使用
    <dataSource type="POOLED">
      <!-- ... -->
      <property name="username" value="${db:username?:ut_user}"/>
    </dataSource>
```

## settings

```xml
介绍
	改变 MyBatis 的运行时行为
注意
	属性偏多，用到那个用哪个，暂时没必要所有的都过一遍，
语法例子
<!ELEMENT settings
子元素(
	setting
)>

<!ELEMENT setting
属性(
	name
	value
)>
```

## typeAliases

```xml
介绍
	类型别名可为 Java 类型设置一个缩写名字。 它仅用于 XML 配置，意在降低冗余的全限定类名书写
	可以设置一个别名组， 专门用于设置别名使用
语法例子
	<!ELEMENT typeAliases
	子元素(
		typeAliases	单个别名实例
		package	定一个包名，MyBatis 会在包名下面搜索需要的 Java Bean
	)
	属性(
		alias   别名
		type	原始的类型
	)>
介绍
	<typeAliases>
       <!-- 在使用 domain.blog.Author 的地方，都可以使用 Author 来替代-->
	  <typeAlias alias="Author" type="domain.blog.Author"/>
       <package name="domain.blog"/>
	</typeAliases>
注意
	常见的 Java 类型内建的类型别名。它们都是不区分大小写的，注意，
	为了应对原始类型的命名重复，采取了特殊的命名风格
```



## typeHandler

### 介绍

```xml
介绍
	类处理器, 数据类型的转换
    无论是 MyBatis 在预处理语句（PreparedStatement）中设置一个参数时，还是从结果集中取出一个值时， 
    都会用类型处理器将获取的值以合适的方式转换成 Java 类型。

类型转换
	类型处理器 			Java 类型 				 	JDBC 类型
	BooleanTypeHandler 	java.lang.Boolean, boolean 	    数据库兼容的 BOOLEAN 


语法例子
<typeHandlers 
	注册类处理器，处理数据库和实体之间的类型转换的类型处理器              
子标签（
	typeHandler                   	
）>
<!ELEMENT typeHandler
属性(
	handler
    javaType
)>
    
例子

   
```

### 自定义处理器

```java
介绍
	重写已有的类型处理器或创建你自己的类型处理器来处理不支持的或非标准的类型
做法
	1. 实现 org.apache.ibatis.type.TypeHandler 接口， 
	2. 继承 org.apache.ibatis.type.BaseTypeHandler 类， 
        覆盖 4 个未实现的方法， 并且可以（可选地）将它映射到一个 JDBC 类型


例子
// java  代码
//    泛型 你可以设置为 Date String 等 Java 类型
    public class MyDateTypeHandler extends BaseTypeHandler<Date> {
        
        // java 转为 数据库类型
        // i	数据所在的列
        // date	java 类型
        @Override
        public void setNonNullParameter(
            PreparedStatement preparedStatement,   // 执行的sql语句
            int i, 
            Date date, 
            JdbcType type
        ) {
            preparedStatement.setString(i,date.getTime()+"");
        }
        
        // 将数据库类型转为 Java 类型
        // String 要转换的字段名称
        // Resultset 查询出的结果集
        @Override
        public Date getNullableResult(
            ResultSet resultSet, 
            String s
        ) throws SQLException {
            return new Date(resultSet.getLong(s));
        }
        
        // 将数据库类型转为 Java 类型
        @Override
        public Date getNullableResult(
            ResultSet resultSet, 
            int i
        ) throws SQLException {
            return new Date(resultSet.getLong(i));
        }

        // 将数据库类型转为 Java 类型
        // callableStatement	
        @Override
        public Date getNullableResult(
            CallableStatement callableStatement, 
            int i
        ) throws SQLException {
            return callableStatement.getDate(i);
        }
    }

// 配置
<!--注册类型自定义转换器-->
<typeHandlers>
    <typeHandler handler="com.itheima.typeHandlers.MyDateTypeHandler"></typeHandler>
</typeHandlers>
```



## plugins

### 基础

```java
介绍
    使用第三方的插件来对功能进行扩展
    
 
<plugins(
子元素(
	plugin,
)>  
<peoperties
属性(
	name
    value
)>    
    
        
例子
// java 代码
    
    
    
    <!-- 注意：分页助手的插件  配置在通用馆mapper之前 -->
    <plugin interceptor="com.github.pagehelper.PageHelper">
        <!-- 指定方言 -->
        <property name="dialect" value="mysql"/>
    </plugin>
```

### 自定义插件

```java
介绍
    使用插件是非常简单的，只需实现 Interceptor 接口，并指定想要拦截的方法签名即可

例子
    // ExamplePlugin.java
@Intercepts({
    @Signature(
	  type= Executor.class,
	  method = "update",
  	  args = {MappedStatement.class,Object.class}
    )
})
    
public class ExamplePlugin implements Interceptor {
  private Properties properties = new Properties();
  public Object intercept(Invocation invocation) throws Throwable {
    // implement pre processing if need
    Object returnObject = invocation.proceed();
    // implement post processing if need
    return returnObject;
  }
  public void setProperties(Properties properties) {
    this.properties = properties;
  }
}

<!-- mybatis-config.xml -->
<plugins>
  <plugin interceptor="org.mybatis.example.ExamplePlugin">
    <property name="someProperty" value="100"/>
  </plugin>
</plugins>
```





## environments

```xml
<environments 
子标签 (
	environment  环境变量
)
属性(
	default="development"  指定默认的环境名称,使用的默认值
)>


<environment 
子标签(
    transactionManager   事务管理，事务类型
    dataSource	数据源，连接池

)
属性（
 	id="development"	
        指定当前环境的名称
）>
<transactionManager   
属性(
	type="JDBC"  事务管理器，事务管理的类型
)>
< dataSource   子标签数据都是固定的
子标签 (
    property	数据源配置的基本参数	
) 属性 (
    type="POOLED"   指定当前数据源类型是链接池
)
>
< property   子标签数据都是固定的
子标签 (
    property	数据源配置的基本参数	
) 属性 (
    name
	value          
)    

    
        <environment id="development">           
            <transactionManager type="JDBC"/>            
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql:///test"/>
                <property name="username" value="root"/>
                <property name="password" value="root"/>
            </dataSource>
        </environment>
```

## mappers

```xml
<mappers
	映射器， 加载映射文件，指的是每个 dao 独立的配置文件  
     加载映射关系
子标签(
	mapper
         
	package 
         指定接口所在的包
)>
    
    
    
    
<mapper
子标签(
 )
属性（
	resourcese       UserDao.xml
        
）>    
```

```xml
<configuration>
    <environments default="development">
        <environment id="development">        
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql:///test"/>
                <property name="username" value="root"/>
                <property name="password" value="root"/>
            </dataSource>
        </environment>
    </environments>
    <mappers> 
        <mapper resource="com/itheima/mapper/UserMapper.xml"/> 
    </mappers>
</configuration>
```



# mapper标签

## 介绍

```java
介绍
    
    cache – 该命名空间的缓存配置。
    cache-ref – 引用其它命名空间的缓存配置。
    parameterMap – 老式风格的参数映射。此元素已被废弃，并可能在将来被移除！请使用行内参数映射。文档中不会介绍此元素。





<mapper
子标签(
    <!-- sql 定义标签-->
    // insert – 映射插入语句。
    // update – 映射更新语句。
    // delete – 映射删除语句。
    // select – 映射查询语句。
    // sql – 可被其它语句引用的可重用语句块。
    // resultMap – 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素。

)属性(
	namespace  
    	当前文件的命名，必须是 dao 接口的全限定类名
    	执行 sql 语句，执行namespace中的
	        
)>

其他子标签
	<!--配置关联关系-->
	collection
    association
	<!--配置java对象属性与查询结果集中列名的对应关系-->
	// resultMap
    <!--sql 动态连接-->
    // if
	// foreach
	// choose
    <!--格式化输出-->
	// where
    set
    trim
	<!--复用-->
	// sql
  
    
```

## select

```java
<select
子标签(
	if
    where
    
)    
属性(    
    // id 
        唯一的名称，对应dao中mapper的接口名称！！！！
    	文件中查询语句的标识，方法的名称
    // paramterType 
       定义传入的参数类型
    // resultType 
        返回数据类型对应实体类
    // resultMap 
        外部 resultMap 的命名引用, 手动指定字段和实体属性的映射关系
    	结果集的映射是 MyBatis 最强大的特性，对其有一个很好的理解的话，许多复杂映射的情形都能迎刃而解。
    	使用 resultMap 或 resultType，但不能同时使用
    flushCache 
        将其设置为 true，任何时候只要语句被调用，都会导致本地缓存和二级缓存都会被清空，默认值：false
    useCache 
        将其设置为 true，将会导致本条语句的结果被二级缓存，默认值：对 select 元素为 true
    timeout 
        这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为 unset（依赖驱动）
    fetchSize 
        这是尝试影响驱动程序每次批量返回的结果行数和这个设置值相等。默认值为 unset（依赖驱动）。
    statementType STATEMENT，PREPARED 或 CALLABLE 的一个。
    	这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。
    resultSetType FORWARD_ONLY，SCROLL_SENSITIVE 或 SCROLL_INSENSITIVE 
    		中的一个，默认值为 unset （依赖驱动）。
    databaseId 
    	如果配置了 databaseIdProvider，MyBatis 会加载所有的不带 databaseId 或匹配当前 databaseId 的语句；如果带或者不带的语句都有，则不带的会被忽略。
    resultOrdered 
    	这个设置仅针对嵌套结果 select 语句适用：如果为true，就是假设包含了嵌套结果集或是分组了，这样的话当返回一个主结果行的时候，就不会发生有对前面结果集的引用的情况。这就使得在获取嵌套的结果集的时候不至导致内存不够用。默认值：false。
    resultSets 
    	这个设置仅对多结果集的情况适用，它将列出语句执行后返回的结果集并每个结果集给一个名称，名称是逗号分隔的。

)>   
```

## update、delete、insert

```xml
<insert
属性(      
    id 
        <--
            唯一的名称，对应dao中mapper的接口名称
            文件中查询语句所在的标识
        -->
    parameterType 
        <--
           将要传入语句的参数的完全限定类名或别名。
            这个属性是可选的，因为 MyBatis 可以通过 TypeHandler 推断出具体传入语句的参数，默认值为 unset。
         -->
    flushCache 将其设置为 true，任何时候只要语句被调用，都会导致本地缓存和二级缓存都会被清空，默认值：true（对应插入、更新和删除语句）。
    timeout 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为 unset（依赖驱动）。
    statementType STATEMENT，PREPARED 或 CALLABLE 的一个。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。
    useGeneratedKeys（仅对 insert 和 update 有用）这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server这样的关系数据库管理系统的自动递增字段, oracle使用序列是不支持的，通过selectKey可以返回主键），默认值：false。
    keyProperty （仅对 insert 和 update 有用）唯一标记一个属性，MyBatis 会通过 getGeneratedKeys 的返回值或者通过 insert 语句的 selectKey子元素设置它的键值，默认：unset。如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。
    keyColumn（仅对 insert 和 update 有用）通过生成的键值设置表中的列名，这个设置仅在某些数据库（像PostgreSQL）是必须的，当主键列不是表中的第一列的时候需要设置。如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。
    databaseId 如果配置了 databaseIdProvider，MyBatis 会加载所有的不带 databaseId 或匹配当前 databaseId 的语句；如果带或者不带的语句都有，则不带的会被忽略。

)>   
            
例子
<mapper namespace="userMapper">
    <!--增加-->
    <insert id="add" parameterType="com.itheima.domain.User">
        insert into user values(#{id},#{username},#{password})   
    </insert>
    
    <!--更新修改-->
    <update id="update" parameterType="com.itheima.domain.User">
            update user set username=#{username},password=#{password} where id=#{id}
    </update>
    
    
	<!--删除-->
    <delete id="delete" parameterType="java.lang.Integer">       
        delete from user where id=#{id}
    </delete>
</mapper>

            
```

## resultMap

### 介绍

```xml
介绍
	数据表对应关系
	手动指定指定字段与实体属性的映射关系
多表操作
	一对一
	一对多
	多对多
	多对一

<!ELEMENT resultMap
子元素(
    constructor 
		<!-- 
			用于在实例化类时，注入结果到构造方法中 
 		-->
    id		<!-- 用于表示哪个列是主键 -->
    result   <!-- 注入到字段或JavaBean属性的普通结果 -->
    association  <!-- 用于一对一关联 -->
    collection    <!-- 用于一对多、多对多关联 -->
    discriminator   <!-- 使用结果值来决定使用哪个结果映射 -->
)
属性(
	id	像，结果映射
    type	原像
	autoMapping
)-->
    
属性
id
	当前命名空间中的一个唯一标识，用于标识一个结果映射
type
	类的完全限定名, 或者一个类型别名（关于内置的类型别名，可以参考上面的表格）
autoMapping   
	如果设置这个属性，MyBatis 将会为本结果映射开启或者关闭自动映射。 
	这个属性会覆盖全局的属性 autoMappingBehavior。默认值：未设置（unset）。 


    <resultMap id="" type="">
        <constructor>
            <idArg/><!-- ID参数，结果为ID -->
            <arg/><!-- 注入到构造方法的一个普通结果 -->  
        </constructor>
        <id/>
        <result/>
        <association property=""/>
        <collection property=""/>
        <discriminator javaType="">
            <case value=""/><!-- 基于某些值的结果映射 -->
        </discriminator>
    </resultMap>
```



### 子元素

#### constructor 

```xml
<!ELEMENT constructor 
子元素(
	idArg	 <!-- ID参数，结果为ID -->
    arg	<!-- 注入到构造方法的一个普通结果 -->
)>
```







#### association

```JAVA
介绍
    用于一对一查询
场景
    一个用户有多个订单，但是一个订单只属于一个用户
	需求： 查询一个订单，同时查询出订单所属用户（order --> user）
    
语法
<!ELEMENT association
子元素（
    id	// 同下
    result  // 同下
    collection  // 同下
）
属性（
	property
    javaType
    jdbcType
    typeHandler
）>
属性
    property 
    	// property = user （Order 类的属性： private User user）
    	当前实体中的属性名称
    	JavaBean 存在相应字段则使用，不存在则 MyBatis 将会寻找给定名称的字段。 
    	复杂属性导航：使用点式分割， address.street.number
    
    javaType 
    	// javaType = User; （Order 类的属性： private User user）
		当前实体中的属性的类型：类的完全限定名，或类型别名（注意内置类型别名）
    	MyBatis 通常可以推断 Java Bean 类型，但是 HashMap 需要明确指定这个属性
    
    jdbcType
    	// jdbcType = 
    
    	JDBC 类型，所支持的 JDBC 类型参见这个表格之前的“支持的 JDBC 类型”。 
    	只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。
    	这是 JDBC 的要求而非 MyBatis 的要求。如果你直接面向 JDBC 编程，你需要对可能存在空值的列指定这个类型。
    typeHandler 	
    
    
    	我们在前面讨论过默认的类型处理器。
    	使用这个属性，你可以覆盖默认的类型处理器。 
    	这个属性值是一个类型处理器实现类的完全限定名，或者是类型别名

```

#### collection

```java
介绍
    合元素和关联元素几乎是一样的
    

<!ELEMENT coolection
子元素（
	id		// 同下
    result   // 同下
	
）
属性（
	property="posts" ofType="domain.blog.Post"
）>
    
属性
property 
    // property="posts" （private List<Post> posts;）
    集合的名称
ofType	
    // ofType="domain.blog.Post" private List<Post> posts;）
   当前集合的数据类型
```



#### id & result

```java
介绍
	id 和 result 元素都将一个列的值映射到一个简单数据类型（String, int, double, Date 等）的属性或字段
	id 元素对应的属性会被标记为对象的标识符，在比较对象实例时使用，提高性能(进行缓存和嵌套结果映射（也就是连接映射）的时候)

<!ELEMENT id result
属性(
    column
	property
    javaType
    jdbcType
    typeHandler
)>

属性
property 
    // 实体的属性名称
	映射到列结果的字段或属性。
	如果 JavaBean 有这个名字的属性（property），会先使用该属性。否则 MyBatis 将会寻找给定名称的字段（field）。  
	比如，你可以这样映射一些简单的东西：“username”，或者映射到一些复杂的东西上：“address.street.number”。
column 	
    // 数据表字段名称
	数据库中的列名，或者是列的别名。
    一般情况下，这和传递给 resultSet.getString(columnName) 方法的参数一样。
javaType 	
    一个 Java 类的全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。 
    如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。
    然而，如果你映射到的是 HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。
jdbcType 	
    JDBC 类型，所支持的 JDBC 类型参见这个表格之后的“支持的 JDBC 类型”。 
    只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。
    这是 JDBC 的要求而非 MyBatis 的要求。
    如果你直接面向 JDBC 编程，你需要对可以为空值的列指定这个类型。
typeHandler 	
    我们在前面讨论过默认的类型处理器。
    使用这个属性，你可以覆盖默认的类型处理器。 
    这个属性值是一个类型处理器实现类的全限定名，或者是类型别名。
```

#### discriminator

```java

```

### 多表配置

```java
一对一	resultMap
一对多  resultMap + collection
多对多	 resultMap + collection    
```



## ---------------------------------



```xml
介绍
	基本都是用来判断值是否为空，注意Integer的判断，mybatis会默认把0变成 ‘’
语法格式
<!ELEMENT if
属性(
	test
		判断条件，
)>
例子
    <!-- 如果是Integer类型的需要把and后面去掉或是加上or-->
    <if test="id != null"></if>
    <if test="item != null and item != '' or item == 0"></if>
```

## where

```xml
<!ELEMENT where
子元素(
	foreach
	
)>
```



## foreach

```xml
<! foreach 
属性(
    collection 
		<--
         循环的集合。代表要遍历的集合元素，注意编写时不要写#{}
		传的是集合为list，数组为array, 如果是map为java.util.HashMap
        -->
    item 
        <--
		循环的key, 代表遍历集合的每个元素，生成的变量名
        -->
    index
		循环的下表顺序
    open 
		<--循环的开头,代表语句的开始部分-->
    close 
		<--循环结束,代表结束部分-->
    separator
        <--
		循环的分隔符
		-->
)>  
            
语法例子
<select id="findByIds" parameterType="list" resultType="user">
    select * from User
    <where>
        <foreach collection="array" open="id in(" close=")" item="id" separator=",">
            #{id}
        </foreach>
    </where>
</select>           
```



## include

```java
介绍
位置
    随意位置
```





