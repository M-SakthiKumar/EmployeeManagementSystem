package com.example.employee.management.system.BE.entity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.management.system.BE.entity.entity.Employee;
import com.example.employee.management.system.BE.exception.ResourceNotFoundException;
import com.example.employee.management.system.BE.repository.EmployeeRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/employees")

public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	// viewAll
	@GetMapping("/viewall")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	// Adding employee data
	@PostMapping("/add")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
		
	}
	//getdata by id
	@GetMapping("/view/{id}")
	public ResponseEntity<Employee> getEmployeebyId(@PathVariable Long id){
		Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id"+id));
		return ResponseEntity.ok(employee);
		
	}
	//Update data by id
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
	    // Fetch the employee by ID and handle the case where the employee is not found
	    Employee updaEmployee = employeeRepository.findById(id)
	        .orElseThrow(() -> new ResourceNotFoundException("Employee not Exist with id " + id));

	    // Update the employee's details
	    updaEmployee.setName(employeeDetails.getName());
	    updaEmployee.setContact(employeeDetails.getContact());
	    updaEmployee.setEmailId(employeeDetails.getEmailId());
	    updaEmployee.setDepartment(employeeDetails.getDepartment());
	    updaEmployee.setDesignation(employeeDetails.getDesignation());

	    // Save the updated employee back to the database
	    employeeRepository.save(updaEmployee);

	    // Return the updated employee in the response
	    return ResponseEntity.ok(updaEmployee);
	}
	
	//delete employee
	@DeleteMapping("/delete/{id}")
	
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long id){
		Employee employee= employeeRepository.findById(id)
		        .orElseThrow(() -> new ResourceNotFoundException("Employee not Exist with id " + id));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	
	
}
