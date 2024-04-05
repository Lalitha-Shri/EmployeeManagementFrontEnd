import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, saveEmployee,updateEmployee } from './userService';

const AddEmployee = () => {
  //React hooks
  const {id}=useParams();
  const navigate=useNavigate();
  const[firstName,setFirstname]=useState("");
  const[lastName,setLastname]=useState("");
  const[email,setEmail]=useState("");
//useEffect to get employee by id when id is present
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        if(id){
        const response=await getEmployee(id);
      const Employee=response.data;
      //console.log(Employee);
      setFirstname(Employee.firstName);
      setLastname(Employee.lastName);
      setEmail(Employee.email);} 

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[id]);

  const pageTitle=()=>{
     return id ?<h2 className='text-center'>Update Employee</h2>:<h2 className='text-center'>Add Employee</h2>
  }
//Make api call to backend to save the updated employee by making api call to spring boot
  const saveOrUpdateUser=async(e)=>{
    e.preventDefault();
    const employee={firstName,lastName,email};
   // console.log(employee);
    
    try {
      if(id){
          await updateEmployee(id,employee);
          navigate("/user");
      }
      else{
        const response=await saveEmployee(employee);
       // console.log(response);
        navigate("/user");

      }
    } catch (error) {
      console.error(error);
  
}


  }

  return (
    <section className='background3'>
    <div className='container mt-5'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>FirstName
                </label>
                <input type="text" className='form-control' placeholder='Enter Employee FirstName' name="firstName" value={firstName} onChange={(e)=>setFirstname(e.target.value)}/>
                <label className='form-label'>LastName
                </label>
                <input type="text" className='form-control' placeholder='Enter Employee LastName' name="lastName" value={lastName} onChange={(e)=>setLastname(e.target.value)}/>
                <label className='form-label'>Email
                </label>
                <input type="text" className='form-control' placeholder='Enter Employee Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className='text-center'>
                <button className='btn btn-success' onClick={(e)=>saveOrUpdateUser(e)} style={{marginTop:"10px"}}>Submit</button>
              </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}
export default AddEmployee;
