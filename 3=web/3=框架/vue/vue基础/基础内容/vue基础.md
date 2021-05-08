*   

### vue  api

```js
全局
	配置
    API
    
参数 options 对象
	选项 / 数据 		 data  methods
	选项 / DOM   		   el 
	选项 / 生命周期钩子
	选项 / 资源
	选项 / 组合
	选项 / 其它

vue 实例
	实例 property(性质。特性)
    实例方法 / 数据
	实例方法 / 事件
	实例方法 / 声明周期

指令
特殊 attribute
内置组件
```

### 构建

```js
构造函数
	new Vue()
	参数 ： options对象  // 就是 new Vue(options{})
	返回 ： vue 实例对象

vue 实例
    let 实例对象 = new Vue({})
    let app = new Vue({
        el:'#app'
    })
```



## Vue参数 options 对象

```js
参数对象 options 属性
	选项 / 数据 		 data  methods computed
	选项 / DOM   		   el  template render
	选项 / 生命周期钩子
	选项 / 资源			components 
	选项 / 组合
	选项 / 其它
// 其他
	router:router
    
// 简写
	{ xxx :xxx } ==> {xxx} 
	Vue 组件 
	
```

## vue 实例

### 生命周期

```js
const app = new Vue({
    el:'#app',
    data:{}
})
```

![image-20210107134720243](image-20210107134720243.png)



## 其他

### 数组、对象渲染

```js
 数组、对象渲染 
 	vue官网教程-查看列表渲染
    
数组响应式的方法
	// 并不不是所有的方法都是响应式的
    vue官网教程-数组更新检测
	pop 删除最后一个 
    shift 删除最后一个元素
    unshift 数组前面添加元素
```

### 监听绑定

```js

2. 事件监听-函数
    @  监听是有什么操作，比如 @：onclick  ，让那个属性值的函数执行
	@click='add()'  // 后面执行 add 这个函数。其中的 （） 尽量不要丢，最好写上
	注意
注意
1. methods 中定义的方法
	没有参数 ：可以省略方法后面的括号
	一个参数 ： 
    	html
        	// 事件定义的时候，写方法省略小括号，但是方法本身需要一个参数
        	// vue 默认将浏览器生成的event事件对象作为参数传入到方法中国
        	@click='add'
		vue
        	// 函数需要参数，但是没有传入，那么函数的形参为 undefined
        	function add(a)  {
                console.log('a')
            }
	需要event对象+其他参数
    	html
        	// 调用时需要 event 参数 ，还需要 其他参数
        	// 在调用时，需要手动获取到浏览器参数的 event 对象： $event
        	@click='add('a',$event)'
		vue
        	// 函数需要参数，但是没有传入，那么函数的形参为 undefined
        	function add(a,event)  {
                console.log('a')
                console.log(event)
            }
        	
    
    
    
    
    
    
3. 数据绑定-值
	用于属性的模板，属性哪里是不能使用 mustache ，所以要用 v-bind ，动态更新属性值
	： 用来更新数据用的：更新属性值、
    
    v-bind
	v-model
```

### key 属性

*   标签复用

    ```js
    标签
    	:key='item'
    使用
    	Vue 在进行 DOM 渲染时，出于性能考虑，会尽可能的复用已经存在的元素，而不是重新创建元素
    虚拟dom
    	进行对比修改渲染
    例子
    	v-for 绑定 和 非绑定 key
    不在重复利用
    	可以给 DOM标签 添加一个 key 
        一样的 key 是可以进行复用的，当 key 不一样就不进行复用
    为什么需要这个 key 
    	key 属性和 Vue 虚拟DOM的Diff算法有关
    	diff算法
         	1. 当一层有很多列节点，我们插入一个节点：是从插入的位置的数据依次往后移动一个单位
         key 作用
         	给每个节点做一个唯一的标识，dif算法就可以准确识别这个节点，以便在正确位置插入该节点
            就是为了高效的更新虚拟DOM
    ```



### template & el

