

## 匿名内部类

```java
// 写法
new 类名(){
    // 重写方法体
}
```







## Lambda 类

### 介绍

```java
匿名内部类 +  只有一个抽象方法
ambda表达式允许你通过表达式来代替接口 、类
```

### 格式

```java
标准格式

    // 只有一个抽象方法的匿名内部类实现继承、接口
    // 正常写法
    new 类名(){ @Override // 重写方法体  }
    // 化简写法
    ( 参数列表 ) -> { 抽象方法代码块 }


         
作用
    // 注意只能是一个抽象方法
    把类创建和方法的重写标注省略，是一个语法糖
参数列表
     1. 类型可推倒，
     2. 小括号省略： 只有一个参数
箭头
     ->  传递的意思， 把参数传递给方法体
    
方法体
     // 默认返回这个语句，编译器加上了 return 和 借我分号
     1. 大括号省略： 只有一个语句 ，要省略 return 和 结尾分号
建议
    大小括号在新手村。还是不要省略
```

### 使用

#### 介绍

```java
使用
    1. 作为参数
    2. 作为返回值
本质
    向上转型。 即使接口的地方 ，可以直接使用其实现类
```



#### 作为参数

```java
// Lambda 接口作为参数
public static void invokeCook(Cook cook){
    cook.makeFood();
}

public static void main(String[] args) {   
        // 传入实现接口的类， 匿名内部类实现
        invokeCook(new Cook(){
            @Override
            public void makeFood() {
                System.out.println("吃饭了");
            }
        });
        // 传入实现接口的类，  lambda 表达式
        invokeCook(()->{
            System.out.println("吃饭了");
        });
    }
    



interface Cook {
    void makeFood();
}
```



#### 回调-延迟加载

```java
介绍
    对参数进行有条件使用
 例子
    public interface A {
		void get();
	}
    public class demo {
        public void showGet(int i, A a){
            if (int = 1){
                Systerm.out.print(A.a());
            }
        }
        public static void main(String[] args){
            // 
            show(1,()->{
                return "666";
            })
        }
    }
```



## Lambda 接口

### 概念

* 有且仅有一个抽象方法的接口
* 可以适用于 Lamba 使用的接口

### 格式

```java
语法
    @FunctionalInterface
    修饰符 interface 接口名称 {
        public static 返回值类型 方法名称(可选参数)；
        // 其他非抽象方法
    }
注解
    // 接口中的方法默认的就是 public static ，所以说接口中只能有一个方法....
    @FunctionalInterface ： 确保接口中只有一个抽象方法
   
```



### 使用

```java
介绍
    一般作为方法的参数、返回值类型
    
个人理解
    // 函数编程是一种范式， 可以通过回调函数实现
    // 避免回调地狱出现， 所以又出现了链式编程（以后补充）
    1. 定义 lambda 接口
    2. 类中编写回调规则， 但不定义回调函数
    3. main 中的 lambda 实现(定义)回调函数
 使用例子
    @FunctionalInterface
    public interface A {
    	void get(String s)；
	}

	class Demo {
        // 这里的get(s) get 是lanbda后的花括号中的函数体 s 是传给 函数体的参数
        public static void show(A a){ a.get(s); }
        public static void main(String[] args){

            
            // show 方法会调用 A 的实现类的 get 方法， 在底层就实现了
            // 你下面只是把要写的方法体重新写了一遍而已，调用在函数调用中自动调用
            // 相当于回调函数
            // 使用匿名内部类
            show( new A(){
                @Override
                get(s){Systerm.out.println("1123"
                                          )}
            });
            // 简写
            /
            show((s)->{
                Systerm.out.println("1123");
            });
        }
        
    }
```

### 常用的函数式接口

#### 介绍

```java
主要在 java.util.function 包中
```

#### Supelier

```java
介绍
    java.io.function.Supplier<T> 接口
    生产型接口，指定接口的泛型是什么类型， 那么接口中的 get 方法就会生产什么类型的数据
public class test2 {
    public static String getString(Supplier<String> sup){
        return sup.get();
    }

    public static void main(String[] args) {
        String s = getString(()->{
            // 重写方法体
            return  "胡歌";
        });
        System.out.println(s); // 胡歌
    }
}
```



#### consumer

```java
accept 接口
    void accept(T t)  消费一个泛型的数据
```





