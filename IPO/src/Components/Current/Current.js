import React, { useState } from 'react'
import "./Current.css"
import { Link } from 'react-router-dom'

 function  Current() {
  const [Components_name,setComponents_name]=useState();
    return (
      <div className='current-ml'>
        <div className="current1">
          <div className="current2">
            <h1 className="current2-head">
              Current Mainline IPO
            </h1>
            <div className="current2-lnk">
            <Link className='current-lnk'>IPO Bharat |</Link>
            <Link className='current-lnk'> IPO |</Link>
            <Link className='current-lnk'> Current Mainline IPO</Link>
            </div>
          </div>
        </div>
        <div className="current3">
            <div className="current4">
                <button className="current4-btn current4-btn1" style={{color:Components_name == 'Mainboard IPOs'?'#4C45B9':'black',background:Components_name == 'Mainboard IPOs'?'#5e57c076':'',padding:"9px",borderRadius:"10px"}} onClick={()=>{setComponents_name('Mainboard IPOs')}}>Mainboard IPOs</button><button className="current4-btn"style={{color:Components_name == 'SME IPOs'?'#4C45B9':'black',background:Components_name == 'SME IPOs'?'#5e57c076':'',padding:"9px",borderRadius:"10px"}} onClick={()=>{setComponents_name('SME IPOs')}}>SME IPOs</button>
            </div>
            <div className="current5">
                
 <p className="current5-p">Latest Mainboard IPO Updates: Mainboard IPO tracker.</p>
<p>The upcoming mainboard IPOs in India this week and coming weeks are Tata Technologies IPO, Gandhar Oil Refinery IPO, Fedbank Financial Services IPO.</p>
<p>The current mainboard active IPO is ASK Automotive IPO.</p>
<p>Mainboard IPO closing today is ASK Automotive IPO. </p>
            </div>
            <div className="current6">
                <span className="current6-b">IPO Search:</span>
                <input type='text' placeholder='Enter first few letters to get company' className="current6-in"></input>
                <button className="current6-btn">Search IPO</button>
            </div>
            <div className="current7">
               
                <Link href="" className="current7ln">Issue open</Link>
                <Link href="" className="current7ln">Closed but not listed</Link>
                <Link href="" className="current7ln">Listing today</Link>
              
            </div>
            <div className="current8">
                <h4 className="current8-head">
                IPO 2023 List (Mainboard)
                </h4>
            </div>
            <div className="current9tab">
            <div className="current10tab">
            <h4 className=" currentth-head4">
                    Mainboard IPO List 2023
                    </h4>
          <table class=" table currenttable1">
         
                    
                
            <thead class="thead-dark">
               
              <tr>
                <th className="currentth-1 currentth-11" scope="col">
                Issuer Company
                </th>
                <th className="currentth-1 " scope="col">
                  Open Date
                </th>
                <th className="currentth-1" scope="col">
                  Close date
                </th>
                <th className="currentth-1" scope="col">
                  Issue Price
                </th>
                <th className="currentth-1 " scope="col">
                  Issue Size
                </th>
                <th className="currentth-1 " scope="col">
                 lot size
                </th>
                <th className="currentth-1 " scope="col">
                 Exchange
                </th>
                <th className="currentth-1 currentth-12" scope="col">
                  Compare
                </th>
 
              </tr>
            </thead>
            <tbody>
              <tr className="currenttr-1 currenttr-str">
                <td className="currenttd-1" scope="row"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1">BSE,NSE</td>
                <td className="currenttd-1"></td>
            </tr>
              <tr className="currenttr-1 currenttr-2">
                <td className="currenttd-1" scope="row">
                Gandhar Oil Refinery India Limited IPO
                </td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1">500.00</td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1">BSE,NSE</td>
                <td className="currenttd-1"></td>

                </tr>
                <tr className="currenttr-1 currenttr-st currenttr-2">
                <td className="currenttd-1" scope="row">
                Tata Technologies Limited IPO
                </td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1">BSE,NSE</td>
                <td className="currenttd-1"></td>

                </tr>
                <tr className="currenttr-1 currenttr-st currenttr-2">
                <td className="currenttd-1" scope="row">
                Fedbank Financial Services Limited IPO
                </td>
                <td className="currenttd-1">Nov 22,2023</td>
                <td className="currenttd-1">Nov 24,2023</td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1">1100.00</td>
                <td className="currenttd-1"></td>
                <td className="currenttd-1">BSE,NSE </td>
                <td className="currenttd-1"> </td>

                </tr>
                <tr className="currenttr-1 currenttr-st currenttr-2">
                <td className="currenttd-1" scope="row">
                ASK Automotive Limited IPO
                </td>
                <td className="currenttd-1">Nov 07, 2023</td>
                <td className="currenttd-1">Nov 09, 2023</td>
                <td className="currenttd-1">268.00 to 282.00</td>
                <td className="currenttd-1">834.00</td>
                <td className="currenttd-1">53</td>
                <td className="currenttd-1">BSE,NSE</td>
                <td className="currenttd-1"></td>

                </tr>
            </tbody>
          </table>
           </div>
           {/* <div className="current12">
            <input type="button" placeholder='   <  ' />
            <span>2023</span>
            <input type="button" placeholder='      >  ' />
           </div> */}
            </div>
        </div>
      </div>
    )
  }


export default Current
