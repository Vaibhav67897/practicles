import React from 'react'

const TableT = ({data}) => {
  return (
    <div>
     <table>
     <tbody>

        <th>
     <tr>
        <td>Name</td>
        <td>Surname</td>
        <td>email</td>
     </tr>
   
      
     { data.map((item)=>(
      <tr key={item.id}>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        
        
        </tr>
        )) }
        
        </th>
     </tbody>
     </table>
        </div>
  )
}

export default TableT