## Field injection is not recommended

二、问题解决过程

使用 @Autowired 进行注入出现警告，既然是警告，说明这样使用也是没有问题的，那么推荐使用的可能优点更多。那么为什么呢？首先就是自己想想为什么，然后利用搜索引擎去查找。搜索了很多文章，最后觉得解释不错的有两篇。

-国外博客： https://www.vojtechruzicka.com/field-dependency-injection-considered-harmful/
-国内博客： https://www.cnblogs.com/joemsu/p/7688307.html
三、问题学习总结

这里的学习总结主要是参考（翻译）那篇国外博客。（英语不行没关系，直接浏览器翻译整个页面就好了）
3.1注入类型

有三种主要的方式：构造器注入、Setter(方法)和Field 注入。

    构造器注入


private DependencyA dependencyA;
private DependencyB dependencyB;
private DependencyC dependencyC;

@Autowired
public DI(DependencyA dependencyA, DependencyB dependencyB, DependencyC dependencyC) {
    this.dependencyA = dependencyA;
    this.dependencyB = dependencyB;
    this.dependencyC = dependencyC;
}

    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    
    Setter注入


private DependencyA dependencyA;
private DependencyB dependencyB;
private DependencyC dependencyC;

@Autowired
public void setDependencyA(DependencyA dependencyA) {
    this.dependencyA = dependencyA;
}

@Autowired
public void setDependencyB(DependencyB dependencyB) {
    this.dependencyB = dependencyB;
}

@Autowired
public void setDependencyC(DependencyC dependencyC) {
    this.dependencyC = dependencyC;
}

    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    
    Field注入

 

@Autowired
private DependencyA dependencyA;

@Autowired
private DependencyB dependencyB;

@Autowired
private DependencyC dependencyC;

    1
    2
    3
    4
    5
    6
    7
    8
    9
    10

3.2为什么不推荐使用Field注入

从上面的示例中我们可以发现Field注入非常简短，简洁，代码易于阅读。类可以只关注重要的内容，而不受样板代码的影响。不需要构造函数或setter提供来依赖，只需要在字段上面加上@Autowired注解就行了。Java是非常冗长的，所以任何缩短代码的机会都是受欢迎的。但是：

    违反单一责任原则
    添加新的依赖项非常容易。添加6个、10个甚至12个依赖项没有问题。当使用构造函数注入时，在某一点之后，构造函数参数的数量会变得过高，并且很明显会出现问题。依赖太多通常意味着类有太多的责任。这可能违反了单一职责原则和关注点分离，这表明类需要进一步的检查和重构。当直接注入字段时，没有这样的警告，因为这种方法可以无限扩展。
    
    依赖隐藏
    使用依赖注入容器意味着类不再负责管理自己的依赖项。获取依赖项的职责是从类中提取的。由其他人现在负责提供依赖项——依赖注入容器或在测试中手动分配它们。当类不再负责获取其依赖项时，它应该使用公共接口(方法或构造函数)清楚地与它们通信。这样就可以清楚类需要什么，以及它是可选的(setter)还是强制的(构造函数)。
    
    依赖注入容器耦合
    DI框架的核心思想之一是托管类不应该依赖于所使用的DI容器。换句话说，它应该只是一个普通的POJO，可以独立地实例化它，前提是将所有必需的依赖项传递给它。通过这种方式，您可以在单元测试中实例化它，而不需要启动DI容器，并单独测试它(使用的容器更像是集成测试)。如果没有容器耦合，则可以将该类作为托管或非托管类使用，甚至可以切换到新的DI框架。
    
    然而，当直接注入字段时，您无法直接用所有需要的依赖项实例化类。这意味着:
    1）有一种方法(通过调用默认构造函数)可以在一个状态中使用new来创建一个对象，该状态中缺少一些强制协作者，使用将导致NullPointerException。
    2）这样的类不能在DI容器(测试、其他模块)之外重用，因为除了反射之外，没有其他方法为它提供所需的依赖项。
    
    不变性
    与构造函数不同，Field注入不能用于将依赖项分配给最终字段。

3.3构造函数注入 vs Setter注入

Field注入可能不是解决之道。那么setter注入和构造函数呢？

    Setters
    使用setter注入依赖项。类应该能够在不提供它们的情况下工作。在对象实例化之后，可以随时更改依赖项。根据具体情况，这可能不是一个优势。有时，拥有一个不可变的对象是可取的。有时在运行时更改对象的协作者是很好的——例如JMX托管的mbean。
    
    官方建议从spring3.x开始。文档鼓励使用setter而不是构造函数:
    
        The Spring team generally advocates setter injection, because large numbers of constructor arguments can get unwieldy, especially when properties are optional. Setter methods also make objects of that class amenable to reconfiguration or re-injection later. Management through JMX MBeans is a compelling use case.
        Some purists favor constructor-based injection. Supplying all object dependencies means that the object is always returned to client (calling) code in a totally initialized state. The disadvantage is that the object becomes less amenable to reconfiguration and re-injection.
    
    构造函数注入
    构造函数注入对于强制依赖项是有好处的。对象正常运行所需的依赖项通过在构造函数中提供这些参数，可以确保在构造对象时就可以使用它。构造函数中分配的字段也可以是final，允许对象是完全不可变的，或者至少保护其必需的字段。
    使用构造函数提供依赖关系的一个后果是，以这种方式构造的两个对象之间不再可能存在循环依赖关系(与setter注入不同)。这实际上是一件好事，而不是一种限制，因为应该避免循环依赖，这通常是糟糕设计的标志。这样就可以避免这种做法。
    另一个优点是，如果使用spring 4.3+，可以完全将类与DI框架解耦。原因是Spring现在支持一个构造函数场景的隐式构造函数注入。这意味着不再需要在类中使用DI注解。当然，也可以通过在spring配置中为给定的类显式配置DI来实现相同的目的，这只是使整个过程变得更加简单。
    
    从spring4.x开始，Spring文档鼓励使用构造函数注入也没有否认setter注入的好处:
    
        The Spring team generally advocates constructor injection as it enables one to implement application components as immutable objects and to ensure that required dependencies are not null. Furthermore, constructor-injected components are always returned to client (calling) code in a fully initialized state. As a side note, a large number of constructor arguments is a bad code smell, implying that the class likely has too many responsibilities and should be refactored to better address proper separation of concerns.
        Setter injection should primarily only be used for optional dependencies that can be assigned reasonable default values within the class. Otherwise, not-null checks must be performed everywhere the code uses the dependency. One benefit of setter injection is that setter methods make objects of that class amenable to reconfiguration or re-injection later.

3.4结论

应尽量避免Field注入。推荐使用构造函数或方法来注入依赖项。两者各有利弊，其用法取决于具体情况。但是，由于这些方法可以混合使用，所以这不是非必须选择一种，可以将setter和构造函数注入合并到一个类中。构造函数更适合于强制依赖项和以不变性为目标的情况。对于可选的依赖项，setter更好。
————————————————
版权声明：本文为CSDN博主「Ongoing蜗牛」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Li_Ya_Fei/article/details/104448398