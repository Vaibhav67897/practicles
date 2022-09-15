import React from 'react'
import { useEffect } from 'react';

import { useState } from 'react';
import { Users } from '../User';
import Table from './Table';
import axios from 'axios';

const Search = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{

const fetchusers = async ()=>{
      

  const res = await axios.get(`http://localhost:8000?q=${query}`);
   setData(res.data);
};
fetchusers()


  }, [query]);

  const keys =["first_name", "last_name", "email"];

  console.log(Users[0]["last_name"])

  const search = (data) => {

     return data.filter(
     (item )=> 
     keys.some((key)=> item[key].toLowerCase().includes(query))


     );

  }



  return (
    <div className="App">

      <input type="text"
        placeholder='Search.....' className='search'
        onChange={(e) => setQuery(e.target.value)} />
      {/* <ul className='list'>
  
        {
  
        Users.filter((user) => user.first_name.toLowerCase().includes(query)
          ).map((user)=>(
  
         <li key={user.id} className='listitem' >{user.first_name}</li>
  
  
        ))
    
  
          } 
  
     
       </ul>
          */}
      <Table data={data} />
    </div>

  )
}

export default Search;