## druid.properties

```java
# 初始化连接数量
initalSize = 5;
# 最大连接数
maxActive = 8;
# 最大等待时间
maxWait=3000;

user="root"
```



## src/utils/JDBCUtils

```java
// 重复代码抽取

public class JDBCUtils {
    
private static DataSource ds = null;
private static Properties pro = null;
    
static {
	try {
        pro = new Properties();
        
        // 获取 src 文件目录目录下的方式 -- ClassLoaser 类加载器
        // 动态获取 src 文件目录下的文件路径
        // ClassLoader classLoader = JDBCUtls.class.getClassLoader();
        // InputStream res = classLoader.getResourceAsStream("druid.properties");
        // 获取属性配置文件
        InputStream res =JdbcUtils.class.getClassLoader().getResourceAsStream("druid.properties");
        // 流中加载数据
        pro.load(res);
        // 创建数据库连接池
		ds = DruidDataSourceFactory.createDataSource(pro)
    } catch(IOException e) {
        e.printStackTrace();
    } catch(ClassNotFound e){
        e.printStackTrace();
    }
}
 
// 获取连接池
public static DataSouce getDataSource(){
	return ds;
}
    
// 获取连接  
public static Connection getConnection(){	
        return ds.getConnection();
}
public static void close(Statement stmt, Connection conn){
    if (stmt != null) {
        try {
            stmt.close();
        } catch(SQLEXcption e){
            e.printStackTrace();
        }
    }

    if (conn != null) {
        try {
            stmt.close();
        } catch(SQLEXcption e){
            e.printStackTrace();
        }
    }
}
public static void close(ResutSet res, Statement stmt, Connection conn){
		if (stmt != null) {
            try {
                stmt.close();
            } catch(SQLEXcption e){
                e.printStackTrace();
            }
        }
        
        if (conn != null) {
            try {
                stmt.close();
            } catch(SQLEXcption e){
                e.printStackTrace();
            }
        }
        
        if (res != null) {
            try {
                stmt.close();
            } catch(SQLEXcption e){
                e.printStackTrace();
            }
        }
    }
}
```

