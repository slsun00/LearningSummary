## 声明-赋值

*   直接 var 声明

    ```js
     1. 使用双引号 单引号括起来，但是不能混着用
     var str = "hell0"    // 不加引号，就变成变量了
    ```

    

*   执行 eval()

    ```js
    // eval() 全局函数
    var s = "console.log('Hello,World')";  //表达式字符串
    eval(s);  // 控制台输出的是 hello,word
    ```

*   String()

    ```js
    // 不要创建 string 对象，它会拖慢执行速度，并可能产生其他副作用       
    
    var s = new String()   // object ，对象，有自己的方法
    var s3 = String(5634)   // string
    多个的时候，需要注意
    // valueOf()		返回字符串对象的原始值
    s3.valueOf()   //5634
    
    // 包装对象类似数组单不是数组
    new string("abc")
    	String{0:"a" , 1:"b" ,2:"3",length:3}
    
    string()   .. 转换任意类型的值为字符串
    ```



## 引号使用

- 双引号中可以包含单引号，单引号中可以包含双引号

    ```js
    // 双引号不能套双引号，单引号不能套单引号
    定义 HTML 字符串时，习惯使用单引号表示字符串，HTML 中包含的属性值使用双引号表示
    ```
- 换行
  
  ```js
  ECMAScript 3 中 , 字符串中不允许换行，换行显示需要添加 \n
      console.log("字符串\n直接量")
  
  ECMAScript 5 中 , 允许多行表示，在结尾处添加 \ 。反斜杠和换行符不作为字符串直接量的内容
      console.log("字符串\
      直接量")    // 字符串中添加换行符
  ```

- 转义字符
  
  ```js
  字符串中插入特殊字符需要使用转移字符 \ 
  单引号
  双引号
  \"    "
  \'	 '
  \n	 换行
  \t	 制表符
  \\   \
  ```


## 索引

```js
底层字符串是按照字符数组的形式保存的 
hello  底层就是 ["h","e","l","l","o"]
字符串中每个字符都有固定的位置。
字符串的位置下标从 0 开始，最大位置下标为 length-1。

访问 ： charAt() 、 []
```

## 改变

```js
1. 字符串固定不变，就是对其有操作，也是返回新的字符串，原字符串不变
2. ECMAScript 5 中，字符串可以作为只读数组使用
```

## 遍历

```js
// 字符串中的字符不能被 for...in 语句循环枚举。
for (var i=0;i<str.lenth;i++){
    console.log(str[i])
}
```

## 编码表

```go
使用编码表
字符串中 ： console.log("\uxxx")
网页中    ：#&xxxx(十进制)
```



## String对象

*   原始值字符串没有属性和方法
*   原始值可以使用 JavaScript 的属性和方法 
    *   因为JS 在执行方法和属性额时候可以把原始值当做对象

### 字符串属性

```js
length 				返回字符串长度
constructor			 返回创建字符串属性的函数
prototype			允许向对象添加属性和方法

var test = "fsf"
console.log(test.length)  // 3
```

### 字符串方法

```js
// 参看字符串函数
```

## 转换为 string

*   toString() 方法

    ```js
    调用被转换数据类型的 toString（） 方法，不会改变原变量，返回转换的结果
    
    var a = 123;
    var b = a.toString()
    // a = a.toString()
    
    // 注意
    	1. null 和 undifined 没有 toString 方法，使用会抛错
    ```
    
    
    
*   String() 函数

    ```js
    // 可以将任意类型的值转化为 字符串
    1. 原始类型值
    	数值、boolean、undefined、null
    	但会的是原值 + 加上双引号
    
    
    2. 对象
    	对象 ：一个类型字符串    string({a:1})	 	 // "[object bject]"
        数组 ：该数组的字符串形式	string([1,2,3])      // "1,2,3"
    
    
    转换规则
    	对于 Number Boolean  调用 toString 方法
         对于 undefined null、对象 ， 调用 valueOf 方法输出
    
                                       
    String({a:1})   // "[object bject]"
    String({a:1}.toString())
    ```
    
*   '+' 号

    ```js
    任意变量 + 字符串 = 字符串的拼接
    
    任意量 + ""（空字符串）   进行转换
    ```

    

