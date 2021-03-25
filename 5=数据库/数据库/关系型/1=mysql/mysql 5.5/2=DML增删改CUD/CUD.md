## 概述

```mysql
数据插入语言

插入：insert

修改：update

删除：delete
```



## 1.插入语句

### 经典插入

```mysql
insert into 表名（列名1，列名2，...）values(值1，值2，...)
#========================================================
1. 列 和 值要一一对应， 类型一致或者兼容
2. 表名后不加列名， 默认给所有的列添加值 
	省略列名，默认是所有列，而且列的顺序和表中的列的顺序一致
3. 除了数字类型， 其他类型都要用 引号(单双引号引起来)
4. 非空值(null)必须要插入值

2. 不可以为 null 的列必须插入值，
   可以为 null 的值，插入值的方式：
    	方式一：列下的值写 null
    	方式二：列不写，对应列的值也不写（可以为空的可以不用写） 



```

### 方式二

```mysql
insert into 表名
set  列名=表名，列名=表名，...
```

### 方式三

```mysql
insert into beauty(id,name)
select 26,'周周'；
```

### 比较

*   方式一支持多行插入，方式二不支持
*   .方式一支持子查询，方式二不支持



## 2. 删除语句

### 1.delete

#### 单表删除

```mysql
 delete from 表名 [where 筛选条件] [limit 条目数]   # 删除的是整行
 
 注意
 	不加删选条件， 默认的就是删除整个表
 
```

#### 多表删除

* sql 192

    ```mysql
    delete 要删除的表的别名，要删除的表的别名
    
    from 表1 别名 ，表2  别名
    
    where 连接条件
    
    and 筛选条件
    ```

    

* sql199

    ```mysql
    delete 要删除的表的别名，要删除的表的别名
    
    from 表1 别名 
    inner |left|join 表2  别名
    on 连接条件
    
    where 连接条件
    
    and 筛选条件
    ```

### 2.truncate

```mysql
truncate table 表名；  #此语句不能添加where语句，就是清空表格，但是表格仍然还在 
```

###   3. 对比

1.假如要删除的表中有自增数列

```mysql
* 如果使用delete删除，在插入数据，自增长列的值从断点开始
* 如果使用truncate删除，在插入数据，自增长列的值从1开始
```

2.truncate 无返回值   （受影响的行数值的反馈）

   delete    有返回值

3.truncate删除不能回滚

​    delete删除可以回滚

4.truncate 的效率高





​    







## 2. 修改/更新语句

### 1.修改单表

```mysql
（1）update 表名

（3）set 列=新值，列=新值，...  # 确定那一列

（2）where 筛选条件；    # 确定哪一行


# 注意
如果不加任何条件， 会将表中的所有数据都写给掉
```

### 2.修改多表记录

*   sql 192

    ```mysql
    update 表1 别名，表2 别名
    
    set 列=值，...
    
    where 连接条件
    
    and 筛选条件
    ```

*   sql 199

    ```mysql
    update 表1 别名
    inner |left |right join 表2 别名
    on 连接条件
    set 列=值，...
    where 筛选条件
    set 列=值，...
    where 连接条件
    and 筛选条
    ```

