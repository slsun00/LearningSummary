## api 解读

```java

```



## 全局配置

```java
silent
optionMergeStrategies
devtools
errorHandler
warnHandler
ignoredElements
keyCodes
performance
productionTip

```

## 全局API

```java
Vue.extend
Vue.nextTick
Vue.set
Vue.delete
Vue.directive
   自定义指令
Vue.filter
Vue.component
    组件，可以使用选项中的数据，但是 data 需要时函数
Vue.use
Vue.mixin
Vue.compile
Vue.observable
Vue.version
    
```

## 选项

### 数据

```java
data
   js 运行代码需要的变量需要是 vue 中的
props
    // 接收父组件传递过来的值， 设置在子组件中， 是单向数据流
    组件之间进行数据传递， 接收的数据，可以传递给 template 中的 {{}}
propsData
    
computed
    计算属性
methods
    
watch
	监听。方法名和字段属性名相同
```

### dom

```java
// 对 dom 元素
el  
    dom 元素， id class;
template
   需要只
render
    
renderError

```

### 生命周期函数

```java
挂载-- 初始化
    beforeCreate
    created
    beforeMount
    mounted
更新 - 元素或者组件变更    
    beforeUpdate
    updated
activated
deactivated
销毁    
    beforeDestroy
    destroyed
errorCaptured

```

### 资源

```java
    directives
    filters
        过滤器
    components
        组件， 里面是局部组件
```



### 组合

```java
    parent
    mixins
    extends
    provide / inject
```

### 其他

```java
    name
    delimiters
    functional
    model
    inheritAttrs
    comments
```

## 实例

### 属性

```java
    vm.$data
    vm.$props
    vm.$el
    vm.$options
    vm.$parent
    vm.$root
    vm.$children
    vm.$slots
    vm.$scopedSlots
    vm.$refs
    vm.$isServer
    vm.$attrs
    vm.$listeners
```

### 方法 - 数据

```java
    vm.$watch
    vm.$set
    vm.$delete
```

### 方法 - 事件

```java
    vm.$on
    vm.$once
    vm.$off
    vm.$emit
```

### 方法 - 声明周期

```java
    vm.$mount
    vm.$forceUpdate
    vm.$nextTick
    vm.$destroy
```

## 指令

```java

// 数据绑定： 数据填充
// 数据填充： 使用的就是 data 的属性名 ，进行填充
	v-text
        v-text="msg" 值为 data 中的字段名， 例子1 
    v-html
        填充 html 片段， <><>
    v-model        
 		v-on 和 v- bind 的组合
         内联语句，要有 vue 数据源， 默认语句(默认的语句也是)
// 事件绑定： 操作绑定        
    v-on    @
// 标签属性设置
    v-bind
        class  对象、数组语法： 键值对的键，就是 css 中的名字， 就是 data 中的键，值为 true或者 false
         style  对象。数组语法
        
   
            
// 分支循环            
    v-if
        预期值是 true 就执行
    v-else
    v-else-if
    v-show        
    v-for



    v-slot
    v-pre
        显示原始信息， 跳过 vue 编译
    v-cloak
        先通过样式隐藏内容，然后在内存中进行值得替换，替换好后，在现实原本的结果
    v-once
        只编译一次，先上后就不再有响应式功能 
        
```

## 特殊 attribute

```java
    key
    ref
    is
    slot
    slot-scope
    scope 
```

## 组件

```java
    component
    transition
    transition-group
    keep-alive
    slot
        插槽，一个占位，用于存放父组件对应的标签中的文本内容
        就是说，父组件中的信息需要按照一定的格式渲染出来，子组件就是这个样式，在子组件中有一个空位，用于放父组件的数据
        
```



## api 解读

```java
// 例子
v-bind    
预期：
    any(with argument)，任意参数 , 数组
    Object(without argument)，对象
参数：
    attrOrProp(optional)   
    	attr 绑定一个或多个属性值
    	prop  向另一个组件传递props值
// -----
    v-bind:title='doubi'
         v-bind是指令
		title是参数
		doubi是预期值， 认为会发生的




内联语句
	javascript 代码。但语句中用到的变量需要是vue 实例中的
    在 vue 语句中执行的 js 代码

事件对象
    参数 event ， vue 中是固定的，就是 $event , 默认的
    参数： 
    	最后一个，固定是 $event , 
		没有特殊声明就省略了，也可以写明，
         可以在 js 代码中通过打印 $event ,来获取该对象的内容值

v-once	不需要表达式
v-cloak  不需要表达式
v-pre	不需要表达式

// 键值对：     
v-text	
    // v- text = "msg"
    // data: { msg : '6666' }
    预期：string ： 使用的是 data 中对象的键， 值为字符串
    
v-html
    // v- html = "msg"
    // data: { msg : '<h>1</h>' }
    预期：string ： 使用的是 data 中对象的键， 值为字符串 
    
    
v-on
   Function
    	methods 中的函数
    		函数没有参数 ：直接绑定函数名称 。 @click="say"
            		默认会传递事件对象作为事件函数的第一个参数, js 中就是 say(event)
    		函数有参数   ：调用函数		   @click="say("hi", $event)"  
            		作为函数调用， 事件对象必须作为最后一个参数显示传递，并且事件的名称必须是 $event
   Inline Statement  
    	内联语句，用到的变量是 data 中的键
   Object
 
v-bind            	
    预期：


    参数：attrOrProp (optional)
            
```

## 疑问

```java
v-bind
    期望值： 什么意思
           any (with argument) 
	       Object (without argument)
```

