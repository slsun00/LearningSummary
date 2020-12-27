```go
// DB 结构体

type DB struct {
    //内容隐藏或者非到处字段
}
数据库操作句柄，代表一个具有零到多个底层连接的连接池。可以安全的被多个go程同时使用
// 图片

 /* 
 	open 函数 可能只是验证其参数，而不创建与数据库的链接 
 		返回的 DB 可以安全的被多个 go 程使用，炳辉维护自身的闲置连接池
 		open 只需调用一次，很少需要关闭 DB
 */
	
func Open(driverName,dataSourceName string) (*Db,error)
	driverName : 数据库名称
	dataSourceName ： 指定数据源

// 检查数据源的名称是否合法，应调用返回值的 ping 方法
func (*DB) ping error
	返回检查与数据库的链接是否有效，如果需要会创建链接
```

