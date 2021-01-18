## 类 class

## 介绍

*   es6 中新增了类的概念
*   类抽象了对象的公共部分，泛指某一大类
*   对象特指某一个，是通过类实例化一个具体的对象
*   类是用于创建对象的模板

## 本质

```js
class 本质
    特殊的函数
    还是函数，可以简单理解为 类是构造函数的另一种写法
    具有和构造函数一样的特点
    
特点(就是：构造函数特点)
	1. 类有原型对象 prototype 
    2. 类原型对象 prototype 里面有 constructor 指向类本身
    3. 类可以通过原型对象添加方法
    4. 类创建的实例对象有 __proto__ 原型，指向类的原型对象 
    
注意
	es6 的绝大部分功能，es5都可以做到，新的类写法让对象原型写法更加清晰、更像面向对象
    es6 中 类是语法糖
```

## 声明

```js
种类
	类声明
    类表达式（）

类声明
	class 类名 {
        construtor(){}
        //other class body 
    }
	// 实例化使用
	let 变量 = new 类名()
    
类表达式
	// 不用调用 new 实例化，自动实例化
	// 未命名、匿名
	let 变量名 = { construtor(){} }
    // 命名
    let 变量名 = 类名{ construtor(){} } 

解析
 	class 关键字          : 创建类，类名习惯首字母大写
    constructor() 构造函数  : 用于创建和初始化一个由class创建的对象 ，默认构造方法
	new 
    	生成类的实例对象 ，自动调用 constructor() 构造函数
    	1. 类必须使用 new 实例化对象
规范
    	类名后面不要加小括号
        生成实例，类名后面加小括号，构造函数不需要加function关键字
特点
	// 类声明
        此方式进行的类声明不会提升
        你首先需要声明你的类，然后再访问它，否则抛出类似错误 // ReferenceError
    // 类表达式
        类表达式也同样受到类声明部分中提到的类型提升的限制。
```



### 类body

```js
类的类体是一对花括号/大括号 {} 中的部分
	其中有类成员 、方法 、构造函数	
    class Star {
        // 构造函数
        construtor(uname) {
            this.uname = uname
        }
        // 类成员
        age = 20
		// 类方法
		run(){ alert('跑步') }
    1}
    
    // 类调用
    // 实例调用
    
注意
	class body 中的代码，都遵循严格模式 
    
```

## 字段

### 介绍

```js
// 公有（public）和私有（private）字段声明是一个JavaScript标准委员会TC39提议的试验性功能 （第3阶段）
公有字段
分类
	静态公有字段
    实例公有字段
 特点
	可编辑的，可遍历的，可配置的
     他们本身不同于私有对应值（private counterparts）的是，它们参与原型的继承。
```



### 公有字段

#### 静态公有字段 static

```js
作用
	创建一个只在每个类里面只存在一份，而不会存在于你创建的每个类的实例中的属性
    用它存放缓存数据、固定结构数据或者其他你不想在所有实例都复制一份的数据。
    
声明
	class a {
        // 未初始化的 ,初始化为undefined。
        static num1
       // 
        static num = 66
    }

添加
	声明一个类的时候，使用Object.defineProperty方法将静态公有字段添加到类的构造函数中
访问
	类被声明之后，可以从类的构造函数访问静态公有字段。
   		 a.num // 66
	静态公有字段不会在子类里重复初始化，但我们可以通过原型链访问它们
		class Father { static num1 = 'num_1'; }
        class Son extends Father { static num2 = 'num_2'; }

        console.log(Son.num2); // num_2
        console.log(Son.num1); // num_1
	可以通过名字引用构造函数，并使用super获取到存在的超类构造函数。
    	class Father {
          static f1 = 1;
          static f2 = this.f1;
          static sum() { return 'father'; }
        }

        class Son extends Father {
          static s1 = super.sum();
        }

        console.log(Father.f2);  // 1
        console.log(Son.s1);	 // father

```

#### 公有实例字段 public

```js
介绍
	存在于类的每一个实例中。
    通过声明一个公有字段，我们可以确保该字段一直存在，而类的定义则会更加像是自我描述。
    
添加
	在基类的构造过程中（构造函数主体运行前）使用Object.defineProperty
	在子类构造函数中的super()函数结束后添加。
语法
	// 初始化字段时，this指向的是类正在构造中的实例
	class a {
        // 没有设定初始化程序的字段将默认被初始化为undefined。
    	num1
        num2 = 22
    }
    const instance = new a();  // a.num2 = 22

初始化	
    可以在子类中使用super来访问超类的原型。
    class  Father {
          f1 = 1 ;
          f2 = this.f1;
          sum() { return 'father'; }
    }

    class Son extends Father {
        s1 = super.sum();
    }

    const father = new Father ();
    const son = new Son ();

    console.log(father.f2);	// 1
    console.log(son.s1);    // father

```

### 私有字段

```js
只是在公有字段的基础上加上一个 #
```



## 方法

### 介绍

```js
1. 就是函数，一个对象的属性的属性值是函数，属性、函数的名称一样可以缩写
     { sum: sum(){} } 缩写为  { sum(){} }
 2. 分类
 	构造方法 ：constructor（） 必备方法
 	原型方法
    公共方法
	    静态公共方法 ： static 声明的
        公共实例方法    public (省略声明)
```

### 构造函数

```js
class a {
    // 构造函数 constructor
    constructor(){}
}
 构造函数
    	用于创建和初始化一个由class创建的对象 ，默认构造方法
		用于传递参数，返回类的实例对象 ，进行属性字段赋值
        一个类只能有一个构造函数，多了会报错
	   
默认构造函数
	 如果不写这个函数，类内部会自动给我们创建一个 constructor()
	// 默认构造函数
		constructor() {}
	// 派生类，默认构造函数是：
		constructor(...args) {
          super(...args);
        }
```

