## lombok  官方文档

```java
文档
    https://objectcomputing.com/resources/publications/sett/january-2010-reducing-boilerplate-code-with-project-lombok
是一个插件，能够自动生成 set get 方法
```



## 总结

```java
类上
    @NoArgsConstructor	无参构造函数
    @AllArgsConstructor	全参构造函数
    @RequiredArgsConstructor 	final 字段
    
    // 方法重写
    @ToString			toString 方法
    @EqualsAndHashCode	 重写 这两个方法
    @Date	综合写法
字段
    @Getter/@Setter	自动生成非 final 字段的 setter getter 方法
```



## === 类 ===

## @Builder

```java
@Builder(
介绍：{
    建造者模式创建对象，自动生成流式 set 值写法，从此之 ...

})


例子
@Builder
public class Car {
    private String make;
    private String model;
    private String bodyType;
    private int yearOfManufacture;
    private int cubicCapacity;
    @Singular  //  @Singular 将提供一个额外的方法，允许你向集合添加单个项
    private List<LocalDate> serviceDate;
}

Car muscleCar3 = Car.builder()
    	// 字段值设置：开始
        .make("Ford")
        .model("mustang")
        .serviceDate(LocalDate.of(2016, 5, 4))
    	// 字段值设置：结束
        .build();
```

## 构造器

### @NoArgsConstructor

```java
@NoArgsConstructor(
介绍：{
	自动生成无参构造函数
}
位置：{
    类上
}
    
)
```



### @AllArgsConstructor

```java
@AllArgsConstructor(
介绍：{
	创建带有每个 final成员变量参数的构造函数
}
位置：{
    类上
}
    
)
```

### @RequiredArgsConstructor 

```java
@RequiredArgsConstructor(
介绍：{
	声明该类自动生成一个：带全部字段的构造函数
}
位置：{
    类上
}
    
)
```

##  === 方法 ===

## @Data

```java
@Data(
    介绍：{    
        是 @Getter、 @Setter、 @ToString、 @EqualsAndHashCode 和 @RequiredArgsConstructor 的快捷方式}
    位置：{
        类}   
)
```

## @ToString

```java
@ToString(
介绍：{
    自动生成 toString 方法
}
位置：{
	类        	       
}  
属性：{
	includeFieldNames = true  包含所有字段
	exclude = {}         排除字段
	@Exclude
	@Include        
}    

)
```

## @EqualsAndHashCode

```
@EqualsAndHashCode({
    介绍：{	
        要覆盖 equals和 hashCode 方法}
    位置：{	
        类}
    属性：{	
        exclude 排除某些成员变量}
})
```



## === 字段 ===

## @Getter/@Setter

```java
@Getter/@Setter(
    介绍：{   
        自动生成 getter setter 方法}
    位置：{	
        类 ： 为类中的所有字段都设置该标注	字段        	       
    }  
    注意：{	
        1.	只能在非 final 成员变量上使用 @Setter，在 final成员变量上使用将导致编译错误}        

)    
    
    语法例子
    public class Test {	
        @Getter    
        @Setter    
        public String name
    }    
```





## 日志 

### @Slf4j

```java
@Slf4j(介绍：{    你创建日志记录器的注解。你要做的所有事情就是在类上添加注解})例子@Slf4jpublic class SomeService {    public void doStuff() {        log.debug("doing stuff....");    }}    
```



```java
@Value 也是整合包，但是他会把所有的变量都设成 ...@Builder @Slf4j
```





## //======

## 普通注解

### @NonNull

```java
@NonNull(
作用:{
     null 检查通常不是一个坏主意
}    
位置：{
    方法、参数、字段、局部变量、类型参数
}
注意:{
	1. 默认情况下， Lombok会抛出 NullPointerException, 可以更改配置进行抛错
        参数抛错建议：IllegalArgumentException
}
    
)

// 例子
public void test(@NonNull String name, @NonNull Integer age){ ... }
```

