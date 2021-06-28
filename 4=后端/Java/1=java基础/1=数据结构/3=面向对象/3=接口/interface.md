## 介绍

```java
在 Java 中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。

接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。
```



## 声明实现

### 语法

```java
语法
    
    public interface 接口名称 {
    	// 接口内容
	}
使用
    1. 接口不能直接使用， 必须有一个 实现类来实现该接口 
	    public class 实现类名称 implements 接口名称 {  }
	2. 接口实现类必须覆盖重写(实现)接口中所有的抽象方法
        实现 ：去掉 abstract , 补全{} 中的方法体
     3. 创建实现类对象， 进行使用
        
注意
    如果接口的实现类是抽象类 ，那么这个抽象类不用实现所有的方法
    接口没有静态代码块或者构造方法
```

### 作用域

```java
介绍
    接口中的任何域
    	自动化 static final 的
    接口中的变量
    	自动化 public static final 的
    接口中的方法
    	自动化 public abstract 的
    接口中的类
    	自动化 public static 的
    
注意
    se5 之前用接口来实现枚举
    public interface Month{
        int 
            JANUARY = 1, 
            FEBRUARY = 2;
	}
```

### 初始化

```java
介绍
    接口中定义的域不能是 "空 final" , 需要初始化
语法例子
    // 注意其中的域都是 static ,类第一次被加载时初始化
    // 这些域不是接口 的一部分， 他们得值被存储在该接口的静态存储区域内
    public interface A {
       // Person a;  会报错
        Person p = new Person();
        int a = 3;
    }
```



### 命名

```java
接口
    接口名称 Abstract.java
实现类
    实现类名称 AbstractImpl.java
```



## 成员方法 

### 发展

```java
java 7
    常量
    抽象方法
java 8
    默认方法
    静态方法
java 9
    私有方法
```

### 抽象方法 - abstract

```java
介绍
   任何版本的 java 中都可以使用抽象方法 
    默认修饰词 public abstract
语法
    // public abstruct 是固定用法，可以部分省略或全省， 默认灰色的
    public abstract 返回值类型 方法名称(参数列表)；
    
 
```



### 默认方法 - default

```java
介绍
    java 8 中新添加的， 接口中可以定义默认方法 
语法
    // public 可以省略， 但是 default 不可以省略
    public default 返回值类型 方法名称(参数列表) {
    	方法体；
	}
使用
    1. 解决接口升级的问题
    	一个接口和它的实现类都已经成型了， 之后需要对接口添加新的方法，但是不能更改已有的实现类及其方法
    2. 可以通过接口实现类对象， 直接调用
    3. 可以被接口实现类进行覆盖重写
```

### 静态方法 - static

```java
介绍
    java8 中允许的方法 ，参看方法中的 static
 格式
    public static 返回值类型 方法名称（参数列表）{
		方法体
	}
使用
    直接使用接口名称进行调用
```

### 私有方法 - private

```java
介绍
    java9 中允许的接口中有私有方法 ，参看方法中的 private
 分类
    普通私有方法
    	解决多个默认方法之间代码重复的问题
    静态私有方法
    	解决多个静态方法之间重复代码问题
 语法
    private 返回值类型 方法名称(参数列表) { 方法体 }；
    private static 返回值类型 方法名称(参数列表) { 方法体 }；
例子
    public interface MyInterfacePrivateA {
    	public void methodDefault() {
            methodCommon();  
        }
    	private void methodCommon() {
            System.out.println("aaa")
        }
    
    
	}

```



## 成员变量

### 介绍

```java
修饰符
	必须使用 public static final 进行修饰， 者三个是在一块儿的
效果上看
    就是接口的 常量，是全局的
语法格式
    // 前三个修饰符可以随意省略， 但是不能省略赋值
    public static final 数据类型 变量名 = 数值 ;
    // 是一个常量， 一旦赋值， 就不可以修改 
    public static final int NUM = 10 ;
注意
    接口常量中的名称 ，必须用大写 ， 用下划线分割
原因
    final 
    	接口是一种协议，协议是所有实现接口的类都必须遵守的。
         如果变量不是final，那么每个实现接口的类就可以更改这个变量的值，也就违反了OCP原则。
    static
    	Java语言的本身机制有关, java 不支持多继承
         static 保证实现多继承，
    	有两个接口A和B，而类C实现了接口A和B， 可以通过 接口.变量， 判断变量是哪一个接口的

```

### 操作

```js
介绍
	只可读，不可修改
```



## 成员类

```java
// 接口中使用
public interface A {
    public void get();
    // 创建公共的代码， 让不同的实现所公用，可以使用嵌套类
    class b implements A {
        public void get(){
            Systerm.out.print("hello");
        }
    }
}
```



## 实现+继承

### 接口多实现

```java
介绍
    一个类的父类是唯一的 
    一个类可以同时实现多个接口
格式
    public class myInterfaceIml implements InterfaceA, interfaceB {  };
注意
    多个接口中如果
    	有重复的抽象方法 ， 只需要覆盖一次即可
    	有重复的默认方法 ， 那么实现类一定要对冲突的类实现覆盖重写
    实现类
    	是非抽象类 ， 要实现所有的接口的所有方法
    	是一个抽象类， 那么就不需要实现所有的方法
    	父类 和 接口的方法冲突 ， 优先使用父类中的方法
    
```

### 接口多继承

```java
介绍
    类与类    ：之间是单继承的， 直接父类只有一个
    类与接口   ： 多实现 ， 一个类可以实现多个接口
    接口与接口  ： 多继承 ，一个接口可以继承多个接口
    
注意
    接口方法 
    	抽象方法重复 ： 没关系
    	默认方法重复 ： 子接口必须进行默认方法的覆盖重写， 而且要携带 default 关键字
语法例子
    public interface A{};
	public interface B{};
	public interface C extends A, B{};
	// 实现类，若要实现接口 c ，那么实现类必须要重写 接口 A B C 中的所有方法
```

### 接口多重继承、多重实现

```java
// 跟类一样
```

## 复用冲突

### 方法名称冲突

```java
// 多重继承，会出现方法名冲突的情况
没法特别好的方式解决，尽量避免。。。。
```



## 内部接口

### 介绍

```java
介绍
    接口是一种数据类型
    所以可以嵌套在类护着接口中
接口例子



```

### 用在类内部

```java
介绍
    在类内部，访问权限可以随意设置了，更优的是设置为 private
语法例子
    
	class a {
		private interface B {
            void f();
        }
        public class BImpl implements B {
            // 在调用 F 的时候，可以防止向上转型到 a
            public void f(){};
        } 
    }
```



### 用在接口内部

```java
介绍
    实现某个接口的饿时候， 不需要实现嵌套在其内部的任何接口
	interface A {
        interface B {
            void f();
        }
    }
```

## 函数式接口

```java
介绍
    // 参考函数式编程
    只有一个抽象方法的接口
标注
    @FunctionalIterface
    public interface A {};
```



## 使用

```java
接口是理想的，但不是凡事都去用接口，任何抽象性都要符合真正的需求
 必要的时候，还是要重构接口， 
```































