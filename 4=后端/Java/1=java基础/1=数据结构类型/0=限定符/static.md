## static

### 介绍

```java
介绍
    所有对象公用一份数据 
    	不属于某个对象，
    	成员使用该字段，就表示该成员不属于任何一个实例对象，而是属于所在的类
    在编译阶段分配内存(全局区)

    
优势
    只在需要的时候进行创建， 而且只被创建一次
    可以节省内存，对于对象都一样

```

### 静态访问

```java
介绍
    // static方法就是没有 this 的方法。
    被static关键字修饰的方法或者变量不需要依赖于对象来进行访问，只要类被加载了，就可以通过类名去进行访问。
    而且可以在没有创建任何对象的前提下，仅仅通过类本身来调用static方法。

访问规则
	静态只能访问静态 ： 静态方法中只能使用静态变量、调用静态方法
    非静态通吃      ：  非静态方法随意访问
    
原因
    1. 在内存中先有静态内容， 后有非静态内容
    2. 非静态成员方法/变量都是必须依赖具体的对象才能够被调用
       静态方法来说，是没有this的，因为它不依附于任何对象，就可以进行访问
特点
    1. 静态优先于非静态加载到内存中（静态优先于对象进入内存）
    2. 被 static 修饰的成员变量不能被序列化，序列化的都是对象
    3. 静态成员不能通过 this 访问：因为 this 是对象创建之后生成的
    4. 静态方法中不能使用 this 

    
例子
    public class Main {
    static int a = 2;
    public int b = 3;
    public static void add1(){
        a++;
        // b++; 错误
        // this.b++ 错误
    }
    public void add2(){
        a++;
    }

}
```

### 修饰成员

#### 调用

```java
1. 通过对象进行访问
2. 通过类名进行访问(推荐)
    本类中调用可以省略类名称
```

#### 构造器 + 局部变量

```java
// 静态方法中不能使用this，而构造器中可以使用this关键字
构造器不是  static 限定的
    https://blog.csdn.net/qq_17864929/article/details/48006835

static 不能用于局部变量 ！！！！！(这是  java 语法规定的)  
```



#### 静态成员变量

```c++
介绍
    静态变量
    	被所有的对象所共享，在内存中只有一个副本，它当且仅当在类初次加载时会被初始化
	非静态变量
    	是对象所拥有的，在创建对象的时候被初始化，存在多个副本，各个对象拥有的副本互不影响。
访问
    2. 被 static 修饰的成员变量不能被序列化，序列化的都是对象
    3. 静态成员不能通过 this 访问：因为 this 是对象创建之后生成的
    
初始化
    初始化顺序按照定义的顺序进行初始化
语法例子
    class Person {
    // 类内声明
    public static int age;
    }

	// 类外初始化
	// 2 通过类名进行访问， 类内调用，可以省略类名
	int Person.age = 20；
        
         // 类外访问
        // 1. 通过对象进行访问
        Person p2 = new Person();
        p2.age = 200;
        p1.age  // 200
    }
```

#### 静态成员方法

```c++
介绍
    // static 修饰方法， 一般称作静态方法
    所有对象共享同一个函数
    静态成员函数只能访问静态成员变量
    
调用
    //     4. 静态方法中不能使用 this 
    1. 通过对象访问
    2. 通过类名访问
    
语法例子
    class Person {
   
        int num;
        public int age;
        public static void func() {     
             // 出错，静态成员函数不能访问费静态成员变量
            // 无法判断变量属于哪一个对象
            num = 10;
            // 静态变量不属于哪个对象，变相理解成全局的 ，全局只有一个
            age = 20; 
            cout << "static" << endl;
        }
    }
	
	// 类外初始化变量
	int Person::age = 20;
	void test() {
        // 通过对象访问
        Person p;
        p.func();
        
        // 通过类名访问
        Person::func();
    }
```

#### 静态代码块

```java
格式
    public class 类名称 {
        static {
        	静态代码块
        }
    }

特点
   类初次被加载的时候，会按照static块的顺序来执行每个static块，并且只会执行一次。
用途
    对静态变量进行赋值， 优化程序性能
例子
    public class Person {
        static {
            system.out.println("1");
        }
        public Person() {
            system.out.println("2");
        }
    }

	// 执行
	Person p1 = new Person()  // 1 ， 2
    Person p2 = new Person()  // 2
```



### 访问权限

```java
1. Java中的static关键字不会影响到变量或者方法的作用域
2. Java中能够影响到访问权限的只有private、public、protected（包括包访问权限）这几个关键字    
```



### 思考

```java
static 修饰的成员， 颇像全局成员，虽然 java 禁止使用全局成员
尽量少用 static
```

