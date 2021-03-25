## maven

## 坐标

```xml
<properties>
	<spring.version>5.0.5.RELEASE</spring.version>
</properties>
<!--导入spring的context坐标，context依赖core、beans、expression-->
<dependencies> 
    <dependency>  
        <groupId>org.springframework</groupId> 
        <artifactId>spring-context</artifactId> 
        <version>${spring.version}</version>
    </dependency>
</dependencies>


------------------------
<dependencies>
	<dependency>
	      <groupId>org.springframework</groupId>
	      <artifactId>spring-context</artifactId>
	      <version>4.3.7.RELEASE</version>
	 </dependency>
 </dependencies>



```

## 开发流程

```java
导入坐标
创建Bean
创建applicationContext.xml
在配置文件中进行配置
创建ApplicationContext对象getBean

```

