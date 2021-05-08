## 介绍

```java
介绍
    // 将实例对象保存在一个全局集合中，使用的时候就从全局集合中取现成的
    集合中存放创建好的实例对象，进行实例对象复用（注意是引用传递）
注意
    // 属性成员可以通过方法参数进行设置
    对于属性成员：后面的复用会影响前面使用对象的属性，可以结合原型模式 - 深克隆
    实例对象复用：只用这一个，可以结合单例模式
```



## 模式代码

```java
// 如果对象实例的一些属性成员、方法是一样的，使用抽象类
public interface AbstractBox {
	String getShap();
    void display(String color);
}

public class LBox implements AbstractBox {

    @Override
    public String getShape() {
        return "L";
    }
    @Override
    public void dispaly(String color) {
       System.out.println( getShape + "L")
    }
}

// 可以使用单例模式对工厂
public class BoxFactory {
    // 集合存放new实例， 享元池，进行初始化
    private static HashMap<String, AbstractBox> map;
    private BoxFactory() {
        map = new HashMap<String, AbstractBox>();
        AbstractBox lbox = new LBox();
        map.put("L", lbox);
    }
    // 静态工厂
    private static final BoxFactory factory = new BoxFactory();
    public static BoxFactory getInstance(){
        return factory;
    }
    
    public AbstractBox getBox(String type){
        return map.get(type);
    }
}

// 测试
public class Main {
    public static void main(String[] args){
        AbstractBox box1 = BoxFactory.getInstance().getBox("L");
        box1.display("red") // red L
        AbstractBox box2 = BoxFactory.getInstance().getBox("L");
        box2.display("white") // white L
        // 注意 box2 和 box1 是同一个地址的引用对象
        // 对于 box2 的修改会影响 box1 的成员变量
    }
}
```

