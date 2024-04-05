import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllEmployee, updateEmployee,getEmployee,deleteEmployee } from './userService';
import { isAdminUser, isLoggedInUser } from './AuthService';

const EmployeeList = () => {
  //React Hooks
    const[user,setUser]=useState([]);
     const navigate=useNavigate();
  const isAdmin = isAdminUser();
  const isAuth=isLoggedInUser();

//useEffect to get the list of employee when loading the page
     useEffect(()=>{listEmployee();},[]);

     const listEmployee = async()=>{
        const response= await getAllEmployee();
        //console.log(response.data);
       setUser(response.data);
      // console.log(user);
     }
     //when "Add employee" button is clicked it navigate to AddEmployee components
     const addNewUser=async()=>{
      navigate("/add-employee");
     }
      //when "Update " button is clicked it navigate to AddEmployee components
     const updateEmployees=async(id)=>{
      navigate(`/update-employee/${id}`);
     }
      //when "Delete " button is clicked it deletes the employee from list
     const deleteEmployees=async(id)=>{
      try{
        const response=await deleteEmployee(id);
        listEmployee();
      }
      catch(error){
        console.error(error);
      }}
       //when "View" button is clicked it navigate to ViewEmployee components
      const viewEmployee=async(id)=>{
        navigate(`/view/${id}`);
        }
  return (
    <section className='background2'>
    <div className='container mt-5'>
        <h2 className='text-center text-white'>List of Employee</h2>
        {isAdmin && isAuth &&(
        <button className='btn btn-success mb-2' onClick={addNewUser}>Add Employee</button>)}
        <div>
          <table className="table table-bordered table-striped mt-5">
            <thead>
              <tr>
                <th className='text-center'>Employee FirstName</th>
                <th className='text-center'>Employee LastName</th>
                <th className='text-center'>Employee Email</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map(users=>
              <tr key={users.id}>
                <td className='text-center'>{users.firstName}</td>
                <td className='text-center'>{users.lastName}</td>
                <td className='text-center'>{users.email}</td>
                <td className='text-center'>
                  {isAdmin && isAuth &&(
                  <button className='btn btn-info'style={{marginLeft:"25px"}} onClick={()=>updateEmployees(users.id)}>Update</button>)}
                  {isAdmin && isAuth && (
                  <button className='btn btn-danger'style={{marginLeft:"25px"}} onClick={()=>deleteEmployees(users.id)}>Delete</button>)}
                  {!isAdmin && isAuth &&(
                  <button className='btn btn-success'style={{marginLeft:"25px"}} onClick={()=>viewEmployee(users.id)}>View</button>)}
                </td>
                </tr>)}
            </tbody>
          </table>

        </div>
    </div>
    </section>
  )
}

export default EmployeeList