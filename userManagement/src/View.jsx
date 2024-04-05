import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getEmployee } from './userService';


const View = () => {
  //React Hooks
    const {id}=useParams();
    console.log(id);
    const navigate=useNavigate();
    const[firstName,setFirstname]=useState("");
    const[lastName,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[empid,setId]=useState();
    //Get the employee details by the id and display their details
    useEffect(()=>{
        const fetchData=async()=>{
          try {
            if(id){
            const response=await getEmployee(id);
          const Employee=response.data;
          console.log(Employee);
          setFirstname(Employee.firstName);
          setLastname(Employee.lastName);
          setEmail(Employee.email);
        setId(Employee.id)} 
    
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      },[id]);
      const homePage=()=>{
        navigate("/user");
      }
      const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        width: "18rem",
        margin:"auto",
        marginTop:"150px"
       
      
      };
  return (
    <section className='background3'>
    <div class="card" style={divStyle}>
  <div class="card-header text-secondary">
   <h4>EMPLOYEE {firstName.toUpperCase()}</h4> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">EMPLOYEE ID:{empid}</li>
    <li class="list-group-item">FULL NAME:{firstName} {lastName}</li>
    <li class="list-group-item">EMAIL ID:{email}</li>
  </ul>
  <button className='btn btn-secondary' onClick={(e)=>homePage(e)}>Back to home page</button>
</div>
</section>
);
}
  


export default View