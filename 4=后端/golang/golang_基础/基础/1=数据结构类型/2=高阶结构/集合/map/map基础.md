<font size=5 color=yellow>map(映射)</font>

## 介绍

### 1.概念

*  引用类型 ，引用类型传递的机制，在一个函数接收 map,修改后，会直接修改原来的map
*  是一种特殊的数据结构，
*  一种元素对（pair）的无序集合，pair 对应一个 key（索引）和一个 value（值）
*  这是一种能够快速寻找值的理想结构，给定 key，就可以迅速找到对应的 value。

### 2.别称

```go
HashTable 
字典 Python   
hash       
字段    
关联数组   类似其他语言的集合
```

## 声明/赋值

### 介绍

```js
格式
	变量的四种形式
声明后未赋值
	// 引用类型，初始化默认值为 nil , 本身是空的， 不能使用
	1. 让其引用到一个map，
    	 var a map[string]int                       
          a = map[string]int{"one": 1, "two": 2}
	2. make一个空间供map来使用,分配内存后才能赋值和使用
		var a map[string]int                       
         a = make(map[string]int)
函数
	make(map[keytype]value_Type，cap)  在使用之前需要make，就是给 map 分配数据内存
        mapname 为 map 的变量名。
        keytype 为键类型。 
        value_Type 是键对应的值类型。可以是任意 go 数据类型
标准格式	
    // 声明是不会分配内存的，初始化需要make，
    var mapname map[keytype]valuetype
    mapname = make(map[keytype]valuetype)
	    1.key        :所有类型，通常是int string,不可重复，重复以最后一个为准
        2.keytype    ：通常为int string,但是不能是slice,map,function不可以，因为这几个没法用 == 来判断 
        3.value      :所有类型，可以重复
        4.valuetype  ：与keytype 的类型一致，通常为int float string map struct
        
声明后赋值
	1. var a map[string]string
   	a = make(map[string]string,10)  //分配内存
   	a["1"] = "上海"

声明的时候赋值
	var a map[string]int = map[string]int{"one": 1, "two": 2}
	// 右边值换行的时候，要加上最后一个逗号
	var a map[string]int = map[string]int{
        								"one": 1, 
                                            "two": 2，
    								   }

复合类型使用
	//value类型是以整型为切片的指针类型
	mp2 := make(map[int]*[]int)       
	 //valuetype的类型是 map ，对于值的处理可以用 a[1] := make(map[string]string)
    a := make(map[string]map[string]string) 
    
注意
	1.上面没有使用 make 的例子，都有引用一个map(后面都有 {} 把所有的key 和 value 都列出来)
	2. 不能用 m := map[int]int 但是可以用 m:=map[int]int{}
```

### New()

```go
注意
	不能使用 new() 来构造 map，
	不能使用 new() 来构造 map，
	不能使用 new() 来构造 map，

// 如果错误的使用 new() 分配了一个引用对象，会获得一个空引用的指针，相当于声明了一个未初始化的变量并且取了它的地址，编译就会出错

// 使用new来创建并使用map：

        ma := new(map[string]int)    //使用new创建一个map指针
//第一种初始化方法
        *ma = map[string]int{}      //注意int后面的  {}，第二种是没有的
        (*ma)["a"] = 44
        fmt.Println(*ma)
           
//第二种初始化方法
        *ma = make(map[string]int, 0)
        (*ma)["b"] = 55
        fmt.Println(*ma)
           
//第三种初始化方法
        mb := make(map[string]int, 0)
        mb["c"] = 66
        *ma = mb
        (*ma)["d"] = 77
```

## 特点

### 无序

```go
map是无序的
```

### 容量

```go
声明的时候不需要知道 map 的长度，因为 map 是可以动态增长的，未初始化的 map 的值是 nil，
map 可以根据新增的 key-value 动态的伸缩，因此它不存在固定长度或者最大限制，但是也可以选择标明 map 的初始容量 capacity， 
map 容量达到后，在想增加 map 元素，会自动扩容，并不会发生panic，map 的大小会自动加 1，
出于性能的考虑，对于大的 map 或者会快速扩张的 map，即使只是大概知道容量，也最好先标明。
```



