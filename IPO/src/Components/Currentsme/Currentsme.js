import React, { useState } from "react";
import "./Currentsme.css"
import { Link } from "react-router-dom";
function Currentsme(){
  const [Components_name,setComponents_name]=useState();

    return (
        <div className='currentsme-ml'>
          <div className="currentsme1">
            <div className="currentsme2">
              <h1 className="currentsme2-head">
                Current SME IPO
              </h1>
              <div className="currentsme2-lnk">
              <Link className='currentsme-lnk'>IPO Bharat |</Link>
              <Link className='currentsme-lnk'>IPO Bharat |</Link>
              <Link className='currentsme-lnk'> IPO |</Link>
              <Link className='currentsme-lnk'> Current SME IPO</Link>
              </div>
            </div>
          </div>
          <div className="currentsme3">
              <div className="currentsme4">
                  <button className="currentsme4-btn "style={{color:Components_name == 'Mainboard IPOs'?'#4C45B9':'black',background:Components_name == 'Mainboard IPOs'?'#5e57c076':'',padding:"9px",borderRadius:"10px"}} onClick={()=>{setComponents_name('Mainboard IPOs')}}>Mainboard IPOs</button><button className="currentsme4-btn" style={{color:Components_name == 'SME IPOs'?'#4C45B9':'black',background:Components_name == 'SME IPOs'?'#5e57c076':'',padding:"9px",borderRadius:"10px"}} onClick={()=>{setComponents_name('SME IPOs')}}>SME IPOs</button>
              </div>
              <div className="currentsme5">
                  <p >Latest SME IPO Updates: SME IPO tracker </p>
                  <p>The upcoming sme IPOs in India this week and coming weeks are Benchmark Computer Solution IPO, Sheetal Universal IPO</p>
                  <p>The current active sme IPO is Kalyani Cast Tech IPO</p>
                  <p>SME IPO closing today is Kalyani Cast Tech IPO</p>
                  <p>SME IPO listing today is Micropro Software Solutions IPO</p>
              </div>
              <div className="currentsme6">
                  <span className="currentsme6-b">IPO Search:</span>
                  <input type='text' placeholder='Enter first few letters to get company' className="currentsme6-in"></input>
                  <button className="currentsme6-btn">Search IPO</button>
              </div>
              <div className="currentsme7">
                  <ul className='currentsme7-ul'>
                  <li><Link href="" className="currentsme7ln">Issue open</Link></li>
                  <li><Link href="" className="currentsme7ln">Closed but not listed</Link></li>
                  <li><Link href="" className="currentsme7ln">Listing today</Link></li>
                  </ul>
              </div>
              <div className="currentsme8">
                  <h4 className="currentsme8-head">
                  IPO 2023 List (Mainboard)
                  </h4>
              </div>
              <div className="currentsme9">
              <div className="currentsme10">
              <h2 className=" currentsme10-head">
              SME IPO List 2023 (IPO at BSE SME & NSE Emerge)
                      </h2>
              <table class="table tablecurrent">
           <thead class="thead-dark">
       <tr className="head-tr">
      <th className="smeth" scope="col">Issuer Company</th>
      <th scope="col">Open Date</th>
      <th scope="col">Close Date</th>
      <th scope="col">Lead Manager</th>
      <th scope="col">Market Maker</th>
      <th scope="col">Issue Price</th>
      <th scope="col">Issue Size</th>
      <th scope="col">Lot Size</th>
      <th scope="col">Exchange</th>
      <th className="smeth1" scope="col">Compare</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Benchmark Computer Solution Limited IPO</td>
      <td></td>
      <td></td>
      <td>Beeline Capital</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>BSE, SME</td>
      <td></td>

    </tr>
    <tr>
      <td scope="row">Sheetal Universal Limited IPO</td>
      <td></td>
      <td></td>
      <td>Beeline Capital</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>NSE, SME</td>
      <td></td>

    </tr>
    <tr>
      <td scope="row">Arrowhead Seperation Engineering Limited IPO</td>
      <td>Nov 16, 2023</td>
      <td>Nov 24, 2023</td>
      <td>Aryman Financial
Services</td>
      <td>Aryman Capital Markets</td>
      <td>233.00</td>
      <td>13.00</td>
      <td>600</td>
      <td>BSE, SME</td>
      <td></td>

    </tr>
    <tr>
      <td scope="row">Kalyani Cast Tech Ltd IPO</td>
      <td>Nov 08, 2023</td>
      <td>Nov 10, 2023</td>
      <td>Gertex Corporate
Services</td>
      <td>Gertex Share Broking</td>
      <td>139.00</td>
      <td>30.11</td>
      <td>1,000</td>
      <td>BSE, SME</td>
      <td></td>

    </tr>
  </tbody>
</table>


             </div>
             <div className="current12">
              <input type="button" placeholder='   <  ' />
              <span>2023</span>
              <input type="button" placeholder='      >  ' />
             </div>
              </div>
          </div>
        </div>
      )
  
}
export default Currentsme