import React from "react";
import "./Ipogm.css"
import { Link } from "react-router-dom";

function Ipogm(){
    return(
        <div className="ipogm1">
             <div className="ipogm2">
          <div className="ipogm3">
            <h1 className="ipogm3-head">
            IPO Grey Market
            </h1>
            <div className="ipogm4">
            <Link className='ipogm4-lnk'> IPO Bharat |</Link>
            <Link className='ipogm4-lnk'> IPO |</Link>
            <Link className='ipogm4-lnk'> IPO Grey Market </Link>
            </div>
          </div>
        </div>
        <div className="ipogm5">
           <div className="ipogm6">
             <Link className="ipogm6-link">Live IPO GMP</Link>
             <Link className="ipogm6-link">IPO Live Subscription</Link>
             <Link className="ipogm6-link">GMP Performace</Link>
             <Link className="ipogm6-link">Event Calendar</Link>
             <Link className="ipogm6-link">SME Dashboard</Link>
             <Link className="ipogm6-link">Mainboard IPO</Link>
            </div>
        
        </div>
        <div className="ipogm7">
            <h1 className="ipogm7-head">
            Live IPO GMP
            </h1>
        </div> 
        <div className="ipogm8">
            <div className="ipogm9"> 
            <p className="ipogm9-p">IPO GMP is trending for Tata Technologies,
             Protean eGov Technologies, Baba Food Processing, ASK Automotive, ROX Hi-Tech, 
             Sunrest Lifescience, Kalyani Cast Tech, Gandhar Oil Refinery IPOs.</p>
             <p className="ipogm9-p">
Grey Market is an unregulated market to trade IPO applications and IPO shares before listing 
of the stock. An investor may not want to trade in the grey market, but getting an idea 
of the GMP can be used to estimate the listing gain on the IPO share. GMP or Grey Market 
Premium adding to issue price gives the estimated listing price of the IPO share.</p>
<p className="ipogm9-p">Here we are reporting the GMP of all upcoming and 
current SME and Mainboard IPOs along with Subject 2 Sauda price. Estimated Listing Price is also calculated by adding up GMP and IPO cap price.</p>
</div>
       <div className="ipogm10">
      <img src="assets/Group 89.jpg" alt="" className="ipogm10-img" />
      </div>
        </div>
          <div className="ipogm11">
            <Link className="ipogm11-link">All</Link>
            <Link className="ipogm11-link">Mainboard</Link>
            <Link className="ipogm11-link">SME</Link>
            <Link className="ipogm11-link">Current IPOs</Link>
            <Link className="ipogm11-link">Close</Link>
            <Link className="ipogm11-link">Listed</Link>

          </div>
          <div className="ipogm12">
            <span className="ipogm12-b">IPO Search:</span> 
            <input type="text" placeholder="Enter first few letters to get company"className="ipogm12-inp" />
            <button className="ipogm12-btn">Search IPO</button>
          </div>
          <div className="ipogmhead">
          <h1 className="ipogm-head">
              Current IPO GMP
            </h1>
            </div>
          <div className="ipogm13">
            
 <table className=" table ipogmtable ipotable-striped">
  <thead className="ipogm-thead1">
    <tr >
      <th className="ipogm-th ipogm-th1" scope="col">IPO</th>
      <th className="ipogm-th" scope="col">Price</th>
      <th className="ipogm-th" scope="col">GMP (₹)</th>
      <th className="ipogm-th" scope="col">Gst Listing</th>
      <th className="ipogm-th" scope="col">Fire Rating</th>
      <th className="ipogm-th" scope="col">IPO Size</th>
      <th className="ipogm-th" scope="col">Open</th>
      <th className="ipogm-th" scope="col">Close</th>
      <th className="ipogm-th" scope="col">BoA Dt</th>
      <th className="ipogm-th" scope="col">Listing</th>
      <th className="ipogm-th ipogm-th2" scope="col">GMP Update</th>

    </tr>
  </thead>
  <tbody>
   
    <tr className="ipogm-tr" >
      <td scope="row">Tata Technologies IPO</td>
      <td>NA</td>
      <td>275</td>
      <td>--</td>
      <td >*****</td>
      <td>9.57 Cr</td>
      <td></td>
      <td></td>
      <td ></td>
      <td></td>
      <td>21-Nov21:15</td>
     
    </tr>
    <tr className="ipogm-tr">
    <td scope="row">Gandhar Oil Refinery IPO</td>
      <td>NA</td>
      <td>40</td>
      <td>--</td>
      <td >*****</td>
      <td>₹500.00 Cr</td>
      <td>21-Nov</td>
      <td>23-Nov</td>
      <td >29-Nov</td>
      <td>4-Dec</td>
      <td>10-Nov 21:53</td>
    </tr>
    <tr className="ipogm-tr">
    <td scope="row">Arrowhead Seperation Engineering BSE SME</td>
      <td>233</td>
      <td>--</td>
      <td>233 (0.00%)</td>
      <td >*****</td>
      <td>₹13.00 Cr</td>
      <td>16-Nov</td>
      <td>22-Nov</td>
      <td >23-Nov</td>
      <td>29-Nov</td>
      <td>10-Nov 21:55</td>
    </tr>
    <tr className="ipogm-tr">
    <td scope="row">Kalyani Cast Tech BSE SME</td>
      <td>139</td>
      <td>85</td>
      <td>224(61.15%)</td>
      <td >*****</td>
      <td>₹30.11 Cr</td>
      <td>8-Nov</td>
      <td>10-Nov</td>
      <td >16-Nov</td>
      <td>21-Nov</td>
      <td>21-Nov 21:19</td>
    </tr>
  </tbody>
</table>
        
          </div>
          <div className="ipogm14">
         <button className="ipogm14in">Scroll</button>  <span className="ipogmspan">2023</span> <button  className="ipogm14in" >scroll</button>
        </div>
        </div>
    )
}
export default Ipogm;