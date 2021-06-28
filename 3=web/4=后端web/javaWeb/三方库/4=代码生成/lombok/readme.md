## lombok应用

```java
使用
    使用lombok的注解实现pojo类的简化
lombok 插件
    lombok是一个插件工具类包；
    提供了一些注解@Data、@Getter等这些注解去简化实体类中的构造方法、get/set等方法的编写。
插件优势
    
使用步骤
    1. 在IDEA中安装lombok插件；
    2. 添加lombok对应的依赖到项目pom.xml文件；
    3. 改造实体类使用lombok注解
    
    
```

### 依赖

```xml
<dependency> 
    <groupId>org.projectlombok</groupId> 
    <artifactId>lombok</artifactId> 
</dependency>
```

### 注解 api

```java
// bean 上使用
@Data ：自动提供getter和setter、hashCode、equals、toString等方法
@Getter：自动提供getter方法
@Setter：自动提供setter方法
@Slf4j：自动在bean中提供log变量，其实用的是slf4j的日志功能
```

### java 使用

```java
import lombok. Data;
import java . util. Date; 
@Data 
public class User{
    //id
    private Long id;
    //用户名
    private String userName;
    //密码
    private String password;
    //姓名
    private String name; 
}
```

