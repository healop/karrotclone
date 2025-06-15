package com.clone.karrotbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.clone.karrotbackend.config") // ✅ SecurityConfig 위치 강제 지정
public class KarrotbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(KarrotbackendApplication.class, args);
	}

}
