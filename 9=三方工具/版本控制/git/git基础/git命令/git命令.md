git https://blog.csdn.net/chengyu_whu/article/details/80048038

## === git ===

## git项目目录

### .git 文件

```go
// 产生 .git 文件
// .git目录中存放的是本地库相关的子目录和文件，不要删除，也不要胡乱修改。
```

## 工作流程

```java
// 情况一： 本地无项目，需要克隆别人的项目到本地
1. git clone
2. 配置 SHH ,方便以后推送
3. 本地文件编辑 -- add -- commit -- pull -- push  
    
// 情况二：本地已经有一个非 git 管理的项目
1. 找一个文件夹，进行 git init ，然后把项目放到该文件中
2. 其他和情况一样（其实可以先克隆一个空的库，然后把已有项目方进去就行了）    
```

## git 命令执行

```java
1. git 命令需要在 git 仓库中才能运行
    执行命令前，需要切换到 git 仓库中，切换到项目文件夹目录下
2. Git 只在仓库的根目录生成 .git 目录
```



## == 本地仓库 == 

## 文件处理

### 查看状态

```go
// 显示你上次提交更新后的更改或者写入缓存的改动，
// 查看工作区 、暂存区状态
// 看仓库当前的状态，显示有变更的文件。
git status 
git status -s // 简短输出

AM 状态的意思是这个文件在我们将它添加到缓存之后又有改动。
```

### 文件比较

* 比较文件在暂存区和工作区的差异
* 一行一行地显示这些 git status 中改动具体是啥
* 显示已写入暂存区和已经被修改但尚未写入暂存区文件对区别

```go
git diff [filename]
    // 显示暂时去和工作区差异
参数
-cached 或 -staged
    查看已缓存的改动
-stat
    显示摘要而非整个
git diff [first-branch]...[second-branch]
    显示两次提交之间的差异
git diff ed3708c
    比较之前版本的快照与当前工作目录内容
git diff HEAD
    比较当前版本快照与当前工作目录内容
```

![image-20200913133109938](image-20200913133109938.png)



### 移动文件

```go
// git mv [-v] [-f] [-n] [-k] <source> ... <destination directory>
git mv <file> <destination directory>
    destination directory : 是个存在的目录，
    将 file 移动到 文件夹（destination directory）
```





### 重命名

```go
// git mv [-v] [-f] [-n] [-k] <source> <destination>

git mv <file> <newfile>

参数
    <file>     : 必须存在，并且是文件，符号链接或目录 ，
    <newfile>: 文件新名字


效果
    1.创建一个和之前文件内容一样的文件，文件名为新的文件名
    2.将原来的文件删除
    3.将删除的文件添加到暂存区
    4.将新建的文件添加到暂存区
```



### 撤销

```java
//  改乱了工作区某个文件的内容，想直接丢弃工作区的修改时
//  git checkout hello.txt
git checkout -- file
  
// 当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，
第一步:   用命令git reset HEAD <file>，就回到了场景1，
第二步:   按场景1操作。
    
// 已经提交了不合适的修改到版本库时，想要撤销本次提交，参考
    版本回退
    
// 删除属于    
```

### 删除

```java
介绍
    删除也是一个修改操作
1.彻底从暂存区或版本库删除.
	Git rm test.txt      
    
2.从缓存区或版本库中获取    
    Git checkout test.txt
```





## 版本控制



### 查看历史记录

* git log

    ```go
    git log  // 查看所有的历史记录
    --pretty==oneline   // 一行显示
    -- oneline          // 一行显示，精简哈希索引,只显示过去的
    --graph             // 查看历史中什么时候出现了分支、合并
    --reverse             // 逆向显示所有日志
    --author=lili       // 查找指定用户的提交日志
    --before={3.weeks.ago}  // 三周前所有提交
    --after={2010-04-18}     // 在2010年四月十八日之后的所有提交
    --since 
    --before
    --until 
    --decorate            // 查看标签信息
    
    git reflog   // 显示所有的日志
    ```

* git blame 

    ```go
    git blame <file>
    列表形式显示修改记录
    ```



### 版本前进后退

```go
git reset [参数] [HEAD] 
```

* --mixed

    * 用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。

    ```go
    // 默认值，可省略
    
    git reset [HEAD]
    
    // head 表示最新快照
    git reset HEAD^           // 回退所有内容到上一个版本
    git reset HEAD^ hello.go  // 回退 hello.go 文件的版本到上一个版本
    git reset 7305cd8         // 回退到指定版本
    ```

* --hard

    ```go
    // 注意搭配 git reflog 使用
    
    // 基于索引值操作[推荐]
    git reset --hard [局部索引值]
    
    // 使用 ^ 符号 ，只能后退
    git reset --hard HEAD^
        1. 一个 ^ 表示后退一步 ， n 个表示后退 n 步
    
    // 使用 ~ 符号 ，只能后退
    git reset --hard HEAD~n // 表示后退 n 步
    ```

* --soft

    ```go
    git reset --soft HEAD
    ```





## 分支管理

#### 创建分支

```go
// 创建分支，但是未切换到该分支下
git branch (branchname)

// 创建新分支并立即切换到该分支下
git checkout -b (branchname) 
```

##### 查看分支

```go
git branch  // 没有参数时，git branch 会列出你在本地的分支。
```

##### 删除分支

