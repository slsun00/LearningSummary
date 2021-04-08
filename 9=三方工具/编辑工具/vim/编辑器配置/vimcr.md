## 配置

### 介绍

```java
设置方法
    配置文件：
    	永久有效， 设置写入配置文件
    扩展模式：
    	当前vim进程有效，在vim的扩展模式下直接设置
    
全局：/etc/vimrc —–>将配置写入此文件将对所有用户有效。
个人：~/.vimrc ——->将配置写入此文件只对个人有效。            

```

### 常用设置

```java
行号显示	set number, 简写为set nu
行号取消显示	set nonumber, 简写为set nonu
括号成对匹配	set showmatch, 简写为set sm
括号取消成对匹配	set nosm
自动缩进启用	set ai
自动缩进禁用	set noai
高亮搜索启用	set hlsearch
高亮搜索禁用	set nohlsearch
语法高亮启用	syntax on
语法高亮禁用	syntax off
忽略字符的大小写启用	set ic
忽略字符的大小写不忽略	set noic
文件格式启用windows格式	set fileformat=dos
文件格式启用unix格式	set fileformat=unix
设置文本宽度	set textwidth=65 (vimonly)
设置文本宽度	set wrapmargin=15

```

