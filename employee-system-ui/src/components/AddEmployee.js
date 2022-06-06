import React, { useState } from 'react'
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {

    const [employee, setemployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
    });

    const handleChange=(e)=>{
        const value = e.target.value;
        setemployee({...employee,[e.target.name]: value});
    };

    const saveEmployee = (e)=>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });

    };

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl'>
                <h1>Add new Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First name</label>
                <input type="text" name='firstName' value={employee.firstName} onChange={(e)=>handleChange(e)}
                 className='h-10 w-96 border rounded mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last name</label>
                <input type="text" name='lastName' value={employee.lastName} onChange={(e)=>handleChange(e)} 
                className='h-10 w-96 border rounded mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>email</label>
                <input type="email" name='email' value={employee.email} onChange={(e)=>handleChange(e)} 
                className='h-10 w-96 border rounded mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-3 pt-2'>
                <button onClick={saveEmployee} 
                className='rounded text-white font-semibold bg-green-800 py-2 px-2  hover:bg-green-600'>
                Save
                </button>
                <button className='rounded text-white font-semibold bg-red-800 py-2 px-2  hover:bg-red-600'>
                Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee