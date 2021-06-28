## logback配置

### 介绍

```java
Logback 配置文件的语法非常灵活。正因为灵活，所以无法用 DTD 或 XML schem
   基本结构：
    	以<configuration>开头，
    	后面有零个或多个<appender>元素，
    	有零个或多个<logger>元素，
    	有最多一个<root>元素。
```



### 配置文件查找顺序

```java
classpath
    1. logback-test.xml
    2. logback.groovy
    3. logback.xml
    
4. logback会使用JDK的SPI机制查找 META-INF/services/ch.qos.logback.classic.spi.Configurator中的 logback 配置实现类
    这个实现类必须实现Configuration接口，使用它的实现来进行配置
5. logback 就会使用它自带的 BasicConfigurator 来配置，并将日志输出到console。    
```

## 标签

### configuration

```dtd
<?xml version="1.0" encoding="UTF-8"?>
<!--

configuration 子节点为 

            -->


     <!-- 定义日志的根目录 -->
     <property name="LOG_HOME" value="/app/log" />

<!ELEMENT configuration
属性(
scan:
	当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。
scanPeriod:
	设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。
	当scan为true时，此属性生效。默认的时间间隔为1分钟。
debug:
	当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。          
)
字标签(
    
contextName
    <!--用于区分不同应用程序的记录--> 
property
    name="LOG_HOME" value="logs" 
    	日志文件根目录
    	如果是tomcat，如下写法日志文件会在则为${TOMCAT_HOME}/bin/logs/目录下
     name="appName" value="netty"
    	日志文件名字
appender
logger
root
    ) >

```

### appender

```java
<!ELEMENT appender
属性（
    // 控制台
	name="stdout" class="ch.qos.logback.core.ConsoleAppender"
    // 文件滚动
	name="infoFile" class="ch.qos.logback.core.rolling.RollingFileAppender"
    	 <!-- ch.qos.logback.core.ConsoleAppender 表示控制台输出 -->
     // 将日志输出到logstack   
	name="logstash" class="net.logstash.logback.appender.LogstashTcpSocketAppender"        
）
字标签(
	encoding
    	字符编码
	file
        指定日志文件的名称
    encoder/layout
        负责定义日志的输出样式和字符编码，
        如果在控制台出现?????或乱码，则指定编码（一般是UTF-8）就好了
	filter
    	负责过滤日志，
		即使logger传来了`dubug`级别以上的日志，
    	如果`filter`中设定了级别为`info`，则该`appender`只会将`info`级别及以上的日志输出到目的地。
	rollingPolicy
    	负责制定日志文件的滚动规则，是根据日志文件大小还是根据日期进行滚动。
    logger
    	责定义我们实际代码中使用的`logger`。
		在`logback`中，`logger`有继承关系，而所有的`logger`的祖先是`root`。	
)>
                
```

#### encoder/layout

```dtd
<!ELEMENT layout
属性（
	class 
    	和 appender 相同，可以省略不写
）
字标签（
	pattern
    	<pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%thread] %-5level %logger{36} : %msg%n</pattern>
		日志输出格式：
			%d表示日期时间，
			%thread表示线程名，
			%-5level：级别从左显示5个字符宽度
 			%logger{50} 表示logger名字最长50个字符，否则按照句点分割。
			%msg：日志消息，
			%n是换行符
	charset
    	 <charset>UTF-8</charset>
		解决乱码问题	
）>
```

#### fillter

```dtd
<!ELEMENT fillter
属性（
  class="ch.qos.logback.classic.filter.ThresholdFilter"
    	ThresholdFilter:临界值过滤器，过滤掉 TRACE 和 DEBUG 级别的日志 
）
字标签（
level
    <level>INFO</level>
    ）>
```

#### rollingPolicy

```dtd
<!ELEMENT rollingPolicy
属性（    
    class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy"）
字标签（
	fileNamePattern
     maxHistory
    	保存最近 ? 天的日志
        ）    >
```

### logger

```dtd
<!ELEMENT logger
含义（
    负责定义我们实际代码中使用的logger
    在logback中，logger有继承关系，而所有的logger的祖先是root
    到底是哪个类打印了该日志
    ）    
属性（
   name 
    	name必须指定
    ）
字标签（
	）>
```



## XML 代码

