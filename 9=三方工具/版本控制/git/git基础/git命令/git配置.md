## 一次全局配置！

```js
这些在你下载 git 后，只用配置一次，就可以得到全局的配置

账号邮箱配置
ssh配置（这个是配置的你本地电脑+加远程库）
```



## git 版本查看

```js
git --version
```



## 用户邮箱

* 作用

    * 区分不同开发人员的身份,和登录远程库(代码托管中心)的账号、密码没有任何关系。

* 项目级别/仓库级别

    * 仅在当前本地库范围内有效

        ```go
        //  信息保存位置  ./.git/config 文件
            git config user.name 666
            git config user.amil 123@qq.com
        ```

* 系统用户级别

    * 登录当前操作系统的用户范围

        ```go
        // 信息保存位置 ~/.gitconfig 文件
        // 一般设置这个就行了
        
            git config -globle user.name  666
            git config -globle user.email 123@qq.com
        ```

* 优先级

    * 两者必须有一个，一般设置系统用户级别就行
    * 就近原则 ：项目级别大于系统用户级别

* 查看

    ```js
    // 显示当前 git 配置信息
        git config --list
        git config --list --show-origin
    
    // 编辑 git 配置文件
        git config -e    // 针对当期那仓库
        git config -e --global //针对系统上所有的仓库
        
        
        
        // 查看设置
    git config --list
    
    // 设置用户名 邮箱
        查看如何设置 ， 最好配置 global 的
        设置 git 用户提交签名 ，只使用 --global 即可
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



## ==============

## 不同项目不同配置！

```js
不同的项目进行不同的配置，但是只用设置一次就可以了
```

## 本地库

### 介绍

```js
// 分类
	版本库
        工作区的版本库主要用于日常工作
        先把代码提交到本地的版本库中，然后通过本地库推送到服务器上的版本库中。
    裸版本
        主要存在于服务器上，作为集中式的版本仓库存在。
        因为没有人会在服务器上修改代码并提交，所以这类版本库不需要工作区。
		当然其创建方式也略微不同与带工作区的版本库
//注意
   1. 本地库初始化 vs 克隆远程库
       本地库初始化
            初始化了本地库，然后关联远程库 ，编辑就可以直接推送了
       克隆远程库
            不用进行本地初始化，
            直接在文件中进行克隆，进入对应的文件夹中 ，关联远程库，就可以编辑推送
            里面带的有 .git 文件 ，不用初始化了
    注意 ： 推送之前进行 git pull     
      
```

### 1.本地库初始化

#### 版本库初始化

```js
git init [filename]

1. 省略 filename
    当前目录作为仓库
2. 不省略
    指定文件作为仓库

3. 一般只初始化一次

// 刚创建远程库的时候，里面貌似就有，直接 pull 下来，貌似就是有 .git 文件了
```



#### 裸版本库初始化

```css
初始化
	$ git init --bare
	/* 为了方便查看，一般会把裸版本库的目录名称中加上 .git 后缀 */
	$ git init –bare hello.git 
版本库 ---> 裸版本库
	裸版本库没有工作区，所以无法直接把代码提交到裸版本库中。
	通用的做法是先克隆裸版本库，在本地库中提交，然后推送到裸版本库中。

	方法 1，从现有库克隆出来一个裸版本库：

        $ git clone –bare hello hellobare.git

        用 git log 命令查看版本库 hellobare.git，它的历史记录和版本库 hello 是一样的。

    方法 2，把已有库推送到裸版本库：

        $ git push –all hellobare2.git

        用 git log 命令查看 hellobare2.git 库，它的历史记录和版本库 hello 也是一样的。
```



### 1.克隆远程库

```css
// 克隆下来的文件中，自带 .git 文件
git clone <协议> [别名]
// [别名] 自定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：
git clone https://gitee.com/slsun00/test.git mytest
git clone https://gitee.com/slsun00/test mytest



