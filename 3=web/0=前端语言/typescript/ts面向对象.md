## 面向对象

### 介绍

```js
操作浏览器，使用window对象
操作网页 ，使用 document 对象
操作控制台	， 使用console 对象
```



## 类

### 介绍

*   跟 js 差不多一样，只是多了类型限制

### 声明

```js
声明
	class 类名 {

        // 实例属性，直接定义 ，需要通过对象实例去访问
        属性名： 属性值，
        constructor(){ 进行属性赋值 }
         // readonly  只读的实例属性
        readonly name: string = "悟空"
        
        
        // 静态属性，使用类调用
        static 属性名：类型 =  值
	    readonly static  属性名：类型 =  值
	
		// 和属性是一样的 static 
        方法名(){}     // 函数
		stac
    }
例子
	class student {
        name: string
        constructor(name:string) {
            this.name = "xiaoming"
        }
		study(){
            console.log("小明在学外语")
        }
    }
```

## 继承

```js
class a{
    say(){console.log("调用a")}
}
class b extends a{
    walk(){console.log("b 跑步")}
}


```

