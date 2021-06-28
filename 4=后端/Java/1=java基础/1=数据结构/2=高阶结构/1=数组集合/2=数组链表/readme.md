## 区别

### ArrayList 、LinkedList    和    Vector 

```java
arrayList
    动态数组
    遍历访问⾮常快，但是增删⽐较慢，因为会涉及到数组的拷⻉
    是⼀个⾮线程安全的容器，在并发场景会造成问题
    如果想使⽤线程安全的容器的话，
    	推荐使⽤Collections.synchronizedList ；ArrayList 在扩容时会增加 50% 的容量
LinkedList
    是双向链表
    增加和删除⾮常快，  遍历⽐较慢
    ⾮线程安全的容器，推荐使⽤ Collections.synchronizedList
vector
	最早的集合结构  
    ⼀个线程安全的容器，
    它的每个⽅法都粗暴的加上了 synchronized 锁，所以它的增删、遍历效率都很低
```

