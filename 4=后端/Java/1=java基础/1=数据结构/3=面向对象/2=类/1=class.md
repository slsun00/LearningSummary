## 介绍

### 使用

```java
1. 一个文件中 可以有多个类
    但是只能有一个 public 类，其 public 类的名字和 文件(xxx.java)名字相同
```



### 类访问权限

```java
介绍
    成员类	     ： public/default
    成员内部类   : public protected default private
    局部类       : 不能用任何修饰符， 因为没有谁能访问它， 除了在类内部运行
    
注意
外部类不能使用 private 除了该类外， 其他类都不能进行访问
```

### 声明限制

```java
限制
    1. 每个编译单元(文件) 都只能有一个 public 类， 多的话会报错
    	每个编译单元都有单一的公共接口， 用 public 实现
    	这个接口可以按照要求包含众多的支持宝访问权限的类
    2. public 类的名称必须完全与含有该编译单元的文件名相匹配， 包括大小写
    3. 文件中可以都不使用 public 类
    	其中就不需要遵命名字的限制了，但是最好不要这样做
```



## 类

### 使用步骤

```java
// 定义一个标准类 ，这样的标准类叫做  Java Bean
1. 所有的变量成员都要进行私有化 ： private 修饰
2. 为每一个变量成员设置一对 getter/setter 方法(视权限控制来)
3. 编写一个无参构造方法
4. 编写一个全参构造方法
    
```



### 声明

```c++
方式
    1. 先声明后赋值
    2. 声明的时候赋值
    
标准格式
    class 类名 {
        访问权限： 属性(字段属性)；
        访问权限： 行为(方法)
    };
    
语法实例
// 先声明后赋值
    // 先声明 ，相当于告诉编译器，等下会声明这个类，不用报错
    class Person；
    // 赋值
    class Person {
        Person(){};
    }

// 声明的时候赋值
	class person {
         Person(){};
    };
```

### 关键字

```c++
// 访问权限
    public	公共权限
    	类内部可以访问  ， 类外不能访问
    protected  保护权限
    	类内部可以访问 ， 类外不能访问 , 子类可访问父类保护内容
    private 	私有权限(默认)
    	类内部可以访问  ， 类外不能访问 ， 子类不可访问父类私有内容
// 状态
    static  静态成员(类独有) ，静态成员都有访问权限
    	静态成员变量 
    	静态成员方法
    friend 友元类
    	
// 属性
    类的属性和行为统一称为成员 
    属性 ,  成员属性 ， 成员变量
// 行为方法
    类的属性和行为统一称为成员 
    行为 ， 成员方法 ， 成员函数

    
// 例子
class Circle {
    public: 
    	int m_r;
	    double calculate() {
            return 2 * PI * m_r;
        }
}
int main() {
    Circle c1;
    c1.m_r = 10;
    c1.calculate();   // 20PI
}

// 接口不需要显示实现，只要一个变量，含有接口类型中的所有方法，那么这个变量就实现这个接口
```

### 实例化赋值

```c++
介绍
    // 实例化 、 实现 、
    实现类，将类变成一个实际的类
    主要还是字段属性的赋值 ，方法就直接传参调用了
声明
    
    class Student {
        public:
        	string name;
        protected:
        	string Car;
        private:
        	string password;
        	void set() {
                // 类内部均可以访问到
                name = "lili";
                Car = "ziz";
                password = "123";
            }
    }
    
普通类例化
    // class 关键字可以省略，故建议省略，虽然写着舒服
    class Student s1;
指针类匿名
    Student *abc = new Student;


权限
    s1.name;  // 可以
    s1.Car; // 类外访问不到
	s1.password; // 类外访问不到
```

### 访问、赋值

```c++
访问
    点操作符(.) : 进行普通类成员访问
    箭头	(->) : 进行指针类成员访问


赋值
    周期分类
    	实例化之后赋值
    	实例化的时候赋值(少见)
    方式分类
    	普通类 ： 点操作符(.) + 内部函数
    	指针类 ： 箭头   (->) + 内部函数
  	例子
1.实例化之后赋值
    // 通过 . 操作符进行赋值
       s1.name = "lili";
    // 通过 内部方法对字段进行赋值
     class Student {
         Public:
         	string Name;
         	void SetName(string name) {
                Name = name;
            };
     }
	s1.SetName("lili");
	// 指针累的通过箭头赋值
	abc->name = "lili"
```



