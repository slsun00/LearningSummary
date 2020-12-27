## 1.数据库基础

### 介绍

*   持久化数据的一种介质，用来存储和管理数据的仓库
*   持久化
    *   把数据保存到可掉电设备中以供之后使用

### 1.特点

* 将数据放到表中，表再放库中
* ## 3.修改默认 data 存储位置

*   基于客户机 — 服务器的 DBMS ( C/S  Mysql oracal sqlserver)

### 2.英文

*   DB
    *   数据库（database）
    *    存储数据的仓库，保存一系列有组织的数据

*   DBMS
    *   数据库管理系统（database management system）
    *   数据库是通过DBMS创建和操作的容器
    *   数据库软件或数据库产品，
    *   分类
        *   
    
*   SQL

    *   结构化查询语言（structure query language）
    *   专门用来与数据库通信的语言 ，不是某个数据库软件特有的，几乎所有的主流数据库通用的语言

    ![1598583537715](1598583537715.png)





### 4.常见数据库

*   MySQL  : 甲骨文
*   oracle  : 甲骨文
*   db2  ：IBM
*   sql server  ：微软



## Mysql

### 介绍

*   一种开放源代码的关系型数据库管理系统
*   数据库管理软件是 C/S 架构，底层是 TCP/IP 协议程序

### 优点

*   可以持续化到本地
*   结构化查询
*   开源、免费、成本低
*   性能好、移植性好
*   体积小，便于安装

### 卸载

*   要停止服务

### 5.几个必知英文

*   DML（data manipulation language），数据操作语言，如增删改
*   DQL（data query language），数据查询语言

*    DDL（data definition language），数据定义语言，如建表删表，修改表字段（改变表结构） 

*    DCL（data control language），数据控制语言，如权限授权 
    *   TCL(Transaction control language) 事务控制语言



* 一般用到DQL DML , 另外的DDL、DCL是交给dba去研究的

## mysql文件

```mysql
 bin目录中都是可执行文件；
 my.ini文件是MySQL的配置文件；
 MySQL的***\*数据存储\****目录为data
 data目录通常在C:\Documents and Settings\All Users\Application Data\MySQL\MySQL Server 5.1\data位置。
 在data下的每个目录都代表一个数据库。
 
 
 服务端 mysqld 服务端配置
```



##  SQLyog

1.  选中要执行的代码行，按 F9 执行选中的代码行

2.  双击某个字段、表、库。就会输入该名称
3.  不要过于依赖表界面的表，有时候他可能界面更新不及时，所以需要用命令行取查看

3.  导入 sql  脚本

*   右击找执行SQL 脚本
*   找到对应的路径导入就行
*   如果导入没有找到对应的表，刷新就行