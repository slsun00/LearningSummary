## 介绍

```java
概述
	字符串就是一串固定长度的字符连接起来的字符序列。
	字符串是常量 ：他们的值在创建之后不能修改， 
	Java中所有的字符串字面值（"" 双引号内容） 都是基于 String 类实现的(没有 new 也是)
    
特点
	字符串的内容用不可变 ， 字符串一旦赋值，不能改变
	字符串不可改变， 所以可以共享使用
	底层原理是 byte[]  字节	
```

## 声明赋值

### 变量声明

```java
String a = "qwr"
```



### 构造方法

```java
// 3 + 1

常用构造方法
    public String();   // 创建一个空的字符串， 不包含任何内容
	public String(char[] array);   // 根据字符数组的内容，来创建对应的字符串
	public String(byte[] array);   // 根据字节数组的内容，来创建对应的字符串  
直接创建
    String str = "hello";
```



## api方法

```java
charAt(int index) // 返回指定索引处的 char 值
code...  返回执行位置的字符的unicode 代码点
compare...  字典顺序比较字符串
contact(String str)     将指定字符串连接到此字符串结尾
contains(CharSequence s)        当且仅当此字符串包含指定的 char 值序列时，返回 true。
contentEquals()   将此字符串与指定的 CharSequence 比较
copyValueOf()  返回指定数组中表示该字符序列的 String。    
endsWith   测试此字符串是否以指定的后缀结束。
equals...... 比较
format...    格式化
getBytes..   字符串转为 byte[]
getChars	 字符串转 char[]
hashCode	 字符串的 哈希码
indexOf...   子串查询
intern		返回字符串对象的规范化表示形式
isEmpty	     当 length() 为 0 返回 true    
lastIndexOf  最后一个出现的位置的索引
length		返回字符串的长度
matches		是否匹配整给定的正则表达
offsetByCodePoints 
    返回此 String 中从给定的 index 处偏移 codePointOffset 个代码点的索引。
regionMatches  两个字符串区域是否相等    

replace... 替换
split...  拆分字符串
startsWith	判断前缀    
sub...   获取子串
to...    转为新的数据结构
trim     截取字符串的前后空白
valueOf	     
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

包装类的静态方法
    parsexxx("数值型字符串")

// 基础类型转字符串    
1. "基本类型的值"
2. 包装类的静态方法  toString ， 不是 Object 类的 toString
3. String 类的静态方法 valueOf(参数)    
```

### 计算

```java
字符串 + 八种基本数据类型 = 字符串拼接
```





## 重载

```java
介绍
    java 仅两个用于 String 类中的重载符号  +  +=
```

## 内存底层

### 源码定义

```java
String 是不可变的
    // 类都是使用 private 修饰的
    内部属性都是  private 的
        任何 修改 String 字符串的⽅法都是创建了⼀个新的字符串
    	不能被任何类继承，
    内部属性都是  private 的
    不能提供任何可以修改内部状态的⽅法、setter ⽅法也不⾏
    不能被继承和扩展

字符串的底层是一个被 final 修饰的数组， 不能改变， 是一个常量
    private final byte[] value
    
介绍
    String 类是⼀种对象，
    	它是独⽴于 Java 基本数据类型⽽存在的
    	代表的是 Java 中的 字符串 ， 可以理解为字符串的集合
运行
    String 对象创建后会存在于运⾏时常量池中，运⾏时常量池是属于⽅法区的⼀部分
    JDK1.7 后把它移到了堆中
    
修改
    不可变对象不是真的不可变，
    可以通过 反射 来对其内部的属性和值进⾏修改，不过⼀般我们不这样做。
```

### 字符串常量池

```java
字符串常量池
    程序当中直接写上的双引号字符串 ， 就在字符串常量池中
```



## 题目

### 对象创建

```java
// 拼接创建
字符串相加， 内存中就会有多个字符串吗占用空间多 ，效率低
String s = "a" + "b" + "c" ;
	"a"，"b", "c"  3 个字符串
    "a" + "b" => "ab"  1 个字符串
    "ab" + "c" => "abc" 1个字符串
        
// new 创建
String s1 = new String("abc")        
内存中创建了⼏个对象：⼀个或者两个
分析
	String s1 
        是声明了⼀个 String 类型的 s1 变量，它不是对象        
     new 关键字
        会在堆中创建⼀个对象
	对象 abc
        // 如果abc 在常量池中已经存在: 
        该对象不会被创建，那么总共就会创建⼀个对象
		// 如果abc 在常量池中已经不存在，
         它会在常量池中创建, 那么总共就会创建两个对象
        
```

### char 参与计算

```java
3 + '4' + "Hello"  // 7Hello
"Hello" + 3 + '4'  // Hello34
    
String a = 5;  // 写法错误
String a = 4.5f + "" // "4.5f"
```

