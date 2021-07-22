## router -  router - dom

### 介绍

```java
1. reactor 的一个插件库（web native any)
2. 实现单页面富应用    
```



### 组件

```java
// 1 2 一般包括在 app 中
1)<BrowserRouter> / 分割
2)<HashRouter>   # 分割(锚点后的内容，不作为资源发送给后台服务器)
    
3)<Route>
4)<Redirect>
5)<Link>    依靠路由连接实现切换组件
6)<NavLink>  导航路由连接实现组件切换
7)<Switch>    可切换的路由组件
```

### 其他

```java
1)history对象
2)match对象
3)withRouter函数
```

## api

## BrowserRouter & HashRouter

```java
区别
    1.底层原理不一-样:
        BrowserRouter使用的是H5的history API.不兼容IE9及以下版本。
        HashRouter使用的是URL的哈希值。
    2. url表现形式不-样
        BrowserRouter的路径中没有#,例如: localhost: 3000/demo/test
        HashRouter的路径包含#,例如: localhost :3000/#/demo/test
             # 分割(锚点后的内容，不作为资源发送给后台服务器)
    3.刷新后对路由state参数的影响
        (1). BrowserRouter没有任何影响，因为state保 存在history对象中。
        (2) . HashRouter刷新后会导致路由state参数的丢失。
    4.备注: HashRouter 可以用于解决- - 些路径错误相关的问题。

```



## //  其他

### 1). react-router中的相关组件: 

	Router: 路由器组件, 用来包含各个路由组件
	Route: 路由组件, 注册路由 
	IndexRoute: 默认子路由组件
	hashHistory: 路由的切换由URL的hash变化决定，即URL的#部分发生变化
	Link: 路由链接组件

### 2). Router: 路由器组件

    属性:  history={hashHistory} 用来监听浏览器地址栏的变化, 并将URL解析成一个地址对象，供React Router匹配
    子组件: Route

### 3). Route: 路由组件

```js
属性1: path="/xxx"  
属性2: component={Xxx}
属性3：exact={true}  
	开启精准匹配
	开启这个导致子组件路由无法匹配
根路由组件: path="/"的组件, 一般为App
子路由组件: 子<Route>配置的组件

<Route path="/repos" component={Repos}>
  <Route path="/repos/:username/:repoName" component={Repo}/>
</Route>
```

### 4). IndexRoute: 默认路由

    当父路由被请求时, 默认就会请求此路由组件

### 5). hashHistory

    用于Router组件的history属性
    作用: 为地址url生成?_k=hash, 用于内部保存对应的state

### 6). Link: 路由链接

```java
属性
    属性1: to="/xxx"
	属性2: activeClassName="active"
     属性3 
        	replace={true}	   // 无痕迹， 替换进行
        	push       // 留有痕迹， 压栈进行，默认的模式
           
        
语法
    <BrowserRouter>
		{/* 编写路由连接
        	你点击 about 就会触发 /about 这个路径，
        	路由器识别这个路径，在注册的路由中，找到对应的 path ，渲染对应的 组件
        */}
    	<link to="/about">About<link>
            
		// 注册路由            
		 <Route path='/about' component={About} />            
    </BrowserRouter>
	// 注册路由            
                 
```