### 初始化列表

```c++
参考成员方法中的构造方法
    用来初始化属性字段
```

## 成员变量

### 私有化

```java
// 成员变量没有指定值，就使用类型的默认值
//  将成员变量私有，不暴露给方法
注意
    对于 boolean 返回值， getter 函数设置成 isXXX ,setter 方法不变
例子
class Person {
    // 设置名字
    public void setName(string Name) {
        name = Name;
    }
    // 获取姓名
    public string getName() {
        return name;
    }
    // 年龄设置
    public int getAge() {
        // 年龄初始化
        age = 0;
        return age;
    }
    // 爱人权限设置
    public setLover(string name) {
        lover = name;
    }
// 通过类内方法进行读写权限设置
private String name;  // 可读可写
private int age;	 // 只读
private tring lover;  // 只写
```



## 成员方法

### 介绍

```java
成员方法就是写在类中的方法， 就是之前说的方法
方法定义的位置不分先后 。 不调用不执行
 方法之间不能 嵌套
```

### 构造函数

#### 介绍

```java
构造函数
    // 构造方法属于 静态方法 ，默认实现 static 
    用于创建对象时为对象的成员属性赋值
    用来初始化类
    
语法
    // 参数可有可无, 无返回值（连 void 都没有）
    public 类名(参数列表){
    	方法体
	};
注意
    名称与类名称一致、可重载、无返回值（不写 void , 更不要写 return）
    // 默认修饰符 static
    程序在调用对象的时候会自动调用，而且只会调动一次
    // 因为二者都要求被放在构造器的首行
	super()和this()是不能同时出现在构造器中，
    
书写准则
    尽量使用简单的方式让对象进行正常状态
    尽量避免调用其他方法, 非要调用，要调用 final(private) 方法 ,
```



#### 分类

```java
分类
    参数分类 ： 有参构造 、 无参构造(默认构造函数)
    类型分类 ： 普通构造 、 引用构造
    
注意
    如果没有手动设置构造函数，编译器会提供一个空的构造方法 ，编译器提供的构造函数是空实现

例子
public class Person {
    private int age;
    // 普通构造
    public Person() { " 无参构造函数" }；
    // 有参构造
    public Person(int a) {"有参构造函数"}
    
    // 拷贝构造函数
    public Person( const Person &p) {
       // 拷贝、引用拷贝" 
        age = p.age
    }   
}
```

#### 调用

```java
// 对于跨包的需要看模块化调用哪里
new 类名(参数)
    
```



#### 构造函数嵌套

```java
// 一个构造方法中调用另一个构造方法
class Person {
    String name;
    public Person(String name){
        this.name = name;
    }
    public Person(){
        // 使用 this 进行调用
        this.Person("lili");
    }
    
}
```

#### 调用规则

```c++
基类的构造器总是在导出类的构造过程中被调用，并且按照继承层次网上链接，让每个基类的构造器都被调用
 子类开始构造
    基类构造
  子类构造结束
//----------------------
调用基类构造器
    不断递归调用，
按照声明顺序调用成员的初始化方法
调用导出类构造器主体
 
注意
    1. 尽量不要在构造函数中调用多态的方法（）
    因为： 你调用某个方法，但是这个方法操纵的成员还没有初始化，这会导致 bug
    
```

## 成员类-内部类

### 介绍

```java
介绍
    一个类内部包含另一个类
分类
    成员内部类
    局部内部类（包含匿名内部类）
使用
    外部类有一个方法，这个方法返回一个内部类的引用
```

### 权限修饰符

```java
成员类	     ： public/default
静态成员类   ： static
成员内部类   : public protected default private
局部类       : 不能用任何修饰符， 因为没有谁能访问它， 除了在类内部运行
```



### 成员内部类

#### 定义

```java

定义格式
    修饰符 class 外部类名称 {
        修饰符 class 外部类名称 {
        }
    }
    
```

#### 特点

