## 需要总结

```go
https://blog.csdn.net/u011535541/article/details/83379151
https://www.jianshu.com/p/e57a4a2cf077
```

## SSH 设置

* 概念
  
  * 本地和远程仓库交互，必须有一个安全机制防止数据泄漏，这个安全机制就是 SSH，所以远程交互之间需要进行 SSH 配置

* 查看 SSH 是否安装
  
  ```go
  $ssh  // 出现 下面之类的信息就是安装好了
  
  usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]
             [-b bind_address] [-c cipher_spec] [-D [bind_address:]port]
             [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
             [-i identity_file] [-J [user@]host[:port]] [-L address]
             [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]
             [-Q query_option] [-R address] [-S ctl_path] [-W host:port]
             [-w local_tun[:remote_tun]] destination [command]
  ```

* 生成 ssh key
  
  ```go
  ssh-keygen -t rsa -C "github 注册邮箱"  // 指定 rsa 算法生成秘钥 ， 接着三个回车，不需要输入密码
  -t 
      选项指定。如果没有指定则默认生成用于SSH-2的RSA密钥。这里使用的是 rsa
  -C // 后面的注册邮箱可以不用
      来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息
  
    会生成两个而文件 ： id_rsa  ：私钥        id_rsa.pub ：公钥
    // 文件位置，看你生成 ssh key 成功后 git bash 上面的提示信息
    // Your identification has been saved in .../id_rsa
    // Your public key has been saved in .../id_rsa
  ```
  
* 添加 ssh key
  
  * 找到文件 rsa.pub ，复制出里面的秘钥（里面的全部内容，记事本都能打开）
  
  * 添加秘钥到 github
    
    ```go
    点你头像右边的下拉箭头依次找到
    setting -- SSH and GPC keys -- new SSH key -- 把公钥粘贴进去 -- add ssh skey
    ```

* 验证绑定
  
  ```go
  $ssh -T git@github.com
  
  // 显示下列信息说明成功了 ，就可以进行交互了
  Hi slsun00! You've successfully authenticated, but GitHub does not provide shell access.
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

## 快速入门git

1. 安装软件
   
   ```go
   git --version  // 查看版本
   ```

2. 初次运行前设置
   
   ```go
   // 查看设置
   git config --list
   git config --list --show-origin
   // 设置用户名 邮箱
       查看如何设置 ， 最好配置 global 的
       设置 git 用户提交签名 ，只使用 --global 即可
   ```

3. 设置 ssh
