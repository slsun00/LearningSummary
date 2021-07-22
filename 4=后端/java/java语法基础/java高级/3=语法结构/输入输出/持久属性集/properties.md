## 介绍

```java
java.util.Properties extends Hashtable<k,v> implements Map<k,v>
   // 唯一一个可以和 IO 流结合的集合
   持久的属性集， 可以保证在流中或者从流中加载
    键和值都是字符串
```

## 方法

```java
store
    把集合中的临时数据，持久化写入到硬盘当中
load
    // 字节
    把硬盘中保存的文件(键值对)， 读取到集合中使用 
-----
setProperty(String key, String value)   设置
getProperty   通过 key 获取 value 
```

