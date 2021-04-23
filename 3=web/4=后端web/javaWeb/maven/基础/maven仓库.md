## 介绍

* Maven 是 Apache 软件基金会组织维护的一款自动化**构建**工具，专注服务于 Java 平台的**项目构建**和依赖管理

* 依赖管理：

    * 就是对jar包的管理。通过导入maven坐标，就相当于将仓库中的jar包导入了当前项目中

* 项目构建：

    * 通过maven的一个命令就可以完成项目从清理、编译、测试、报告、打包，部署整个过程。

    ![image-20210320185445815](image-20210320185445815.png)![image-20210320185445815](image-20210320185445815.png)

## 使用

```java
下载
    http://maven.apache.org/download.cgi
环境变量配置
    // window
    新建系统变量 MAVEN_HOME，
    变量值：E:\Maven\bin目录上一层目录
    path: 添加变量值：;%MAVEN_HOME%\bin
    
检查安装成功
        mvn -v
```



## 构建

### 介绍

```java
1. 清理：删除以前的编译结果，为重新编译做好准备。
2. 编译：将 Java 源程序编译为字节码文件。
3. 测试：针对项目中的关键点进行测试，确保项目在迭代开发过程中关键点的正确性。
4. 报告：在每一次测试后以标准的格式记录和展示测试结果。
5. 打包：
    将一个包含诸多文件的工程封装为一个压缩文件用于安装或部署。
    Java 工程对应 jar 包，Web工程对应 war 包。
6. 安装：在 Maven 环境下特指将打包的结果——jar 包或 war 包安装到本地仓库中。
7.部署：将打包的结果部署到远程仓库或将 war 包部署到服务器上运行。
```



## 生命周期

### 介绍

```java

```



## maven 仓库

### 介绍

```java
仓库能帮助我们管理构件（主要是JAR），它就是放置所有JAR文件（WAR，ZIP，POM等等）的地方。
    
默认
    // 不管Linux还是 Windows，
    默认情况下，每个用户在自己的用户目录下都有一个路径名为 .m2/respository/ 的仓库目录。
    
分类
    本地仓库 
    远程仓库
   		 maven中央仓库
    		（地址：http://repo2.maven.org/maven2/）
   		 maven私服
             （公司局域网内的仓库，需要自己搭建）
    	 其他公共远程仓库
             （例如apache提供的远程仓库，地址：http://repo.maven.apache.org/maven2/）
搜索顺序
    // 参看 maven jar 包导入顺序
```

### 内容

```java
[1]Maven 的插件
[2]我们自己开发的项目的模块
[3]第三方框架或工具的 jar 包
※不管是什么样的 jar 包，在仓库中都是按照坐标生成目录结构，所以可以通过统一的方式查询或依赖。
```



### 本地仓库

```xml
默认
    认被创建在 %USER_HOME% 目录下。
	电脑上部署的仓库目录
修改默认位置
    在 %M2_HOME%\conf 目录中的 Maven 的 settings.xml 文件中定义另一个路径。
    运行 Maven 命令，Maven 将下载依赖的文件到你指定的路径中
 修改
//  %M2_HOME%\conf\settings.xml    
```

#### settings.xml

```xml
 <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 
   http://maven.apache.org/xsd/settings-1.0.0.xsd">
	 <!-- 注意是 / -->
      <localRepository>C:/MyLocalRepository</localRepository>
          
</settings>
```





### 远程仓库

#### 中央仓库

```java
介绍
    // Maven 社区提供的仓库，其中包含了大量常用的库, 不需配置
	maven 社区提供了一个 URL：http://search.maven.org/#browse。
	使用这个仓库，开发人员可以搜索所有可以获取的代码库。
设置
	// 参看实用仓库阿里云仓库设置
多个中央仓库
	多设置几个 minrror 就行了  
	// settings.xml 文件夹中，找到 mirrors 标签，设置子标签 mirror        
	<mirrors>
   		 <mirror>  </mirror>   
         <mirror>  </mirror> 
    </mirrors> 
```

#### 私服（私有服务器）

