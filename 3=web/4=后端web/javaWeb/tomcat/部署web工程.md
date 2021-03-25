## 	项目部署

### 方式一

```js
在 webapps 目录下创建一个目录 （即工程）： 名称是你的项目名
将项目中文件放进去（项目文件中的文件放进去）

访问
	http://localhost:8080/工程名/目录名/文件名
```

### 方式二

```xml
在 conf 目录中创建一个  Catalina/localhost 新建一个配置文件
// 一个xml 文件表示一个项目的配置
Bookstore.xml

<!--
	记得是 utf8 格式
	Context   表示一个工程的上下文
	path	  表示工程的访问路径 /book
	docBase	  表示你的工程目录在哪里 
-->

<Context path="/book" docBase='E:\book' />
访问
	http://localhost:8080/工程名/目录名/文件名
```



### 两种区别

```java
手拖 html 页面到浏览器 vs 浏览器中输入 http://ip:端口号/工程名/  
手拖 html 页面到浏览器
    介绍
    	把 html 直接鼠标拖动到浏览器
    本质
    	使用 file 协议
浏览器中输入 http://ip:端口号/工程名/ 
	本质
        使用 http 协议
Tom 默认访问的工程和默认访问的资源
        http://ip:port  没有工程名的时候，默认访问的是 Root 工程
	    http://ip:port/工程名/ 没有资源名， 默认访问的是 index 页面
```



## 打包

```java
war
	// 一把发布使用的模式 contextPath,localPath: 在 tomcat/webapp/...
    先打包成war包，再把该war包部署到服务器上
    部署文件路径是：tomcat的webapp 目录下
    

warexplded  
    // 支持热部署, 一般开发使用方式， contextPath,localPath: 在 项目文件/target 目录
    war exploded模式是直接把文件夹、jsp页面 、classes等等移到Tomcat 部署文件夹里面，进行加载部署。
    如果用idea, 它会在${user.home}/.IntelliJIdea/system/tomcat 目录下生成项目的文件夹，
    里面包含了tomcat的配置，日志等信息。
区别
   // 具体的加载位置是由 tomcat catalina.base决定的，这个值是Idea在启动的时候设置的
    这两种方式得部署方式是不一样的，因此在获取项目的相对路径的时候得到的结果是不一样的。
```



