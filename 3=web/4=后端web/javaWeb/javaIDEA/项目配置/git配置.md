## git 配置

```java
安装好IntelliJ IDEA后，
如果Git安装在默认路径下，那么idea会自动找到git的位置，如果更改了Git的安装位置则需要手动配置下Git的路径。
    
    
File–>Setting->Version Control–>Git–>Path to Git executable
    选择你的git安装后的git.exe文件，然后点击Tes   
    
github 
    在相同的界面下配置
```

## 项目配置



### 已有工程添加 git

```java
工具栏中 VCS -- import into version Control -- create git responsitory -- 选择项目(就是项目文件夹) --
    
```

### 文件忽略

```java
// 位置 ：  project/
.gitignore
    .idea/	 // 整个文件都不用管理
    projecttest.xml		// 项目名.xml 自动生成的
    target/
    
```

### 提交处理

```java
方式一
    直接由  git 工具栏
方式二
    // 注意提交的页面信息, 里面由详细信息
    项目右键 -- git -- 由提交，
```

### 克隆处理

```java
注意
    不同版本的界面是不一样的， 所以看看自己的IDEA版本
方式一
    // 2019
    新建项目的界面 -- check out from version control
    // 2020 
    新建项目的界面 -- get from vcs
```

