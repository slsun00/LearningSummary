

## 辨析

### String、StringBuilder、StringBuffer

```java
String 
    // String 类位于 java.lang 包下
    特指的是 Java 中的字符串，
StringBuilder 
    // 位于 java.util 包下    
    概述
	    是⼀⾮线程安全的容器
    使用
    	// append ⽅法常⽤于字符串拼接
    	常⽤于字符串拼接，它的拼接效率要⽐ String 中 + 号的拼接效率⾼
StringBuffer 
    // 位于 java.util 包下    	
    概述
    	 是⼀个线程安全的容器，
    使用
    	多线程场景下⼀般使⽤ StringBuffer ⽤作字符串的拼接

StringBuilder 和 StringBuffer 都是继承于AbstractStringBuilder 类，
AbstractStringBuilder 类实现了StringBuffer 和 StringBuilder 的常规操作。    
```