* 合并完分支就可以删除分支了
* 尽量保存，先别删除

```go
//删除 develop 分支
git branch -d develop
```

#### 切换分支

```go
// 切换到 develop 分支
git checkout develop
```

#### 合并分支

```go
// 将 develop 分支合并到 master 分支，
// 1. 切换到 master 分支
// 2. 执行该命令
// 将 develop 分支最后一次提交的快照合并入当前的 master 分支
// 合并指定分支到当前分支
git merge develop
```

#### 合并冲突

```java
Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，我们修改如下后保存：
```



## 库推送



### 忽略提交跟踪

```go
创建 .gitignore
将 *.txt 写入改文件，就可忽略所有后缀为 txt 的文件

忽略文件的原则是：
1.忽略操作系统自动生成的文件，比如缩略图等；
2.忽略编译生成的中间文件、可执行文件等，
	也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，
	比如Java编译产生的.class文件；
3.忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。
```



### 提交文件

#### 提交暂存区

```go
// 添加指定文件
git add [filename]

// 添加当前文件
git add .

1. 将工作区的 新建/修改 添加到暂存区
2. 表示追踪改文件
```

#### 提交本地库

```go
// 将暂存区的内容提交到本地库

// 全部文件
git commit -m [message] 

// 指定文件
git commit [file1] [file2] ... -m [mesage]

// 修改文件后不需要执行 git add 命令，直接来提交
git commit -a 
```

#### 提交远程库

```go
git push <远程主机名> <本地分支名>:<远程分支名>
    将本地的分支版本上传到远程并合并


git push [远程 alias] [本地 branch]
    将你的本地 [branch] 分支推送到 [alias] 远程仓库上
    本地分支名与远程分支名相同，则可以省略冒号：

git push -u origin <本地分支名>

第一次推送master分支时，加上了 –u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

push
	理论上只要能定位到一个版本库就可以push/pull ， 并不一定需要clone来建立关联 ，但是必须满足三个条件：
    1: 必需是裸版本库
    2: 有这个版本库push和pull的权限
    3: 满足快进式Fast-forward模式,否则无法push成功，pull只会把代码fetch下来，但不会merge
模式
   1.  快进式push
    一般情况下，只允许快进式push.所谓快进式推送，就是要推送的本地版本库的提交是建立在远程版本库相应分支的现有提交基础上的，即远程版本库相应分支的最新提交是本地版本库最新提交的祖先提交。
   2.  非快进式（non-fast-forward）
    非快进式提交是不被允许的，因为这样每个人都随便提交的话会互相覆盖，会弄乱版本库，版本库无法保证一个完整的提交链。

注意
	在push操作时，必需要指定一个远程的分支，也就是要把提交推送到一个明确的分支。 所以在push之前，我们要先取得这个远程分支的提交并作为我们本地提交的祖先提交。
	在这个祖先提交之后所有提交就是最新提交。push就是把这些提交对应的git对象上传到远程版本库。
	所以，在push之前，一定要先pull ，同步一下远程版本库的最新信息 。
	git pull会取得最新提交并和当前分支merge,merge之后最新提交就是本地提交的祖先提交了。


```

## 库拉取



### 提取远程库更新

```go
git fetch origin master ...
    从名为 origin 的远程上拉取名为 master 的分支到本地分支 origin/master 中
    ... 意思为 ： 拉起多个分支的代码
    拉取代码，当然需要同时指定远程名与分支名，所以分开写
git merge origin/master ...
    合并名为 origin/master 的分支到当前所在分支
    ... 意思为 ： 合并多个分支的代码
    既然是分支的合并，当然就与远程名没有直接的关系，所以没有出现远程名。需要指定的是被合并的分支。

// -----------------------------------------------------------------------------
// 合体 
git pull <远程主机名> <远程分支名>:<本地分支名>

git pull origin master:brantest
    远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。
git pull origin master
    取回 origin/master 分支，再与当前所在分支合并

// 注意



//  当拉取远程库的项目
    1. 当你本地有仓库(列入你之前 clone 的有)
        使用 git pull  
     2. 当你本地无仓库
        使用 git clone

注意：
    pull push 是要交替着来的，不能一直 push 不 pull
```



## 标签

* 达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签

    ```go
    // 查看标签 
    git tag
    
    // 打标签
    git tag -a v1.0 
    
    // 追加标签
     git tag -a v1.0 85fc7e7
    
    // 指定标签信息命令：
    git tag -a <tagname> -m "runoob.com标签"
    
    //PGP签名标签命令
    git tag -s <tagname> -m "runoob.com标签"
    
    git tag <tagname>用于新建一个标签，默认为HEAD，也可以指定一个commit id
    git tag -a <tagname> -m "blablabla..."可以指定标签信息
    
    
    注意
    	标签总是和某个commit挂钩。
    	如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。
    ```



## 操作远程库



### 库短名修改

* 修改远程库在贝本地的别名

```go
git remote rename 旧名称 新名称

//  git remote rename pd paul  将远程库本地名称 pd 修改成 paul
// 其对应的分支名称也变了  pd/master  改成 paul/master
```

### 远程库分支

```css
push不光可以推送到远程已经存在的分支，也可以推送到不存在的分支，当推送到不存在分支时，就创建了这个远程分支。
```





## Git 服务器搭建

## 参考

```go
https://www.runoob.com/git/git-server.html
```