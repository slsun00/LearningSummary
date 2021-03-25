## 介绍

* 抽象类
* 提供了操作日历字段的方法
* 里面有一个 getinstance() 静态方法 ，可以返回 canlender 类的子类对象



## 使用

```java
Calendar c = Calendar.getInstance(); // 多态
```

## 常用方法

```java
int get(int field);  // 返回指定的日历字段
int set(int field, int value); // 给指定字段设置给定值
abstract void add(int field, int amount); // 根据日历规则，为给定字段添加或者减去指定的时间量
Date getTime(); 返回一个表示此 Calender 的时间值（从历元到现在的好眠偏移量）的 Date 对象
```

