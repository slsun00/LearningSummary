## == 本地模式 == 

## mockjs

```java
介绍
    本地模拟
    
原理是:
    拦截了所有的请求并代理到本地，然后进行数据模拟，
    所以你会发现 network 中没有发出任何的请求。
        
实现机制
	1. 会重写浏览器的XMLHttpRequest对象，从而才能拦截所有请求，代理到本地   
        
缺点        
	1. 因为它重写了XMLHttpRequest对象，所以比如progress方法，或者一些底层依赖XMLHttpRequest的库都会和它发生不兼容
	2. 它本地模拟的数据，实际上不会走任何网络请求。所以本地调试起来很蛋疼，只能通过console.log来调试    
        
        
优化
        搭配 mock-server 
```



## == 线上模拟 ==

## mock - server

## == 搭配 == 

## mockjs + mock-server