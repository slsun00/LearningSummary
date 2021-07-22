## mybatis
```xml
依赖
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.2.8</version>
    </dependency>

    <build><!-- 构建过程中用到的插件 -->
		<plugins> <!-- 具体插件，逆向工程的操作是以构建过程中插件形式出现的 -->
			<plugin>
				<groupId>org.mybatis.generator</groupId>
				<artifactId>mybatis-generator-maven-plugin</artifactId>
				<version>1.3.0</version> <!-- 插件的依赖 -->
				<dependencies> <!-- 逆向工程的核心依赖 -->
					<dependency>
						<groupId>org.mybatis.generator</groupId>
						<artifactId>mybatis-generator-core</artifactId>
						<version>1.3.2</version>
					</dependency> <!-- 数据库连接池 -->
					<dependency>
						<groupId>com.mchange</groupId>
						<artifactId>c3p0</artifactId>
						<version>0.9.2</version>
					</dependency>
					<!-- MySQL 驱动 -->
					<dependency>
						<groupId>mysql</groupId>
						<artifactId>mysql-connector-java</artifactId>
						<version>5.1.8</version>
					</dependency>
				</dependencies>
			</plugin>
		</plugins>
	</build>


```

## 自动代码生成器

```xml

注意
    你把这复制进去的时候，不要把本来就存在的 xml 标签给删除了
执行成功
    会出现 BUILD SUCCESS  的字样



<!DOCTYPE generatorConfiguration PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN" "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration> <!-- mybatis-generator:generate -->
	<context id="atguiguTables" targetRuntime="MyBatis3">
		<commentGenerator> <!-- 是否去除自动生成的注释 true:是;false:否 -->
			<property name="suppressAllComments" value="true" />
		</commentGenerator> <!--数据库连接的信息：驱动类、连接地址、用户名、密码 -->
		<jdbcConnection driverClass="com.mysql.jdbc.Driver"
			connectionURL="jdbc:mysql://localhost:3306/project_crowd"
			userId="root" password="root">
		</jdbcConnection> <!-- 默认 false，把 JDBC DECIMAL 和 NUMERIC 类型解析为 Integer，为 true 时把 JDBC DECIMAL和 
			NUMERIC 类型解析为 java.math.BigDecimal -->
		<javaTypeResolver>
			<property name="forceBigDecimals" value="false" />
		</javaTypeResolver> <!-- targetProject:生成 Entity 类的路径 -->
		<javaModelGenerator targetProject=".\src\main\java"
			targetPackage="com.atguigu.crowd.entity"> <!-- enableSubPackages:是否让 schema 作为包的后缀 -->
			<property name="enableSubPackages" value="false" /> <!-- 从数据库返回的值被清理前后的空格 -->
			<property name="trimStrings" value="true" />
		</javaModelGenerator> <!-- targetProject:XxxMapper.xml 映射文件生成的路径 -->
		<sqlMapGenerator targetProject=".\src\main\java"
			targetPackage="com.atguigu.crowd.mapper"> <!-- enableSubPackages:是否让 schema 作为包的后缀 -->
			<property name="enableSubPackages" value="false" />
		</sqlMapGenerator> <!-- targetPackage：Mapper 接口生成的位置 -->
		<javaClientGenerator type="XMLMAPPER"
			targetProject=".\src\main\java"
			targetPackage="com.atguigu.crowd.mapper"> <!-- enableSubPackages:是否让 schema 作为包的后缀 -->
			<property name="enableSubPackages" value="false" />
		</javaClientGenerator> <!-- 数据库表名字和我们的 entity 类对应的映射指定 -->
		<table tableName="t_admin" domainObjectName="Admin" />
	</context>
</generatorConfiguration>
```
## 命令执行
```java

点击 pom.xml 右键  --》 run as  --》 (第二个)maven build 
在 goals 项目框中添加 mybatis-generator:generate
最后运行即可


记得刷新， 否则你可能看不到新生成的文件

```


## 文件调整
```java
parent
    weibui  // 在 tomcat 上运行
        WEB-INF/classes  类路径
            mybatis/mapper.xml  
       
    component
        java/mapper.java   // 记得引入 mybatis 
       
    entity
        java/entity.java
```


## 整合 sping 
```java

spring
   |
   |    spring-persist-mybatis  整合文件()
		spring-persist-tx    声明式事务
   |
        | mapper
mybatis | mybatis-config
        |
   |
   |
   |
mysql   ---  jdbc.properties


spring配置文件



mybatis-config.xml


```