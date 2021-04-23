## 介绍

* 增强 for 是在 jdk1.5 之后出来的
* 名称 ：foreach 语法

## 作用

* 专门遍历数组、集合
* 内部原理就是一个 Iterator 迭代器， 遍历过程中， 不能对集合进行增删操作 , 简化迭代器书写

## 格式

```java
for (元素的数据类型 变量：Collection集合或者数组) {
	// 操作代码
}

// 底层
	// 所有单列集合都可以使用增强 for
	Interface Collection<E>  All Superinterfaces: Iterable <E> 
     实现此接口允许对象成为“for-each loop”语句的目标。 见For-each Loop
// 例子

int[] arr = {1, 3, 4};
for (int a:arr){
    Systerm.out.println(a);
}
```

