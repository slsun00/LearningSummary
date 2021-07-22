## 介绍

```java
Spring Data Redis是spring大家族的一部分，提供了在srping应用中通过简单的配置访问redis服务，对reids底层开发包(Jedis, JRedis, and RJC)进行了高度封装，RedisTemplate提供了redis各种操作、异常处理及序列化功能，支持发布订阅，并对spring cache进行了实现。
```



## yml 配置

```yaml
spring: 
  redis:
    host: 192.168.100.100
    port: 6379
    database: 0
    password: 123456 #默认为空
    lettuce:
      pool:
        max-active: 20  #最大连接数，负值表示没有限制，默认8
        max-wait: -1    #最大阻塞等待时间，负值表示没限制，默认-1
        max-idle: 8     #最大空闲连接，默认8
        min-idle: 0     #最小空闲连接，默认0
```

## config

```java
/**
 * 我们自定义一个 RedisTemplate，设置序列化器，这样我们可以很方便的操作实例对象。
 * 否则redis自动使用对象的jdk序列化
 */
@Configuration
@EnableCaching
public class RedisConfig {

    @Bean
    public RedisTemplate<String, Serializable> redisTemplate(
        LettuceConnectionFactory connectionFactory
    ) {
        RedisTemplate<String, Serializable> redisTemplate = new RedisTemplate<>();
        redisTemplate.setKeySerializer(new StringRedisSerializer());//key序列化方式
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());//value序列化
        redisTemplate.setConnectionFactory(connectionFactory);
        
        return redisTemplate;
    }
    
    // 缓存
    @Bean
	public CacheManager cacheManager(
        LettuceConnectionFactory connectionFactory
    ) {
    
    RedisCacheConfiguration config = 
        RedisCacheConfiguration.defaultCacheConfig()
        	//过期时间600秒
        	.entryTtl(Duration.ofSeconds(600)) 
        	// 配置序列化
        	.serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer()))
        	.serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer()))
        	.disableCachingNullValues();

    RedisCacheManager cacheManager = 
        RedisCacheManager.builder(connectionFactory)
        	.cacheDefaults(config)
        	.build();
    return cacheManager;
}
}
```

