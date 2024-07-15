import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="about-1">
        <div className="about-2">
          <h1>
            <Link className="lnk" to={"/"}> About Us </Link>
          </h1>
          <p>IPO Bharat | About Us</p>
            
        </div>
        {/* <div className="about-3">
          <Link className="lnk lnk1" to={""}>IPO Bharat</Link>&nbsp;&nbsp;&nbsp;
          <Link className="lnk lnk1" to={""}>About Us</Link>
        </div> */}

      </div>
      <div className="about-4">
        <div className="about-5">
          <h1 className="hed-5">About IPO Bharat</h1>
          <p>Welcome to IPO Bharat, your ultimate destination for real-time information on mainboard and SME IPOs in India. At IPO Bharat, we are committed to providing you with comprehensive insights into every aspect of the IPO process.</p>
          <p>Our platform offers a wealth of information, including basic IPO details, tentative schedules, reservation criteria, lot sizes, anchor investor details, company backgrounds, financials, objectives of the issue, subscription statuses, lead managers, registrars, and Grey Market Premium (GMP).</p>
          <p>We understand the importance of staying informed in the dynamic world of IPOs. That's why our team works tirelessly to ensure that you have access to the latest and most accurate information, empowering you to make informed investment decisions.</p>


        </div>
        <div className="about-6">
          <img src="assets\Aboutiimg.jpg" alt="" />


        </div>

      </div>

    </div>
  );
}

export default About;
