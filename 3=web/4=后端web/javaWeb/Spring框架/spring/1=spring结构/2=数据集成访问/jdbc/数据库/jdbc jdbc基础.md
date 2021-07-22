

## JdbcTemplate 介绍

```java
介绍
    JdbcTemplate是spring框架中提供的一个对象，是对原始繁琐的Jdbc API对象的简单封装。
    spring框架为我们提供了很多的操作模板类
例子
    操作关系型数据的JdbcTemplate和HibernateTemplate，
    操作nosql数据库的RedisTemplate，
    操作消息队列的JmsTemplate等等。

使用步骤
    导包
    	导入spring-jdbc和spring-tx坐标
         druid connector	jdbc	orm	tx 
    创建数据库表和实体
    创建JdbcTemplate对象
    执行数据库操作
    
       
```



## 连接数据库 -- 数据库连接池

```java

```

## 数据库操作

### sql语句

```java
具名参数
    介绍
    	具有名字的参数   
    例子
    	String sql = "insert into t_book(salary) values(:salary)
    	
占位符参数
    问题
    	？ 的顺序不能乱，否咋出错
    例子
    	String sql = "insert into t_book values(?,?,?)"
```



### 增删改

#### 介绍

```java
单个操作	update
批量操作	batchUpdate    
    
     @Autowired
     private JdbcTemplate jdbcTemplate;  // 是可以自动注入的    
```

#### 单个操作

```java
介绍
    如果是单个操作，就不用

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

#### 批量操作

```java
public void test03(){
    String sq1 ="INSERT INTO employee ( emp_ name , salary) VALUE (?,?)
    // batchUpdate (String sq1, List<0bject]> batchArgs,)
    // List<object[]>  List的长度就是sql语句要执行的次数
    // Object[]:每次执行要用的参数
    List<Object[]> batchArgs = new ArrayList<Object[]>();
    batchArgs.add(new 0bject[]{"张三" ,998.98});
    batchArgs.add(new 0bject[]{"李四" ,998.98});
    jdbcTemplate.batchUpdate( sql，batchArgs) ;
}

```



### 查

#### 基础

```java
// JdbcTemplate 实现查询返回某个值代码 
queryForObject(String sqlString, Class<T> requireType)
    // Long count = jdbcTemplate.queryForObject(sqlSring, Long.class);
     第一个参数：sql 语句
	 第二个参数：返回类型 Class
 
// （查询返回对象： java 对象）
queryFor0bject(String sql, RowMapper<T> rowMapper, 0bject... args)  
    String sqlString = "SELECT emp_ id empId, emp_ name empName, salary FROM employee WHERE salary>? "
    // Book book = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<Book>(Book.class), id);
    第一个参数：
    	sql 语句
    第二个参数：
    	RowMapper 是接口，针对返回不同类型数据，使用这个接口里面实现类完成数据封装
    	每一行记录和 javaBean 的属性如何映射
    第三个参数：
    	sql 语句值   
    结果
    	查询不到就会报错，所以需要进行处理， 
// 查询返回集合    
query (String sq1, RowMapper<T> rowMapper, 0bject... args)
    // List<Book> bookList = jdbcTemplate.query(sql, new BeanPropertyRowMapper<Book>(Book.class));
	第一个参数：sql 语句
	第二个参数：
    	RowMapper 是接口，针对返回不同类型数据，使用这个接口里面实现类完成数据封装
    	封装list, 集合里面元素的类型
	第三个参数：sql 语句值    
    

```

### 具名参数

```java
例子
   String sql = "insert into t_book(salary) values(:salary)
    
    
 // bean.xml , 配置具名参数的类
<bean id="" class="org.springframework.jdbc.core.namedparam.NamedParameterIdbcTemplatel"> 
	// 构造器的方式注入一个数据源
    <constructor-arg name="dataSource" ref="dataSource"></constructor-arg>
</bean> 
    
// java
    NamedParameterIdbcTemplatel nameJdbcTemplate = 
        ioc.getBean(NamedParameterIdbcTemplatel.class);
	// -----------------------------------------------------------
    String sql = "insert into t_book(salary) values(:salary)" ;
    //Map
    Map<String，Object> paramMap = new HashMap<>() ;
    //将所有具名参数的值都放在map中;
    paramMap. put("salary", "田七");

    nameJdbcTemplate.update(sql, paramMap)
 	// -----------------------------------------------------------       
	String sq1 = "INSERT INTO employee( emp_ name, salary) VALUES(:empName)
    Employee employee = new Employee( );
    employee. setEmpName( "哈哈");

	// SqlParameterSource形式传入参数值
	namedIdbcTemplate.update(
        sq1, new BeanPropertySqlParameterSource (employee))
        
```



## 其他

### Hibernate

```java
两种方式使用 Spring 访问 Hibernate
    1、 使用 Hibernate 模板和回调进行控制反转
	2、 扩展 HibernateDAOSupport 并应用 AOP 拦截器节点
```

