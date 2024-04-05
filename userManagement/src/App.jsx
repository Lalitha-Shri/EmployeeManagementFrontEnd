import './App.css'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import AddEmployee from './AddEmployee'
import EmployeeList from './EmployeeList'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import View from './View'
import LoginComponent from './LoginComponent'
import Register from './Register'
import HomeComponent from './HomeComponent'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/user" element={<EmployeeList/>}></Route>
        <Route path="/add-employee" element={<AddEmployee/>}></Route>
        <Route path="/update-employee/:id" element={<AddEmployee/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>
        <Route path="/login" element={<LoginComponent/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        
      </Routes>
       
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
