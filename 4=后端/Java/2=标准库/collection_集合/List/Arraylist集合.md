## ArrayList

## 特点

* 可以动态增长长度
* 不是同步的
* 存储结构是数组
* 元素增删慢，查找快，多用于查询数据、遍历数据

## 引包

```java
java.util.ArrayList<E>   // <E> 是泛型
```

## 使用

```java
// jdk1.7 之后， 右侧的尖括号可以不写内容 ， 但是 <> 还是要写的
ArrayList<String> list = new ArrayList<>();

注意
    对于 ArrayList 集合来说， 直接打印集合名， 得到的不是地址值 ， 而是内容
    如果集合的内容是空 ，得到的也是空的中括号
非基础类型
    泛型只能是引用类型 ， 不能是基本类型   
    	ArrayList<int> list = new ArrayList<>(); // 是不对的，需要使用相应的包装类
基础类型
    // 注意使用包装类
    // 从 jdk1.5 开始， 支持 自动装箱、自动拆箱
    ArrayList<Integer> list = new ArrayList<>();
	ArrayList<Character> list = new ArrayList<>();
```

## 常用方法

```java
public boolean add<E e>  // ArrayList 添加是一定成功的 ，其他不一定
public E get(int index);   // 注意不能使用 [] 进行访问
public E remove(int index);  // 返回删除的元素
public int size();  // 集合长度
```

## 遍历

```java
for 循环遍历
```

