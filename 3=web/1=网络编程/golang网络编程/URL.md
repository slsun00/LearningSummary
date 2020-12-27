## URL

* 名称

    * URL  ： Uniform Resource Locator
    * 统一资源定位符
    * 描述一个网络上的资源,

* 基本格式

    ```go
    // 标准格式
        scheme://host[:port#]/path/.../[?query-string][#anchor]
       [协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
    // 完整格式
        [协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
    
    scheme         指定低层使用的协议(例如：http, https, ftp)
    host           HTTP服务器的IP地址或者域名
    port#          HTTP服务器的默认端口是80，这种情况下端口号可以省略。如果使用了别的端口，必须指明，例如 		http://www.cnblogs.com:8080/
    path           访问资源的路径
    query-string   发送给http服务器的数据，就是 url 上的参数
    anchor         锚
    
    http://127.0.0.1:8080/user/?id=111
    ```

* 注意

    ```go
    1. 每个 URL  都是单独的字符串，所以 URL 中不能包含空格
    2. （？） 和 （#） 有特殊含义，不能用于其他，可以用 URL 编码进行转换
        URL 编码 :  百分号编码
        空格 ： ASC 编码字节值为 32 ， 十六进制为 20 ，所以 URL 处理后就变成了 %20
    ```

*   查询

    ```js
    query-string
    	（GET模式的窗体参数，以“?”字符为起点，每个参数以“&”隔开，再以“=”分开参数名称与资料，通常以UTF8的URL编码，避开字符冲突
    ```

    