## 介绍

* 是下一代的 HTML
* 将成为 HTML、XHTML 以及 HTML DOM 的新标准。

## 新增标签

``` css
header 	头部标签
nav		导航标签
article	内容标签
section 定义文档某个区域 大号div
aside	侧边栏标签
footer  尾部标签

1. 这种语义标准化主要是针对搜索引擎的
2. 哲别新标签页面中可以使用多次
3. 在 IE9 中，需要把这些元素转换为  块级元素
4. 移动端更多使用这些标签
5. 
```

## 多媒体

### 音视频

```go
引入一个外部的音频文件 ，音视频文件默认不允许用户自己控制播放停止

<audio>音频名字</audio>、

支持的浏览器就显示音频，不支持的就提示文字这里面的
<audio controls>
    对不起，您的浏览器不支持播放音频，请升级浏览器：提示信息和embed 二选一

    可以设置多个 source,优先使用顺序是从上到下，不会同时执行
    <source src = "路径"> 
    <embed src= type="audio/mp3" width height>  需要指定type ,width, height , 自动播放所有
</audio>




    src  路径
    source 
    controls  无值，是否允许音频控制播放 ，没有值
    autoplay  无值，是否自动播放，设置了，则音乐在打开页面是会自动播放，目前大部分浏览器不支持
                   你第一次打开不会播放，第二次打开会自动播放
    loop      无值，循环播放 



	 
autoplay 	
controls      	如果出现该属性，则向用户显示控件，比如播放按钮。
height 	     	设置视频播放器的高度。
loop 	    	如果出现该属性，则当媒介文件完成播放后再次开始播放。
preload 		如果出现该属性，则视频在页面加载时进行加载，并预备播放。

src 	url 	要播放的视频的 URL。
width 	pixels 	设置视频播放器的宽度。
```

### 视频

```css
<!-- 视频 -->
使用方式和 audio 差不多，从外部引入一个视频文件
<vidio controls>

        <embed src= type="audio/mp4" width height>  需要指定type ,width, height , 自动播放所有

</vidio>

支持
	MP4 webm	ogg
```

### 表单

```css
input

required	必须填写的，不能为空
placeholder	 提示信息
autofocus	自动聚焦
multiple	多文件提交

属性更改
    input::placehoder {
        color:pink;
    }
```



## 英语

```go
autoplay    自动播放
controller    控件
height         播放器高度
loop            循环
preload        提前加载
```


