

## 1.代码折叠

1.details 标签

```html
<details>
  <summary>点击时的区域标题：提示展开</summary> 
  <pre><code>
    <h1> 标题1</h1>  
	你需要折叠的文本，看注释 4
  </code></pre>
</details>


1. 需要主要的是折叠区不要放标题##，默认标题是不折叠的
3.   <h1> - 测试 测试测试</h1>   会转义为标题，不带格式，如果要原样输出，需要加转义字符
4. 代码
	```语言种类
	```
   文本
	 就直接写了
```

<details>
  <summary>详解</summary>
  <pre><code>
 1. 参数
    details：折叠语法标签
    summary：折叠语法展示的摘要
    pre：以原有格式显示元素内的文字是已经格式化的文本
    code：指定代码范例
    blockcode：表示程序的代码块
  </code></pre>
</details>

```html
<details>
  <summary>demo</summary> 
  <pre><code>
​```go

​```
  </code></pre>
</details>

```



