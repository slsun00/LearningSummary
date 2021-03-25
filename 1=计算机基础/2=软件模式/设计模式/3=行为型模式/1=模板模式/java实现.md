## 介绍

```js
// 建造者模式是把这个有序抽成了一个类
一个类的方法需要有顺序执行，就把这个顺序规则写在一个方法中，而这个方法在父类中定义
```



## 模板代码

```java
public abstract class AbstractCook {
    // 做菜的步骤
    public void heatOil(){
        System.out.print("倒油 ");
    }
    public abstract void pourVegetable();
    public void fry(){
        System.out.print("炒熟了");
    }
    // 将做菜方法的顺序封装到一个方法中
    // 该方法执行，特定的顺序组合封装， 就是模板方法
    public final void cookProcess() {
        heatOil();
        pourVegetable();
        fry();
    }
}

// 子类
public class BaoCai extends AbstractCook{
    @Override
    public void pourVegetable() {
        System.out.print("倒入包菜 ");
    }
}

// 测试
public class Main {
    public static void main(String[] args) {
        BaoCai bc = new BaoCai();
        bc.cookProcess(); // 倒油 倒入包菜 炒熟了
    }
}

```

