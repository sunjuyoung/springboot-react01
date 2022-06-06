import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

    const naviage = useNavigate();
    
    const [loading, setloading] = useState(true);
    const [employee, setemployee] = useState(null);

    useEffect(() => {
     const fetchDate = async ()=>{
         setloading(true);
        
         try {
            const response = await EmployeeService.getEmployee();
            setemployee(response.data);
         } catch (error) {
             console.log(error);
         }
         setloading(false);
     };
     fetchDate();
    }, []);
    

  return (
    <div className='containder mx-auto my-5'>
        <div className='h-12 mx-4 mb-2'>
            <button onClick={()=> naviage("/addEmployee")} 
            className='rounded bg-slate-600 text-white px-6 py-2' >Add Employee</button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='py-2'>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody>
                    {employee.map((em)=>(
                    <Employee em={em} key={em.id}></Employee>
                   ))};
                </tbody>  )}
            </table>
        </div>
    </div>
  )
}

export default EmployeeList