```java
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                      http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

    
<!ELEMENT project
    是 pom.xml 中描述符的根。
子元素(
    
  modelVersion
    	指定 pom.xml 符合哪个 maven 版本的描述符。
		maven 2 和 3 只能为 4.0.0。
    
    
 <!-- The Basics -->  
  groupId
    	团体、组织的标识符, 
    	公司的逆命名 com.baidu
  artifactId
    	包名，	不要在 artifactId 中包含点号(.)。
  version
	    一个项目的特定版本
  packaging
    	打包的方式， 默认是 jar
    	常见的输出类型为：pom, jar, maven-plugin, ejb, war, ear, rar, par
     
  parent
  modules
    
// 依赖信息    
  dependencies
  dependencyManagement
  properties
    
    <!-- Build Settings -->
  build
  reporting

  <!-- More Project Information -->
  name
  description
  licenses
    
  organization
  inceptionYear
  url
  developers    
  contributors




    
 <!-- Environment Settings -->
  prerequisites
  repositories
  pluginRepositories
  profiles    
    
  distributionManagement   
  issueManagement    
  ciManagement
  scm
  mailingLists

)>    
    
```

