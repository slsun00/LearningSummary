## 介绍

* I ：input
* O : output
* 流 ： 数据流（字符，字节） 1 字符 = 2 字节 = 16 个二进制位
* 字节都要经过内存处理 ，所以操作都是针对 内存来说的
* 内存中的二进制文件时无序的，java 中的类结构体是有序的(人能看的懂得)

|            | 输入流                               | 输出流                                |
| ---------- | ------------------------------------ | ------------------------------------- |
| 相对于内存 | Input<br>读取（写入）：硬盘 --> 内存 | Output<br>输出（写出）：内存 --> 硬盘 |
| 字节流     | InputStream                          | OutputStream                          |
| 字符流     | Reader                               | Writer                                |
| 缓冲字节   | BufferedInputStream                  | BufferedOutputStream                  |
| 缓冲字符   | BufferedReader                       | BufferedWriter                        |
| 转换流     | InputStreamReader                    | OutputStreamWriter                    |
| 序列化流   |                                      | ObjectOutputStream<br>writeObject     |
| 反序列化流 | ObjectInputStream<br>readObject      |                                       |
| 打印流     |                                      |                                       |



## 总结

```java
I/O
    字符 字节
    	缓冲 、序列、 输出
```



## 异常处理

### jdk7-

```java
// 注意提高文件句柄的作用域

FileWriter fw = null;
try {
    
} catch(){
    
}finally{
    // 资源关闭
    if (fw!=null) {
        try {
            fw.close()
        } catch(IoException e){
            e.printStackTrace();
        }
    }
}
    
```

### jdk7+

```java
介绍
	try 的后面添加一个 （） ， 
    在括号中定义流对象， 那么这个流对象的作用域在 try 中有效
    try 的代码执行完毕 ， 会自动把流对象释放， 不用 finally
例子
    try (
        // 文件流创建
        FileWriter w = new FileWriter("c//");
    ){
    	// 执行处理代码， 结束流自动释放
    }catch(){
        
    }
```

### jdk9+

```java
介绍
    try 前面可以定义流对象，
    try 后面的（） 中直接引入流对象的名称，，变量
    try 代码执行结束以后，流对象也可以自动释放掉， 不用finally
 例子
    A a = new A();
	B b = new B();
	try(a,b){
        
    }catch(){
	
    }
```

