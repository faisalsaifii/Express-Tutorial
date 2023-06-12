package com.faisal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Specifies that this is a Spring Boot Application
// It consists of 3 main things (some others too, hover over it to see them)
//@ComponentScan(basePackages = "com.faisal")
//@EnableAutoConfiguration
//@Configuration
@SpringBootApplication
// Specifies that any methods with any mappings are exposed for clients to use
@RestController
@RequestMapping("api/v1/customers")
public class Main {
    private final CustomerRepository customerRepository;

    public Main(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public static void main(String[] args) {
        // Running the Spring Application
        // We pass the args from the main's parameters into the run method
        SpringApplication.run(Main.class, args);
    }

    @GetMapping
    public List<Customer> getCustomers () {
        return customerRepository.findAll();
    }

    // These mappings take the relative path as parameters
    // Make sure to restart the server after creating new mappings

//    @GetMapping("/")
//    public String greet() {
//        return "Hello";
//    }
//
//    @GetMapping("/next")
//    public String next() {
//        return "Next Path";
//    }
//
//    @GetMapping("/record")
//    public GreetResponse record() {
//        return new GreetResponse("Hello", List.of("Java", "C++", "Python"), new Person("Faisal", 20));
//    }
//
//    @GetMapping("/class")
//    public ResponseClass classFunc () {
//        return new ResponseClass("Class based Response");
//    }
//
//    record Person (String name, int age) {
//
//    }
//    record GreetResponse (
//            String greet,
//            List<String> languages,
//            Person person
//    ) {
//
//    }
//
//    // Doing the same thing through a class
//    // Jackson basically handles the Java to JSON parsing
//    static class ResponseClass {
//        private final String message;
//
//        ResponseClass(String message) {
//            this.message = message;
//        }
//
//        public String getMessage () {
//            return this.message;
//        }
//    }
}
