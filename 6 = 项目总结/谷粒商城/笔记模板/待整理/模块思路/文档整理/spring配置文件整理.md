spring-persist-mybatis  整合文件()，加载文件用
    介绍
        这个一个 spring config 文件
    问题
        普通的 xml 和 spring xml 有什么区别？ spring 用来注册对象，连接所有


    连接数据库
        加载 properties
        数据源： 具体的数据库信息 -- 账号。密码，地址，等
    
    bean 工厂
    	扫描 mapper 文件
    	数据源	

spring-persist-tx    用于事务操作， 还是 bean 文件
	扫描 service
	1. 事务管理器： 数据源
	2. 事务切面： 将 方法限制和具体的切入点（serviceImpl） 结合起来
	3. 事务通知：事务的属性即增删改查方法的限制条件 

	切入点： serviceImpl
	通知： select save insert ....
	事务切面： serviceImpl 开启事务， 并附加上进行数据库操作的方法



spring-web-mvc
    1. 扫描包 handler  crowd.mvc
    2. mvd 注解驱动
    3. 视图解析器
    4. 基于 xml 异常映射：
    5. 注册拦截器