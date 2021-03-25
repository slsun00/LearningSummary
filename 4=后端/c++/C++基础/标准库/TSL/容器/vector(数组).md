

### vector

### 介绍

* 和数组非常相似，也被称为单端数组
* 不同之处在于： 数组是静态空间 ， vector 可以动态扩展
* 动态扩展
    * 并不是在原空间后续接新的空间，
    * 而是： 寻找到更大的内存空间， 然后将原数据拷贝到新空间 ，释放



## 构造函数

```c++
函数原型
    vector<T>v;  // 模板类实现，默认构造函数
	vector(v.begin(), v.end); // 将v[begin, end] 区间中的元素拷贝给本身
	vector(n, elem); // 构造函数将 n 个element 拷贝个对象
	vector(const vector& vec); // 拷贝构造函数

例子
	#include <vector>
    // 使用
    vector<int>v;
	// 自定义数据类型
	vector<Person> v;
	// 自定义数据烈性指针
	vector<Person*>
	v.push_back;  // 向容器尾部插入数据
```

## 迭代器(遍历)

```c++
网址
    https://en.cppreference.com/w/cpp/container/vector
介绍
    容器存放内置数据类型 , 相当于一个数组
嵌套
    相当于 数组中存放一个数组
    
使用例子

	

	// 遍历
	vector<int>::iterator itBegin = v.begin()  // 起始迭代器，指向容器中第一个元素
     vector<int>::iterator itEnd = v.end() // 结束迭代器，指向容器最后一个元素的下一个空位置
      while (itBegin != itEnd) {
          cout << *itBegin << endl;
          itBegin++;
      }
	
	// 遍历
	for (vector<int>::iterator it=v.begin(); it!=v.end(); it++ ){
        cout << *it << endl;
    }

	// 遍历
	#include <algorithm>
	for each(v.begin(), v.end(), myprint);
	void myPrint(int val){ cout val; };
	

嵌套
    vector<vector<int>>itn
```



## 赋值

```c++
介绍
    给 vector 容器进行赋值
 函数原型
    vector& operator=(const vector& vec)  // 重载等号操作符
    assign(beg,end);  // 将 [beg, end] 区间中的数据拷贝给本身
	assign(n, elem);  // 将 n 个 elem 拷贝赋值给本身
例子
    vector<int>v1;
	for (int i=0; i<10; i++) {
        v1.push_back(i);
    }
	vector<int> v2 = v1;
	v2.assign(v1.begin, v1.end())
```



## 容量大小

```c++
j介绍
    对 vector 容器的容量大小进行操作
 函数原型
    empty();   //判断容器是否为空
	capacity();  // 容器容量
	size();  // 返回容器中元素的个数
	resize(int num); // 重指定容器长度中
		// 如果容器边长 ， 则以默认值填充 ， 如果容器变短 ， 末尾超出部分舍去
	resize(int num, elem); // 重新制定容器长度， 如果容器边长 ， 则填充制定元素 elem ,变短舍去末尾
		
例子
    vector<int>v1;
	v1.size
```

## 插入删除

```c++
函数原型
    push_back(ele);   // 尾部插入元素 ele
	pop_back();  // 删除最后一个元素
	insert(const_iterator pos,ele)  // 迭代器指向位置 pos 插入元素 ele
    insert(const_iterator pos, int count, ele); // 迭代器指向位置 pos 插入 cout 个元素 ele
	
	erase(const_iterator pos); // 删除迭代器指向的元素
	erase(const_iterator start, const_iterator end); // 删除迭代器从 start 到 end 之间的元素
	clear();  // 删除所有元素

例子
    vctor<T> v1;
	v1.push_back(10);
	v1.insert(v1.begin(), 20);
```

## 数据存取

```c++
函数原型
    at(int index); // 返回索引 index 所指向的数据
	operator[];  // 返回索引 index 所指的数据
	front(); // 容器中的第一个元素
	back(); // 返回容器中最后一个元素

例子
    vctor<T> v1;
	v1.push_back(10);
	v1[0]; // 10
	v1.front(); // 10
```



## 容器交换

```c++
介绍
    实现两个容器内元素的互换
 函数原型
    swap(vec);  // 将 vec 与本身元素互换
例子
    vctor<int> v1;
	vctor<int> v2;
	v1.push_back(10);
	v2.push_back(15);
	v1.swap(v2);  // v1:15  , v2:10

特殊使用
    // 用来缩小内存
    一个vector 创建的时候，容量倍增 ，实际上会大于 size ,
	交换后使容量和size 一样，减小内存
     vector<int>(v).swap(v)
    vector<int>(v)  匿名对象，当前行编译结束，对象占用就回收(释放)了
```

## 预留空间

```c++
介绍
    减少 vector 在动态扩展容量时的扩展次数
    reserve(int len); // 容器预留 len 个元素长度 ， 预留位置不初始化， 元素不可访问
```

