import React from 'react';
import './Table.css';


const Table = ({data}) => {
    return (
        <div>
            <table>
                <tbody>

                    <tr>
                        <td className='bold'>Users</td>
                        <td className='bold'>Name</td>
                        <td className='bold'>Surname</td>
                        <td className='bold'>Email</td>
                    </tr>
                   {data.map((item)=>(
                    <tr key={item.id}>
                        < td className='img'><img src={item.img} className="Images"/></td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table