```java
特点
    // 内部类
    1. 自动拥有外部类的全部访问权限
    2. 作用域只在类内部
    
内部成员
    其内部不能含有 static 方法或者字段，也不能包含静态类
    
原因
// 内部类自动拥有外部类的全部访问权限
    当外部类创建一个内部类对象，内部类会捕获一个外部类的引用,内部类通过这个引用进行访问
    这个处理编译器自动处理， 不用使用者管理
    
例子
    public class Body {
        private String name = "55";

        public class Heart {
            // 自动拥有外部类的全部访问权限
            public void beat(){
                 System.out.println(name)  // 55
            }
            // 手动获取外部类引用
            public Body outer(){
                // return new Body();
                return Body.this;
            }
        }
    }
```

#### 成员类创建

```java
创建原则
    // 内部类对象会连接到创建它的外部类对象上（内部类拥有外部类的所有权限）
    在拥有外部类之前不能进行内部类的创建

外部类内使用
    
    1. 非静态方法 直接创建 new
    // 方法属于调用对象，动态绑定
    public class Body { 
        public Inner inner() { return new Inner(); }
        public class Heart {
            public void beat(){ 。。。}；
        }
    }
	2. 静态方法中
     // 方法属于类，不属于某个对象
        所在在创建内部类之前，需要先有外部类对象
        
外部类外使用
    // 需要提前知道外部类对象， 否则内部类无法连接外部类     
    1. 外部类  方法   创建
       // Inner inner = ( new Body() ).inner();  new 和 点 平级从左到右
       Inner inner = new Body().inner();
    2. 外部类  构造方法 创建
    	// 缩写 Body.Heart heart = new Body().new Heart();
        Body body = new Body();
        Body.Heart heart = body.new Inner();
```

#### 编译

```java
注意
    // 编译后的嵌套类， 内部类的class 文件 名称是
    外部类 $ 内部类 . class
```



#### 内外同名变量

```java
public class Body {
    int num = 20;
    public class Inner {
        int num = 30 ;
        public void method() {
            int num = 40;
            System.out.println(num);  // 40
            System.out.println(this.num);  // 30
            System.out.Println(Body.this.num); // 20
        }
    }

}
```

### 静态内部类

#### 介绍

```java
介绍
    别称： 类嵌套
    将内部类声明为 static
    不需要内部类队形与其外围类对象之间有联系， 
特点
    // 静态内部类包含
    静态内部类不在保留对外部对象的引用
    创建嵌套类的对象，不需要外围类的对象
    不能从嵌套类对象中访问费静态的外围类对象
 内部成员
    成员随意
    
语法
    修饰符 class 外部类名称 {
        修饰符 static class 外部类名称 {
        }
    }
    
使用
    1. 在接口中使用
    	// 参看接口中的 成员类
    	接口中的类自动 public static 化
    	甚至在内部类实现其外围接口
    2. 在类中使用
    	用于测试代码，上限的时候删除测试文件
使用
// 在类中使用
// 生成一个独立的类 TestBed$tester, 运行这个类进行测试，
// 产品发布前删除掉 TestBed$tester.class 文件即可
 public class TestBed {
     public void fun() {System.out.print("f()")}
     public static class tester {
         public static void main(String[] Args){
             TestBed t = new TestBed();
             t.f();
         }
     }
 }
```

#### 访问

```java
// 访问外部类成员
无论一个内部类被嵌套多少层， 他都透明访问多有嵌入它的外围类的所有成员
```



### 局部内部类

#### 定义

```java
介绍
    // 局部之中，没有类可以访问，所以不能使用修饰符
    一个类定义在一个方法的内部 ， 那么这个类就是局部类
 	局部 ：只有当前所属类方法体内才能使用， 除了这个方法外面就不能使用
    
 位置
    一个方法体重
    一个代码块中
 语法例子
    public class Outer {
        public void methOuter(){
            // 局部类
            // 当前类出了方法就不能用了，所以初始化要在方法内部
            public class Inner {
                int num = 10;
                public void show(){
                    System.out.print(num);
                }
            }
            
            Inner inner = new Inner();
            inner.show();
        }
    }
	// main 调用
	Outer outer = new Outer();
	// 变相调用局部类中的方法
	Outer.methOuter();
```



#### 访问方法中的常量

