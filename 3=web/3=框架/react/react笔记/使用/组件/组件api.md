## 概述

```java
设置状态：setState
替换状态：replaceState
设置属性：setProps
替换属性：replaceProps
强制更新：forceUpdate
获取DOM节点：findDOMNode
判断组件挂载状态：isMounted
```

## == state ==



## 替换状态：replaceState

```js
介绍	
replaceState(object nextState[, function callback])
参数
	nextState，将要设置的新状态，该状态会替换当前的state。
	callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用
含义
	与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除
```

## == props ==

## 设置属性：setProps

```js
setProps(object nextProps[, function callback])
参数
    nextProps，将要设置的新属性，该状态会和当前的props合并
    callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
含义
	设置组件属性，并重新渲染组件
使用
	props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。
    当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
	更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。
```



## 替换属性：replaceProps

```java
replaceProps(object nextProps[, function callback])
属性    
    nextProps，将要设置的新属性，该属性会替换当前的props。
    callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
作用
    与setProps类似，但它会删除原有 props。
    
```



## == 节点  ==

## 强制更新：forceUpdate

```java
forceUpdate([function callback])
参数
    callback，可选参数，回调函数。该函数会在组件render()方法调用后调用
注意
    一般来说，应该尽量避免使用forceUpdate()，
    而仅从this.props和this.state中读取状态并由React触发render()调用。
    
使用
    // 适用于this.props和this.state之外的组件重绘（如：修改了this.state后），
    // 通过该方法通知React需要调用render() 
    forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。
    但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
```



## 获取DOM节点：findDOMNode

```java
DOMElement findDOMNode()
返回值
	DOM元素DOMElement    	
使用
    如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。
    当render返回null 或 false时，this.findDOMNode()也会返回null。
    从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。
```



## 判断组件挂载状态：isMounted

```java
bool isMounted()
    
返回值：
    true或false，表示组件是否已挂载到DOM中
作用
    用于判断组件是否已挂载到DOM中。
    可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错
    
废除被替换
    isMounted 的方法在 ES6 中已经废除。
    主要的原因是
    	它经过实际使用与测试可能不足以检测组件是否挂载，尤其是对于有一些异步的程序情况，以及逻辑上造成混乱。
    替换方法
    	componentDidMount() {
            this.mounted = true;
        }

        componentWillUnmount() {
            this.mounted = false;
        }
```



## == ====

## 组件属性

### children 属性

```java
介绍
    表示组件标签的子结点，
    当组件标签有子结点的时候， props 就会又该属性
    这个属性键值：可以是任意值 - 组件、函数、
例子
    const App = props => {
    	// 这里打印出来的 props 对象，就有 children:子结点12 属性
    	console.log(props)
		return (
        	<div><h1>组件标签子结点</h1><div>
        )            
	}

	ReactDom.render(
    	<App>子结点12</App>
        document.getElementById('root')
    )
```