### 原型方法

### 公共方法

#### 静态公共方法 static

```js 
介绍
	通过类直接调用，不能在类的实例上调用
    经常是工具函数，比如用来创建或者复制对象
    
特点
	可编辑的、不可遍历、可配置的。
语法
	static fun() { ... }
    
添加
	类的赋值阶段用Object.defineProperty方法添加到类中的
// 调用
1. 静态方法调用同一个类中的其他静态方法，可使用 this 关键字。
    class a {
        static sum_1() { return 'sum_1'; }
        static sum_2() { return this.sum_1() + ' 和 sum_2'; }
	}
    a.sum_1();// 'sum_1'
    a.sum_2();// 'sum_1 和 sum_2'
2. 非静态方法调用同一个类中的另一个静态方法
    class a {
        constructor() {
            // 方法一 ：类名来调
            console.log(a.sum());
            // 方法二 ：构造函数的属性来调用
            console.log(this.constructor.sum());
        }
        static sum() { return 'sum'; }
    }	
```

#### 公共实例方法 public

```js
介绍
	通过实例进行调用的
特点
	可编辑的、不可遍历、可配置的。
语法
	class A {
        // 公共实例方法
        // 实例的方法中，this指向的是实例本身
        sum(){...}
    }
    let a = new A()  // 实例
	a.sum
添加
	在类的赋值阶段用Object.defineProperty方法添加到类中的
调用
	实例的方法中，this指向的是实例本身
	可以使用super访问到超类的原型，由此你可以调用超类的方法。
        class Father {
          msg = 'hello world';
          basePublicMethod() {
            return this.msg;
          }
        }

        class Son extends Father {
          subPublicMethod() {
            return super.basePublicMethod();
          }
        }

        const son = new Son();
        console.log(son.subPublicMethod());  // 预期输出值: "hello worl​d"
特殊方法
	getter和setter分别会在其绑定的属性被取值、赋值时调用
    使用get和set句法定义实例的公共getter和setter。（注意是句法）
        class Father {
          #msg = 'hello world';
          get msg() { return this.#msg; }
          set msg(x) { this.#msg = `hello ${x}`;}
        }

        const instance = new Father();
        console.log(instance.msg);
        // expected output: "hello worl​d"

        instance.msg = 'cake';
        console.log(instance.msg);
        // 预期输出值: "hello cake"
```





### 私有方法

```js
只是在公有字段的基础上加上一个 #
```



### 检测

```js
类名检测
	可以通过类(而不是一个实例的)的 name 属性检测到
    let a = { constructor(){} } // a.name 就是 a
```



### 使用

```js
语法
	
创建实例
	let xx = new name();
类构造函数



// 添加方法
	方法直接写到 class body 中即可，不需要加 function ,多个 方法之间不需要添加逗号分隔
    添加
        class star {
            sing(song){console.log(song)}
            dance(){}
         }
	调用
    	let a = new Star("刘德华")  // 自动创建一个刘德华的实例,前面有的代码就不写了
       a.sing("冰雨")
        

注意

	2. 类的方法会自动加到原型里面，构造函数要自己在原型里面追加公共方法
```

### this 指向问题

```js
// 类里面 的共有属性和方法一定要加 this
	1. constructor 里面的this指向的是创建的对象
     2. 方法里面的 this 指向这个方法的调用者

class Star {
    constructor(name) {
        // constructor 里面的this指向的是创建的对象
        this.name = name;   
    }
    
    sing(song) {
        this.song = song;
    }
}
```







## 继承

### 介绍

```js
es6 之前没有 extends 继承 ， 使用 构造函数 + 原型对象实现继承，被称为 组合继承
es6 用类实现继承
```



### extends 继承

```js
介绍
	继承的.prototype必须是一个Object 或者 null。
例子
    class FAther {
        constructor(){}
        money(){console.log(100)}
    }
    class Son extends Father {
        constructor(){}
    }
    // Son 就继承了 Father 的属性和方法
    let son = new Son()
    son.money()
使用
	可以像扩展普通类一样扩展null，但是新对象的原型将不会继承 Object.prototype。
    class a extends null {
      constructor() {}
    }

    Object.getPrototypeOf(a); // Function.prototype
    Object.getPrototypeOf(a.prototype) // null
    new nullExtends(); //ReferenceError: this is not defined
```

### super 关键字

```js
// super 关键字
用途 ： 
	子类通过该关键字把数据传给父类，就可以完美调用父类的方法
	一个构造函数可以使用 super 关键字来调用一个父类的构造函数。
	调用父类的构造函数
    调用父类的普通函数
原因 ： (父类方法中的 this 是指向父类的)
注意 ：super 必须放到 子类的 this 之前
// 构造函数不能继承，所以要使用 super 关键字进行调用
// 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。

class FAther {
    constructor(){}
    money(){console.log(100)}
}
class Son extends Father {
    constructor () {
        super();	// 调用父类中的构造函数
    }
    say() {
        super.say();	// 调用父类的普通方法
    }
}

// 继承中属性、方法查找原则：就近原则
1.先看子类中有没有这个方法(就近原则)
	有 ：就先执行子类方法
    没有 ：就去父类中照这个方法
    
2. supper 关键字必须在子类 this 之前
class Son extends Father {
    constructor(x,y) {
        super(x,y)
        this.x = x
        this.y = y
    }
}

```

