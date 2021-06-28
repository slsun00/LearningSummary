## 官网

```java
https://help.sonatype.com/repomanager2/download/download-archives---repository-manager-oss
```

## nexus 仓库类型

```java
介绍
    划分为4种类型，每种类型的仓库用于存放特定的jar包
分类    
hosted，宿主仓库，
    部署自己的jar到这个类型的仓库，包括Releases和Snapshots两部分，
    Releases为公司内部发布版本仓库、 
    Snapshots为公司内部测试版本仓库 
proxy，代理仓库，
    用于代理远程的公共仓库，
    如maven中央仓库，用户连接私服，私服自动去中央仓库下载jar包或者插件
group，仓库组，
    用来合并多个hosted/proxy仓库，
    通常我们配置自己的maven连接仓库组
virtual(虚拟)：
    兼容Maven1版本的jar或者插件

```

