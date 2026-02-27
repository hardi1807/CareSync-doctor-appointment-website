import React from "react";
import logo from "../assets/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
    const navigate =useNavigate()
  return (
 <div className="md:mx-10">
    <div className=" flex flex-col gap-14 sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 text-sm">

        {/*left*/}
        <div>
          <img className="w-40 mb-6" src={logo} alt="" />
          <p className="w-full md:2/3 text-gray-600  leading-6">
            CareSync simplifies healthcare by connecting patients with trusted
            doctors.<br/>Book appointments easily, manage your health records, and
            receive<br/> timely reminders—all in one secure platform.
          </p>
        </div>

        {/*center*/}
        <div>
            <h1 className="text-xl font-medium mb-5">COMPANY</h1>
            <ul className="text-gray-600 gap-2 flex flex-col">
            
                <li ><Link to='/' onClick={()=> window.scrollTo(0,0)} className="hover:text-blue-600">Home</Link></li>
                <li><Link to='/about' onClick={()=> window.scrollTo(0,0)} className="hover:text-blue-600">About us</Link></li>
                <li><Link to='/contact' onClick={()=> window.scrollTo(0,0)} className="hover:text-blue-600">Contact us</Link></li>
                <li>Privacy</li>
                
            </ul>
        </div>

        {/*right*/}
        <div>
            <h1 className="text-xl font-medium mb-5" >GET IN TOUCH</h1>
            <ul className="text-gray-600 gap-2 flex flex-col">
                <li>+1 (416) 555-2847</li>
                <li>support@caresync.com</li>
            </ul>
        </div>
    </div>

     <div>
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center">Copyright ©2026 CareSync-All rights reserved.</p>
     </div>
 </div>
  );
};

export default Footer;
