```java
package org.example.crowd;


import org.example.crow.entity.Admin;
import org.example.crow.mapper.AdminMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

/**
 * @title: CrowdTest
 * @Description //TODO $
 * @Author slsun
 * @Date: 2021/4/12 19:42
 * @Version 1.0
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring-persist-mybatis.xml"})
public class CrowdTest {

    @Autowired
    private DataSource dataSource;


    @Autowired
    private AdminMapper adminMapper;

    @Test
    public void insetTest() {
        Admin admin = new Admin(null, "tom", "124", "汤姆", "234@qq.com", null);
        int insert = adminMapper.insert(admin);
        System.out.println("搜影响行数：" + insert);

    }

    @Test
    public void test() throws SQLException {
        Connection connection = dataSource.getConnection();
        System.out.println(connection);
    }
}


```

