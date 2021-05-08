## 介绍

```java
一对多： 逐级调用，自动链式调用
```

## 模式代码

### 纯抽象类

```java
// 类接口
public abstract class Handler {
    // 责任链设置
    public abstract  void setNextHandler(Handler handler);
    // 链上处理请求
    public abstract void handRequest(Request request);
}

// 经理
public class Manager extends Handler {
    private Handler nextHandler ;
    private int maxDay = 8; // 能批准的最大天数

    @Override
    public void setNextHandler(Handler handler) {
        this.nextHandler = handler;
    }

    // 注意怎么实现链式分级调用
    @Override
    public void handRequest(Request request){
        if (request.getDay() < this.maxDay) {
            // 请求处理代码，
            System.out.println("经理批准");
        } else if ( this.nextHandler != null && request.getDay() > this.maxDay){
            // 链式调用
            this.nextHandler.handRequest(request);
        }
    }
}

// 组长
public class GroupLeader extends Handler {
    private Handler nextHandler ;
    int maxDay = 4; // 能批准的最大天数

    @Override
    public void setNextHandler(Handler handler) {
        this.nextHandler = handler;
    }

    // 注意怎么实现链式分级调用
    @Override
    public void handRequest(Request request){
        if (request.getDay() < this.maxDay) {
            // 请求处理代码，
            System.out.println("组长批准");
        } else if ( this.nextHandler != null && request.getDay() > this.maxDay){
            // 链式调用
            this.nextHandler.handRequest(request);
        }
    }
}

```

### 抽象类

```java
public abstract class Handler {
    private  Handler nextHandler;
    protected int maxDay;
    
    // 业务中，每个子类对应的处理代码
    public abstract void handle(Request request);

    // =================================================
    // 责任链设置
    public void setNextHandler(Handler handler){
        this.nextHandler = handler;
    };

    // 链上处理请求
    public void handRequest(Request request){
        if (request.getDay() < this.maxDay) {
            // 请求处理代码，
           this.handle(request);
        } else if ( this.nextHandler != null && request.getDay() > this.maxDay){
            // 链式处理调用
            this.nextHandler.handRequest(request);
        }
    }
}


// 小组长
public class GroupLeader extends Handler {
    // 子类、父类的成员变量尽量不要冲突，
    private  int topDay = 4;

    public GroupLeader(){
       setMaxDay();
    }
    @Override
    public void handle(Request request) {
        System.out.println("组长批准");
    }
    // 创建一个默认的天数限制
    public void setMaxDay() {
        super.maxDay = topDay;
    }
}


// 经理
public class Manager extends Handler {
    private  int topDay = 8;
    public Manager(){
        setMaxDay();
    }
    @Override
    public void handle(Request request) {
        System.out.println("经理批准");
    }

    // 设置最大的天数
    public void setMaxDay() {
        super.maxDay = topDay;
    }
}


// 测试
public class Main {
    public static void main(String[] args) {
        GroupLeader gLeader = new GroupLeader();
        Manager manager = new Manager();

        // 请求创建
        Request req = new Request(7, "小明");
        // 责任链创建
        gLeader.setNextHandler(manager);
        // 责任链处理请求
        gLeader.handRequest(req);  // 经理批准
    }
}
```

