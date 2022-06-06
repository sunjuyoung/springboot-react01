package com.dailycode.employee.service;

import com.dailycode.employee.entity.EmployeeEntity;
import com.dailycode.employee.model.Employee;
import com.dailycode.employee.repository.EmployeeRepository;
import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity entity = modelMapper.map(employee, EmployeeEntity.class);
        employeeRepository.save(entity);

        return employee;
    }

    @Override
    public List<Employee> getAllEmployee() {
        List<EmployeeEntity> employeeEntityList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();
        employeeEntityList.forEach(entity ->
                employees.add(modelMapper.map(entity,Employee.class)));

        return employees;
    }
}
