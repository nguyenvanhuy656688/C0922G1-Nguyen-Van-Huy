package com.example.aquarium_be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCrypt;

@SpringBootApplication
public class AquariumBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(AquariumBeApplication.class, args);
        String a = "123";
        String b = BCrypt.hashpw(a, BCrypt.gensalt(12));
        System.out.println(b);
        boolean c = BCrypt.checkpw(a,b);
        System.out.println(c);
    }

}
