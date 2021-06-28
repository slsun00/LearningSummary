

## 思路分析

```java
创建maven web项目
    模板创建以后，注意标记不同的颜色
配置pom.xml文件
    记得锁定版本
实现spring+mybatis整合
    创建POJO类
    持久层DAO接口编写
    	不需要实现，
    		直接使用动态代理即可, Mapper映射文件编写
    
    业务层Service编写
    	需要实现接口， 
    		注入 dao 层的对象， 配置文件，执行 sql 语句
	    spring配置文件applicationContext-dao.xml编写
    		数据源，整合 myBatis 的 sqlSessionFactory, 扫描产生代理对象
    	spring配置文件applicationContext-service.xml编写
    		扫描器， 事务管理器， 事务注解驱动
    		
加入springmvc相关配置
    表现层Controller编写
    	springmvc.xml文件编写
    		扫描器 视图解析器 
     	jsp页面编写
    		视图
    配置web.xml文件
		spring配置文件 框架启动监听器   springMVC 前端控制器(sevlet)  
```

## web项目

```java
文件层次
project 
    src
    	main
    		java/com/shangguigu/ssm
    		// 内部保持和 java 内部的结构一致 
    		resources/com/shangguigu/ssm   
    		webapp
    	// 目录内部结构和 main 的一致
    	test	
    		java/com/shangguigu/ssm/test
    		resources
    target
    	// 自动生成 ？？？
    	classes
    	generated-sources
    	
// ========================================================

    


```

### main/.../java

```java

```

#### ssm 

```java
// main/.../java/ssm    	
    dao
    	接口文件.java
    	impl文件夹/实现类
    controller
    	AccountController.java
    pojo
    service
    domain
    mapper
    	 AccountMapper.xml     
    	// MyBatis映射文件 : mapper
```

### main/.../resources

```java
jdbc.properties		 
    // 数据库连接信息文件
    

applicationContext-dao.xml 
applicationContext-service.xml     
    // Spring配置文件：beans
    // 组件扫描 properties 加载 数据源 sessionFactory s事务 切面

    
sqlMapConfig-spring.xml  
    // myBatis 映射文件 mapper
sqlMapConfig.xml  	  
    // MyBatis核心文件 : configuration
   
spring-mvc.xml     	 
    // SprngMVC配置文件：beans
    // controller 类， 视图解析器， 扫描
    

log4j.properties	  
    // 日志文件  
```



#### ssm

```java
main/resources/ssm      
    controller
    	AccountController.xml  
    		// 业务类配置 ：beans
    mapper
    	AccountMapper.xml     
    	// MyBatis映射文件 : mapper
```

### main/webapp

```java
lib
classes
web-inf
	pages
    	jsp
	Web.xml	
    	// web文件 ：web-app   servlet
    
    	// spring 监听器 、 springmvc的前端控制器、 乱码过滤器    
```



## 普通项目