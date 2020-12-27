## DSN

*   Data Source Name

*   go-sql-driver定义的一些数据库链接和配置信息

    ```go
    // 格式
    user@unix(/path/to/socket)/dbname?charset=utf8
    user:password@tcp(localhost:5555)/dbname?charset=utf8
    user:password@/dbname
    user:password@tcp([de:ad:be:ef::ca:fe]:80)/dbname
    ```