```xml
介绍
    开发人员自己定制仓库，包含了所需要的代码库或者其他工程中用到的 jar 文件。
	公司局域网内的maven远程仓库，每个员工的电脑上安装maven软件并且连接maven私服，
	程序员可以将自己开发的项目打成jar并发布到私服，其它项目组成员就可以从私服下载所依赖的jar。
	私服还充当一个代理服务器的角色，当私服上没有jar包时会从maven中央仓库自动下载。

仓库管理器
	nexus 是一个maven仓库管理器（其实就是一个软件），nexus可以充当maven私服，
	同时nexus还提供强大的仓库管理、构件搜索等功能。
	
向项目发布到 maven
	配置maven的settings.xml文件
     配置项目的pom.xml文件
     执行mvn deploy命令
从私服下载
	在maven的settings.xml文件中配置下载模板
	在maven的settings.xml文件中配置激活下载模板
```

![image-20210416113658546](image-20210416113658546.png)

##### 发布

```xml
<!--maven 的 setting.xml -->
<!-- 一定要在idea工具中引入的maven的settings.xml文件中配置 -->
<server>
    <id>releases</id>
    <username>admin</username>
    <password>admin123</password>
</server>
<server>
    <id>snapshots</id>
    <username>admin</username>
    <password>admin123</password>
</server>

  
 <!--pom.xml-->
<!--pom.xml文件的<id>的值和前面配置的settings.xml 文件的<id>值需要一致-->
<distributionManagement>
    <repository>
        <id>releases</id>
        <url>http://localhost:8081/nexus/content/repositories/releases/</url>
    </repository>
    <snapshotRepository>
        <id>snapshots</id>
        <url>http://localhost:8081/nexus/content/repositories/snapshots/</url>
    </snapshotRepository>
</distributionManagement>

<!-- 项目发布到maven私服 -->
执行mvn deploy命令
```

##### 下载

```xml
<!-- 在maven的settings.xml文件中配置下载模板 -->
<profile>
    <id>dev</id>
    <repositories>
        <repository>
            <id>nexus</id>
            <!--仓库地址，即nexus仓库组的地址-->
            <url>http://localhost:8081/nexus/content/groups/public/</url>
            <!--是否下载releases构件-->
            <releases>
                <enabled>true</enabled>            
            </releases>
            <!--是否下载snapshots构件-->
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>
    </repositories>
    <pluginRepositories>
        <!-- 插件仓库，maven的运行依赖插件，也需要从私服下载插件 -->
        <pluginRepository>
            <id>public</id>
            <name>Public Repositories</name>
            <url>http://localhost:8081/nexus/content/groups/public/</url>
        </pluginRepository>
    </pluginRepositories>
</profile>

<!-- maven的settings.xml文件中配置激活下载模板 -->
<activeProfiles>
    <activeProfile>dev</activeProfile>
</activeProfiles>

```



#### 其他远程

##### 阿里云仓库

```java
// 1:修改 maven 根目录下的 conf 文件夹中的 settings.xml 文件，在 mirrors 节点上，添加内容

// %M2_HOME%\conf\settings.xml , 放在 mirro
<mirrors>
    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>        
    </mirror>
</mirrors>

// 2: pom.xml文件里添加
<repositories>  
     <repository>  
        <id>alimaven</id>  
        <name>aliyun maven</name>  
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>  
        <releases>  
            <enabled>true</enabled>  
        </releases>  
        <snapshots>  
            <enabled>false</enabled>  
        </snapshots>  
    </repository>  
</repositories>
          
```





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
1. 下载Oracle的jar包（略）

2. mvn install命令进行安装
      mvn install:install-file -Dfile=ojdbc14-10.2.0.4.0.jar -DgroupId=com.oracle -DartifactId=ojdbc14 – 
      Dversion=10.2.0.4.0 -Dpackaging=jar

3. 查看本地maven仓库，确认安装是否成功

```



### 安装到私服

```xml
1. 下载Oracle的jar包（略）
2. 在maven的settings.xml配置文件中配置第三方仓库的server信息
	<server>
        <id>thirdparty</id>
        <username>admin</username>
        <password>admin123</password>
	</server>
3. 执行mvn deploy命令进行安装
	mvn deploy:deploy-file -Dfile=ojdbc14-10.2.0.4.0.jar -DgroupId=com.oracle -DartifactId=ojdbc14 
	–Dversion=10.2.0.4.0 -Dpackaging=jar 
	–Durl=http://localhost:8081/nexus/content/repositories/thirdparty/ -DrepositoryId=thirdparty


```

