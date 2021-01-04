## 官网

```js
bootstrap :  https://www.bootcss.com/
v3		  :  https://v3.bootcss.com/
v4        :  https://v4.bootcss.com/
```

## 引入

```css
bootstrap3
	下载有 3 个文件夹 :css	fonts js
	1. 把这三个文件复制粘贴到你的静态文件夹中使用
	2.  引入
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
```

## 使用

```css
更改 bootstrap 的样式，直接再添加一个类名，直接进行设置
```

## 容器

```js
// html 样式充值表
	https://cssreset.com/


作用
	需要为页面内容和栅格系统包括一个 .container容器
 
固定容器  ： 
    <div class="container"></div>
	左右两边有一个 15px 留白
    不同的屏幕尺寸不同的尺寸，是固定的
流体容器  : 
	<div class="container-fluid"></div>
	流体布局 ： 网页放大和缩小，会随着浏览器的大小而改变


1. 缩略语显示的是 title 的内容
2. 栅格系统需要写在  .container 或者 .container-fluid 之内


内联表单   ： class="src-only" 可以控制上传文件的按钮不显示文字
default -- inverse
```

## 栅格系统

```css
英文名
	grid systems
别称
	网格系统
意思
	将页面划分为等宽的列，然后通过列数的定义来规模化页面布局
	bootstrap 将页面统一划分12列
```



## 英语

```js
 role	角色，作用，只能
 nav :  navigation

navbar 导航栏
role=navigation  航行，导航
navbar-brand	类型，品牌，类型
navbar-inverse   相反的黑色
navbar-default   默认灰色的
navbar-collapse  塌陷，倒塌
padding  填充 
margin   页边空白
nowrap   不换行;强制在同一行显示
device  设备仪器
small device  平板
placeholder   位置占据
checked		多选框
radio		单选框
popup		弹出窗口
```

