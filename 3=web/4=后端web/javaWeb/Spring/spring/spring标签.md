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
是一个bean实例化的过程需要依赖于另一个bean的初始化，    即被依赖的bean将会在需要依赖的bean初始化之前加载, 改变 bean 之间的创建顺序    多个依赖bean之间用","号分割；<!--创建person01 之前要先创建 person02 person03--><bean id="person01" class="com.learn.Person" depends-on="person03,person02"></bean><bean id="person02" class="com.learn.Person" ></bean><bean id="person03" class="com.learn.Person" ></bean>
```



#### scope

```java
// 作用范围
singleton：单例， 
    每个 Spring IoC 容器仅有一个单实例
    默认：加载 spring 文件的时候创建单例对象， getBean获得的对象都是同一个对象。
    
Prototype - 
    每次请求都会产生一个新的实例    
    
request：   
    每一次 HTTP 请求都会产生一个新的实例，并且该 bean 仅在当前 HTTP 请求内有效。
    web 环境下，同一次请求创建一个 Bean 实例对象，将对象存入到   request   域中，
    类似于servlet(没用)   

session：   
    // 没用
    每一次 HTTP 请求都会产生一个新的 bean，同时该 bean 仅在当前 HTTP session 内有效。  
    web 环境下，同一次会话中对应一个bean 实例对象，将对象存入到   session   域中    
global session  
    类似于标准的 HTTP Session 作用域，不过它仅仅在基于portlet 的 web 应用中才有意义   
    如果没有   Portlet   环境那么globalSession   相当于   session
    
// 仅当用户使用支持 Web 的 ApplicationContext 时，最后三个才可用    
```

#### factory-bean和factory-method

```java
设置了factory-bean属性后，  
    将指定创建bean的工厂类对象，class属性将失效；设置了factory-method属性后，将指定创建bean的工厂方法；
```

#### 生命周期属性

```xml
单例	
	(容器启动)构造器 --> 初始化方法 --> (销毁前方法) --> (容器关闭)销魂方法
多例
	获取 bean(构造器 --> 初始化方法) --> (容器关闭)不会调用销魂方法init-method	

介绍		
	// 创建之后， 初始化方法				
	<!--在创建一个bean之后调用该方法，必须是一个无参方法-->		
	<bean init-method="myinit"></bean>destroy-method	
介绍
	// 销毁之前       
	在销毁bean之前可以执行指定的方法。        
	注意：必须满足scope="singleton"，并且destroy方法参数个数不能超过1，并且参数类型只能为boolean。

比较重要的方法
setup ： 它是在容器加载 bean的时候被调用。
teardown ： 它是在容器卸载类的时候被调用。
有两个重要的属性（init-method 和 destroy-method）。
	用它们可以自己定制初始化和注销方法。
	它们也有相应的注解（@PostConstruct 和@PreDestroy）。
