## 字段

```java
static byte max_value 常量， byte 的最大值 
static byte min_value 常量， byte 的最小值
static int  size		
static Class<Byte> type    
    
字段使用
    Byte.字段
    Byte实例.字段
```

## 构造方法

```java
Byte(byte value)  // 装箱为包装类
Byte(String s)    // 将一个字符串转变为一个 Byte 类
```

## == 方法 ==

## 静态方法

```java

static Byte decode(String nm)	一个字符串数字转为 Byte
static byte parseByte(String s)  数字字符串转为 byte
static byte parseByte(String s, int radix)
    将数字字符串转为一个 radix 进制的数字
    radix = 10 ，就是十进制
    
static String toString(byte b)    一个 byte 转为字符串
static Byte value(xxx)        
    byte b
    String s
    String s, int radix
```

