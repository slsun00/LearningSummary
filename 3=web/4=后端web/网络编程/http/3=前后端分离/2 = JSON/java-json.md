## 介绍

## gson

```java
使用
    导包
    	gson.jar
```

### javaBean 和 json

```java
Person person = new  Person(){
    String name = "小明"
}
// 创建 Gson 对象实例 
	Gson gson = new Gson(); 
// toJson 方法可以把 java 对象转换成为 json 字符串 
	String personJsonString = gson.toJson(person);

// fromJson 把 json 字符串转换回 Java 对象 
// 第一个参数是 json 字符串 
// 第二个参数是转换回去的 Java 对象类型 
Person person1 = gson.fromJson(personJsonString, Person.class);
```

### list 与 json

```java
List<Person> personList = new ArrayList<>();

// 创建 Gson 对象实例 
Gson gson = new Gson(); 
// 把 List 转换为 json 字符串 
String personListJsonString = gson.toJson(personList);
// json 字符串转化为 List
List<Person> list = gson.fromJson(personListJsonString, new PersonListType().getType());
Person person = list.get(0);  

// 需要创建一个类继承
// com.google.gson.reflect.TypeToken
public class PersonListType extends TypeToken<ArrayList<Person>>{}；
  
```

### map 与 json

```java
Map<Integer,Person> personMap = new HashMap<>();

Gson gson = new Gson(); 
// 把 map 集合转换成为 json 字符串 
String personMapJsonString = gson.toJson(personMap);

 // 单独创建一个类继承 TypeToken
Map<Integer,Person> personMap2 = gson.fromJson(
     personMapJsonString, new PersonMapType().getType());
// 使用匿名内容类
Map<Integer,Person> personMap2 = gson.fromJson(
     personMapJsonString, new TypeToken<HashMap<Integer,Person>>(){}.getType());

// 需要创建一个类继承
// com.google.gson.reflect.TypeToken
public class PersonMapType extends TypeToken<Map<Integer,Person>>
```

