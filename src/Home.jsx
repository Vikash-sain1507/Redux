import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
    const users =useSelector((state)=>state.users);
     const dispatch = useDispatch();
     const handleDelete =(id)=>{
  dispatch(deleteUser({id:id}))
     }
  return (
    <>
       <div className='container'>
        <h1 className=""> REACT CRUD AAP WITH REDUX </h1>
     <Link to='/create' className='btn btn-success my-3'>create+ </Link>
     <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
         {users.map((users,index)=>(
            <tr key={index}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>

                <td>
               <Link to={`/edit/${users.id}`} className='btn btn-sm btn-primary'>Edit</Link>
               <button onClick={()=>handleDelete(users.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>
            </tr>
         ))}

        </tbody>
     </table>
       </div>
    </>
  )
}

export default Home