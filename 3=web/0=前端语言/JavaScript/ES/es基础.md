## 类

*   创建

    ```js
    class ClassName{
        constructor(uname,age){
            this.uname = uname
            this.age = age
        }
    }
    
    
    // 创建实例
    new className("lili",18)
    
    // 类构造函数
    constructor 方法是类的构造函数（默认方法），用于传递参数，返回实例对象
    通过 new 命令生成对象实例的时候，自动调用该方法 
    如果没有显示定义，类内部会自动给我们创建一个 constructor()
    
    
    ```




函数缩写

```js
let obj = {
    name:"lili",
    getName:function(){
        return this.name;
    }
}

// 缩写
let obj = {
    name:"lili",
    getName(){
        return this.name;
    }
}
```

