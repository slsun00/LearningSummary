## === config ===

## builder

### configBuilder

```java
// 配置汇总 传递给文件生成工具
template_config		模板路径
data_source_config	数据库配置
connnection			sql 连接
    
db_query			sql语句类型
db_type
    
super_entity_class
super_mapper_class
    				
super_service_class		service 超类定义
super_serviceImpl_class
super_controller_class
    
table_info_list		数据库表信息
package_info		包配置详情
path_info			路径配置详情
strategy_config		策略配置
global_config    	全局配置
injection_config	注入配置
    
comment_supported	是支持注释
regx			   过滤正则
    
// 方法
config_builder  构造器配置， 五个配置
get_package_info
get_path_info
get_super_entity_class
get_super_mapper_class    
```

## autoGenenrator.java.class

```java
字段
    ConfigBuilder
    	    dataSource	strategy	packageInfo	
    		template	globalConfig	templateEngine
    config	injectionConfig

方法
    execute
    
```

