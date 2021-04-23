## 项目创建

* 创建项目： spring  initializr

    * group id   : com.guigu
    * artifact   :  myhibats_plush
    * jdk:    8
    * spring boot 版本选取
        * 注意： springboot 的版本差异比较大的，1 和 2 就是不兼容的，使用那个版本就是用哪个版本的文档

* 项目配置

    * 导包 pom.xml

    ```java
    </dependencies>
    </dependencies>    
    ```

* 项目流程

    ```java
    导包
        pom.xml
        属性配置 properties
        
    ```

    

## mp相关配置



### mysql5（spring boot 2.0）

```java
#mysql数据库连接
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mybatis_plus
spring.datasource.username=root
spring.datasource.password=123456
```

### mysql8以上（spring boot 2.1）

```java
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mybatis_plus?serverTimezone=GMT%2B8
spring.datasource.username=root
spring.datasource.password=123456
```

### 区别

```java
1. driver和url的变化
2. url 使用了 ?serverTimezone=GMT%2B8 后缀，
    因为Spring Boot 2.1 集成了 8.0版本的jdbc驱动，这个版本的 jdbc 驱动需要添加这个后缀
    java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more 
3.  driver-class-name 使用了  com.mysql.cj.jdbc.Driver 
	 jdbc 8 中 建议使用这个驱动，之前的 com.mysql.jdbc.Driver 已经被废弃，
     否则运行测试用例的时候会有 WARN 信息    
```

### 日志

```java

# 全局设置主键生成策略
# 要想影响所有实体的配置，可以设置全局主键配置    
mybatis-plus.global-config.db-config.id-type=auto
```
