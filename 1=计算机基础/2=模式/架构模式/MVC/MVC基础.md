## MVC 结构

*   总结

    ```go
    view 层的操作，是通过调用 client 层的用例函数进行的
    	所以 view 要有个结构体，能够镶嵌 client的结构体，来通过字段调用 client 中的处理函数
    client 层的操作是对应 model 层的客户记性操作
    		所以 client 要有个结构体，能够镶嵌 model的结构体，来通过字段调用 model 中的处理函数
    
    
    分析
    	 V - C - M
    开发
    	M - C - V
    ```

    

