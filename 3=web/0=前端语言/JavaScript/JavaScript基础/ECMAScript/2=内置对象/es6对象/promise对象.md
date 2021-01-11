## es6 的 promise 对象

```js
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises
还没有补充完整
```



## promise对象

## 介绍

*   Promise 是一个对象，它代表了一个异步操作的最终完成或者失败
*   大多数人仅仅是使用已创建的 Promise 实例对象
*   可以将异步操作以同步的流程表达出来，避免层层嵌套的回调函数(俗称：回调地狱
*   能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来

## promise 状态

```js
// 一个 Promise 必然处于以下几种状态之一
    待定    pending : 初始化的状态,等待状态，既没有被兑现，也没有被拒绝
    兑现    fullfilled : 操作成功的状态
    拒绝    rejected : 操作失败的状态
    // 其他
    已敲定	 settled ： 一个 promise 已经被兑现（fulfilled）或被拒绝（rejected）
    已决议	 resolved ： 
    		1. 表示 promise 已经处于已敲定(settled)状态
             2. 为了匹配另一个 promise 的状态被"锁定"了
// 解读
    待定状态的 promise 对象会
    	1. 通过一个值被兑现（fulfilled）
        2. 通过一个原因（错误）被拒绝（rejected）
     当 1 或 2 发生后，then 方法排列起来的相关处理方法，就会执行
     异步操作一直在相关处理方法之前被确定了操作结果，所以完成异步操作和绑定处理方法之间不会存在竞争状态。
     
// 注意
     JavaScript 中的 promise 代表的是已经正在发生的进程， 而且可以通过回调函数实现链式调用。 
```



## 回调约定

```js
// 不同于“老式”的传入回调，在使用 Promise 时，会有以下约定
1. 在本轮 事件循环 运行完成之前，回调函数是不会被调用的
2. 即使异步操作已经完成（成功或失败），在这之后通过 then() 添加的回调函数也会被调用。
3. 通过多次调用 then() 可以添加多个回调函数，它们会按照插入顺序进行执行
```



## Promise对象

### 构造函数

```js
Promise()  
	创建一个新的 Promise 对象。
    该构造函数主要用于包装还没有添加 promise 支持的函数。
```

### 静态方法

```js
Promise.all(iterable)
Promise.allSettled(iterable)
Promise.any(iterable)
Promise.race(iterable)
Promise.reject(iterable)
Promise.resolve(iterable)
```

### promise 原型对象

```js
Promise.prototype.constructor
	返回被创建的实例函数.  默认为 Promise 函数.
Promise.prototype.catch(onRejected)
Promise.prototype.then(onFullfilled,onRejected)
promise.prototype.finallly(onFinally)
```

## 使用

### 异步函数调用

```js
// 例子
// 创建一个文件
// 创建成功调用
	function f1(){ console.log("成功") }
// 创建失败
	function f2(){ console.log("失败") }
// 调用,create 根据 name  创建的时候，创建成功就就调用 f1() 创建失败就调用 f2()
	function create("name", f1() , f2())
 
    
----------------------------------------------------------------------------------
 重写为create f1 f2 promise 形式
    //promise 表示 create() 函数的完成
	const promise =  create(name)
    // promise2 表示  create()函数完成 传入的 f1 或 f2 的完成
    // 回调函数 f1 f2 ，会返回一个新的 peomise 对象， 从而形成另一个异步操作
    // 这样的话，在 promise2 上新增的回调函数会排在这个 Promise 对象的后面。
    // then() 函数会返回一个和原来不同的新的 Promise：promise 和 promise2 不同
    const promise2 = promise.then(f1(),f2())
    
// 合起来写就是
    create(name).then(f1(),f2())
```

### 创建Promise对象

```js
// 	该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数
//  “处理器函数”接受两个函数—— resolve 和 reject ——作为其参数
//   	异步任务顺利完成且返回结果值时，会调用 resolve 函数
//      异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数
let promise = new Promise((resolove,reject) => {
    // 初始化 promise 状态为 pending 
    // 做一些异步操作，最终会调用下面两者之一
    
    if (异步操作成功) {
        resovle(value); // 修改 promise 状态为 fullfilled
    } else {
        reject(errMsg);  // 修改 promise 状态为 rejected
    }
    
	// Promise 不论成功或失败都会调用 then 
}).then()
	// catch() 只有当 promise 失败时才会调用
	// catch(failureCallback) 是 then(null, failureCallback) 的缩略形式
  .catch()

promise

 
    

// 想要某个函数拥有promise功能，只需让其返回一个promise即可
function(){
    return new Promise((resolve,reject) => {
        
    })
}

// promise 本质
	一个函数返回的对象，可以在这个对象上把绑定回调函数，而不需要把回调函数作为参数传入
    这个对象就叫 promise
    即： 把传入回调函数，改成了绑定回调函数
```

```js
1. 异步编程的一种解决方案
2. 我们封装一个网络请求的函数，因为不能立即拿到结果，所以需要传入另一个函数，在数据请求成功的时候，将数据通过传入的函数回调出去
3. 当网络请求非常复杂的时候，就会出现回调地狱 

// 链式编程
套娃边串娃
// 使用
	有异步操作的时候，使用 promise 封装
```



### 错误传递

```js
// 错误处理在 Promise 链中只用在尾部的一次调用即可
遇到异常抛出，浏览器就会顺着 Promise 链寻找下一个
	onRejected 失败回调函数
    .catch() 指定的回调函数
    
意义
	通过捕获所有的错误，甚至抛出异常和程序错误，Promise 解决了回调地狱的基本缺陷。
    这对于构建异步操作的基础功能而言是很有必要的。
```



### 链式调用

*   介绍

    *   连续执行两个或者多个异步操作 ： 在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果
    *   每一个 Promise 都代表了链中另一个异步过程的完成

*   使用

    ```js
    promise.then()
    promise.catch() 
    promise.finally() 
    // 这些方法将进一步的操作与一个变为已敲定状态的 promise 关联起来
    // 些方法还会返回一个新生成的 promise 对象，这个对象可以被非强制性的用来做链式调用
    ```

*   多重回调

    ```js
    // promise 链式地调用
    // 把回调绑定到返回的 Promise 上，形成一个 Promise 链：
    // 一定要有返回值，否则，callback 将无法获取上一个 Promise 的结果。
    new Promise((resolve,reject) =>{
        setTimeOut(()=>{
            reselve('aaa')
        },1000)
    }).then(res => {
        console.log("第一层代码");
         return Promise.resolv(res+'111')
    }).then(res =>{
        console.log("第二层代码");
        return Promise.resolv(res+'222')
    }).then(res => {
        // 第三层演示吧报错
         return Promise.reject(err message)
        // throw 'err message'  也可以
    }).catch(res => {
        console.log(err);
    })
    ```

### 拒绝事件

```js
promise 两个全局作用域
	常而言，就是window；
    web worker 中使用的话，就是 Worker 或者其他 worker-based 接口
当 Promise 被拒绝时，会有下文所述的两个事件之一被派发到全局作用域
	rejectionhandled    Promise 被拒绝、并且在 reject 函数处理该 rejection 之后会派发此事件
    unhandledrejected   Promise 被拒绝，但没有提供 reject 函数来处理该 rejection 时，会派发此事件
以上事件的属性
	 promise 属性，该属性指向被驳回的 Promise，
      reason 属性，该属性用来说明 Promise 被驳回的原因。
    
```

## 其他

### 组合并行

```js
Promise.resolve()  Promise.reject()
	手动创建一个已经 resolve 和 reject 的Promise快捷方法
Promise.all()	Promise.race()
	并行运行异步操作的两个组合式工具
    
// 并行操作
    Promise.all([func1(), func2(), func3()])
		.then(([result1, result2, result3]) => { /* use result1, result2 and result3 */ });

// 递归调用一个由异步函数组成的数组时，相当于一个 Promise 链
	Promise.resolve()
        .then(func1)
        .then(func2)
        .then(func3)
// 其他写法
	[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
						.then(result3 => { /* use result3 */ });
```



### 时序

```js
// 为了避免意外，即使是一个已经变成 resolve 状态的 Promise，传递给 then() 的函数也总是会被异步调用：
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait()
    .then(() => console.log(4));
Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

// 注意
	传递到 then() 中的函数被置入到一个微任务队列中，而不是立即执行
	它是在 JavaScript 事件队列的所有运行时结束了，且事件队列被清空之后，才开始执行
```



### 嵌套

```js
//  Promise 链式编程最好保持扁平化，不要嵌套 Promise
//  不是一个简单的纯链式，这些语句前与后都被括号 () 包裹
catch 仅捕捉在其之前同时还必须是其作用域的 failureres，而捕捉不到在其链式以外或者其嵌套域以外的 error

f1()
.then(
    result => f2()
    		.then(optionalResult => f3(optionalResult))
    		// 能捕获到 f2() 和f3() 的失败，之后就恢复到 f4() 的运
   			.catch(e => {console.log(e.message)})
	) // 即使有异常也会忽略，继续运行;(最后会输出)
.then(() => f4())
// 能捕捉到f1 f2 f3 f4
.catch(e => console.log("Critical failure: " + e.message));// 没有输出

```



### demo

![image-20201220172408204](image-20201220172408204.png)

```js
// Promise()   是一个构造函数，用来生成一个 Promise 实例

promise 对象的状态

    
应用
	实现超时处理


//调用 promise 的then 
promise
	.then((data)=>{console.log(data)},(error)=>{})
//-----------------------------------------------------------------------------


// promise 链式地调用
new Promise((resolve,reject) =>{
    setTimeOut(()=>{
        reselve('aaa')
    },1000)
}).then(res => {
    console.log("第一层代码");
     return Promise.resolv(res+'111')
}).then(res =>{
    console.log("第二层代码");
    return Promise.resolv(res+'222')
}).then(res => {
    // 第三层演示吧报错
     return Promise.reject(err message)
    // throw 'err message'  也可以
}).catch(res => {
    console.log(err);
})

//---------------------------------------------------------

// 超时例子
// 创建 promise 对象 ，promise 进行判断 then 是执行代码
// resolove reject 本身就是也是一个函数
let promise = new Promise((resolve,reject) => {
    // 初始化 promise 状态为 pending
    
    // 执行 异步操作 ,通常是发送 ajax 请求，开启定时器
    setTimeout(()=>{

        // 根据异步任务的返回结果来修改 promise 的状态
        // 异步任务执行成功 ，调用 resolve 的时候就会调用 then
        resolve("data");   // 修改 promise 的状态为 fullfilled 成功的状态
        // 异步任务失败
        reject();  // 执行这个, 把error 传给 then 
    })
}，2000).then((data)=>{  // 成功回调执行的代码
    
    // .then (函数1，函数2)   回调成功执行函数1 回调从失败执行函数2  
	}).catch((err) => { // 失败的回调执行的代码
        console.log(err)
    })
    	
    
    
// -----------------------------------------------------------------------

// new Promise(resolve => resolve(结果))


// 实际例子 ajax 
function getNews(url){

    // 创建 promise 对象
    let promise = new Promise((resolove,reject) => {
        // 初始化 promise 状态为 pending

        // 创建  xmlHttp 对昂
        let xmlHttp = new XMLHttpRequest();
        //绑定监听,注意这个要调用 4 次
        xmlHttp.onreadstatechange = function(){
            if (xmlhttp.readyState === 4 {
                if (xmlHttp.status === 200)){
                	//请求成功
                    console.log(xmlHttp.responseText)
                    // 修改状态
                    resolve(xmlHttp.responseText);  // 修改 promise 的值为fullfilled
          		} else {
                    // 请求失败
                    reject('暂时没有新闻内容');
       		 }
       	 	}

	xmlHttp.open('GET',url);
        
    })
    return promise;
}

getNews(url)
	.then((data) => {
		console.log(data)
	    // 从获取的data内容里面进行处理，注意这里的 data 是 JSON 字符串，解析后发送url
        let commentsUrl = Json.parse(data).commentsUrl
        let url = "http://..."
        return getNews(url)  // 这里注意要防止回调地狱
	}，(error) => {
    	console.log(error);
	})
    .then((data)=>{console.log(data)},(error)=>{})
// ---------------------------------
// 处理异步请求，
Promise
.All([
    new Promise((resolve,reject) => {
        $ajax({
            url:'',
            success:function(){
                console.log("结果1")
            }
        })
    })，
    new Promise((resolve,reject) => {
        $ajax({
            url:'',
            success:function(){
                console.log("结果2")
            }
        })
    })，
    // 前面所有请求完成，才会执行下面的then
])
	.then(results => {
    // result[0]  是第一个new Promise 的结果，类推
})
    
```
