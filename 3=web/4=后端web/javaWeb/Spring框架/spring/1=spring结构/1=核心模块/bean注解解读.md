







## 类注入-对象创建

```java
介绍
    类上添加注解，可以快速将 bean 加入到 容器中
    spring 底层不会验证组件是否是到底是哪个注解，四个注解仅仅是语义不一样
对象创建
	@Component		用在类上用于实例化Bean
    @Service		业务逻辑，使用在service层类（servlet）上用于实例化Bean
    @Controller		控制器，使用在web层类上用于实例化Bean
    @Repository      持久化， 使用在dao层类上用于实例化Bean
    @Scope	
    
    
   
```



## 属性注入

### 概述

```java
属性注入
    @Autowired：
        使用在字段上用于根据属性类型进行自动装配，
        按照数据类型从 spring 容器中匹配
    @Qualifier()：
        根据名称进行注入， 结合@Autowired一起使用
        按照 id 值从容器中进行匹配
    @Resource()： 
        按照名称进行注入， 相当于@Autowired+@Qualifier 
        可以根据类型注入，可以根据名称注入   
    @Value：  
        注入普通类型属性 
		
    @PostConstruct	 
    	方法上标注，该方法是Bean的初始化方法
    @PreDestroy		 
    	方法上标注，该方法是Bean的销毁方法
    

    @ComponentScan
    @Bean
    	给容器中添加组件，以方法名作为组件的 id 返回类型就是组件类型， 返回值为组件在容器中的实例

    @Import
```

### autowired

```java
@Target({
    ElementType.CONSTRUCTOR,  // 构造函数
    ElementType.METHOD, 	 //  主要是 set 方法
    ElementType.PARAMETER,   //  参数上
    ElementType.FIELD,       //  属性字段上（主要使用）
    ElementType.ANNOTATION_TYPE
})
@Retention(RetentionPolicy.RUNTIME)

使用 
    // 准确地控制应该在何处以及如何进行自动装配
    使用在字段上用于根据属性类型进行自动装配，
    按照数据类型从 spring 容器中匹配
    
例子
public class Employee {
    @AutoWired
    private String age;  // 主要使用
    
    private String name;
    @Autowired
    public void setName(String name) {
        this.name=name;
    }
    public string getName(){
    	return name;
    } 
}
```

### Qualifier

```java
@Target({
    
    ElementType.FIELD,    // 主要用于：属性
    ElementType.METHOD,   // 主要是 set方法
    ElementType.PARAMETER, 
    ElementType.TYPE, 
    ElementType.ANNOTATION_TYPE
})
@Inherited
@Documented
public @interface Qualifier {
    String value() default "";
}

// ====================================================

例子
    public class EmpAccount {
        private Employee emp;
        
        @Autowired
        @Qualifier(emp1)  // 指定了必须装配 id 为 emp1 的 bean
        public void showName() {
        	System.out.println(“Employee name : ”+emp.getName);
     	} 
    }
```





## 异常处理

```java
@Controller_Advice :注解定义全局异常处理类
@Exception_Handler :注解声明异常处理方法        
  
```



### 其他

```java
@ComponentScan

@Mapper // org.apache.ibatis.annotations.Mapper;
	mybatis 进行接口编程的时候，对 mapper 接口进行标注        
```



## @conditional

```java
@conditional(
作用：{
   	满足指定条件，才进行组件注入
}    
位置：{
    类
	方法        
}
属性：{
    Class[] value
}    
继承：{
    // 常用
    ConditionalOnBean
    ConditionalOnMissingBean
        
    ConditionalOnClass
    ConditionalOnMissingClass
        
    ConditionalOnResource        
        
}    
)

```

