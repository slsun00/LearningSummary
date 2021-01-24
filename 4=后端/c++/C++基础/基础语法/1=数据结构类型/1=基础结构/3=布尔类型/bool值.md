## 1.基本介绍c

* 类型

    | 类型 | 值                             | 大小  |
    | ---- | ------------------------------ | ----- |
    | bool | true (本质1) <br>false (本质0) | 1字节 |

    

*   声明赋值

    ```go
    // 参看变量的声明/赋值四种形式
    语法
    	bool a = false
    
    
    
    // 用途
    	一般用于程序流程控制 if 和 for
    // 注意
       !true  值为 false    
       !false  值为 true
    ```

## 真假

* 除了 0 以外都是真

## 3.使用：

* 只有相同类型的值才能实现比较，比如相同的接口比较，必须是两个实现相同接口接口

* bool与&&和||组合使用，会出现短路，（运算级别的使用）

* 非空、非0  ：true

    空值、0值   ：false
    
* go 语言不允许将整型强制转换为布尔型

## 跳转

*   [golang知识库总结](https://www.cnblogs.com/shulei/p/13426361.html)
*   [golang 数据类型](https://www.cnblogs.com/shulei/p/13425813.html)







































