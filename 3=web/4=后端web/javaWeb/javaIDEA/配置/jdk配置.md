## 首次安装配置

```java
本机的jdk版本：
    命令提示输入：java -version
解决
    file  -- > project structure -->
    	project --> 
    		project sdk -->8
    		language level --> 8
    		// 在项目下面新建一个编译输出文件
    		project ... output --> project项目/out
    	moudles --> 
    		sources --> language level --> 8 
    		dependencies --> Module SDK --> 8
    	plateform Settings -- 
    		SDKs -- JDK home path: java 安装目录（bin的上层目录就行了）
	file --> settings -->
    		Build,eccution... --> project bytecode version --> 8
    
	
```



## 配置 JDK

```java
// 新建项目之前前配置 JDK
	file -- project structure -- SDKs -- 选择java安装位置寄了（bin目录上一层目录）
        
// 新建项目的时候配置JDK
    file - new - project - java -new(右上角) --找到jdk
        
 // 切换项目 jdk
    file -- project structure -  project -- new  - 找到Jdk   
```



## 快捷键更改

```java
settings --> keymap --> 齿轮(fuplicate) --> 
    main menu -->  main menu --> code --> completion（完成） --> 
    	basic: 改为 shift ; // 双击就会出来修改的提示
```



## 编码格式更改

```java
setting -- fileEncoding
```

![image-20210311020532415](image-20210311020532415.png)

## 设置自动编译

```java
setting  -- 搜索：compile
    需要自动编译就选上
```

![image-20210311020723079](image-20210311020723079.png)