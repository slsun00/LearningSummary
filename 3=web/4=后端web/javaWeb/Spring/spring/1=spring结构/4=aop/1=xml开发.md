



## 介绍

### 概述

```java

使用
    Spring 框架监控切入点方法的执行。
    一旦监控到切入点方法被运行，使用代理机制，动态创建目标对象的代理对象，
    根据通知类别，在代理对象的对应位置，将通知对应的功能织入，完成完整的代码逻辑运行。
    
代理方式使用
    框架会根据目标类是否实现了接口来决定采用哪种动态代理的方式。

```

### 语法核心

```java
// xml 文件的书写
方式一
	// 切面类的 xml 表达
     // 通知类型： 附加方法执行的位置            
	<aop:通知类型 method=“切面类中方法名” pointcut=“切点表达式"></aop:通知类型>  
方式二
	 // 配置 aop:config 的 aop:advisor           
        <aop:config>
            <aop:pointcut />
            <!-- 将切入点表达式和事务通知关联起来 -->
            <aop:advisor 
                advice-ref="txAdvice"    		< 通知
                pointcut-ref="txPointcut"/>		< 切入点
        </aop:config>

```



### 使用步骤

```java

    配置
    	导包： AOP 相关坐标
    	xml: 目标类和切面类的对象创建权交给 spring , 配置织入关系
            
    java 代码
    	1. 目标接口、目标类（内部有切点）
		2. 切面类（内部有附加的方法）
	测试代码   
    	测试要从 xml 中找到 bean 实例
```



## 配置

#### 导包

```xml
引用依赖
    aspects --> 
		springsource(net.sf.cglib; org.aopalliance; aspectj.weaver)
    aop

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
介绍
	个人理解就是： 切面类的 xml 表达

<!--配置目标类-->
<bean id="target" class="com.itheima.aop.Target"></bean>
<!--配置切面类-->
<bean id="myAspect" class="com.itheima.aop.MyAspect"></bean>

<!--织入-->
<aop:config>
    <!--指定切面类：引用myAspect的Bean为切面对象-->
    <aop:aspect ref="myAspect">
        <!--配置Target的method方法执行时要进行myAspect的before方法前置增强-->
        <aop:before 
                    method="before" 
                    pointcut="execution(public void com.itheima.aop.Target.method())">
        </aop:before>  
    </aop:aspect>
</aop:config>
```



## java 代码

```java
正常的代码，不需要进行注解什么的， 跟平时的 java 项目代码一样
```

## 特殊配置

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



### 事务配置

```xml
//  ======
结构
    <!-- 配置事务管理器, 配置数据库 -->
    <bean>...
	<!-- 配置事务通知，需要的事务管理器， 需要被增强的方法 -->
	<tx:advice> 
	<!-- 配置事务切面 -->
	<aop:config>
		<aop:pointcut />
		<!-- 将切入点表达式和事务通知关联起来 -->
		<aop:advisor 
            advice-ref="txAdvice"    		< 通知
            pointcut-ref="txPointcut"/>		< 切入点
	</aop:config>

//  ======

	<!-- 配置自动扫描的包：主要是为了把Service扫描到IOC容器中 -->
	<context:component-scan base-package="com.atguigu.crowd.service"/>
	
	<!-- 配置事务管理器 -->
	<bean 
        id="txManager" 
        class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<!-- 装配数据源 -->
		<property name="dataSource" ref="dataSource"/>
		
	</bean>

	<!-- 配置事务通知 -->
	<tx:advice 
        id="txAdvice" 
        transaction-manager="txManager">
	
		<!-- 配置事务属性 -->
		<tx:attributes>
			
			<!-- 查询方法：配置只读属性，让数据库知道这是一个查询操作，能够进行一定优化 -->
			<tx:method name="get*" read-only="true"/>
			<tx:method name="find*" read-only="true"/>
			<tx:method name="query*" read-only="true"/>
			<tx:method name="count*" read-only="true"/>
			
			<!-- 增删改方法：配置事务传播行为、回滚异常 -->
			<!-- 
				propagation属性：
					REQUIRED：默认值，表示当前方法必须工作在事务中，
                如果当前线程上没有已经开启的事务，则自己开新事务。
                如果已经有了，那么就使用这个已有的事务。
			  顾虑：用别人的事务有可能“被”回滚。
					REQUIRES_NEW：建议使用的值，
                表示不管当前线程上有没有事务，都要自己开事务，在自己的事务中运行。
				好处：不会受到其他事务回滚的影响。
			 -->
			<!-- 
				rollback-for属性：配置事务方法针对什么样的异常回滚
					默认：运行时异常回滚
					建议：编译时异常和运行时异常都回滚
			 -->
			<tx:method 
                       name="save*" 
                       propagation="REQUIRES_NEW" 
                       rollback-for="java.lang.Exception"/>
			<tx:method 
                       name="update*" 
                       propagation="REQUIRES_NEW" 
                       rollback-for="java.lang.Exception"/>
			<tx:method 
                       name="remove*" 
                       propagation="REQUIRES_NEW" 
                       rollback-for="java.lang.Exception"/>
			<tx:method 
                       name="batch*" 
                       propagation="REQUIRES_NEW" 
                       rollback-for="java.lang.Exception"/>
			
		</tx:attributes>
	
	</tx:advice>
	
	<!-- 配置事务切面 -->
	<aop:config>
		<!-- 考虑到后面我们整合SpringSecurity，
        	避免把UserDetailsService加入事务控制，
        	让切入点表达式定位到ServiceImpl -->
        
		<aop:pointcut 
                      expression="execution(* *..*ServiceImpl.*(..))" 
                      id="txPointcut"/>
		
		<!-- 将切入点表达式和事务通知关联起来 -->
		<aop:advisor 
            advice-ref="txAdvice" 
            pointcut-ref="txPointcut"/>
	</aop:config>
	
```

