## 介绍

* jsk1.7 添加的工具类， 提供一些方法来操作对象，由静态的方法组成
* 方法特性
    *  null-safe  // 空指针安全
    *  null-tolerant // 容忍空指针
* 作用
    * 用于计算对象的 hashcode 、返回对象的字符串表示形式、比较两个对象

## 使用

## equals

```java
1. 比较两个对象
    Object 的 equals 方法容易抛出空指针异常
    Objects 的 equals 方法 就优化了这两个问题
    
源码
    public static boolean equals(Object a, Object b) {
        return (a == b) || (a != null && a.equals(b));
    }
使用
    String a = null;
	String b = "12";
	// 空指针不能调用方法
	a.equals(b);  // 会报空指针异常
	Objects.equals(a,b);
```

