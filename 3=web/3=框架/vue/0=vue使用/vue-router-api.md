## 标签

```java
    <router-link>
        v-slot API (3.1.0 新增)
        示例：将激活的 class 应用在外层元素
    <router-link> Props  // a 标签
        to				// href, #开头的hash地址
        replace
        append
        tag
        active-class
        exact
        event
        exact-active-class
        aria-current-value
            
// =================================================================            
    <router-view>
            路由占位符， 匹配到的组件会被渲染到这个地方
    <router-view> Props
        name

```



## 构建

```java
    Router 构建选项, 需要注册到 vue 实例当中
        routes
        	path  router-link 的 to 中的 url
        	component 组件，一个对象，包含 template
        mode
        base
        linkActiveClass
        linkExactActiveClass
        scrollBehavior
        parseQuery / stringifyQuery
        fallback
```



## 实例

### 属性

```java
    Router 实例属性
        router.app
        router.mode
        router.currentRoute
```

### 方法

```java


    Router 实例方法
        router.beforeEach
        router.beforeResolve
        router.afterEach
        router.push
        router.replace
        router.go
        router.back
        router.forward
        router.getMatchedComponents
        router.resolve
        router.addRoutes
        router.onReady
        router.onError

```



## 路由对象

```java
    路由对象
        路由对象属性
    组件注入
        注入的属性
        增加的组件配置选
```

