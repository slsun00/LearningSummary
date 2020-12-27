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
1. 插入的值的类型要与列的类型一致或者兼容

2. 不可以为 null 的列必须插入值，
   可以为 null 的值，插入值的方式：
    	方式一：列下的值写 null
    	方式二：列不写，对应列的值也不写（可以为空的可以不用写） 

3. 列的顺序可以调换，下面写的对应的值就行，
	列和值要一一对应
4. 可以省略列名，默认是所有列，而且列的顺序和表中的列的顺序一致
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

## 2. 修改/更新语句

### 1.修改单表

```mysql
（1）update 表名

（3 ）set 列=新值，列=新值，...

（2）where 筛选条件；
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

## 3.删除语句

### 1.delete

*   单表删除

    ```mysql
     delete from 表名 [where 筛选条件] [limit 条目数]   # 删除的是整行
    ```

*   多表删除

    *   sql 192

        ```mysql
        delete 要删除的表的别名，要删除的表的别名
        
        from 表1 别名 ，表2  别名
        
        where 连接条件
        
        and 筛选条件
        ```

        

    *   sql199

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



