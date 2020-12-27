# 1.文档

## redis 中文文档

```go
http://www.kayooo.com/
```



# 2.安装

* 使用第三方开源库 redis 库
* gopath 目录下执行安装指令
* 已经安装 git
* 开启module 是在 gopath/pkg ，目录中

## 1.redigo

```go
go get github.com/garyburd/redigo/redis

// 引入
  import "github.com/garyburd/redigo/redis"
```

## 2.go-redis

  ```go
go get gopkg.in/redis.v4

// 引入
import "gopkg.in/redis.v4"
  ```





# 2.基础知识

* 中间有空格的数据，就必须要用 引号引起来

## 1.五大数据类型

* String
* Hash
* List （列表）
* Set (集合)
* zset （有序集合）

### 1、String

* 是最基础的类型，一个 key 对应一个 value

* 是二进制安全的。除普通字符串外，也可以存放图片等数据

* value 最大的是 512 M

  ```go
  address 天安门
  //说明
  key 	: address
  value	: 天安门
  ```

* 操作

  ```go
  set key value // 存在就修改，不存在就添加
  get key
  del key
  setex key seconf value		// set with expire 键秒值 秒数之后，就销毁了，用于定时任务
  
  meset key value [key value ...]  //一次性设置多个key-value对
  mget key [key ...]     // 一次性获取多个显示的key的 value(注意不是 key-value形式显示的，只是value)
  ```

### 2、哈希

* golang 中的 map , 是一个键值对集合
* 是一个 string 类型的 field - value 的映射表，适用于储存对象
* 所有的 field value  不管是什么类型，存进去都是字符串

```go
user1 name smith age 30 job "golang coder"
key :user1
name smith	: 就是一个field-value

hset key filed value  // 一个一个添加 
	// hmset 多个一次性添加
hget key filed		  // 取出
	// hmget  多个一次性得到
hgetall key  // 按照存入的顺序输出，很稳定
hlen key  // 返回 hash 有多少个字段
hexist key field  // 查看hash 表中是否有field

```

### 3、列表

* 是个简单的字符串列表，按照插入顺序。
* 本质是个 链表，元素有序，且不能重复
* 值移除，对应的键就消失了

```go
// 存入多个元素，注意是从左边加的，
// 最左边为 0 ，最右边为 -1
lpush key value [value ...]   
lrange key start stop   
    // start stop 正向从 0(左边) 开始取， 最后一个元素用 -1 表示 ；逆向 从 -1(右边) 开始
    // range 只能从左往右进行取值 ！！！
rpush
lpop  // 左边出栈一个，删除并显示出来
rpop
del

lindex 按照索引下标获得元素(从左到右，编号从0 开始)
llen key  // 返回列表的 key ,不存在则为空列表，返回 0 
```

### 4、set 集合

* 是 string 类型的无序集合
* 底层是 hashtable 数据结构
* 可以存放很多字符串元素，字符串元素是无序的
* 元素的值不能重复

```go
sadd key value value value ...  // 添加集合
smembers key     //显示所有的集合元素，注意无序
sismumber key value  // 查看 key 中是否有 value
srem  key value  // 删除key中指定的value
```



### 5、连接池

* 事先初始化一定数量的链接，放入到连接池
* 当 go 需要操作 redis 时，直接从 redis 链接池取出链接即可
* 可以节省临时获取 redis 的时间，从而提高效率

```go

```



# 2.使用

## 1初始

* redis 默认有 16 个数据库，初始默认第 0 号库，编号是 0 - 15

## 2.一些命令

```go
添加 key-val	[set]
查看当前redis 的所有 key    [key *]
获取 key 对应的值 [get key]
切换 redis 数据库 [select index]  // index 是库的索引
查看当前数据库的 key-value 数量  [dbsize]
清空当前库的 key-val 
清空所有课的 key-val    [flushdb flushall]
```

# 3.通过golang操作redis



# 4.注意

```go
// 对于整型的。千万不要加双引号，否则就变成字符串了，会死的很难看...
```



