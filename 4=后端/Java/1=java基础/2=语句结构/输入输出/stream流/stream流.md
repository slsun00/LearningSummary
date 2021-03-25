## 介绍

* 函数时编程的 io 流

## 获取流

```java
介绍
    java.util.stream.Stream<T>  // 这并不是一个函数式接口
方式
    Collection 集合都可以通过 stream 默认方式获取流
    Stream 接口静态方法 of 可以获取数组对应的流
例子
    List<T> list = new ArrayList<>();
    Stream<T> stream1 = list.Stream();
```



## 方法

### 介绍

```java
nums.stream().filter(num->{num != null}).count();
```

### 延迟方法

```java
返回值类型仍然是 Stream 接口自身的类型，因此支持链式地调用
```

### 终结方法

```java
介绍
	返回值类型不再是 Stream 接口自身的方法 ，因此不再支持 Stringbuilder 那样的链式掉员工
 方法
    count foreach : 其他的都是延迟方法
```



### 实例

#### foreach

```java
// 遍历流中数据 ，遍历之后就不能调用其他方法
	void forEach(Consumer<? super T> action);
例子
    
```



