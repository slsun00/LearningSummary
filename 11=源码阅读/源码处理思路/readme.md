## 整理方式

```java
第一重整理： api 整理
    
    主要是为了看看单词问题， 就是单词会不会，认不认识
    进行源码阅读注释
    
第二次整理 
```



##  == 方法阅读 ==

## 方式一

### 源码

```java
    SqlSession openSession()
    SqlSession openSession(boolean autoCommit)
    SqlSession openSession(Connection connection)
    SqlSession openSession(TransactionIsolationLevel level)
    SqlSession openSession(ExecutorType execType,TransactionIsolationLevel level)
    SqlSession openSession(ExecutorType execType)
    SqlSession openSession(ExecutorType execType, boolean autoCommit)
    SqlSession openSession(ExecutorType execType, Connection connection)
    Configuration getConfiguration();
```

### 整理

```java
方法集合
	SqlSession openSession()     
    Configuration getConfiguration()

SqlSession openSession() 
    参数组合{
	    {}
        {boolean autoCommit}  
        {Connection connection}
        {TransactionIsolationLevel level}
        {ExecutorType execType,TransactionIsolationLevel level}
        {ExecutorType execType}
        {ExecutorType execType, boolean autoCommit}
        {ExecutorType execType, Connection connection}
    }

	这 个方法会返回一个 Configuration 实例,在运行时你可以使用它来自检 MyBatis 的配置。
    Configuration getConfiguration()
        

```

