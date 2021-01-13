## 需要总结

```go
https://blog.csdn.net/u011535541/article/details/83379151
https://www.jianshu.com/p/e57a4a2cf077
```



## 2. 创建新项目

### 克隆别人的项目

```go
// 下载下来自带 .git 分支
// 注意上传的时候，要把 .git 也要一块儿上传上去
```

## 克隆或下载一个仓库单个文件夹

```go
// https://www.cnblogs.com/zhoudaxiaa/p/8670481.html
```

## github 快速入门

### 创建空项目

* github 新建一个项目
  
  ```go
  //  你新建的仓库时空的，什么也没有
  ```

### 拉取远程库

* 创建本地库
  
  ```GO
  // 项目文件初始化本地库，注意你这个文件夹
   git init
  ```

* 拉取
  
  ```go
  // 1. 远程库没有项目仓库
      你可以直接在本地库，进行代码编辑，编辑过以后，就可以直接推库
  
  // 2. 当拉取远程库的项目
      2.1 当你本地有仓库(列入你之前 clone 的有)
          使用 git pull  
      2.2 当你本地无仓库
          使用 git clone
  
  注意：
      pull push 是要交替着来的，不能一直 push 不 pull
  ```

* 跨团队
  
  ```go
  fork 团队 B 的库，到自己的库
  
  clone 自己 fork 的库
  push 到自己的库
  pull  request 到团队 B ，等地审核
  通过 merge 
  团队 B 的人就可以拉取了
  ```

### 编辑

```go
创建 / 切换 分支
// 其他操作，添加分支什么的
git status  // 多用这个命令，查看有没有问题
```

### 推库

```go
// 添加目录的所有文件到 暂存区：注意是全部文件
git add .

// 保存到 本地库
git commit  -m "提交信息注释"

// 本地库连接远程库 , origin 就是你远程库的短名了
git add remote origin ssh私有秘钥

// 把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来
git push origin master
```

