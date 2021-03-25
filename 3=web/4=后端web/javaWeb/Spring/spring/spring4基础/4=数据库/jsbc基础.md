## JdbcTemplate

### 基础

```java
介绍
    JdbcTemplate是spring框架中提供的一个对象，是对原始繁琐的Jdbc API对象的简单封装。
    spring框架为我们提供了很多的操作模板类
例子
    操作关系型数据的JdbcTemplate和HibernateTemplate，
    操作nosql数据库的RedisTemplate，
    操作消息队列的JmsTemplate等等。

使用步骤
    导入spring-jdbc和spring-tx坐标
    创建数据库表和实体
    创建JdbcTemplate对象
    执行数据库操作
```



## 基础

```java
介绍
	Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库操作
引包
    druid connector	jdbc	orm	tx
    
```

## 连接数据库

### 配置

```java
数据源配置
```



### java

```java
@Service
public class BookService {
     //注入 dao
     @Autowired
     private BookDao bookDao; 
}

@Repository
public class BookDaoImpl implements BookDao {
	 //注入 JdbcTemplate
     @Autowired
     private JdbcTemplate jdbcTemplate;
     //添加的方法
     @Override
     public void add(Book book) {
         //1 创建 sql 语句
         String sql = "insert into t_book values(?,?,?)";
         Object[] args = {book.getUserId(), book.getUsername(),  book.getUstatus()};
         //2 调用方法实现
         	// 第一个参数：sql 语句
		   // 第二个参数：可变参数，设置 sql 语句值
        
     	int update = jdbcTemplate.update(sql,args);
     }
}   

// sql 语句
"update account set money=? where name=?",10000,"tom"
"delete from account where name=?","tom"    
```

### 方法

```java
// JdbcTemplate 实现查询返回某个值代码 
queryForObject(String sqlString, Class<T> requireType)
    // Long count = jdbcTemplate.queryForObject("select count(*) from account", Long.class);
     第一个参数：sql 语句
	 第二个参数：返回类型 Class
 
// （查询返回对象）
queryFor0b. ject(String sql, RowMapper<T> rowMapper, 0bject... args)   
    // Book book = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<Book>(Book.class), id);
    第一个参数：sql 语句
    第二个参数：RowMapper 是接口，针对返回不同类型数据，使用这个接口里面实现类完成数据封装
    第三个参数：sql 语句值   
// 查询返回集合    
query (String sq1, RowMapper<T> rowMapper, 0bject... args)
    // List<Book> bookList = jdbcTemplate.query(sql, new BeanPropertyRowMapper<Book>(Book.class));
	第一个参数：sql 语句
	第二个参数：RowMapper 是接口，针对返回不同类型数据，使用这个接口里面实现类完成数据封装
	第三个参数：sql 语句值    
    
// 实现批量添加操作
batchUpdate (String sq1, List<0bject]> batchArgs,)
    第一个参数：sql 语句
	第二个参数：List 集合，添加多条记录数据
例子
    List<Object[]> batchArgs = new ArrayList<>();
        Object[] o1 = {"3","java","a"};
        Object[] o2 = {"4","c++","b"};
        Object[] o3 = {"5","MySQL","c"};
        batchArgs.add(o1);
        batchArgs.add(o2);
        batchArgs.add(o3);
    
     String sql = "insert into t_book values(?,?,?)";
     int[] ints = jdbcTemplate.batchUpdate(sql, batchArgs);
     System.out.println(Arrays.toString(ints));
```

