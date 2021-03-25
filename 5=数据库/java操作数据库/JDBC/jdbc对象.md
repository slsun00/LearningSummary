## DriverManager

```java
介绍
    注册驱动，
    获取数据库连接
方法
    // 注册驱动
    registerDriver(Driver driver)  注册与给定的驱动程序 DriverManager 。
    // 获取数据库有连接
    getConnection(String url, String user, String password) 尝试建立与给定数据库URL的连接。 
    URL :jdbc:mysql://ip地址：端口号/数据库名称 ， 如果默认端口号为 3306 ，则默认的 url 简写成 jdbc:mysql:///数据库名称
```



## Connection

```java
介绍
    数据库连接对象， 
    获取执行 sql 对象
方法
    // 获取执行 sql 的对象
    createStatement() 创建一个 Statement对象，用于将SQL语句发送到数据库
    prepareStatement(String sql) 创建一个 PreparedStatement对象，用于将参数化的SQL语句发送到数据库
    
    // 管理事务
    // 开启
    setAutoCommit(boolean autoCommit) 将此连接的自动提交模式设置为给定状态。 默认为false开启事务
    // 提交
    commit() 
		使自上次提交/回滚以来所做的所有更改都将永久性，并释放此 Connection对象当前持有的任何数据库锁
    // 回滚
    rollback() 
   		 撤消在当前事务中所做的所有更改，并释放此 Connection对象当前持有的任何数据库锁。
```

## Statement（不使用）

```java
介绍
    执行 sql 的对象
    静态执行
方法
    execute(String sql) 执行给定的SQL语句，这可能会返回多个结果。 
    executeUpdate(String sql) 
		执行给定的SQL语句，这可能是 INSERT ， UPDATE ，或 DELETE语句，或者不返回任何内容，
    	如SQL DML 语句的SQL语句。（很少用  DDL ）
    	// 通过影响的行数，来判断是否执行成功
    executeQuery(String sql) 
		执行给定的SQL语句，该语句返回单个 ResultSet对象。 DQL（select）
```

## PreparedStatement

```java
sql 注入
    在拼接sql时，有一些 sql 的特殊关键字参与字符串连接， 会造成安全性问题
预编译的 sql
    使用 ？ 作为占位符
使用
    String sql = "select * from user username = ? password = ? "
    // 这几个问号的下标是从 1 开始的
    String sql = "select * from user(name, password)values(?,?)"；
    PreparedStatement pstmt = conn.prepareStatement(sql);
	// setString setDate 具体看设置
	pstmt.set(1,username);
	pstmt.set(2,password);
特点
    效率高
    防止 sql 注入
    后期使用
```

## 结果处理

### resultSet

```java
介绍
    封装查询结果
方法
    next() 游标向下移动一行， 默认表头，不是第一行
    getXXX() XXX 是数据类型， 获取数据
    	参数 ： Int 表示列的名称，从1开始   String 表示列的名称
结果处理
    将结果封装到 map 集合中
```