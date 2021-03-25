

## 2.常用语法


### 6.着重号使用

```
用于字段和保留关键字重复的时候，不至于识别错误
 NAME 是保留关键词，但是有一个字段就是name,那么此时就用`name`,将它和关键词区别开 
```

### 7.命令结尾

```mysql
要以 ； 或者 /g 结尾，
# 推荐 ；
```

### 8。一些命令拆分是否合理

```mysql
use 库名


select databases();

create tablestuinfo(
```



## 3.通配符

```mysql
% 任意多个字符，包含0个字符

_   任意单个字符

通配符转义：

\ 通配符转义
```

## 6.存储过程和函数.

* 存储过程和函数：类似Java中的方法

### 1. 好处：
    1. 提高代码的重用性
    2. 简化操作
    3. 减少了编译次数并且减少了和数据库服务器的链接次数，提高了效率

### 2. 存储过程

* 说明：实际开发中一般不使用存储过程，最重要的问题就是不容易维护，比如阿里就禁用了存储过程......

### 3. 含义

* 一组预先编译好的sql语句的集合，理解成批处理语句
* 可以有0个 返回，也可以有多个返回

### 4. 使用

*   sqlyog 不支持结束标记语法，需要到windows的dos窗口中使用

```mysql
# 1.创建语法
    create procedure 存储过程名（参数列表）
    begin 
        存储过程体（一组合法的sql语句）
    end

    注意：
    1.参数列表有三部分
          参数模式
            in ：进（读） ，该参数可以作为输入，就是该参数需要调用方(就是call ) 传入值
            out ：出（写） ，该参数可以作为输出，该参数可以作为返回值
            inout ：既进又出（可读可写）：改参数可作为输入也可作为输出，该参数需传入值，也可返回值
          参数名
          参数类型
          举个栗子 ：instuname varchar(20)
  
    2.如果存储过程体仅仅是一句话，begin end 可以省略
        存储过程体中的每条sql语句的结尾要求必须加分号
        存储过程的结尾可以使用 delimiter 重新设置
            delimiter 结束标记 #这个标记可以用你想用的任何字符

        
			
# 2.调用语法
    call 存储过程名（实参列表）；

# 3.删除
	drop procedure 存储过程名字 #只能一次删除一个，不能同时一条语句删除多个
	
# 4.查看存储过程信息
	show create procedure 存储名； #desc是查看表结构，而储存结构只是sql语句
# 5.修改
    里面的语句是不能修改的，直接删了重新建就行

#栗子
#1.空参列表
    # 插入到admin表中两条记录
        delimiter $
        create procedure myp1()
        begin
            insert into  admin(name,'password')
            values('lili,123'),('baba','456')
        end $   #需要到windows的dos窗口中使用

        #有参数方法后，也需要创建两个变量来表示这个值
        call myp1()$ #存储过程添加的标记，在调用的时候也要加上 

#2.创建带 in模式参数的存储过程
 
```



## 2.函数

* 出现1418这个错误的，输入set global log_bin_trust_function_creators=1;开启函数功能
* 有且仅有有1个返回

```mysql
# 1.创建函数
    create function 函数名（参数列表） returns 返回类型
    begin
        函数体
    end
    注意：
    1.参数列表
        参数名字

        参数类型
    2.函数体肯定有 return 语句，如果没有会报错
        如果return语句没有放在函数体的最后也不会报错，但是不建议
    3.函数体中仅有一句话，则可以省略 begin end
    4.使用delimiter语句设置结束标记
        delimiter 结束标记；
	
# 2.调用语法
    select 函数名（参数列表）；
# 3.查看函数
    show create function 函数名；
# 4.删除函数
    drop function 函数名；
```

### 使用例子

```mysql
举个栗子

# 1.无参有返回值
	# 案例：返回公司员工个数
    delimiter $
    create function myf1() returns int
    begin
        declare c int default 0;#定义变量
        select count（*） int c； #赋值
        from employees;
        return c;
    end $
    select myf1()$ 


#2.有参数有返回
    #根据员工名，返回它的工资
    create function myf2(empName varchar(20)) returns double
    begin
        set @sal=0;#定义用户变量
        select salary；
        from employees;
        where last_name = empName;

        return @sal;
    end $
    select myf2('k_ing') $
```