#### Predicate

```java
test  检测类型
and
```





## lambda 方法引用

### 总结

```java
介绍
    lanbda 方法体中仅是引用其他的方法，而不做其他操作，还有引用符语法糖
引用符
    ::
参数
    因为在方法定义的时候，已经确认了调用规则
    所以在调用的时候，编译器自动推倒参数传递，不用再写了
规律
    // 就是 调用函数归属者的方法
    方法归属者 :: 引用的方法；
例子
   对象名:: 引用的方法
   类名 :: 静态方法
   类名 :: new  // 构造器函数属于静态方法，没有具体的对象名， 使用 new 代替
   具体体类型 :: new   //  int[]::new
   super :: 父类方法
   this :: 本类方法


```

### 实例

#### 对象名引用成员方法

```java
public class AObject {
	// 
    public void printUpper(String str){
        Systerm.out.println(str.toUpperCase);
    }
}

@functionalInterface
public interface Printable {
    void print(String s);
}

// 通过对象名引用成员方法
// 前提是对象名已经存在， 成员方法也存在，

public class demo {
    // 传参定义
    
    public static void printString(Printable p){
        p.print("hello");
    }
    public static void main(String[] args){
        
        // 传参实现
		printString((s)->{
            AObject a = new AObject();
            a.printUpper(s);
                
        });
        
        AObject a = new AObject();
        // 就是说： 接口的实现类中，调用的是另一个类的房法
        printString(a::printUpper);
        
    }
}
```

#### 类名引用静态成员方法

```java
@FunctionalInterface
public interface Calcable {
    int calc(int num);
}

// 通过Lambda表法式
public class demo {
    public static void method(int num, Calcable lambda){
        Systerm.out.Println(labda.calc(num));
    }
    
    // 普通 lambda
    public static void main(String[] args){
        method(10, (n)->{Math.abs(n)});
            
	    // Math 类是存在的， 静态方法是存在的 ，左边的参数正好是给函数体的
        method(10,Math::abs)
    }

}
```

#### super引用父类成员方法

```java
@FunctionalInterface
public interface Greetable {
    void greet();
}

public public class Human {
    public void sayHello(){
        System.out.println("hello");
    }
}

public class Men extends Human {
    @Override
    public void sayhello(){
        System.out.println("men");
    }
    
    public void method(Greetable g){
        g.greet();
    }
    
    public void show(){
        method(()->{
            // 创建父类
            Human h = new Human();
            h.sayHello();
        })
            
       //父子关系
       method(()->{ super.sayHello(); });
        
       // super 存在 ， sayHello 存在
        method(super::sayHello);
    }
      public static void main(String[] args){
          new men().show();
      }
}
```

#### this 引用本类成员

```java
介绍
    this 代表当前对象，就是当前类中的成员方法
格式
    this::成员方法
语法例子
@FunctionalInterface
public interface Richable {
        void buy();
}

public class Husband {
    public void buyHouse {
        System.out.print("买房子");
    }
	private void marry(Richable lamba){
        lamba.buy();
    }
    public void beHappy(){
        // lambda 写法
        marry(()->{this.buyHouse})；
            
        // 简写
        marry(this::buyHouse)
    }
}
```

#### 类的构造器引用

```java
public class Person {
    private String name;
    public Person(String name){
        this.name = name;
    }
}

@FunctionalInterface
public interface PersonBuider {
    Person builder(String name);
}

public class Demo {
    public static void printName(String name, Person pb){
		Person person = pb.builder(name);
    }
    
    public static void main(String args){
		printName("dd", (String name)->{
            return new Person(name);
        });
        
        // 方法引用
        printName("dd",Person::new)
    }
}
```

#### 数组创建

```java
interface ArrBuild {
    int[] buildArr(length);
}
class main {
    public static int[] create(int legth, ArrBuild arr){
        return buildArr(length);
    }
    public static void main(String[] args){
        create(10,(len)->{
            return new int[len];
        })
        // 简写
        create(10, int[]::new);
    }
}
```



### 待理解

```jaa
//-----------------------------------------------------
成员方法的方法签名，前面会追加 this 的类型。
静态方法的方法签名，因为没有 this, 不会追加任何东西。
当 :: 前是一个实例时，这个实例会作为第一个参数给绑定到目标方法签名上。
```