克隆方法
    用法1 : git clone <repository> <directory>
        clone一个对等的版本库 A ,对等版本库A 和 git-demo有着同样的工作区，同时也有.git目录


    用法2 : git clone --bare <repository> <directory>
        clone一个裸的版本库 B , 裸版本库B里面直接就是.git目录里面的内容


    用法3 : git clone --mirror <repository> <directory>
        clone一个裸的镜像版本库 C , 裸版本库B里面直接就是.git目录里面的内容


    方法1
        克隆一个 <repository>指向的版本库到 <directory> 目录，
        相当于copy了一个 repository的副本，里面有着一样的工作区，一样的 .git目录。
        差别是新克隆出来的这个版本库里的.git/config文件会记录上游版本库repository的位置。
    方法2
        克隆出来的版本库不包括工作区，直接就是版本库的内容，也就是不包括.git目录而是直接就是.git目录里面的内容。
        这样的版本库称为裸版本库。(通过bare名字就可以看出)
    方法3
        法2类似，也是克隆出一个裸版本库。不过是可以通过git fetch命令与上游版本库repository持续同步。
------------------------------------------------------------------------------------------------
注意
	/* 远程版本库的后缀是'.git',根据前面介绍的约定 '.git'后缀的版本库是裸版本库。*/
	$git clone git@github.com:christian-tl/git-demo.git
        
	1. 远程版本库服务器上面的版本库都是裸版本库 
	2. 克隆下来的版本库会默认把他所克隆的这个版本库注册为上游版本库,并且起名为 origin
    3. 游版本库可以叫任何名字，只不过origin是git默认的上游版本库的名字，当需要写这个名字的地方却省略时，git默认认为是origin
    4. git 做了一个本地master分支和远程版本库master分支的映射。
		本地master分支上执行git pull origin master等价于 git pull
        			  执行git push origin master等价于 git push
    5.  git clone之后版本库默认只有一个master分支，master分支指向了origin/master分支相同的提交号
    6. git clone 命令会把远程版本库的git对象下载下来到 .git/objects目录里，把分支引用保存到.git/packed-refs文件中。得到了引用和git对象，就得到了整个版本库了
```

### 2.关联远程库

*   添加远程库本地别名

    ```js
    git remote add 别名(origin)  https
    // git remote add origin https://github.com/slsun00/learn-code.git
    ```

*    查看

    ```js
    git remote 
    git remote -v  // (推荐) 到每个别名的实际链接地址
    
    git remote show [remote] // 显示某个远程仓库的信息
    ```

    



## 远程库

### 远程库介绍

```css
上游版本库
    1. 广义上来说，当前版本库之外的版本库都是远程版本库，
    2. 上游版本库指的是通过git clone 或 git remote add 所指向的那个版本库。
    总述
        上游版本库是远程版本库的一个子集。
        实际工作中，几乎所有的版本库都是通过git clone而来，所以一般情况下远程版本库和上游版本库是同一个意思。
远程版本库
	1. Git版本库来说，从广义上来讲，除了本身以外，其他的版本库都是远程版本库。
	2. 每个版本库都是平等的，无非是有的版本库处于同一个本地磁盘，有的在网络上。根据所处的位置不同，Git会采用不用的通信协议来进行交互。在本地就用本地协议，在网络上就用 SSH ,GIT,HTTP(S),FTP(S)等网络协议。不同的协议对使用来讲具体来说就是URL不同，其他的原理和使用方式没有任何不同。


远程中央版本库
	各版本库之间没有主次之分，是平等的，但是很难做到，所以就一定要在这个团队中固定一个人的版本库 ， 我们需要找一个空闲的单独的稳定的服务器来做这个版本库，大家都从这里更新，向这个提交。这个版本库就是实际工作中的“远程版本库
```

## 代理配置

```java
// 本地电脑使用的公司内网，用了代理，而git没有设置
    设置全局代理
    git config --global http.proxy 172.17.18.80:8080

    查看是否成功
    git config --get http.proxy
    172.17.18.80:8080
    
        
// 项目单独设置
只对 github 的 clone 仓库配置：
        进入 github clone 仓库，运行 git config --local http.proxy 192.168.4.12:8080

        //  .git/config 文件中多了最下面两行
        [http]
        proxy = 10.xx.xx.xx:8080

	这也意味着，我们直接按上面改这个配置文件也能达到同样的目的。
     
```

