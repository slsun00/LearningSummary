

## 第三方 jar 包安装

### 导入顺序

```java
介绍
	工程的pom.xml文件中配置某个jar包的坐标后
// 仓库搜索顺序
	本地仓库 -- 私服 -- 中央仓库 -- 远程仓库
// 注意
    常用的Oracle数据库驱动的jar包在中央仓库就不存在。
    此时需要到Oracle的官网下载驱动jar包，
    然后将此jar包通过maven命令安装到我们本地的maven仓库或者maven私服中
    
```





### 安装到本地仓库

```java
1. 下载Oracle的jar包（略）2. mvn install命令进行安装      mvn install:install-file -Dfile=ojdbc14-10.2.0.4.0.jar -DgroupId=com.oracle -DartifactId=ojdbc14 –       Dversion=10.2.0.4.0 -Dpackaging=jar3. 查看本地maven仓库，确认安装是否成功
```



### 安装到私服

```xml
1. 下载Oracle的jar包（略）2. 在maven的settings.xml配置文件中配置第三方仓库的server信息	<server>        <id>thirdparty</id>        <username>admin</username>        <password>admin123</password>	</server>3. 执行mvn deploy命令进行安装	mvn deploy:deploy-file -Dfile=ojdbc14-10.2.0.4.0.jar -DgroupId=com.oracle -DartifactId=ojdbc14 	–Dversion=10.2.0.4.0 -Dpackaging=jar 	–Durl=http://localhost:8081/nexus/content/repositories/thirdparty/ -DrepositoryId=thirdparty
```

