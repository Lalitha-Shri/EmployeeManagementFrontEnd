import axios from 'axios';

const AUTH_Base_URL= "http://localhost:8080/api/auth";
 
export const registerAPICall=(registerObj)=>axios.post(AUTH_Base_URL+"/register",registerObj);

export const loginAPICall=(username,password)=>axios.post(AUTH_Base_URL+"/login",{username,password});

export const storeToken=(token)=>localStorage.setItem("token",token);

export const getToken=(token)=>localStorage.getItem("token");

//Save the logged in user to session storage

export const saveLoggedInUser=(username,role)=>{
    sessionStorage.setItem("authenticatedUser",username);
    sessionStorage.setItem("role",role);
}
//returns boolean if user is logged in or not
export const isLoggedInUser=(username,role)=>{
    const username1=sessionStorage.getItem("authenticatedUser");
    if(username1==null){
    return false;}
    else{
    return true;
    }
    
}
//get the name of logged in user
export const getLoggedInUser=()=>{
    const username=sessionStorage.getItem("authenticatedUser");
        return username;
       }
   //clear the session storage and local storage when logging out 
export const logout=()=>
{
    localStorage.clear();
    sessionStorage.clear();
}
 //return boolean to find if logged in user is admin or not
export const isAdminUser=()=>{
    let role=sessionStorage.getItem("role");
    if(role!=null && role=="ROLE_ADMIN"){
        return true;
    }
    else{
        return false;
    }
}




 
