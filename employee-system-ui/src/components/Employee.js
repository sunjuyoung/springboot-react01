import React from 'react'

const Employee = ({em}) => {
  return (
    <tr key={em.id}>
    <th className='font-medium text-gray-500 py-3'>{em.firstName}</th>
    <th className='font-medium text-gray-500 py-3'>{em.lastName}</th>
    <th className='font-medium text-gray-500 py-3'>{em.email}</th>
    <th className='font-medium text-gray-500 py-3'>
        <a href='#' className='text-indigo-600 hover:text-indigo-400 px-2'>Edit</a>
        <a href='#' className='text-red-600 hover:text-red-400 px-2'>Delete</a>
    </th>
 
</tr>
  )
}

export default Employee