### logback.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
scan：当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。
scanPeriod：设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒当scan为true时，此属性生效。默认的时间间隔为1分钟。
debug：当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。
-->
<configuration scan="false" scanPeriod="60 seconds" debug="false">
     <!-- 定义日志的根目录 -->
     <property name="LOG_HOME" value="/app/log" />
     <!-- 定义日志文件名称 -->
     <property name="appName" value="netty"></property>
    
    
 <!-- ch.qos.logback.core.ConsoleAppender 表示控制台输出 -->      
 <appender name="stdout" class="ch.qos.logback.core.ConsoleAppender">
     <Encoding>UTF-8</Encoding>
     <!--
     日志输出格式：%d表示日期时间，%thread表示线程名，%-5level：级别从左显示5个字符宽度
     %logger{50} 表示logger名字最长50个字符，否则按照句点分割。 %msg：日志消息，%n是换行符
     -->
     <layout class="ch.qos.logback.classic.PatternLayout">
     	<pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%thread] [%-5level] [%logger{50}] - [%msg%n]</pattern>
     </layout>
 </appender>

 <!-- 滚动记录文件，先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件 --> 
 <appender name="appLogAppender" class="ch.qos.logback.core.rolling.RollingFileAppender">
     <Encoding>UTF-8</Encoding>
     <!-- 指定日志文件的名称 --> 
     <file>${LOG_HOME}/${appName}.log</file>
     
     <!-- 
		ThresholdFilter:临界值过滤器，过滤掉 TRACE 和 DEBUG 级别的日志
 		一条日志想要顺利到达输出目的地，除了logger的级别要低于该级别
	-->
     <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
         <level>INFO</level>
     </filter>
     <!--
     当发生滚动时，决定 RollingFileAppender 的行为，涉及文件移动和重命名
     TimeBasedRollingPolicy： 最常用的滚动策略，它根据时间来制定滚动策略，既负责滚动也负责出发滚动。
     -->
     <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
         <!--
             滚动时产生的文件的
               存放位置及文件名称 %d{yyyy-MM-dd}：
                按天进行日志滚动  %i：
                当文件大小超过maxFileSize时，按照i进行文件滚动
         -->
         <fileNamePattern>${LOG_HOME}/${appName}-%d{yyyy-MM-dd}-%i.log</fileNamePattern>
         <!-- 
			保存最近 365 天的记录
             可选节点，控制保留的归档文件的最大数量，超出数量就删除旧文件。
            假设设置每天滚动，且maxHistory是365，则只保存最近365天的文件，删除之前的旧文件。
            注意，删除旧文件是，那些为了归档而创建的目录也会被删除。
         -->
         <MaxHistory>365</MaxHistory>
         <!-- 
         	当日志文件超过maxFileSize指定的大小是，根据上面提到的%i进行日志文件滚动 
			注意此处配置SizeBasedTriggeringPolicy是无法实现按文件大小进行滚动的，
			必须配置timeBasedFileNamingAndTriggeringPolicy
         -->
         <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
             <maxFileSize>100MB</maxFileSize>
         </timeBasedFileNamingAndTriggeringPolicy>
     </rollingPolicy>
     <!--
     		日志输出格式：
            %d表示日期时间，
            %thread表示线程名，
            %-5level：级别从左显示5个字符宽度 
            %logger{50} 表示logger名字最长50个字符，否则按照句点分割。
             %msg：日志消息，
            %n是换行符
     --> 
     <layout class="ch.qos.logback.classic.PatternLayout">
         <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [ %thread ] - [ %-5level ] [ %logger{50} : %line ] - %msg%n</pattern>
     </layout>
 </appender>

       <!--将日志输出到logstack-->
    <appender name="logstash" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
        <destination>47.93.173.81:7002</destination>
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <charset>UTF-8</charset>
        </encoder>
        <keepAliveDuration>5 minutes</keepAliveDuration>
    </appender>
   


    <!--
		设置全局日志级别： TRACE < DEBUG < INFO <  WARN < ERROR
		level 全局日志的级别，只打印当前级别及其之后的级别
		这里如果是info，spring、mybatis等框架则不会输出：
-->
    <!--
		root是所有logger的祖先，均继承root，
		如果某一个自定义的logger没有指定level，就会寻找父logger看有没有指定级别，直到找到root。
	-->
     <root level="info">
         <!--多有那些包在打印日志-->
         <appender-ref ref="stdout" />
         <appender-ref ref="appLogAppender" />
     </root>
    
    
     <!-- 
		作用
			根据特定需求制定局部日志级别
			为某个包单独配置logger
			
         logger
			主要用于存放日志对象，也可以定义日志类型、级别
         name：
			表示匹配的logger类型前缀，也就是包的前半部分
			例子： com.example.cro
         level：
            要记录的日志级别，包括 TRACE < DEBUG < INFO < WARN < ERROR
         additivity：4
            作用在于children-logger是否使用 rootLogger配置的appender进行输出，
            false：表示只用当前logger的appender-ref，
            true：表示当前logger的appender-ref和rootLogger的appender-ref都有效
     -->
     <!--
 		设置那个类打印信息
		hibernate logger
 	-->
     <logger name="org.hibernate" level="error" />
     <!-- Spring framework logger -->
     <logger name="org.springframework" level="error" additivity="false"></logger>

     <logger name="com.creditease" level="info" additivity="true">
     <appender-ref ref="appLogAppender" />
     </logger>
</configuration> 

```

### 为某个包单独配置logger

```java

    比如定时任务，写代码的包名为：com.seentao.task
    步骤如下：
    1、定义一个appender，取名为task（随意，只要下面logger引用就行了）
    appender的配置按照需要即可


    2、定义一个logger:
    <logger name="com.seentao.task" level="DEBUG" additivity="false">
      <appender-ref ref="task" />
    </logger>
    注意：additivity必须设置为false，这样只会交给task这个appender，否则其他appender也会打印com.seentao.task里的log信息。

    3、这样，在com.seentao.task的logger就会是上面定义的logger了。
    private static Logger logger = LoggerFactory.getLogger(Class1.class);
    -->
```



## java 使用

```java
介绍
    如果我们有个类叫UserService，所在的包为com.maxwell.service，在UserService中要打印日志
java 代码
    // 可以使用设置为静态的量
    // 反射
    private  Logger logger = LoggerFactory.getLogger(UserService.class);
	// 类路径
	private  Logger logger = LoggerFactory.getLogger("com.maxwell.service.UserService");

其他
    // 现某个包或者某个类单独输出到某日志文件的需求
    1. 定义一个appender，指明日志文件的输出目的地
    2. 定义一个logger，name设为那个包或类的全路径名
    如果只想将这个类或包的日志输出到刚才定义的appender中，就将additivity设置为false。
    
    // 日志级别
    root logger 默认级别是 DEBUG。
    
```





## 参考

```java
https://www.jianshu.com/p/696444e1a352
https://www.jb51.net/article/71692.htm
```

