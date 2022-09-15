import React from 'react'
import { useState } from 'react';
import {Users} from '../User';
import Tableid from './Tableid';


const Iddd = () => {

    const [identity, setIdentity] = useState();

    const Saig =(data)=>{


    return data.filter((item)=>item.first_name.toLowerCase().include(identity))

    }
   
  return (
    <div>
      <input type="text" placeholder='Search.....' className='search' onChange={(e)=>setIdentity(e.target.value)}/>
      {/* <ul className='listitem'>

      {
     
     Users.filter((user)=>user.last_name.toLowerCase().includes(identity)).map((user)=>(

   <li key={user.id} className='listitem' >{user.last_name}</li>

     ))


      }



      </ul> */}

      <Tableid data={Saig(Users)}/>
        </div>
  )
}

export default Iddd;