import React from 'react'
import { useState } from 'react';
import{Users} from '../User';
import Search from './Search';
import TableT from './TableT';




const SearchT = () => {

  

    const [use , setUse] = useState("")

    const keys = ["first_name", "last_name", "email"];

    const Tablet =(data)=>{

      // return data.filter((item)=>item.first_name.toLowerCase().includes(use))||data.filter((item)=>item.last_name.toLowerCase().includes(use))||data.filter((item)=>item.email.toLowerCase().includes(use))
  
      return data.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(use)))

    }

  return (
    <div>
      <input type="text" placeholder='Search......' className='search' onChange={(e)=>setUse(e.target.value)}/>

        {/* <ul className='list'>

            {Users.filter((user)=>user.email.toLowerCase().includes(use)).map((user)=>(

      <li key={user.id} className='item'>{user.email}</li>
     
           )) }




        </ul>  */}
        <TableT data={Tablet(Users)}/>
        </div>
  )
}

export default SearchT