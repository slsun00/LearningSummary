

## 介绍

```java
按照 
    依赖
    	：A->B，B->C，C->D这种项目间的依存关系
    	
    依赖的最终表现
    	：项目A启动时，其依赖的jar包必须都对应放入其classpath路径内。
    	那么 Maven 会自动将 A 依赖的 B 引入当前工程，引入 B 就要自动引入其依赖的 C
    project 标签的顺序来
```

## 依赖范围

```java

			  主程序       测试      打包部署
complie    		√           √        √
test					   √
provided         √           √             
runtime
system    
```



| **依赖范围** | **对编译classpath有效** | **对测试classpath有效** | **对运行时classpath有效** | **例子**                    |
| ------------ | ----------------------- | ----------------------- | ------------------------- | --------------------------- |
| compile      | Y                       | Y                       | Y                         | spring-core                 |
| test         | -                       | Y                       | -                         | Junit                       |
| provided     | Y                       | Y                       | -                         | servlet-api                 |
| runtime      | -                       | Y                       | Y                         | JDBC驱动                    |
| system       | Y                       | Y                       | -                         | 本地的，maven仓库之外的类库 |



## 依赖传递

```java
介绍
    在maven中，依赖是可以传递的
例子
    三个项目，分别是项目A，项目B以及项目C。假设C依赖B，B依赖A， 则 C 以来 A
```

## 依赖冲突

```java
介绍
    pring-webmvc 依赖 spirng-beans-4.2.4，spring-aop 依赖 spring-beans-5.0.2，
    但是发现 spirng-beans-4.2.4 加入到了工程中， 加入的并不是 spring-beans-5.0.2，这就造成了依赖冲突
```

## 冲突解决

```java
方法
    1. 使用maven提供的依赖调解原则 
        路径近者优先原则，路径相同则第一声明者优先原则
    2. 排除依赖
    3. 锁定版本 

// 第一声明者优先原则
    在 pom 文件中定义依赖，以先声明的依赖为准。
    其实就是根据坐标导入的顺序来确定最终使用哪个传递过来的依赖。
// 路径近者优先原则
    在 pom 文件定义依赖，以路径近者为准, 
	即手动引入你想引入的版本，
// 排除依赖(有时候使用)
	可以使用exclusions标签将传递过来的依赖排除出去。
	<exclusions>
    	<exclusion>
        	具体需要排除的标签
        </exclusion>
    </exclusions>
// 版本锁定(重点使用)        
	直接锁定版本的方法确定依赖jar包的版本，
    版本锁定后则不考虑依赖的声明顺序或依赖的路径，以锁定的版本为准添加到工程中    
        
	// 步骤
	第一步：在dependencyManagement标签中锁定依赖的版本
	第二步：在dependencies标签中声明需要导入的maven坐标
     使用： 在 dependencyManagerment 之外的 dependencies 标签中就不需要使用 version 了
        
    <dependencyManagement>
        <dependencies>
            <groupId></groupId>
            <artifacted></artifacted>
        	<version></version>	// 版本号锁定
        </dependencies>
    </dependencyManagement>
        
	// 注意
	pom文件中使用dependencyManagement标签进行依赖jar的版本锁定，并不会真正将jar包导入到项目中，
     只是对这些jar的版本进行锁定。项目中使用哪些jar包，还需要在dependencies标签中进行声明。
        
```

