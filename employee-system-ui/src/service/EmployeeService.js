import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    //저장
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    //리스트
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    //삭제
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    //수정 화면
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }
    //수정
    updateEmployee(employee){
        return axios.put(EMPLOYEE_API_BASE_URL,employee);
    }
}

export default new EmployeeService();