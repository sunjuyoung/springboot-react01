package com.dailycode.employee.entity;

import com.dailycode.employee.model.Employee;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Data
@Table(name = "employees")
public class EmployeeEntity {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String firstName;
    private String lastName;
    private String email;


    public void updateEmployee(Employee em){
        this.firstName = em.getFirstName();
        this.lastName = em.getLastName();
        this.email = em.getEmail();
    }
}
