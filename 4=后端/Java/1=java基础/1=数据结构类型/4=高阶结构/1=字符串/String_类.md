## 介绍

*   字符串就是一串固定长度的字符连接起来的字符序列。
*   字符串是常量 ：他们的值在创建之后不能修改， 
*   Java中所有的字符串字面值（"" 双引号内容） 都是基于 String 类实现的(没有 new 也是)

## 特点

* 字符串的内容用不可变 ， 字符串一旦赋值，不能改变
* 字符串不可改变， 所以可以共享使用
* 底层原理是 byte[]  字节数组



## 构造方法

```java
// 3 + 1

常用构造方法
    public String();   // 创建一个空的字符串， 不包含任何内容
	public String(char[] array);   // 根据字符数组的内容，来创建对应的字符串
	public String(byte[] array);   // 根据字节数组的内容，来创建对应的字符串  
直接创建
    String str = "hello";
```



## 字符串常量池

```java
字符串常量池
    程序当中直接写上的双引号字符串 ， 就在字符串常量池中
```



## 操作

### 创建

```java
// 获取字符串的长度
public int length()；
    
// 拼接字符串 , 返回新的字符串 , 拼接的两个源字符串不变
public String concat(String str);
```



### 修改

#### 介绍

```java
1. 字符串对象不可修改， 凡是其进行修改的，都是创建了一个全新的 String 对象
2. String 指具有可读性， 所以任何指向它的引用都不能改变它的值
        String a = "d";
        String b = a;	
        b = "s";	// a = d  b =s
```

#### 截取

```java
// 截取参数到结尾的字符串 ，返回新的字符串
public String substring(int index);

// 截取 [begin, end) 范围内的字符串 ，返回新的字符串
public String substring(int begin, int end)
```

#### 分割

```java
// 按照参数的规则，将字符串分割为若干部分
// 对于特殊的字符， 需要用转义字符， 比如 . 需要用 \\.
public String[] split(String regex);


例子
    String str = "12,rer";
	str.split(",")
```

#### 连接

```java
concat()
```

#### 替换

```java
// 将所有出现的老字符串替换成新的字符串， 返回替换后的结果， 返回新的字符串
public String replace(CharSequence oldString, CharSequence newString);
```



### 查询

```java
// 获取首次出现的索引位置，没有就返回 -1
public int indexof(String str)
    
 // 获取指定索引位置的单个字符
 public char charAt(int index);
```



### 比较

```java
字符串是引用类型 ， 比较时进行地址的比较
    // 对字符串内容进行比较
    public boolean equals(Object obj); 
		参数可以是任何对象， 只有参数是一个字符串并且内容相同才会给 true 否则给 false
         a.equals(b)  ;如果比较双方一个常量、一个变量，推荐：常量.equals(变量)
    // 忽略大小写进行内容比较， 注意只有英文字符区分大小写
    public boolean equalsIgnoreCase(String str); 
```











### 转化

```java
// 把字符串转化为字符数组返回
public char[] tocharArray();

// 获得当前字符串底层的字节数组
public byte[] getBytes();  


```



## 重载

```java
介绍
    java 仅两个用于 String 类中的重载符号  +  +=
```



## 内存底层

* 字符串的底层是一个被 final 修饰的数组， 不能改变， 是一个常量

    ```java
    private final byte[] value
    
    
    ```

* 弊端

    ```java 
    字符串相加， 内存中就会有多个字符串吗占用空间多 ，效率低
    String s = "a" + "b" + "c" ;
    	"a"，"b", "c"  3 个字符串
        "a" + "b" => "ab"  1 个字符串
        "ab" + "c" => "abc" 1个字符串
            
    ```

    