```



#### name

```java
别名（alias）    // 早期属性，为其他框架设置的，可以省略    用法：java文件中使用 getBean("name")，可以    支持设置多个别名，之间用英文逗号分割；
```

#### autowire

```java
介绍    用于指定当前Bean的依赖关系的自动注入方式 , autowire（自动装配，默认为“default”）    a属性值    no ：   	不进行自动装配default：    由上级标签的default-autowire属性确定。    byName ：     根据属性名自动装配。    此选项将检查容器并根据名字查找与属性完全一致的bean，并将其与属性自动装配	// 以属性名（car01）作为  去容器中找到这个组件，给他赋值, 找不到装配 null    private Car car01  //ioc.getBean("car01")byType值：    表示通过class指定的类型来自动装配、    如果存在多个该类型bean，那么抛出异常，并指出不能使用byType方式进行自动装配；    如果没有找到相匹配的bean，则什么事都不发生，也可以通过设置dependency-check="objects" 让Spring抛出异常。	// 以属性类型（Car）作为依据去容器中找，多个相同类型会报错    private Car car01  //ioc.getBean("Car.class")constructor值：    表示使用构造函数的参数进行自动装配(参数的类型匹配)。    没有：装配 null    多个： 参数的名作为 id 进行赋值    如果容器中没有找到与构造器参数类型一致的bean， 那么抛出异常autodetect值：    表示自动进行选择匹配方式，    首先进行constructor自动装配，    若不存在构造方法则使用byType方式进行自动装配；    如果发现默认的构造器，那么将使用byType方式，否则采用 constructor。    
```







#### lazy-init

```java
设置bean对象是否懒加载，    如果设为true，则应用第一次用到bean时才实例化对象，    否则在初始化spring容器时加载单例bean对象。（非单例不实例化）
```



#### primary

```java
当一个bean出现多个候选者时，设置primary="true"后，则优先使用该bean来自动装配。
```





## aop系列

### config

```dtd
<!ELEMENT aop:config子表签(	aop:pointCut    	复用的pointcut语句	aop:aspect    	切面配置，切面织入)属性(		)><!ELEMENT aop:aspect子表签(	// 四个标签： before after after-returning throwing round	aop:before)属性(	ref  指定切面类    returning  after-returning独有的属性，返回值    throwing   throwing 独有的属性，抛出的错误类型的参数)><!ELEMENT aop:before子表签(	)属性(	mehtod	进行增强的方法	pointcut	需要被增强的方法	aop:pointCut-ref	复用的别增强的方法)><!--配置目标类--><bean id="target" class="com.itheima.aop.Target"></bean><!--配置切面类--><bean id="myAspect" class="com.itheima.aop.MyAspect"></bean><!--织入--><aop:config>    <!--引用myAspect的Bean为切面对象-->    <aop:aspect ref="myAspect">        <!--配置Target的method方法执行时要进行myAspect的before方法前置增强-->        <aop:before method="before" pointcut="execution(public void com.itheima.aop.Target.method())"></aop:before>      </aop:aspect></aop:config>    <!--引用myAspect的Bean为切面对象-->    <aop:aspect ref="myAspect">        <aop:pointcut id="myPointcut" expression="execution(* com.itheima.aop.*.*(..))"/>        <!--表示使用到的切点表达式和前面相同-->        <aop:before method="before" pointcut-ref="myPointcut"></aop:before>    </aop:aspect>
```





## context  系类

### component-scan

```dtd
<!ELEMENT context:component-scan属性(     base-package:    	// 类全路径        指定扫描的基础包,        将包下面的所有包中加了注解的类，自动扫描入 ioc 容器     use-default-filters="false"            false 表示不适用默认的，启用 context:xxx-filter 子标签           true  使用默认的过滤器， 将 component 等注释的标签注册为 bean        表示现在不使用默认 filter，使用自己配置 filter)字标签(     context:include-filter         指定扫描那些包，默认扫描全部     context:exclude-filter     	指定不扫描哪些)><!ATTLIST context:include-filter， context:exclude-filter	type 	固定的几个值    扫描规则    expression	type的具体规则  规则表达式><!-- type -->//----------------------------------------------------------------type="filter"： rexpression：//----------------------------------------------------------------type="annotation"： 指定按照注解： rexpression： 注解的全类名	// 排除掉含有 @Controller 标签的类    <context:exclude-filter         type="annotation" 		// 类全名        expression="org.springframework.stereotype.Controller"    />//----------------------------------------------------------------type="assignable"： 排除某个具体的类，按照类排除 rexpression： 类的全名//----------------------------------------------------------------type="aspectj"： 排除符合 aspectj 表达式的rexpression： aspectj 表达式//----------------------------------------------------------------type="custom"： 	自定义一个 TypeFilter , 自己写代码决定哪些类使用rexpression： aspectj 表达式//----------------------------------------------------------------type="regex"： 	正则表达式rexpression： 正则表达式//----------------------------------------------------------------Filter			 	Type								Examples Expression	Descriptionregex				org.example.Default.*				使用自定义的org.springframework.core.type.TypeFliter实现类，该类由expression属性指定custom				org.example.MyTypeFilter			Spring3新增自订Type,称作org.springframework.core.type.TypeFilter
```



## tx系列

### 概述

```dtd
<!--2 配置通知, 事务增强， --> <tx:advice>     <!--配置事务参数-->     <tx:attributes>         <!--指定哪种规则的方法上面添加事务-->         <tx:method/>         <!--<tx:method name="account*"/>-->     </tx:attributes></tx:advice>
```



### advice

```dtd
<!ELEMENT tx:advice含义()属性(	id="txadvice")子标签(	tx:attributes)>
```

### attributes

```dtd
<tx:attributes>
```



### method

```dtd
<!ELEMENT tx:method 含义(	一个该标签一个事务)属性（    name="transfer"     	实现切点方法名称    isolation="REPEATABLE_READ"     	事务的隔离级别    propagation="REQUIRED"     	事务的传播行为    timeout="-1"     	超时时间    read-only="false"    	是否只读）    /> 
```



# mvc系列

## annotation-driven

```dtd
<!ELEMENT  mvc:annotation-driven含义(	mvc 的注册驱动    会自动注册     	RequestMappingHandlerMapping、    	RequestMappingHandlerAdapter、    	ExceptionHandlerExceptionResolver 三个bean。    同时支持使用    	ConversionService 实例对表单参数进行类型转换    	@NumberFormat annotation、@DateTimeFormat 注解完成数据类型的格式化    	@Valid 注解对 JavaBean 实例进行 JSR 303 验证    	@RequestBody 和 @ResponseBody 注解)属性(	conversion-service	自定义的转化器的 name, 使用注定的转换器进行类型转换)>语法例子    <mvc:annotation-dirven/>
```

## resources

```dtd
mvc:resources<!ELEMENT mvc:resources含义(    )属性(	mapping 		映射地址，往服务端发送请求资源的地址    location		开放的具体的资源的目录地址)>      例子    <mvc:resources mapping="/jsp/**" location="/js/">    <mvc:resources mapping="/img/**" location="/img/">
```

## default-servlet-handler

```dtd
<!ELEMENT mvc:default-servlet-handler含义(	在访问资源的时候，springMVC 寻找相应的匹配地址    找不到， 就交由原始的容器（tomcat）寻找)>例子	<mvc:default-servlet-handler/>注意	mvc:default-servlet-handler 和 mvc:annotation-driven	都没配置	
```

## interceptors

```dtd
<!ELEMENT mvc:interceptor(含义(	)子标签(    mvc:interceptors*	mvc:mapping,  <!--对哪些资源进行拦截操作-->	bean		 <!--要执行拦截操作的类的实例-->)><!--配置拦截器-->    <mvc:interceptors>        <mvc:interceptor>            <!--对哪些资源执行拦截操作-->            <mvc:mapping path="/**"/>            <bean class="com.itheima.interceptor.MyInterceptor1"/>        </mvc:interceptor>    </mvc:interceptors>
```

## mapping

```dtd
<!ELEMENT mvc:mapping	path	>
```





# --myhabits 标签 ----

# 介绍

```java
myBatis 只有两个标签    configuration 配置标签    mapper	映射标签
```



# configuration 标签

```java
介绍    configuration 标签需要按照下面的顺序来写            <congfiguration 子标签 (    // properties?（属性）    settings?（设置）    // typeAliases?（类型别名）    // typeHandlers?（类型处理器）    objectFactory?（对象工厂）    // plugins?（插件）    // environments?（环境配置）        environment?（环境变量）            transactionManager（事务管理器）            dataSource（数据源）    databaseIdProvider?（数据库厂商标识）    // mappers?（映射器）)> 
```

## properties

```xml
介绍	这些属性可以在外部进行配置，并可以进行动态替换。位置	 Java 属性文件中，	 properties 元素的子元素中设置
```

### 属性值设置

```java
属性值加载顺序	property  ---> resource 属性(外部配置文件)  --->  方法参数传递的属性(java代码)	后面设置的会覆盖之前读取过的同名属性。属性值设置//1 property     <properties resource="org/mybatis/example/config.properties">        <property name="username" value="dev_user"/>        <property name="password" value="F2Fa3!33TYyg"/>    </properties>//2 jdbc.properties    jdbc.name = "lili"    jdbc.password = "123"//3 java 方法设置// 在 SqlSessionFactoryBuilder.build() 方法中传入属性值。例如    SqlSessionFactory factory =    		new SqlSessionFactoryBuilder().build(reader, props);    SqlSessionFactory factory =         new SqlSessionFactoryBuilder().build(reader, environment, props);           取值顺序 	username 和 password 将会由 properties 元素中设置的相应值来替换	driver 和 url 属性将会由 jdbc.properties 文件中对应的值来替换
```

### 默认值设置

```java
介绍	MyBatis 3.4.2 开始，你可以为占位符指定一个默认值使用        // 默认属性开启    <properties resource="org/mybatis/example/config.properties">    <!-- 启用默认值特性 -->    <property name="org.apache.ibatis.parsing.PropertyParser.enable-default-value" value="true"/>     </properties>    // 默认属性设置    <dataSource type="POOLED">    <!-- 如果属性 'username' 没有被配置，'username' 属性的值将为 'ut_user' -->    <property name="username" value="${username:ut_user}"/>     </dataSource>  转义 ：      // 场景    在属性名中使用了 ":" 字符     SQL 映射中使用了 OGNL 表达式的三元运算符（如： ${tableName != null ? tableName : 'global_constants'}）    // 例子    // 修改默认修改符    <properties resource="org/mybatis/example/config.properties">    	<!-- 修改默认值的分隔符 -->  		<property name="org.apache.ibatis.parsing.PropertyParser.default-value-separator" value="?:"/> 	</properties>    // 使用    <dataSource type="POOLED">      <!-- ... -->      <property name="username" value="${db:username?:ut_user}"/>    </dataSource>
```

## settings

```dtd
介绍	极为重要的属性	改变 MyBatis 的运行时行为注意	属性偏多，用到那个用哪个，暂时没必要所有的都过一遍，语法例子<!ELEMENT settings子元素(	setting)属性(name    mapUnderscoreToCamelCase      	是否开启驼峰命名规则，会将 A_COLUMN 自动映射为 aCloumn,     lazyLoadingEnable  false    	开启延迟加载开关    aggressiveLazyLoading true    	启用，会完整加载有延迟属性的对象，反之每种属性按需加载value)>
```

## typeAliases

```dtd
介绍	类型别名可为 Java 类型设置一个缩写名字。 它仅用于 XML 配置，意在降低冗余的全限定类名书写	可以设置一个别名组， 专门用于设置别名使用语法例子<!ELEMENT typeAliases使用(	不推荐使用，直接使用全类名)    子元素(    typeAliases	为一个 javaBean 起别名，别名默认为类名，不区分大小写    package  给包的下面的所有类起别名，默认类名	    	定一个包名，MyBatis 会在包名下面搜索需要的 Java Bean)属性(    alias   别名    type	原始的类型)>语法例子	<typeAliases>       <!-- 在使用 domain.blog.Author 的地方，都可以使用 Author 来替代-->	  <typeAlias alias="Author" type="domain.blog.Author"/>       <package name="domain.blog"/>	</typeAliases>
```

### 注意

```java
注意	常见的 Java 类型内建的类型别名。它们都是不区分大小写的，注意，	为了应对原始类型的命名重复，采取了特殊的命名风格
```



## typeHandler

### 介绍

```dtd
介绍	类处理器, 数据类型的转换    无论是 MyBatis 在预处理语句（PreparedStatement）中设置一个参数时，还是从结果集中取出一个值时，     都会用类型处理器将获取的值以合适的方式转换成 Java 类型。类型转换	类型处理器 			Java 类型 				 	JDBC 类型	BooleanTypeHandler 	java.lang.Boolean, boolean 	    数据库兼容的 BOOLEAN 语法例子<!ELEMENT typeHandlers 含义(	注册类处理器，处理数据库和实体之间的类型转换的类型处理器   )               子标签（	typeHandler                   	）><!ELEMENT typeHandler属性(	handler    javaType)>    例子
```

### 自定义处理器

```java
介绍	重写已有的类型处理器或创建你自己的类型处理器来处理不支持的或非标准的类型做法	1. 实现 org.apache.ibatis.type.TypeHandler 接口， 	2. 继承 org.apache.ibatis.type.BaseTypeHandler 类，         覆盖 4 个未实现的方法， 并且可以（可选地）将它映射到一个 JDBC 类型例子// java  代码//    泛型 你可以设置为 Date String 等 Java 类型    public class MyDateTypeHandler extends BaseTypeHandler<Date> {                // java 转为 数据库类型        // i	数据所在的列        // date	java 类型        @Override        public void setNonNullParameter(            PreparedStatement preparedStatement,   // 执行的sql语句            int i,             Date date,             JdbcType type        ) {            preparedStatement.setString(i,date.getTime()+"");        }                // 将数据库类型转为 Java 类型        // String 要转换的字段名称        // Resultset 查询出的结果集        @Override        public Date getNullableResult(            ResultSet resultSet,             String s        ) throws SQLException {            return new Date(resultSet.getLong(s));        }                // 将数据库类型转为 Java 类型        @Override        public Date getNullableResult(            ResultSet resultSet,             int i        ) throws SQLException {            return new Date(resultSet.getLong(i));        }        // 将数据库类型转为 Java 类型        // callableStatement	        @Override        public Date getNullableResult(            CallableStatement callableStatement,             int i        ) throws SQLException {            return callableStatement.getDate(i);        }    }// 配置<!--注册类型自定义转换器--><typeHandlers>    <typeHandler handler="com.itheima.typeHandlers.MyDateTypeHandler"></typeHandler></typeHandlers>
```



## plugins

```dtd
<!ELEMENT plugins(含义(	使用第三方的插件来对功能进行扩展	)    子元素(	plugin,)>  <peoperties属性(	name    value)>                例子    <!-- 注意：分页助手的插件  配置在通用馆mapper之前 -->    <plugin interceptor="com.github.pagehelper.PageHelper">        <!-- 指定方言 -->        <property name="dialect" value="mysql"/>    </plugin>
```





## environments

```dtd
介绍	这个标签只要是利用 spring 进行配置的，mybatis 基本只用来进行增删改查<!ELENENT environments 子标签 (	environment  环境变量)属性(	default="development"      	指定默认的环境名称,使用的默认值，)><!ELEMENT environment 介绍(	配置一个具体的环境，需要一个事务管理器和一个数据源    可以设置多个化境，)    子标签(    这两个子标签，随后都不会用，直接用 spring 的进行，mybatis 只进行增删改查    transactionManager   事务管理，事务类型    dataSource	数据源，连接池)属性（ 	id="development"	        指定当前环境的名称唯一标识，    	可以使用 environments 的 default 标签设置当前使用的数据库    ）><!ELEMENT transactionManager   属性(	type="JDBC"  事务管理器，事务管理的类型)><!ELEMENT dataSource   子标签数据都是固定的子标签 (    property	数据源配置的基本参数	) 属性 (    type="POOLED"       	指定当前数据源类型是链接池,        当前自定义连接池的全类名)><!ELEMENT property   子标签数据都是固定的子标签 (    property	数据源配置的基本参数	) 属性 (    name	value          )            <environment id="development">                       <transactionManager type="JDBC"/>                        <dataSource type="POOLED">                <property name="driver" value="com.mysql.jdbc.Driver"/>                <property name="url" value="jdbc:mysql:///test"/>                <property name="username" value="root"/>                <property name="password" value="root"/>            </dataSource>        </environment>
```

## databaseIdProvider

```dtd
介绍	考虑数据库的移植性<!ELEMENT databaseIdProvider属性(	type )子标签(	property 数据库厂商和标识和名称     	{    	name = 数据库厂商标识    	value= 给标识起一个比较好听的名字， jdk 中的getDatabaseProductName就是获取该名称    	})>
```



## mappers

```dtd
<!ELEMENT mappers含义（   映射器， 加载映射文件，指的是每个 dao 接口独立的配置文件     就是每个 dao 接口的实例的配置，用来指明接口实例再什么地方）    	  子标签(	mapper	    	每个 dao 接口的实例(对应的 xml 文件)	package          指定接口所在的包)>                <mapper子标签( )属性（url	可以从磁盘或者网络路径引用resourcese       UserDao.xml , 类路径下找 sql 映射文件class	    直接引用接口的全类名，    方式一：此时 xml 实例文件和 dao 接口应该放在同一个包/文件夹中, 且需要文件名一致	方式二：支持注解，不用写 mapper.xml 实例文件        ）>    <!ELEMENT package介绍(	批量注册 mapper.xml 实例文件)属性(	name : dao 接口们所在的包名)>
```



# mapper标签

## 介绍

```java
介绍        cache – 该命名空间的缓存配置。    cache-ref – 引用其它命名空间的缓存配置。    parameterMap – 老式风格的参数映射。此元素已被废弃，并可能在将来被移除！请使用行内参数映射。文档中不会介绍此元素。<mapper子标签(    <!-- sql 定义标签-->    // insert – 映射插入语句。    // update – 映射更新语句。    // delete – 映射删除语句。    // select – 映射查询语句。    // sql – 可被其它语句引用的可重用语句块。    // resultMap – 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素。)属性(	namespace      	当前文件的命名，必须是 dao 接口的全限定类名    	执行 sql 语句，执行namespace中的	        )>其他子标签	<!--配置关联关系-->	collection    association	<!--配置java对象属性与查询结果集中列名的对应关系-->	// resultMap    <!--sql 动态连接-->    // if	// foreach	// choose    <!--格式化输出-->	// where    set    trim	<!--复用-->	// sql      
```

## cache

```dtd
<!ELEMENT cache属性（eviction=“FIFO”：缓存回收策略：	LRU – 最近最少使用的：移除最长时间不被使用的对象。	FIFO – 先进先出：按对象进入缓存的顺序来移除它们。	SOFT – 软引用：移除基于垃圾回收器状态和软引用规则的对象。	WEAK – 弱引用：更积极地移除基于垃圾收集器状态和弱引用规则的对象。	默认的是 LRU。 flushInterval：刷新间隔，单位毫秒	默认情况是不设置，也就是没有刷新间隔，缓存仅仅调用语句时刷新size：引用数目，正整数	代表缓存最多可以存储多少个对象，太大容易导致内存溢出readOnly：只读，true/false    true：只读缓存；会给所有调用者返回缓存对象的相同实例。    因此这些对象不能被修改。这提供了很重要的性能优势。    false：读写缓存；会返回缓存对象的拷贝（通过序列化）。    这会慢一些，但是安全，因此默认是 false。        ）    >
```



## update、delete、insert

```dtd
<!ELEMENT insert字标签（	selectKey    ）    属性(          id     databaseId     parameterType         useGeneratedKeys    keyProperty 	selectkey    flushCache    timeout     statementType     keyColumn)>               例子<mapper namespace="userMapper">    <!--增加-->    <insert id="add" parameterType="com.itheima.domain.User">        insert into user values(#{id},#{username},#{password})       </insert>        <!--更新修改-->    <update id="update" parameterType="com.itheima.domain.User">            update user set username=#{username},password=#{password} where id=#{id}    </update>        	<!--删除-->    <delete id="delete" parameterType="java.lang.Integer">               delete from user where id=#{id}    </delete></mapper>            
```

### 属性 

```dtd
       id     	对应执行的 dao 接口中的方法名， 是唯一标识        文件中查询语句所在的标识    databaseId     	指定 CRUD　属于哪一个数据库，    	如果配置了 databaseIdProvider，MyBatis 会加载所有的不带 databaseId 或匹配当前 databaseId 的语句；    	如果带或者不带的语句都有，则不带的会被忽略。    parameterType         将要传入语句的参数的完全限定类名或别名。        这个属性是可选的，默认值为 unset    	因为 MyBatis 可以通过 TypeHandler 推断出具体传入语句的参数    useGeneratedKeys	   <!-- 获取自增主键的方法，只有个自增列-->       仅对 insert 和 update 有用, 默认值：false。       这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键       比如：    		MySQL 和 SQL Server这样的关系数据库管理系统的自动递增字段,     		oracle使用序列是不支持的，通过 selectKey 可以返回主键    keyProperty     	仅对 insert 和 update 有用）唯一标记一个属性，默认：unset    	MyBatis 会设置其键值为			<!-- 将 userGeneratedKeys 将查询到的列(属性值)赋值给 javaBean 的对应属性 -->    		getGeneratedKeys 的返回值    		insert 语句的 selectKey子元素，    	如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。	selectkey	<!-- 查询主键，主要用于非自增主键 -->    flushCache 将其设置为 true，任何时候只要语句被调用，都会导致本地缓存和二级缓存都会被清空，默认值：true（对应插入、更新和删除语句）。    timeout 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为 unset（依赖驱动）。    statementType     	STATEMENT，PREPARED 或 CALLABLE 的一个。    	这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，    	默认值：PREPARED。    keyColumn（仅对 insert 和 update 有用）通过生成的键值设置表中的列名，这个设置仅在某些数据库（像PostgreSQL）是必须的，当主键列不是表中的第一列的时候需要设置。如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。)>               
```

### 字标签

#### selectKey

```dtd
<!ELEMENT selectKey介绍（	用于 insert）    属性(	order="EFORE"    	before  在核心 sql 语句之前先运行一个查询 sql    	after	   keyProperty=    	将查询到的列(属性值)赋值给 javaBean 的哪个属性)>
```



## select

```java
<select子标签(	if    where    )      
```

### 属性

```java
属性(        // id         唯一的名称，对应dao中mapper的接口名称！！！！    	文件中查询语句的标识，方法的名称    // paramterType        定义传入的参数类型    // resultType     	返回值类型    	多条记录封装 list ：resultType = 集合里面元素的类型        	返回数据类型对应实体类    	单条记录封装 map : resultType = map    		结果集 map 中，默认使用列名作为 key, 值作为 value    	多条记录封装 map :  resultType = 集合里面元素的类型    		添加注解 @mapKey("id") 把查询记录的 id 值作为 key 封装    		结果集 map 中， 使用主键作为 key, value 值为封装好的对象    	返回的是集合的话，写的是集合里面元素的类型    // resultMap 		自定义map 结果集映射， 自定义封装规则    		resultMap = resultMap 标签指定的 id  值    	详情见 result 标签    	 	    	使用 resultMap 或 resultType，但不能同时使用    flushCache         将其设置为 true，任何时候只要语句被调用，都会导致本地缓存和二级缓存都会被清空，默认值：false    useCache         将其设置为 true，将会导致本条语句的结果被二级缓存，默认值：对 select 元素为 true    timeout         这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为 unset（依赖驱动）    fetchSize         这是尝试影响驱动程序每次批量返回的结果行数和这个设置值相等。默认值为 unset（依赖驱动）。    statementType STATEMENT，PREPARED 或 CALLABLE 的一个。    	这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。    resultSetType FORWARD_ONLY，SCROLL_SENSITIVE 或 SCROLL_INSENSITIVE     		中的一个，默认值为 unset （依赖驱动）。    // databaseId     	如果配置了 databaseIdProvider，    	MyBatis 会加载所有的不带 databaseId 或匹配当前 databaseId 的语句；    	如果带或者不带的语句都有，则不带的会被忽略。    resultOrdered     	这个设置仅针对嵌套结果 select 语句适用：如果为true，就是假设包含了嵌套结果集或是分组了，这样的话当返回一个主结果行的时候，就不会发生有对前面结果集的引用的情况。这就使得在获取嵌套的结果集的时候不至导致内存不够用。默认值：false。    resultSets     	这个设置仅对多结果集的情况适用，它将列出语句执行后返回的结果集并每个结果集给一个名称，名称是逗号分隔的。)> 
```



## resultMap

### 介绍

```dtd
介绍	自定义结果集	对于多表联合查询的，直接使用自定义结果集 mybatis 自动封装    1. 按照列名、属性名 -- 对应的规则(不区分大小写)    2. 如果不一一对应        1. 开启驼峰命名法（a_b 映射 aB）        2. 起别名介绍	数据表对应关系	手动指定指定字段与实体属性的映射关系多表操作	// 钥匙和锁	一对一: 从钥匙的角度看： 一把钥匙只能开一把锁	一对多： 从锁的角度看： 一把锁可以有多把钥匙		外键在多的表： 多个人记忆一个人方便	多对多： 学生和老师：不管从谁的角度看，都是多对多的		中间表存储对应关系	多对一： 从钥匙角度看： 多把钥匙可以开一把锁<!ELEMENT resultMap介绍(	自定义结果集)  子元素(    constructor 		<!-- 			用于在实例化类时，注入结果到构造方法中  		-->    id		<!-- 唯一标识，支出主键列 -->    result   <!-- 注入到字段或JavaBean属性的普通结果 -->    association      	用于一对一关联， 表示联合了一个对象    collection        	用于一对多、多对多关联     discriminator      	使用结果值来决定使用哪个结果映射)属性(id    结果集的名称	当前命名空间中的一个唯一标识，用于标识一个结果映射type    指定为哪个 java 类自定义封装规则，值为 类全类型名autoMapping   	如果设置这个属性，MyBatis 将会为本结果映射开启或者关闭自动映射。 	这个属性会覆盖全局的属性 autoMappingBehavior。默认值：未设置（unset）)>        <resultMap id="" type="">        <constructor>            <idArg/><!-- ID参数，结果为ID -->            <arg/><!-- 注入到构造方法的一个普通结果 -->          </constructor>        <id/>        <result/>        <association property=""/>        <collection property=""/>        <discriminator javaType="">            <case value=""/><!-- 基于某些值的结果映射 -->        </discriminator>    </resultMap>
```



### 子元素

#### id & result

```dtd
介绍	id 和 result 元素都将一个列的值映射到一个简单数据类型（String, int, double, Date 等）的属性或字段	id 元素对应的属性会被标记为对象的标识符，在比较对象实例时使用，提高性能(进行缓存和嵌套结果映射（也就是连接映射）的时候)<!ELEMENT id result介绍(	id 主键列    result 普通列)    属性(    column        数据库列名/列别名， id(主键类名)  result(列名)        一般情况下，这和传递给 resultSet.getString(columnName) 方法的参数一样。	property    	类(实体)属性名，结果类的字段/属性		指定具体的 java 类(结果类)的那个属性，该属性封装 column 指定的那一列的数据    	java bean 有这个属性字段，则使用，否则 MyBatis 将会寻找给定名称的字段（field）    javaType    jdbcType    typeHandler)>javaType 	    一个 Java 类的全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。     如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。    然而，如果你映射到的是 HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。jdbcType 	    JDBC 类型，所支持的 JDBC 类型参见这个表格之后的“支持的 JDBC 类型”。     只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。    这是 JDBC 的要求而非 MyBatis 的要求。    如果你直接面向 JDBC 编程，你需要对可以为空值的列指定这个类型。typeHandler 	    我们在前面讨论过默认的类型处理器。    使用这个属性，你可以覆盖默认的类型处理器。     这个属性值是一个类型处理器实现类的全限定名，或者是类型别名。
```

#### constructor 

```dtd
<!ELEMENT constructor 子元素(	idArg	 <!-- ID参数，结果为ID -->     arg	<!-- 注入到构造方法的一个普通结果 -->)>
```

#### association

```dtd
介绍    用于一对一查询，表示联合了一个对象 A场景    一个用户有多个订单，但是一个订单只属于一个用户	需求： 查询一个订单，同时查询出订单所属用户（order --> user）    语法<!ELEMENT association介绍(	内部标签，表示该属性的内部属性字段的封装规则)    子元素（    id	// 主键列    result  // 普通列    collection  // 同下）属性（property     // property = user （Order 类的属性： private User user）     属性的名称(当前联合对象 A 的名称)，复杂属性可使用级联操作（点式分割， address.street.number）    JavaBean 存在相应字段则使用，不存在则 MyBatis 将会寻找给定名称的字段。 javaType     // javaType = User; （Order 类的属性： private User user）    属性的类型(当前联合对象 A 的类型)： 全类名(类型别名)    MyBatis 通常可以推断 Java Bean 类型，但是 HashMap 需要明确指定这个属性jdbcType    // jdbcType =     JDBC 类型，所支持的 JDBC 类型参见这个表格之前的“支持的 JDBC 类型”。     只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。    这是 JDBC 的要求而非 MyBatis 的要求。如果你直接面向 JDBC 编程，你需要对可能存在空值的列指定这个类型。typeHandler 	    我们在前面讨论过默认的类型处理器。    使用这个属性，你可以覆盖默认的类型处理器。     这个属性值是一个类型处理器实现类的完全限定名，或者是类型别名    select    分步查询，    值为外部 select 语句的 id 值，    在执行 association 标签的同时，会自动调动外部的 select 语句    column     指定将哪一列的值传递给 select, 作为其方法执行的参数    column = {取值用的 key = 需要的那一列的列名，key2=列名，..}）>
```

#### collection

```dtd
介绍    合元素和关联元素几乎是一样的    用来处理一对多、多对多<!ELEMENT coolection介绍（    定义集合元素的封装    标签体中指定集合中元素的封装规则}    子元素（	id		// 主列名    result   // 普通列名    association  // 对象封装	）属性（property     // property="posts" （private List<Post> posts;）    集合的名称，哪个属性是集合属性，属性名javaType	指定对象类型，只是在 association 标签中ofType	    // ofType="domain.blog.Post" private List<Post> posts;）   当前集合中元素的类型，全类名select    分步查询，    值为外部 select 语句的 id 值，    在执行 association 标签的同时，会自动调动外部的 select 语句column	给 select 语句执行的方法进行传参     column = {取值用的 key = 需要的那一列的列名，key2=列名，..}）
```



#### discriminator

```java

```

### 多表配置

```java
一对一	resultMap一对多  resultMap + collection多对多	 resultMap + collection    
```



## ---------------------------------

## 判断

```java
OGNL（ Object Graph Navigation Language ）	对象图导航语言	一种表达式语言，通过它可以非常方便的来操作对象属性。mybatis 中可以用于判断的	1. 用传入的参数做判断	2. _parameter		// 代表传入的参数		1. 传入单个参数， 代表这个参数    	2. 传入多个参数， 代表多个参数集合起来的 map	3. _databaseId    	// 代表当前环境 ，配置的情况下，可以获取数据库    	<if test="_databaseId == 'mysql'"> ... </if>    	<if test="_databaseId == 'oracle'"></if>
```

![image-20210404203649295](../../../../../../../../%2525E7%25259F%2525A5%2525E8%2525AF%252586%2525E5%2525BA%252593/allstudy/3=web/4=%2525E5%252590%25258E%2525E7%2525AB%2525AFweb/javaWeb/Spring/%2525E9%25259C%252580%2525E8%2525A6%252581%2525E6%252595%2525B4%2525E7%252590%252586/spring/image-20210404203649295.png)

## if

```dtd
<!ELEMENT if介绍(	满足条件就拼接上 if 标签中的语句，不满足则不拼接    注意语句拼接上以后是否正确)    属性（	test=""		if 判断的条件, 可以直接拿 javaBean 的属性进行判断）>语法例子// 对于 	and &&(需要进行转义，html 中转义)	or  ||(需要进行转义，html 中转义) <if test = "id != 0 and userName!=null"></if><select id="findByCondition" parameterType="user" resultType="user">    select * from User    <where>	    <!-- 传过来的 pojo 的属性中 id 不是 0 -->        <if test="id!=0">		   <!--				id 数据库中列				#{id} 传过来的 pojo 属性值			-->            and id = #{id}        </if>        <if test="userName != null">            and user_name = #{userName}        </if>    </where></select>注意	基本都是用来判断值是否为空，注意Integer的判断，mybatis会默认把0变成 ‘’例子    <!-- 如果是Integer类型的需要把and后面去掉或是加上or-->    <if test="id != null"></if>    <if test="item != null and item != '' or item == 0"></if>
```



## where

```xml
<!ELEMENT where介绍(	where 元素只会在子元素返回任何内容的情况下才插入 “WHERE” 子句。	若子句的开头为 “AND” 或 “OR”，where 元素也会将它们去除。)子元素(	foreach	)>
```

## trim

```dtd
<!ELEMEMT trim注意（ 	直接使用 where 就行，不用使用这个标签了    ）    属性(prefix="where"    为下面的 sql 整体添加一个前缀prefixOverrides = "and"    取出整体字符串前面多余的字符suffix    为下面的 sql 整体添加一个后缀suffixOverrides = "and"    后面哪个多了，可以去点        )><trim></trim
```



## foreach

```xml-dtd
<!ELEMENT foreach 含义(    )    属性(    collection 		可以直接在参数中取其别名  @Param("ids")List<Integer> ids         循环的集合。代表要遍历的集合元素，注意编写时不要写#{}		传的是集合为list，数组为array, 如果是 map 为 java.util.HashMap    item 		每次遍历的元素起一个变量名，方便引用    index		如果遍历的是一个 List， 			index 指定的变量保存了当前索引			item 保存了值		如果遍历的是一个 map， 			index 指定的变量保存了当前遍历的元素的 key			item  保存了值    open 		以什么开始    close 		以什么结束    separator		每次遍历的元素的分隔符)>              语法例子<select id="findByIds" parameterType="list" resultType="user">    select * from User    <where>        <foreach collection="array" open="(" close=")" item="id" separator=",">            #{id}        </foreach>    </where></select>           
```



## choose

```dtd
<!--public List<Teacher> getTeacherByConditionChoose(Teacher teacher) --><select id= "getTeacherByConditionChoose" resultMap="teacherMap">select * from t_teacher<!-- 相当于 switch ，一个执行，其余的都不执行--><where>    <choose>        <when test= "id!=nulL">            id=#{id}        </when>        <when test= "name!=null and !name.equals(&quot;&quot;)">            teacherName= # name}        </when>        <when test= "birthdate !=null">            birth_ date = #{birth}        </when>        <otherwise>            1 = 1        </otherwise>	</choose></where>
```

## set

```dtd
<!--public int updateTeacher(Teacher teacher) --><update id= "updateTeacher" resultMap="teacherMap">    update t_teacher     <set>        <if test= "name!=null and !name.equals(&quot;&quot;)">            teacherName= #{name}        </if>        <if test= "birthdate !=null">            birth_ date = #{birth}        </if>    </set></where>
```



## include

```java
介绍位置    随意位置
```





## sql

```xml
介绍	抽取可重用的 sql	使用时用 include 引用即可，最终达到 sql 重用的目的<!--抽取sql片段简化编写--><sql id="selectUser"> select * from User</sql>// 复用<select id="findById" parameterType="int" resultType="user">    <include refid="selectUser"></include> where id=#{id}</select>// 复用<select id="findByIds" parameterType="list" resultType="user">    <include refid="selectUser"></include>    <where>        <foreach collection="array" open="id in(" close=")" item="id" separator=",">            #{id}        </foreach>    </where></select>
```

# 

