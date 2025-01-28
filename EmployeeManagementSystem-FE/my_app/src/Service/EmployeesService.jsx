import axios from "axios";

const Employees_Base_Rest_API_URL="http://localhost:8080/employees/viewall"
const Employees_Base_Rest_API_add_URL="http://localhost:8080/employees/add"





 class EmployeesService {
  getAllEmployees(){
    return axios.get(Employees_Base_Rest_API_URL)
  }  
  createEmployee(employeeData){
    return axios.post(Employees_Base_Rest_API_add_URL,employeeData)
  }
  getEmployeebyId(employeeId){
       return axios.get(`http://localhost:8080/employees/view/${employeeId}`);
  }
  updateEmployee(employeeId, employeeData) {
    return axios.put(`http://localhost:8080/employees/update/${employeeId}`, employeeData);
  }
  deleteEmployee(employeeId){
    return axios.delete(`http://localhost:8080/employees/delete/${employeeId}`);
    

  }
}

export default new EmployeesService()