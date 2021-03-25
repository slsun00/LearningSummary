## 介绍

* list
* c++ 采用是双向循环链表
* 链表的存储方式不是连续的空间， 因此链表中迭代器也是双向迭代器

## 优劣

```c++
优势
    采用动态存储分配， 不会造成内存浪费和溢出
    链表执行插入和删除操作十分方便， 修改指针即可， 不需要移动大量元素
缺点
    空间(指针域)和时间(遍历)额外消耗比较大
```

## 构造函数

```c++
函数原型
    list<T>v;  // 模板类实现，默认构造函数
	list(v.begin(), v.end); // 将v[begin, end] 区间中的元素拷贝给本身
	list(n, elem); // 构造函数将 n 个element 拷贝个对象
	list(const list& v); // 拷贝构造函数

例子
	#include <list>
    // 使用
    list<int>v;
	// 自定义数据类型
	list<Person> v;
	// 自定义数据烈性指针
	list<Person*>
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
    给 list 容器进行赋值
 函数原型
    list& operator=(const list& v)  // 重载等号操作符
    assign(beg,end);  // 将 [beg, end] 区间中的数据拷贝给本身
	assign(n, elem);  // 将 n 个 elem 拷贝赋值给本身
	swap(list) 
例子
    list<int>v1;
	for (int i=0; i<10; i++) {
        v1.push_back(i);
    }
	list<int> v2 = v1;
	v2.assign(v1.begin, v1.end())
```



## 容量大小

```c++
j介绍
    对 vector 容器的容量大小进行操作
 函数原型
    empty();   //判断容器是否为空
	size();  // 返回容器中元素的个数
	resize(int num); // 重指定容器长度中
		// 如果容器边长 ， 则以默认值填充 ， 如果容器变短 ， 末尾超出部分舍去
	resize(int num, elem); // 重新制定容器长度， 如果容器边长 ， 则填充制定元素 elem ,变短舍去末尾
		
例子
    list<int>v1;
	v1.size
```

## 插入删除

```c++
函数原型
    push_back(ele);   // 尾部插入元素 ele
	push_front(ele);	// 头部插入元素 ele
	
	pop_front();  // 从容器开头删除一个元素
	pop_back();  // 删除最后一个元素

	insert(const_iterator pos,ele)  // 迭代器指向位置 pos 插入元素 ele
    insert(const_iterator pos, int count, ele); // 迭代器指向位置 pos 插入 cout 个元素 ele
	insert(const_iterator start, const_iterator end); // 插入迭代器从 start 到 end 之间的元素

	erase(const_iterator pos); // 删除迭代器指向的元素
	erase(const_iterator start, const_iterator end); // 删除迭代器从 start 到 end 之间的元素
	clear();  // 删除所有元素

	remove(elem); // 删除容器中所有与elem值匹配的元素

例子
    vctor<T> v1;
	v1.push_back(10);
	v1.insert(v1.begin(), 20);
```

## 数据存取

```c++
函数原型
   // 不支持随机访问，不支持  [] 访问 ，不可以 at 方式访问（不是连续线性空间）
	front(); //容器中的第一个元素
	back(); // 返回容器中最后一个元素

例子
   list<T> v1;
	v1.push_back(10);
	v1[0]; // 10
	v1.front(); // 10
```



## 翻转排序

```c++
reverse(); // 翻转链表
sort();  // 链表排序
```

