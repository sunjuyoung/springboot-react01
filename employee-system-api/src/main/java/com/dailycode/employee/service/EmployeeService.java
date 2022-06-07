package com.dailycode.employee.service;

import com.dailycode.employee.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployee();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    void updateEmployee(Employee employee);
}
