```java
@TableName   对数据表名注解
@TableId	表主键标识    
```



## @mapperScan

```java
 @MapperScan 注解，扫描 Mapper 文件夹
 @MapperScan(
 	
     value  包全类名
     
     
 )     
```



## @TableName

```java

```



## @TableId

```java
含义：{
    表主键标识
}

属性：{
    value	id
	type	IdType
        
}    

public enum IdType {
    AUTO(0),	// 自增
    NONE(1),	// 该类型为未设置主键类型
    INPUT(2),	// 自行输入id, 该类型可以通过自己注册自动填充插件进行填充
    ASSIGN_ID(3),
    ASSIGN_UUID(4),
    
    
    // 以下3种类型、只有当插入对象ID 为空，才自动填充
    
    /** @deprecated */
    @Deprecated
    ID_WORKER(3),	// 分布式全局唯一ID 长整型类型
    
    /** @deprecated */
    @Deprecated
    ID_WORKER_STR(3),	// 分布式全局唯一ID字符串类型
    
    /** @deprecated */
    @Deprecated
    UUID(4);		// 32位UUID字符串

    private final int key;

    private IdType(int key) {
        this.key = key;
    }

    public int getKey() {
        return this.key;
    }
}
```

## @TableFiled

```java
表字段标识
属性：{
    boolean exist  
        true 该属性为数据库表字段。
        false 该属性不为数据库表字段，但又是必须使用的
	condition
        SqlCondition.LIKE：表示该属性可以模糊搜索
	fill 
        = FieldFill.INSERT ：注解填充字段 ，生成器策略部分也可以配置！
        // FieldFill 参看 该注解
	strategy	字段验证	        
}    

public enum FieldStrategy {
    IGNORED,	忽略判断
    NOT_NULL,	非 null 判断
    NOT_EMPTY,	非 空判断
    DEFAULT,	追随全局配置
    NEVER;

    private FieldStrategy() {
    }
}

public enum FieldFill {
    DEFAULT,  默认不处理
    INSERT,   插入时填充字段
    UPDATE,		更新时填充字段
    INSERT_UPDATE;  入和更新时填充字段

    private FieldFill() {
    }
}


```



## @TableLogic

```java

```



## 其他



```java
@FieldStrategy：

@FieldFill

@Version：乐观锁注解、标记

@EnumValue：通枚举类注解

@TableLogic：表字段逻辑处理注解（逻辑删除）

@SqlParser：租户注解
```

