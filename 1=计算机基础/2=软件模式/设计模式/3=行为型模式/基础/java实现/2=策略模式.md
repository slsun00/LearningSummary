## 介绍

```java
// 桥接模式
复用类，使用接口 / 抽象类 
    
```

## 模式代码

```java
public interface Strategy {
    void show();
}

public class StrategyA implements Strategy{
    @Override
    public void show() {
        System.out.println("买一送一");
    }
}

public class StrategyB implements Strategy{
    @Override
    public void show() {
        System.out.println("买一送十个");
    }
}

// 使用接口
public class SalesMan {
    private Strategy st;
    
    public void setSt(Strategy st) {
        this.st = st;
    }

    public  void show(){
        st.show();
    }
}

// 测试
public class Main {
    public static void main(String[] args) {
        SalesMan salesMan = new SalesMan();
        salesMan.setSt(new StrategyA());
        salesMan.show();  // 买一送一
    }
}
```

