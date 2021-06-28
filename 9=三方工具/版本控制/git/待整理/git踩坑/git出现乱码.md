# 1.出现乱码

## 1.代码打印

* ls 是正常的

![1593879265237](C:%5CUsers%5C11940%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1593879265237.png)

* 更改措施

  ```python
  git 安装目录中
  # 1.etc\gitconfig文件，在文件末尾增加以下内容
      [aui]
           encoding = utf-8
      [i18n]
          commitencoding = utf-8
      [svn]
          pathnameencoding = gbk
   # 2.etc\profile文件,末尾添加 
  	export LESSCHARSET=utf-8
      
   # 3.在gitbush终端的空白处
  	右键 —— options —— text (设置下图)
  ```

  3.在gitbush终端的空白处

  	1.右键终端空白处 —— options —— text (设置下图)：2.font的select 3.character set

  

![1593880074762](C:%5CUsers%5C11940%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1593880074762.png)

## 2.ls出现乱码

```python
 # etc\git-completion.bash 末尾添加
    git config --global core.quotepath false
```



# 2.bash: tree: command not found

* 下载tree.exe

  ```go
   https://sourceforge.net/projects/gnuwin32/files/ 
  ```

* 解压后，在压缩包的 bin文件中找到 tree.exe

* 放置在 git 安装目录的 usr / bin 目录中

  * 注意是 安装目录的 usr / bin 



## git  branch 找不到 files

```go
$ git branch
error: cannot spawn more: No such file or directory

设置一下就行
 git config --global core.pager 'less'

```

