## 位置

```java
// 其他地方会被忽略
只放在类、接口、成员变量、方法之前
 
```



## Javadoc

### 介绍

* 一种工具，它可以从程序源代码中抽取类、方法、成员等注释，然后形成一个和源代码配套的 API 帮助文档
* 只要在编写程序时以一套特定的标签注释，在程序编写完成后，通过 Javadoc 就形成了程序的 API 帮助文档。
* Javadoc 默认只提取 public、protected 修饰的部分。如果要提取 private 修饰的部分，需要使用 -private。

### 标签

#### 介绍

* 可以识别文档注释中的一些特殊标签，
* 这些标签一般以`@`开头，后跟一个指定的名字，
* 有的也以`{@`开头，以`}`结束。

#### 形式

```java
 @tag 格式的标签（不被{ }包围的标签）为块标签，
     只能在主要描述（类注释中对该类的详细说明为主要描述）后面的标签部分
     （如果块标签放在主要描述的前面，则生成 API 帮助文档时会检测不到主要描述）。
{@tag} 格式的标签（由{ }包围的标签）为内联标签
     可以放在主要描述中的任何位置或块标签的注释中
```



#### 可识别标签

| 标签          | 描述                                                   | 示例                                                         |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| @author       | 标识一个类的作者，一般用于类注释                       | @author description                                          |
| @deprecated   | 指名一个过期的类或成员，表明该类或方法不建议使用       | @deprecated description                                      |
| {@docRoot}    | 指明当前文档根目录的路径                               | Directory Path                                               |
| @exception    | 可能抛出异常的说明，一般用于方法注释                   | @exception exception-name explanation                        |
| {@inheritDoc} | 从直接父类继承的注释                                   | Inherits a comment from the immediate surperclass.           |
| {@link}       | 插入一个到另一个主题的链接                             | {@link name text}                                            |
| {@linkplain}  | 插入一个到另一个主题的链接，但是该链接显示纯文本字体   | Inserts an in-line link to another topic.                    |
| @param        | 说明一个方法的参数，一般用于方法注释                   | @param parameter-name explanation                            |
| @return       | 说明返回值类型，一般用于方法注释，不能出现再构造方法中 | @return explanation                                          |
| @see          | 指定一个到另一个主题的链接                             | @see anchor                                                  |
| @serial       | 说明一个序列化属性                                     | @serial description                                          |
| @serialData   | 说明通过 writeObject() 和 writeExternal() 方法写的数据 | @serialData description                                      |
| @serialField  | 说明一个 ObjectStreamField 组件                        | @serialField name type description                           |
| @since        | 说明从哪个版本起开始有了这个函数                       | @since release                                               |
| @throws       | 和 @exception 标签一样.                                | The @throws tag has the same meaning as the @exception tag.  |
| {@value}      | 显示常量的值，该常量必须是 static 属性。               | Displays the value of a constant, which must be a static field. |
| @version      | 指定类的版本，一般用于类注释                           | @version info                                                |



#### 注意

* Javadoc 标签必须从一行的开头开始，否则将被视为普通文本。
* 一般具有相同名称的标签放在一起。
* Javadoc 标签区分大小写，代码中对于大小写错误的标签不会发生编译错误，但是在生成 API 帮助文档时会检测不到该注释内容



### 命令

```java
javadoc [options] [packagenames] [sourcefiles]  
    options 表示 Javadoc 命令的选项；
    packagenames 表示包名；
    sourcefiles 表示源文件名。

```









































