
import './App.css';
import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import About from  "./Components/About/About";
import Current from "./Components/Current/Current";
import Currentsme from "./Components/Currentsme/Currentsme";
import Footer from "./Components/Footer/Footer";
import Ipo from "./Components/Ipo/Ipo";
import Ipocalender from "./Components/Ipocalender/Ipocalender"
import Ipodashboard from "./Components/Ipodashboard/Ipodashboard";
import Ipodetails from "./Components/Ipodetails/Ipodetails";
import Ipogm from "./Components/Ipogm/Ipogm";
import Smedashboard from "./Components/Smedashboard/Smedashboard"
import Subscription from './Components/Subscription/Subscription';
import Gmp from './Components/Gmp/Gmp';
import Fileupload from './Components/Fileupload/Fileupload';
import Admin from './Components/admin/admin';
import Login from './Components/AdminLogin/Login';



  


  function App() {
  return (
    <div>
    <Header/>
      { <Routes> 
 
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Current' element={<Current/>}/>
        <Route path="/ipo/:ipoId" element={<Ipo />} />
        <Route path='/Ipocalender' element={<Ipocalender/>}/>
        <Route path='/Ipodashboard' element={<Ipodashboard/>}/>
        <Route path='/Ipogm' element={<Ipogm/>}/>
        <Route path='/Smedashboard' element={<Smedashboard/>}/>
        <Route path='/Ipodetails' element={<Ipodetails/>}/>
        <Route path='/Currentsme' element={<Currentsme/>}/>
        <Route path='/Subscription' element={<Subscription/>}/>
        <Route path='/Gmp' element={<Gmp/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
       
      </Routes> }


      {/* <About/> */}
      {/* <Currentsme/> */}
      {/* <Current/> */}
      {/* <Home/> */}
      {/* <Ipo/> */}
      {/* <Ipocalender/> */}
      {/* <Ipodashboard/> */}
      {/* <Ipodetails/> */}
      {/* <Ipogm/> */}
      {/* <Smedashboard/> */}
      {/* <Subscription/> */}
      {/* <Gmp/> */}
      {/* <Fileupload/> */}
      {/* <Login /> */}
    <Footer/>
      </div>
  
  
  );
}
     
    
export default App;
