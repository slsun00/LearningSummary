## 介绍

* java.io 包中的  file 类
* 操作电脑中的文件和文件夹

## 操作

```java
// 文件和文件夹
创建
获取
判断存在
文件夹遍历
获取文件夹大小
```



## file 类

### 介绍

```java
跟操作系统无关 ，任何系统都可以使用这个类进行操作文件、目录
	file 文件
    directory 文件夹/目录
    path 路径, 部分大小写
    
static String pathSeparator  路径分隔符 ： win ; linux :
static char pathSeparatorChar  文件名称分割符 ：  win \ ;linux /
static String separator 
与系统相关的默认名称 - 分隔符字符，以方便的方式表示为字符串。  
static char separatorChar 
与系统相关的默认名称分隔符。  

```

### 构造函数

```java
你输入的路径名称如果有 后缀名( .txt .md等)就创建文件， 如果没有就创建文件夹
```

### 常用方法

```java
// 获取
    getAbsilutePath 返回此 file 的绝对路径
    getPath		将File 转换为路径字符串
    getName		File 表示的文件或目录名称
    length	文件长度 ，文件夹没有大小的，路径不存在返回 0
        
// 判断, 注意路径不存在的情况
    exists
    isDirectory
    isFile
// 删除
    createNewFile // 不能创建文件夹，路径不存在抛出异常
    delete
    mkdir
    mkdirs
        
// 目录遍历
    list
    listFiles
```

## 文件过滤器

```java
java.io.FileFilter 是一个接口 ， 是 file 的过滤器
java.io.FileNameFilter 是一个接口 ， 是 file 的过滤器
    注意这两个接口没有实现类，需要自己定制实现类，自己些方法
    listsfiles(FileFilter)
    	1. 对构造方法中的目录进行遍历，获取每个文件/文件夹， 封装为 file 对象
    	2. 调用参数传递过滤器中的方法 accept
    	3. 把遍历得到的 file 对象，传递给 accept 的方法参数
    accept(File pathname)
    
    
file 中有方法
```



## 目录遍历

```java
package stuJava.demo9;

import java.io.File;

public class DirPrint {
    public static void main(String[] args) {
        File f = new File("D:\\desk\\知识库\\allstudy\\4=后端\\零碎知识");
        getDir(f);
    }

    public static void getDir(File file) {
        File[] f = file.listFiles();
        for (File files:f){
            if (files.isDirectory()){
                System.out.println(files);
                getDir(files);
            } else {
                // 查找到文件，将 file 对象转换为 字符串对象
                // String name = f.getName()
                // String path = getPath()
                String s = f.toString();
                
                // 字符串转换为小写再判断
                boolean b = s.endWith(".java")
                // 文件搜索
                System.out.println(files);
                
                /*
                    if (f.getName().toLowerCase().endsWidth(".java")){
                        Systerm.out.print(f)
                    }               
                */
            }
        }
    }
}

```

