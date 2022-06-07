import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({em,deleteEmployee}) => {

 const navigate =  useNavigate();

  const updateEmployee = (e,id)=>{
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);

  }

  return (
    <tr key={em.id}>
    <th className='font-medium text-gray-500 py-3'>{em.firstName}</th>
    <th className='font-medium text-gray-500 py-3'>{em.lastName}</th>
    <th className='font-medium text-gray-500 py-3'>{em.email}</th>
    <th className='font-medium text-gray-500 py-3'>
        <a onClick={(e,id)=>updateEmployee(e,em.id)}  
        className='text-indigo-600 hover:text-indigo-400 hover:cursor-pointer px-2'>
          Edit
          </a>
        <a onClick={(e,id)=>deleteEmployee(e,em.id)} 
         className='text-red-600 hover:text-red-400 hover:cursor-pointer px-2'>
           Delete
           </a>
    </th>
 
</tr>
  )
}

export default Employee