```js
Vue 实例中如果同时有 el  和 template 
	template 会替换掉 el 标签的内容
    Vue 实例中不要尽量不要写 template  , 可以使用抽取到组件中
```



## 原理

### v-model 原理

```js
v-model 其实是一个语法糖，本质有两个操作
	v-bind 绑定一个 value 属性
    v-on   指令给当前元素绑定input事件
<body>
	<div id="app">
		<input type="text" v-model="message">
		<!-- input 有一个事件就是 input ，就是监听用户输入 -->
		<!-- <input type="text" :value="message" v-on:input="valueChange"> -->
   		<!-- <input type="text" :value="message" v-on:input="$event.target.value"> -->
	</div>
	<script type="text/javascript" src="../vue.js">
		
	</script>
	<script type="text/javascript">
		const app = new Vue({
			el:"#app",
			data: {
				message:'你好'
			},
			methods: {
				// 界面上产生一个事件，浏览器就会生成一个 event 这个event对象，包含我们想要的信息
				valueChange(event){
					this.message.target.value   // 就是最新的value值
				}
			}
		})
	</script>
	
</body>
</html>
```

### Vue 程序运行过程

```js
再百度下，
runtime-only
runtime and compiler  区别
```



## 插槽

### 组件插槽

```js
1. 组件的插槽也是为了让我们封装的组件更加具有扩展性
2. 让使用者决定组件内部的一些内容到底展示什么
3. 有些组件之间有相同性，但是没有必要再封装层一个组件，所以就使用插槽
4. 插槽封装 ： 抽取共性，保留不同
	将共性抽取到组件中，不相同的暴露为插槽。因为预留的插槽，使用者可以自行决定者部分内容展示什么
    
 思考
 	就是在组件中用插槽预留一个位置 slot，在多次使用组件的时候，每次中的 slot 位置，可以是手动设置不同的东西
    <template id="app"> 
        <h2></h2>
        <slot></slot>
    <template>
        
    // 使
        用 ,重复使用组件，其中改变不同的部分
    <cpn><slot>111</slot></cpn>
    <cpn><slot>222</slot></cpn>
默认值
	插槽中可以设置一些标签，充当默认值
    
        
```



### 具名插槽

```js
// 有具体名称的插槽

<div id='app'>
    // 这个是替换的是没有 name 的slot
    <cpn>123</cpn>
	// 这个是替换的指定的插槽 slot
    <cpn><span slot="left">23</span></cpn>
</div>

<template>
	<div>
        <slot></slot>
        <slot name="left"><span>左</left></slot>
        <slot name="right"><span>左</left></slot>
     </div>
</template>
```

### 编译作用域

```js
<div id="app">
    // 此处 v-show 是vue实例的变量
    <cpn v-show="isshow"></cpn>
</div>
<template>
    // 模板的变量是从组件当中找的，作用域只在子组件
    <button v-show="ishow"></button>
</template>
```

### 作用域插槽

```js
// 父组件替换插槽的标签，但是内容由子组件来提供
// 作用插槽允许你将模板传递给插槽，而不是传递一个已呈现的元素。它被称为作用域的插槽，
// 因为尽管模板在父范围内呈现，但它可以访问某些子数据。


<div id="app">
    <cpn >
    // 获取子组件中的 languages （注意其作用域是子组件）, 拿到子组件中的 data
    // 通过 slot1 引用插槽对象，
    	<template slot-scope="slot1">
            // 注意 slot1 和 data 是怎么来的
            <span v-for="item in slot1.data">{{item}}</span>
	    </template>
    
    </cpn>
</div>

<template>
    <div>
    	// <ul><li v-for="item in languages"></li></ul>
    	// data 是随意起的 ，主要是拿到变量 lanbguages, 即 data 指向 languages
    	<slot ：data="languages">
    		<ul><li v-for="item in languages"></li></ul>
    	</slot>
    </div>
</template>


const app = new Vue({
    el: '#app',
    components: {
        cpn : {
        	data() {
           		 return {
                	 languages:[]
            	}
        	}   
        }
    }
})
```



## 模块化开发







## URL

*   阻止页面刷新

    ```js
    1. 通过更改 URL ，但是阻止页面刷新
    	location.href 更改一定会刷新的
    不更新
    	// 通过 hash 不会刷新页面进行服务器请求一套资源，而是通过前端路由的映射规则 
    	// 查找需要进行渲染的组件 ，放到页面上渲染
    	location.hash = 'aaa'   
    
    
    	// html5 存储就像是栈
    	history.pushState(data,title,?url)
    
    	// url 替换，不不留历史记录，不可后退
    	history.replace(data,title,?url)
    
    	history.go(-1) // ==> history.back()
    	history.go(1)  // ==> history.forward()
    	
    ```

*   文件路径起别名

    ```js
    还是在 webpack 中配置过的，就是绝对路径
    设置其他的
    	alias: {
            '@': resolve('src'),
            'assert':resolve('@/assests')		// vue-html 中使用 需要 ~assert
            'components':resolve('@/components')
            'views':resolve('@/views')
        }
    
    注意
    
    ```

    

    ![image-20210111153158224](image-20210111153158224.png)

## vuex

### 介绍

```js
状态管理模式、集中式存储管理
	需要多个组件共享的变量全部存储在一个对象里 ，这个对象放在 顶层的vue实例中，让其他组件可以使用(共享使用)
	这个对象就像是大管家 ，公共对象 ，应用单一模式
    
所有组件都继承 vue 原型

```



*   不要上来就用，不然不适合

### API 解读

```js
store 选型构造器
store 实例属性
store 实例方法
组件绑定的辅助函数
```

### 状态管理

![https://vuex.vuejs.org/vuex.png](vuex.png)

### 使用

```js
多个组件间共享的问题
	1. 用户的登录状态、用户名称、头像、地理位置等
    2. 商品的收藏、购物车物品
    3. token
    这些状态信息。可以统一放在一个地方，进行保存管理，而且是响应式的
    
// 注意
    官方是 建立一个store对象，
    	修改
        	本组件 ： 使用 mutations 中的方法
            其他组件 ： this.$store.commit(mutation中的方法)
        引用  $store.state.属性 进行访问
```

### 单一状态树

```js
Vue.prototype.S
```

### 核心概念

#### getters

```js
getters
	// getters 的fucntion的参数是固定的
	// 作为参数
		getters: {
            getage: state => {
                return state.stu.fiter(s => s.age >= 20)
            },
            count: (state,getters) => {
                return getters.getage.length
            }
        }
	// 传递参数
    //  getters 默认不能传递参数的，如果让其返回一个参数，只能让 getters 本身返回另一个函数
	getters: {
        stuID : sstate => {
            return id =>{return state.stu.find(s => s.id === id )}
        }
    }
```

#### mutation

```js
在 mutation 更新数据的时候，需要携带额外的参数
	这些参数被称为 mutation 的载荷(Payload)
new vue {
    methods: {
        addname(count): {
            // count 可以是传入的，也可以方法内部声明的 可以是对象
            // 普通提交风格
            this.$store.commit(addname,count)
            
            // 特殊提交
            this.$store.commit({
                type: 'addname',
                count :count  // 可以缩写成 一个 count
            })
        }
    }
}

new vuex.store({
    state: {
        counter:100
    }
    mutation: {
        addname(state,count) {
            state.count += count
        }
		// 特殊提交
	    addname(state,payload) {
            state.count += payload.count
        }
    }
})


// 响应规则
	delete a  // 不是响应式
	Vue.delete() // 响应式的
```





## 其他

```js
v-bind 绑定 class style 过于复杂 ， 可以放在一个methods或者computed中

	<div :style="activeStyle"><slot name="item-text"></slot></div>

<script>
	export default {
		data(){
			return {}
		},
		computed:{
			activeStyle(){
				return this.isActive ? {color:this.activeColor} : {}
			}
		},
```

