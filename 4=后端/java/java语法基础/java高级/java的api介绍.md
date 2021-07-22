## 概述

* API
* application programming interface  应用程序编程接口
* Java API  是 jdk 提供给我们使用类的说明文档
* 这些类底层被封装起来，不需要关心如何实现，只需要知道怎么用就行

## 官方文档下载连接

```java
https://www.oracle.com/technetwork/java/javase/documentation/jdk8-doc-downloads-2133158.html
```



## 包介绍

```java
java、javax、org、sun包都是jdk提供的类包，且都是在rt.jar中
rt.jar
    是JAVA基础类库（java核心框架中很重要的包），
    包含lang在内的大部分功能，而且rt.jar默认就在根classloader的加载路径里面    
    // 所以放在classpath是多此一举
    
java.*
    // Java的核心包，所有程序都会使用这些包中的类；
    java SE的标准库，是java标准的一部分，是对外承诺的java开发接口，通常要保持向后兼容，一般不会轻易修改。
    包括其他厂家的在内，所有jdk的实现，在java.*上都是一样的。    
    
 javax.*
    // 扩展包，x 是 extension 的意思，也就是扩展
    // 由于 javax.* 使用的越来越多，很多程序都依赖于 javax.，
    // 所以 javax. 也是核心的一部分了，也随JDK一起发布。
    也是java标准的一部分，但是没有包含在标准库中，一般属于标准库的扩展。
    通常属于某个特定领域，不是一般性的api。    
    所以以扩展的方式提供api，以避免jdk的标准库过大
    当然某些早期的javax，后来被并入到标准库中，所以也应该属于新版本JDK的标准库。
    	比如jmx，java 5以前是以扩展方式提供，但是jdk5以后就做为标准库的一部分了，
    	所有javax.management也是jdk5的标准库的一部分。
    
com.sun.*
    // 还有以com. 开头的包，是盈利性公司开发出的，使用时会有版权问题
    是sun的hotspot虚拟机中java.* 和javax.*的实现类。因为包含在rt中，所以我们也可以调用。
    但是因为不是sun对外公开承诺的接口，所以根据实现的需要随时增减，
    因此在不同版本的hotspot中可能是不同的，而且在其他的jdk实现中是没有的，调用这些类，可能不会向后兼容，所以一般不推荐使用。    
    
org.*
    // 
    是由企业或者组织提供的java类库，大部分不是sun公司提供的，
    同com.sun.*，不具备向后兼容性，会根据需要随时增减。
    其中比较常用的是w3c提供的对XML、网页、服务器的类和接口。    
```



## java api

```java
1. java.lang———
    这个包包含了一些形成语言核心的类，提供了类似Character、Integer和Double这样的封装类。
    它还提供了系统标准类，如String和StringBuffer。Java编辑器总是自动装载这个包。
    因而一般不必显示导入java.lang中的任何类。这个包中的许多类在本书的许多其他章节还将叙述。
    
    
2. java.applet———   // Java 小程序
    这个包提供了创建Java applet的途径，Java applet运行在Web浏览器下，通常通过Internet下载。 
    
3. java.awt———    // 图形界面
    是由许多组成Java的抽象视窗工具（awt）的类所组成的包，
    它提供了基于类的图形用户界面，可以为Java applet和应用程序编程提供视窗、按钮、对话框及其他控件。
    
4. java.net——
    —这个包提供了网络、套接字处理器和Internet实用工具类。 
    
5. java.io———
    这个包中的类提供了输入输出服务，用于读出和写入文件数据，访问键盘输入和打印输出。 
6. java.util———
    这个包包含为任务设置的实用程序类和集合框架类，
    每一个Java应用程序和Java applet可能至少会用到这个包中的一个类。
    另外它还提供了Collection接口和它的实现容器类，如List和Set。
    
7. java.rmi———
    远程方法启用包，在这个包中的类提供了通过远程接口控制的分布式代码的支持。
    通过该包中的类，可以创建Java应用程序，使它的不同部分在不同的系统中一起运行。
    
8. java.sql———
    这个包提供了结构化查询语言数据库字段类型和方法的实现。
    根据系统的不同，这个包的类可能会通过一个特定的数据库系统实现，
    	或者缺省时通过ODBC（开放数据库连接）标准的直接映射实现。
```

## 常用 api

```java
java.lang
该包提供了Java编程的基础类，例如 Object、Math、String、StringBuffer、System、Thread等，不使用该包就很难编写Java代码了。

java.util
该包提供了包含集合框架、遗留的集合类、事件模型、日期和时间实施、国际化和各种实用工具类（字符串标记生成器、随机数生成器和位数组）。

java.beans
Java bean所需的类和接口 //JavaBean组件，jsp访问对象的数据用到。

java.io
该包通过文件系统、数据流和序列化提供系统的输入与输出。

java.net
该包提供实现网络应用与开发的类。

java.sql
该包提供了使用Java语言访问并处理存储在数据源（通常是一个关系型数据库）中的数据API。

java.awt
这两个包提供了GUI设计与开发的类。java.awt包提供了创建界面和绘制图形图像的所有类，而javax.swing包提供了一组“轻量级”的组件，尽量让这些组件在所有平台上的工作方式相同。

javax.swing
扩充和增强基本图形用户界面功能的类和接口 //awt的扩展，基本也被淘汰。

java.text
提供了与自然语言无关的方式来处理文本、日期、数字和消息的类和接口。

```

## 其他

```java
// 大部分情况下只需要知道“有什么”而不需要知道“怎么用”

// 常用的类库都以接口或者抽象类呈现
集合：List Set Map。所有实现都归于这三个接口。
IO：InputStream/OutputStream
NIO：Channel, Buffer
线程：Runnable/Executor/Future/ExecutorService
数据库：Connection/Statement/PreparedStatement/ResultSet/ResultSetMetaDataAWT/Swing/
反射库倒大部分是类而非接口/抽象

// 包内功能比较统一,只要知道“有这个包”就能推断“包有哪些功能” 
    utils => 集合，日期等
    reflect => 反射
    io => I/O
    nio => NIO相关
    concurrent => 同步相关
    sql => 数据库相关
    utils.function => 函数式相关......   

// 命名比较统一
    List => Array/Linked/CopyOnWriteSet => HashMap => Hash/LinkedHash/ConcurrentCollections. => Empty => Set/List/Map...    
    
// 有一样东西，另一个地方也会有这样东西
有String，那么就有StringReader。有byte，那么就有ByteArrayOutputStream。
    
// jdk中对于类似的边界条件都是相同的策略
	“分割一串东西”一定是包括头不包括尾    
    
```

