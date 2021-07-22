* 

## 常用注解

## 配置开启

```java
@Configuration
@EnableSwagger2   // 标注在 swagger 配置雷伤

@Configuration
@EnableSwagger2
public class Swagger2Config {

    @Bean
    public Docket webApiConfig(){

        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("webApi")
                .apiInfo(webApiInfo())
                .select()
                //只显示api路径下的页面
                .paths(Predicates.and(PathSelectors.regex("/api/.*")))
                .build();

    }

    @Bean
    public Docket adminApiConfig(){

        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("adminApi")
                .apiInfo(adminApiInfo())
                .select()
                //只显示admin路径下的页面
                .paths(Predicates.and(PathSelectors.regex("/admin/.*")))
                .build();

    }

    private ApiInfo webApiInfo(){

        return new ApiInfoBuilder()
                .title("网站-API文档")
                .description("本文档描述了网站微服务接口定义")
                .version("1.0")
                .contact(new Contact("Helen", "http://atguigu.com", "55317332@qq.com"))
                .build();
    }

    private ApiInfo adminApiInfo(){

        return new ApiInfoBuilder()
                .title("后台管理系统-API文档")
                .description("本文档描述了后台管理系统微服务接口定义")
                .version("1.0")
                .contact(new Contact("Helen", "http://atguigu.com", "55317332@qq.com"))
                .build();
    }
}
```



## 类

```java
概述
    // 两种类注解，其他类不需要文档 ？？、
    @Api       	 cotroller 类
    @ApiModel	 entity 类, mp 自动生成的
    
    
@Api（）{
    例子：{

    }    
    作用：{
         表示标识这个类是swagger的资源， 
         标记一个 Controller 类作为 Swagger 文档资源
    }   
    属性： {
        tags：接口说明，可以在页面中显示。可以配置多个，当配置多个的时候，在页面中会显示多个接口的信息
    }          
}
    
   
    
ApiModel（）
    表示对类进行说明，用于参数用实体类接收    
    @ApiModel(description = "实体类", value = "实体类")
    
    
```



## 方法

```java
概述
    // controller 层
    ApiOperation ： http请求
    ApiRespons   ： http 响应
    @ApiImplicitParam
// ==========================================================================    
ApiOperation（）： http请求
     @ApiOperation(value = "apiOperationTest", notes = "apiOperation测试")
	
ApiResponse 和 ApiResponses 接口响应
    	@ApiResponses 组装了多个 @ApiResponse

@ApiImplicitParam（） ：单独的请求参数
@ApiImplicitParams（）用于方法，包含多个@ApiImplicitParam
          @ApiImplicitParams({@ApiImplicitParam(name = "id", value = "id", required = true, dataType = "Integer", paramType = "query"),
                        @ApiImplicitParam(name = "name", value = "name", required = true, dataType = "String", paramType = "query")
    					  })
    	  
        name：参数名，对应方法中单独的参数名称。
        value：参数中文说明。
        required：是否必填。
        paramType：参数类型，取值为 path、query、body、header、form。
        dataType：参数数据类型。
        defaultValue：默认值。


```



## 参数

```java
ApiParam（）：
    用于方法，参数，字段说明：表示对参数的添加元数据（说明或是否必填等）
```

## 属性

```java
概述
    
//===================================================
ApiModelProperty（）{
    介绍： {            
        方法 、 属性（主要）
        对 model 属性的的说明、 数据操作的更改 }
    位置： {
    	方法，字段： 表示对model属性的说明或者是数据操作更改 }
    属性： {
    	value: 文档找那个显示的属性值
         format: 格式
    }
}

```