```java
介绍
    内部类需要访问外部类方法中的成员变量，这个局部变量必须是 final 的
    jdk8+ 只要局部变量事实不变， 那么这个 final 可以省略
原因
    new 出来的对象在堆内存中
    局部变量跟着方法走， 在栈内存中
    方法运行结束，立刻出栈，局部变量会马上消失， 但是 new 出来的对象会一直在堆中存在， 直到垃圾回收消失
    所以
    	对象声明周期更长，只要变量不变，就可以 copy 一份到栈中，
```

### 匿名内部类

#### 基础

```java
介绍
    如果接口的实现类 or 父类的子类 ， 只需要使用唯一的一次，
    那么这种情况下就可以省略掉该类的定义， 改为使用 匿名内部类
    
特点
    匿名类没有构造器
    一个匿名类只能显示一个接口
使用
    1. 实现接口
    2. 扩展了有非默认构造器的类
    3. 执行字段初始化
    4. 通过实例初始化实现构造（匿名类不可能有构造器）
```

#### 基础语法

```java
语法
    // 省略实现类：匿名内部类，创建对象只能创建一次
    接口名称 对象名 = new 接口名称() {
		// 覆盖重写所有的方法
	}

	// 省略对象 : 匿名对象 ， 方法只能使用一次
	// 创建之后，立即执行你要执行的方法
	new 接口名称（）{
        // 覆盖所有方法
    }.test();
```

#### 使用

```java
abstract class Base{
    private String name;
}
public class c {
    // 如果传入的参数需要在匿名内部类中使用， 必须是 final 字段
    // 匿名内部类，使用类外部定义的对象， 编译器要求其参数需要时 final 的
    // 如果只是传过来，但是不使用，就不需要 final 了
    public static Base getBase(){
        return new Base(final String Name; int i){
            // 重写Base 的方法
            private String name = Name;
		};
    }
}
```







```java

    
优势
    // Lambda 表达式
    即制定了一种做事的方案，其实就是一个函数
    无参数 ： 不需要任何条件就可以执行
    无返回值 ： 该方案不产生任何结果
    代码块 ： 方法体才是具体执行步骤

注意
     匿名内部类创建对象的时候， 只能创建一次，创建多个对象，只能使用实现类
        
        
    匿名对象， 当前行执行结束后，系统会立即回收掉匿名对象
    只有右边的对象， 没有左边的名字和赋值运算符
     
```





## 类中指针

### 拷贝

```c++
介绍
    深拷贝 ： 简单的赋值拷贝操作 
    浅拷贝 ： 在堆区重新申请空间， 进行拷贝操作
总结
    如果属性有在堆区开辟的 ， 一定要自己提供拷贝函数，防止浅拷贝带来的问题
    
例子
    class Person {
        Person() {
            cout << "默认构造函数" <<endl;
        }
        
        Person(int age， int height) {
            Age = age;
            // 开辟一个堆区的数据
            Height = new int(height)；
            cout << "有参数构造函数" << endl;
        }
        // 0----------------------------------------------------------
        // 解决浅拷贝这样的问题，使用深拷贝
        // 自己实现拷贝构造函数，解决浅拷贝函数
        Person(const Person & p) {
            cout << "拷贝函数调用" << endl;
            Age = p.Age;
            // 深拷贝操作
            Height = new int(*p.Height);
        }
        // 0----------------------------------------------------------
        ~Person() {
            // 析构代码， 将堆区开辟数据做释放操作
            if (Height != NULL) {
                delete Height;
                Height = NULL;
            }
            cout << "析构函数" << endl;
        }
        
        int Age;
        int *Height;  // 指针开辟到堆区
    }

	void test1() {
        // 堆区的存储特点是，先进先出
        // 所以程序先释放 p1 随后释放 p2
        Person p1(18);
        // 下面利用编译器提供的拷贝函数， 会做浅拷贝
        // p2 拿到的 Height 和 p1 拿到 Height 的堆内存地址是一样
        // 前面 p1 已经进行过释放了（标记为未分配），这里 p2 再进行释放操作， 就会出现错误
        Person p2(p1);
        // 0----------------------------------------------------------
        // 深拷贝解决
        // p2 拿到的 Height 和 p1 拿到 Height 的堆内存地址是不一样的了
        // p2 重新开辟了一个新的堆内存
        Person p2(p1)；
        
        // 0------------------------------------------------------------

    }

	int main() {
        test1();
    }
```



