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