## 操作

 ### 1.增加/更新

   ```go
// 如果 key 已经存在，那就是修改/更新这个 value
// key 不存在 ，就是增加
a[key]  = value

   ```

### 2.删除

   ```go
内建函数
	delete( mapname, key)
	 如果 key 存在就删除
	 如果 key 是 nil 或者 不存在，delete 不会进行操作，但是也不会报错


func delete(m map[Type]type1,key Type)内建函数按照指定的键将元素从映射中删除，若为 nil 或者无此元素，不进行操作

注意
1. 没有办法一次删除所有的key,
	1. 遍历所有的 key 进行删除
	2. map = make()  来创建一个新的，让原来的成为垃圾，被GC回收
	（Go语言中的并行垃圾回收效率比写一个清空函数要高效的多。 ）
	3. 直接给 map 赋值 nil 
   ```

### 3.查找

   ```go
介绍
	遍历的是 key
		找到这个 key ，然后再找这个 key 所对应的value,
		找到了，就返回 value ,找不到就返回false
语法
    val , ok := a["key"]
   //OK是看当前 key 是否存在返回布尔类型(存在为真,不存在为假)
   //val 返回对应 key 的值
   
   配合使用
   if ok{}  组合使用更好

// 双层循环
a := make(map[string]map[string]string) 
   for k1 , v1 = range a{    //v1 也是一个map,所以要双层循环
   	for k2,v2 = range v1{
   		}
   	} 
   ```



### 4.遍历

```go
参看流程控制中的  for range 
// 遍历输出元素的顺序与填充顺序无关，不能期望 map 在遍历时返回某种期望顺序的结果。
// 如果需要特定顺序的遍历结果，正确的做法是先排序
	将 map 中的数据放到一个 切片中去，将切片中的数据进行排序，最后遍历切片就行了

for key, value := range map{}
// 只遍历key,无须将值改为匿名变量形式，忽略值即可
for key := range map{}
// 只遍历value
for _, value := range map{}
```



### 5.长度

```go
.使用函数 len() 可以获取 map 中 pair 的数目
```

### 6.排序

* 没有专门对map的key进行排序
* map默认是无序的，注意也不是按照添加的顺序存放的，每次遍历可能不一样
* 要进行排序是对 key 进行排序，然后根据key遍历输出即可



## 场景使用

### 6.map切片

* 切片的数据类型是map,则称为slice of map，这样使map的个数可以动态变化

* 可以使 key 对应一个切片，切片里面有多个值，达到一对多的效果

    ```go
    var newtest []map[string]string
    ```

### 7.多键索引

*   介绍

    ```go
    映射容器的键必须以单一值存在。key - value 一一对应
    这种映射方法经常被用在诸如信息检索上 
    ```

*   基于哈希值的多键索引及查询

    ```go
    // 传统的数据索引过程是将输入的数据做特征值
    // 数据都基于特征值构建好索引后，就可以进行查询。
    	查询时，重复这个过程，将查询条件转为特征值，使用特征值进行查询得到结果。
    	
        1.将特征使用某种算法转为整数，即哈希值，使用整型值做索引。
        2.将特征转为字符串，使用字符串做索引。
    
    ```

### 8.并发中的map

*    map 在并发情况下，只读是线程安全的，同时读写是线程不安全的。 

     ```go
     参看 sync.Map
     1. Go语言在 1.9 版本中提供了一种效率较高的并发安全的 sync.Map，
     2. sync.Map 和 map 不同，不是以语言原生形态提供，而是在 sync 包下的特殊结构。
     3.特性
         1.无须初始化，直接声明即可。
         2.sync.Map 不能使用 map 的方式进行取值和设置等操作，而是使用 sync.Map 的方法进行调用，Store 表示存储，Load 表示获取，Delete 表示删除。
         3.使用 Range 配合一个回调函数进行遍历操作，通过回调函数返回内部遍历出来的值，Range 参数中回调函数的返回值在需要继续迭代遍历时，返回 true，终止迭代遍历时，返回 false。
     
     ```

     

## 9.注意

* value 使用 struct 类型，更适合管理更复杂的数据

* 注意和数组的区别

    ```js
    数组 a[1]= 222  // 下标是1的存储空间，里面内容是 222
    map  a[1]= 222  //  键值对对应 1:222
    ```

    