### 空指针访问成员函数

```c++
介绍
    c++ 空指针也可以调用成员函数，
    但是要注意使用有没有使用到 this 指针 ，用到 this , 要加以判断代码的健壮性
    
例子
    class Person {
    public :
        int age;
        void showClass(){ cout <<"showclass"<< endl; };
        // 属性前边都默认加了一个 this 箭头
        // cout << this->age << endl
        void showage(){ 
            // 防止空指针
            if (this == NULL) {
                return;
            }
            cout << age << endl;
        }；
    }

	void test(){
        Person *p = NULL;
        p->showClassName();
        // 下面出现  this 冲突 , p 是空指针，是空的东西，
        // 方法调用 this 指向一个空的值 ，再访问其中的属性，所以会报错
        p->showage();
    }
```



## 操作

### 两个对象使用同一个方法

```java
实际上使用的是方法存储在堆区的地址
```



### 两个引用指向同一个对象

```java
Phone phone  = new Phone();
System.out.println(phone.brand);  // null

// 将 per 中存储的地址值赋值给 two ,通过修改 two , 会修改 per 的属性值
Phone two = phone;
two.brand = "qwe";
System.out.println(two.brand); // qwe
System.out.println(phone.brand);  // qwe

Person two = per;
```

### main

```java
可以为每个类都创建一个 main 方法， 可以让每个单元测试变得很简单，也无需删除，可以将其留到下次使用
```

### 相等比较

```js
== 		
    比较的是内存地址
作用
	对比对象的内容， 默认的 Object.equals 对比的是对象的地址
结果
	// 以下有一个为真就会返回真
	对象内容： 重写， 注意内容相同，地址不一定相同
    对象地址： 默认方式
注意
	一个类重写 equals 的同时，最好重写 hashCode 


```



## 类底层

### 构造函数

```java
// 构造器不是  static 的
// 类的构造器虽然没有用 static 修饰，但是实际上是 static 方法
1. 而在类的构造器中，是有隐含的 this 绑定的，因为构造方法是和类绑定的，
    	从这个角度来看，构造器不是静态的。
2. 从类的方法这个角度来看，因为 类.方法名不需要新创建对象就能够访问，
    	所以从这个角度来看，构造器也不是静态的
3. jvm
    static 方法 ：
    	调用 static 方法时是使用的 invokestatic 指令
    	invokestatic 指令是专门用来执行 static 方法的指令
    构造器方法： 
    	new 对象调用的是 invokespecial 指令
    	invokespecial 是专门用来执行实例方法的指令
    所以从这个角度来看，构造器也不是静态的
```



### 变量和方法存储

```c++
介绍
    
    类的成员变量和变量方法分开存储
    	成员变量 ： 非静态对象 -- 对象上
    	成员方法 ： 
    		方法体 ： 放在方法区域
    		堆上 ：  在对象存储区域 ， 放的是其在方法区的地址索引
    		栈上 ： 压栈执行，执行完出栈
    对象上：（占用对象的空间）
   		非静态成员变量， 对象在堆上
    不同对象
    	不同对象占用不同的堆空间
    	但是对空间中存储的成员方法的地址是一样的
    --------------------------------------------
实例
    空对象占用内存空间  1 ；
    	c++ 编译器会给每个空对象也分配一个字节空间 
    	为了区分空对象占用内存的位置 ， 每一个空对象也应该有一个独一无二的地址
    非空对象
    	非静态成员的属性字段的大小之和 ，不包括对象方法
    	因为静态成员不属于任何一个对象
```





## 复用

* 继承
* 组合
* 代理

```java
组合
    通常用于在新类中使用现有类的功能而并非它的接口的情况，
    即 ： 用户看到的是新的类定义的接口，而非嵌入的对象的接口
使用
    // 优先使用组合
   组合： 不用在程序设计的时候进入继承的层次结构中，可以动态选择类型，
   继承： 在编译的时候就需要知道确切类型
   通用准则 ：用继承吧表达行为间的差异，并用字段表达状态上的变化
```



