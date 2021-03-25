## string

### 本质

* 是 C++ 风格的字符串 ， 本质上一个类

### 理解

```c++
// string 和 char * 的区别
char* 是一个指针
string 是一个类 ， 类中封装了 char* , 管理这个字符串， 是一个 char* 型的容器
    
#include<string> 
```

### 构造函数

```c++
string()   // 创建一个空的字符串 ， 例如 ：string str
string(const char* s)  // 使用字符串 s 初始化
string(const string& s)   // 使用一个 string 对象初始化另一个string 对象
string(int n, char c)  // 使用 n 个字符 c 初始化
    
    
例子
    #include <string>
    string s1 ; 默认字符串
    // c 语言风格 
    const char* str = "hello";
	string s2(str);
	string s3(s2);
```





### 赋值

```c++
string& operator=(const char* s)  // char* 类型字符串， 赋值给当前的字符串
string& operator=(const string &s) // 把字符串 s 赋值给当前字符串
string& operator=(char c)  // 把字符赋值给当期的字符串
 
============
string& assign(const char* s) // 把字符串 s 赋值给当前的字符串
string& assign(const char* s, int n)  // 把字符串前 n 个字符赋值给当前的字符串
string& assign(const string& s) // 把字符串 s 赋值给当前的字符串
string& assign(int n, char c)  // 用 n 个字符 c 赋值给当前字符串
    
 例子
    string s1 = "ere";
	string s1;
	s1.assign("ere");
```

### 拼接

```c++
string& operator+=(const char* str)   
string& operator+=(const char c)
string& operator+=(const string& str)
    
    
====
string& append(const char* s)  // 把字符串 s 连接到当前字符串的末尾
string& append(const char* s, int n)  // 把字符串 s的前 n  个字符连接到当前字符串的结尾
string& append(const string& s)  // 同 operator+=(const string& str)
string& append(const string &s, int pos, int n12)  // 把字符串从 pos 开始的前 n 个字符连接到字符串结尾
    
    
string s = "哦"；
s += "是"  ； // 我是
```



### 查找替换

```c++
介绍
    查找 ：查找字符串是否存在
    替换 ： 替换指定位置的字符串
    
例子
    
// 从左往右查
int find(const string& str, int pos=0) cosnt ;  // 查找str第一次出现位置， 从pos开始查找
int find(const char* s, int pos=0) const; // 查找 s 第一次出现的位置， 从 pos 开始查找
int find(const char* s, int pos, int n) const  // 从 pos 位置查找 s 的前 n 个字符第一次出现的位置
int find(const char c, int pos = 0) const; // 查找字符 c 第一次出现的位置

=================
// reverse find 从右往左查
int rfind(const string& str,int pos=npos) const; // 查找 str 最后一次出现的位置 从自定位置开始查找
int rfind(const char* s int pos=npos) const; //查找 s 最后一次出现的位置 从自定位置开始查找
int rfind(const char* s, int pos, int n) const; // 从 pos 查找 s 的前 n 个字符最后一次出现的位置
int rfind(const char c, int pos = 0) const; // 查找 字符 c 最后一次出现的位置

================
string& replace(int pos, int n, const string& str); // 替换从 pos 开始 n 个字符为字符串 str
string& replace(int pos, int n, const char* s) // 替换从 pos 开始的 n 个字符为字符串 s

```



### 比较

```c++
介绍
    字符串之间的比较
 比较方式
    字符串是按照字符的ASCII吗进行比较的
  	 = 返回 0
     > 返回 1
    小于 返回 -1
 函数原型
      int compare(const string &s) const; // 与字符串 s 比较
	  int compare(const char* s) const;  //与字符串 s 比较

例子
    string s1 = "helllo" ;
    string s2 =  "helllo" ;
	s1.compare(s2) == 0 ; // true
```

### 存取

```c++
介绍
    string 是对单个字符存取的
 函数原型
    char& operator[](int n); // 通过 [] 取字符串
	char& at(int n); // 通过 at 方法

例子
    string str = "hello";
	cout str[1]; // e
```

### 插入删除

```c++
介绍
    对字符串进行插入和删除
 例子
    string& insert(int pos, const char* s);		// 插入字符串 
	string& insert(int pos, const string& str); 	// 插入字符串 

	string& insert(int pos, int n, char c);  // 从指定位置插入 n 个字符
	string& erase(int pos, int n = npos); // 删除从 pos 开始的n个字符
例子
    string str = "hello";
	str.insert(1,"22")； // h22llo
```

### 截取字串

```c++
介绍
    从字符串中获取想要的字符串
 函数原型
    string substr(int pos=0, int n=npos) const; // 返回由 pos 开始的 n 个字符组成的字符串
例子
    string str = "hello";
	str.substr(1,3); // ell
```













