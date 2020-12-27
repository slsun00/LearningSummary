## restful 风格

*   REST的含义就是客户端与Web服务器之间进行交互的时候，使用HTTP协议中的4个请求方法代表不同的动作。
    *   `GET`用来获取资源
    *   `POST`用来新建资源
    *   `PUT`用来更新资源
    *   `DELETE`用来删除资源
*   只要API程序遵循了REST风格，那就可以称其为RESTful API
*   目前在前后端分离的架构中，前后端基本都是通过RESTful API来进行交互。

## 比较

*   普通的

    ```go
    get("/book",...)		// 查询
    get("/create_book",...)  // 创建
    get("/update_book",...)  // 更新
    get("/delete_book",...)  // 删除
    ```

*   使用restful

    ```go
    get("/book",...)	// 查询
    push("/book",...)	// 创建
    put("/book",...)	// 更新
    delete("/book",...)	 // 删除
    ```

    