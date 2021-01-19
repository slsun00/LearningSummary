## v-for

```js
防止复用，需要在 DOM 元素中 ，加一个属性值 key=""

主要是虚拟 DOM 的作用
一般
	把这个元素从前往后进行对比，找到要插入的位置
	把相应位置及其后面的元素往后移动，把插入的元素插入到具体的位置
使用 key
	根据 key  对内容进行比对
    	复用的时候 key和其内容进行对应，如果相同就进行复用，如果不同，就创建新的的元素，

数组中那些数组方法是响应式的
	pop push  shift unshift splice sort reverse
    并不是所有的数据都是响应式的，还要看这些是不是改变源数据

    
    
    
<td>{{item.price|getPrice()}}</td><td>
<button v-on:click="decrement(index)" v-bind:disabled="item.count <= 0">-</button>
{{item.count}}
// 注意标签中的 item,count 是不使用模板，下面的才使用到


for in  用来遍历对象
for of  
foreach
reduce


编程范式
	命令式 ：人自己写处理逻辑，告诉计算机每一步要做什么
    声明式  ：
    
    ----------------------
	面向对象编程：第一公民：对象
    函数式变成	第一公民 ：函数
```

