## 官网

```xml
https://maven.apache.org/pom.html
```



## maven 介绍

```java
POM 
	是 Project Object Model 的缩写，即项目对象模型
	pom.xml 就是 maven 的配置文件，用以描述项目的各种信息。
maven 坐标
	根据 groupId、artifactId、version 组合成 groupId:artifactId:version 来唯一识别一个 jar 包。
maven 版本规范
	maven 有自己的版本规范，
	一般是如下定义 major version、minor version、incremental version-qualifier 
    // 1.2.3-beta-01
maven 版本判断
	 major、minor、incremental 部分用数字比较，qualifier 部分用字符串比较，
	 // alpha-2 和 alpha-15 的比较关系，最好用 alpha-02 的格式。
maven 版本管理
	使用几个特殊的字符串 SNAPSHOT、LATEST、RELEASE
	SNAPSHOT 
        这个版本一般用于开发过程中，表示不稳定的版本。
    LATEST 
        指某个特定构件的最新发布，
        这个发布可能是一个发布版，也可能是一个 snapshot 版，具体看哪个时间最后。
    RELEASE
        指最后一个发布版
```

## project 介绍

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                      http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

    
<!ELEMENT project
    是 pom.xml 中描述符的根。
子元素(
    
  modelVersion
   <!-- The Basics -->  
  groupId
  artifactId
  version
  packaging
  dependencies
    
  parent
  dependencyManagement
  modules
  properties
    
    <!-- Build Settings -->
  build
  reporting

  <!-- More Project Information -->
  name
  description
  url
  inceptionYear
  licenses
  organization
  developers
  contributors
    
 <!-- Environment Settings -->
  issueManagement
  ciManagement
  mailingLists
  scm
  prerequisites
  repositories
  pluginRepositories
  distributionManagement
  profiles
)>    
    
```



## 基础

### modelVersion

```xml
介绍
	指定 pom.xml 符合哪个 maven 版本的描述符。
	maven 2 和 3 只能为 4.0.0。


```

### parent

```xml
介绍
	maven 支持继承功能。
	子 POM 可以使用 parent 指定父 POM ，然后继承其配置
语法
<!ELEMENT parent
子元素(
	groupId artifactId	version
		<!--同 project 的-->
	relativePath
		<!--在搜索本地和远程存储库之前，它不是必需的，
		但可以用作 maven 的指示符，以首先搜索给定该项目父级的路径
		-->
)>
```



### dependencyManagement

```xml
介绍
	表示依赖 jar 包的声明， 可以被子 POM 继承
	即你在项目中的 dependencyManagement 下声明了依赖，maven 不会加载该依赖，
使用场景
	当有父子项目的时候，父项目中可以利用 dependencyManagement 声明子项目中需要用到的依赖 jar 包，之后，
	当某个或者某几个子项目需要加载该依赖的时候，就可以在子项目中 dependencies 节点只配置 groupId 和 artifactId 就可以完成依赖的引用。
```



###   modules

```xml
介绍
	子模块列表
语法例子
  <modules>
    <module>my-project</module>
    <module>another-project</module>
    <module>third-project/pom-example.xml</module>
  </modules>
```



###   properties

```xml
介绍
	属性列表。
	定义的属性可以在 pom.xml 文件中任意处使用 ！！！！！！
	使用方式为 ${propertie} 
语法例子
<project>
      ...
      <properties>
        <maven.compiler.source>1.7<maven.compiler.source>
        <maven.compiler.target>1.7<maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
      </properties>
      ...
</project>
```





## maven 坐标

### groupId

```xml
介绍
	团体、组织的标识符。
	团体标识的约定是，它以创建这个项目的组织名称的逆向域名(reverse domain name)开头。
	一般对应着 java 的包结构。
```



###   artifactId

```xml
介绍
	单独项目的唯一标识符。
	比如我们的 tomcat、commons 等。
	不要在 artifactId 中包含点号(.)。
```



###   version

```java
一个项目的特定版本
```



###   packaging

```xml
介绍	
	项目的类型，描述了项目打包后的输出，默认是 jar
	常见的输出类型为：pom, jar, maven-plugin, ejb, war, ear, rar, par。
语法例子
	<packaging>jar</packaging>
```



## 依赖配置

###   dependencies

```xml
<!ELEMENT dependencies 
子元素(
	dependency*
)> 

<!ELEMENT dependency
子元素(
	groupId artifactId	version
		<!--同 project 的-->
	type
		<!--对应 packaging 的类型，如果不使用 type 标签，maven 默认为 jar。-->
	scope
		<!--此元素指的是任务的类路径（编译和运行时，测试等）以及如何限制依赖关系的传递性。
		有 5 种可用的限定范围：
		compile - 
			如果没有指定 scope 标签，maven 默认为这个范围。
			编译依赖关系在所有 classpath 中都可用。此外，这些依赖关系被传播到依赖项目。
		provided 
			与 compile 类似，但是表示您希望 jdk 或容器在运行时提供它。
			它只适用于编译和测试 classpath，不可传递。
		runtime -
 			此范围表示编译不需要依赖关系，而是用于执行。
			它是在运行时和测试 classpath，但不是编译 classpath。
		test - 
			此范围表示正常使用应用程序不需要依赖关系，仅适用于测试编译和执行阶段。
			它不是传递的。
		system - 
			此范围与 provided 类似，
			除了您必须提供明确包含它的 jar。该 artifact 始终可用，并且不是在仓库中查找。
		-->
	systemPath
		<!--
		仅当依赖范围是系统时才使用。否则，如果设置此元素，构建将失败。
		该路径必须是绝对路径，建议使用 propertie 来指定特定的路径，如\$ {java.home} / lib
		假定先前安装了系统范围依赖关系，maven 将不会检查项目的仓库，而是检查库文件是否存在。
	     如果没有，maven 将会失败，并建议您手动下载安装
		-->
	optional
		<!--让其他项目知道，当您使用此项目时，您不需要这种依赖性才能正常工作。
		-->
	exclusions*
	    <!--包含一个或多个排除元素，每个排除元素都包含一个表示要排除的依赖关系的 groupId 和 artifactId。
			与可选项不同，可能或可能不会安装和使用，排除主动从依赖关系树中删除自己。
		-->
)>
<!ELEMENT  exclusions 
子元素(
	groupId artifactId	version
		<!--同 project 的-->
)>

<dependencies>
    <dependency>
     <groupId>org.apache.maven</groupId>
      <artifactId>maven-embedder</artifactId>
      <version>2.0</version>
      <type>jar</type>
      <scope>test</scope>
      <optional>true</optional>
      <exclusions>
        <exclusion>
          <groupId>org.apache.maven</groupId>
          <artifactId>maven-core</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
```



###   