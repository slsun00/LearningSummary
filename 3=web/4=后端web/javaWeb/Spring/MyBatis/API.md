# api

## SqlSession工厂对象

```java
介绍
    // 通过加载mybatis的核心文件的输入流的形式构建一个SqlSessionFactory对象
    String resource = "org/mybatis/builder/mybatis-config.xml"; 
    InputStream inputStream = Resources.getResourceAsStream(resource); 
    SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); 
    SqlSessionFactory factory = builder.build(inputStream);    
```

| **方法**                        | **解释**                                                     |
| ------------------------------- | ------------------------------------------------------------ |
| openSession()                   | 会默认开启一个事务，但事务不会自动提交，也就意味着需要手动提交该事务，更新操作数据才会持久化到数据库中 |
| openSession(boolean autoCommit) | 参数为是否自动提交，如果设置为true，那么不需要手动提交事务   |

## SqlSession会话对象

```java
介绍
    qlSession 实例在 MyBatis 中是非常强大的一个类。
    在这里你会看到所有执行语句、提交或回滚事务和获取映射器实例的方法。
实例
    <T> T selectOne(String statement, Object parameter) 
    <E> List<E> selectList(String statement, Object parameter) 
    int insert(String statement, Object parameter) 
    int update(String statement, Object parameter) 
    int delete(String statement, Object parameter)
事务操作
    void commit()  
	void rollback() 
```



