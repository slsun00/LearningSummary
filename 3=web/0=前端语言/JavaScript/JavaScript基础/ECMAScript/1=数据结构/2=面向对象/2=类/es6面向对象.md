## 类 class

### 介绍

*   es6 中新增了类的概念
*   类抽象了对象的公共部分，泛指某一大类
*   对象特指某一个，是通过类实例化一个具体的对象
*   类是用于创建对象的模板

### 本质

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

### 声明

*   基础

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
     	class 声明
            关键字创建类，类名习惯首字母大写
        constructor() 构造函数
        	用于创建和初始化一个由class创建的对象 ，默认构造方法
    		用于传递参数，返回类的实例对象 ，进行属性字段赋值
            一个类只能有一个构造函数，多了会报错
    	    如果不写这个函数，类内部会自动给我们创建一个 constructor()
    	new 
        	生成类的实例对象 ，自动调用 constructor() 构造函数
        	1. 类必须使用 new 实例化对象
    规范
        	类名后面不要加小括号
            生成实例，类名后面加小括号，构造函数不需要加 function
    ```

*   类声明

    ```js
    特点
    	此方式进行的类声明不会提升
        你首先需要声明你的类，然后再访问它，否则抛出类似错误 // ReferenceError
    例子
    	class Star {
            // 类的字段在 constructor 中声明赋值
            constructor(uname) {
                this.uname = uname
            }
            // 其他类方法
        }
    	let a = new star("刘德华")  // 自动创建一个刘德华的实例
    ```

*   类表达式

    ```js
    特点
    	类表达式也同样受到类声明部分中提到的类型提升的限制。
    名称
    	名称是该类体的局部名称。
        可以通过类(而不是一个实例的)的 name 属性检测到
        let a = { constructor(){} } // a.name 就是 a
    ```



### 类body

```js
类的类体是一对花括号/大括号 {} 中的部分
	其中有类成员 、方法 、构造函数		
    
注意
	class body 中的代码，都遵循严格模式 
```

### 方法

*   介绍

    ```js
    1. 就是函数，一个对象的属性的属性值是函数，属性、函数的名称一样可以缩写
         { sum: sum(){} } = 缩写为 =>  { sum(){} }
     2. 分类
     	构造方法 ：constructor（） 必备方法
     	原型方法
        静态方法 ： static 声明的
    ```

    

*   原型方法

*   静态方法

    ```js 
    
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



### 使用

```js
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
```

### super 关键字

```js
// super 关键字
用途 ： 子类通过该关键字把数据传给父类，就可以完美调用父类的方法
	一个构造函数可以使用 super 关键字来调用一个父类的构造函数。
	调用父类的构造函数
    调用父类的普通函数
原因 ： (父类方法中的 this 是指向父类的)
注意 ：super 必须放到 子类的 this 之前
// 构造函数不能继承，所以要使用 super 关键字进行调用

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

