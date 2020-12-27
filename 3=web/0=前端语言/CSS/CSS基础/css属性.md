## 字体图标

### 图标字体

```css
iconfont
    网页中经常需要使用的图标，可以通过图片来引入图片
        但是图片太大，并且不灵活，所以在使用图标的时候，我们还可以将图标设置为字体，
        通过对 font-face 的形式，来对字体进行引入 ， 以字体的形式来使用图标
        图标字体都是单色的，不是单色的只能使用图片了

优点
	轻量级：一个图标字体要比一系列的图像要小，。一旦字体加载了，图标就会马上渲染出来，减少服务器请求
	灵活性：本质是文字，可以随意改变颜色、阴影、透明等
	兼容性：可以支持所有的文字
缺点
	主要应用于比较简单的小图标，就用字体图标
	碰到复杂的结构和样式，就需要用精灵图

使用
	1. 下载
		1. 阿里图标库 iconfont
		2. icomoon.io
	2. 引入
		不同的图标库的引入方式不一样，使用前需要仔细查一下
	3. 标签内使用图标
	4. 注意以后怎么追加图标

下载
	1. 阿里图标库 iconfont
            这个版权问题很模糊，使用之前要跟原作者联系,使用和icon awesome 差不多
        下载解压后，把所有的都粘贴进去，除了demo.css 和一个 html
        导入 iconfont.css
	2. icomoon.io
```

### 属性

```css

        font awesome 
            css webfonts 粘贴到项目里 ，这两个文件要放在同一级目录下
            all.css  引入网页   <link rel="stylesheet" href="">
            class="fas fa-bell" 这个是固定的，看具体的文档 。可以使用 style 更改样式

            使用  
                单个 ：<i class="fas fa-bell" ></i>
                实体 ： <i class="fas">&#x 图标编码 ；</i>
                批量 : 伪元素设置，找到设置的before或after,content设置编码，设置字体样式
                  li::before{
                        content:"";
                        fontfamily:;
                        font-size:;
                    }

```

## 用户界面样式

### 鼠标样式

```css
cursor
	default 默认
	pointer	小手
	move	移动
	text	文本
	not-allowed	禁止
```

### 轮廓线

```css
outline
	表单的轮廓取消
	none	取消
resize
	拖拽的取消
	none	取消自动拖拽

```

### 文本对齐

```css
vertical-align
	垂直居中，赋予行内元素或者行内块元素有效
```

## 文字

![文字](%E6%96%87%E5%AD%97.png)

```css
水平对齐

    text-align:;  文本水平对齐
        left    左对齐
        right    右对齐
        center    居中对齐
        justify    两端对齐

垂直对齐
    vertical-align:;
        baseline  基线对齐，文字底边的底线，默认值
        top 顶部对齐
        bottom 底部对齐
        middle 居中对齐，这样设置不太好，并不是常说的居中

文本修饰
    text-decoration:underline;
        none 什么都没有
        underline 下划线
        line-through    删除线
        verline    上划线

设置网页如何处理空白
    white-space:; 
        nomal    正常
        nowrap    不换行
        pre    保留空白
    white overflow:ellipsis;


```

### 省略号

```css
网页内容过长，处理成显示一部分，然后后面的现实成省略号
单行
    选择器 {
            white-sapce:nowrap;  /*文字一行强制显示*/
            overflow:hidden;	 /*溢出不显示	*/
            text-overflow:ellipsis;  /*文字溢出使用省略号表示*/
    }

多行文本省略
	/*推荐让后端做*/
	较大兼容性问题，适用 webkit 浏览器或者移动端
     选择器	{
				overflow: hidden;
				text-overflow: ellipsis;
				/*弹性伸缩盒子*/
				display: -webkit-box;
				/* 限制在一个块元素显示的文本的行数 */
				-webkit-line-clamp:2 ;
				/* 设置或检索伸缩对象的子元素的排列方式 */
				-webkit-line-prient:vertical ;			
			}
```





# css3

## 滤镜 filter

```css
filter 将 模糊或颜色偏移等图形效果应用于元素
	filter:函数（）；
calc  在声明css属性值的时候执行一些计算
	width:calc(100%-80px)
```

## 过度

```css
transition 
	在不使用 flash 或者 javascript 情况下，当元素从一种样式变换到另一种样式为元素添加效果
过渡动画
	从一个状态主键过渡到另一个状态
缺点
	低版本 IE9 以下不支持，但不影响布局
注意
	经常和 hover 结合使用

使用
	谁过渡，给谁设置属性
```

## 2D 转换

```css
2D  二维坐标系
	2D 转换只是改变标签在二维平面上的位置和形状的一种技术
	原点在页面左上角
(原点) 0 — — — —— —>  x 轴水平向右，变大
	  |
	  |
      \/
	y轴垂直向下，变大


转换 transform 可以理解为变形
	{
    	transform: translate();   移动
        transform: retate();		旋转
        transform: scale();  		缩放
	}

移动	translate
	/*移动盒子：定位、盒子外边距、2d转换移动 */
	改变元素在页面中的位置，类似定位
	特点
		1. 定义 2D 转换的移动，沿着 X 和 Y 轴移动元素
		2. 最大优点 ： 不会影响其他元素的位置
		3. 百分比单位是相对于自身元素的 translate:(50%,50%)
		4. 对行内标签没有效果

旋转
	旋转的度数的单位是 deg , 比如旋转45度 rotate(45deg)
	旋转的中心是 元素的中心点(50% , 50%)
	正值 ：顺时针 ， 负值 ： 逆时针
	还可以给 x y  设置像素、方位名词 (top bottom left right center)

缩放
	给元素控制放大或者缩小
	scale(x,y)  x对长 y对宽 进行缩放
	在放大的同时，不会影响其他盒子，还可以设置缩放中心点
```

