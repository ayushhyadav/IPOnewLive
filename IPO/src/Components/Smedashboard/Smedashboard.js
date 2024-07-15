import React from "react";
import "./Smedashboard.css";
import { Link } from "react-router-dom";

function Smedashboard() {
  return (
    <div className="smedash1">
      <div className="smedash2">
        <div className="smedash3">
          
            <Link className="smelnk" to={"/"}>
              {" "}
              <h1>SME IPO Dashboard</h1>
            </Link>
        
        </div>
        <div className="smedash4">
          <Link className="smelnk" to={""}>
          IPO Bharat |
          </Link>
          <Link className="smelnk" to={""}>
            SME IPO |
          </Link>
          <Link className="smelnk" to={""}>
            SME IPO Dashboard
          </Link>
        </div>
      </div>
      <div className="smedash5">
        <div className="smedash6">
          <div className="smedash7 ">
            <Link className="smedash7-head">Mainboard IPOs</Link>
            <Link className="smedash7-head">SME IPOs</Link>
          </div>
        </div>

        <div className="smedash8">
          <div className="smedash9">
            <h1 className="smedash9-head">About SME IPO Dashboard</h1>
            <p>
              The SME IPO dashboard provides the latest info about Current SME
              IPO and Upcoming SME IPO's at BSE SME and NSE Emerge platform. SME
              IPO (Initial Public Offer) is a privately held Small and Medium
              Enterprises (SME) first sale of shares to the public via a stock
              exchange. Through SME IPO companies raise funds for working
              capital, debt repayment, and for other uses. SME IPO shares are
              listed on the SME platform of the BSE and NSE exchanges (i.e. BSE
              SME, NSE Emerge).
            </p>
          </div>
          <div className="smedash10">
            <img src="assets/Group 89.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="smedash11">
        <div className="smedash12">
          <h1 className="smedash12-head">IPO Dashboard India</h1>
        </div>
        <div className="smedash13">
          <div class=" card smedash14">
            <div class="card-body smedash15">
              <h5 class="card-title">154</h5>
              <p class="card-text">
                Total SME IPOs in the year 2023 (NSE + BSE)
              </p>
            </div>
          </div>
          <div class="card smedash16">
            <div class="card-body smedash17">
              <h5 class="card-title">114</h5>

              <p class="card-text">IPOs Listed in Gain</p>
            </div>
          </div>

          <div class="card smedash18">
            <div class="card-body smedash19">
              <h5 class="card-title">35</h5>

              <p class="card-text">IPOs Listed in Loss</p>
            </div>
          </div>
          <div class="card smedash20">
            <div class="card-body smedash21">
              <h5 class="card-title">121</h5>
              <p class="card-text">IPOs Listed in Gain (End of Day)</p>
            </div>
          </div>

          <div class="card smedash22">
            <div class="card-body smedash23">
              <h5 class="card-title">27</h5>

              <p class="card-text">IPOs Listed in Loss (End of Day)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-div4 smedash24">
        <div className="second-div smedash25">
          
          {/* <div className="smedash26">
            
           
          </div> */}

          <div className="smedash27">
            <div className="smedash28">
            <h1 className="smedash-h1">Current SME IPO</h1>
              <h5 style={{ marginBottom: "0px" }} className="smedash28-head">
                Current SME IPO on BSE SME and NSE Emerge.
              </h5>
              <table className="dashtables">
                <thead>
                  <tr className="smedash-tr ipo-tr1">
                    <th className="smedash-th" scope="col">
                      Issuer Company
                    </th>
                    <th className="smedash-th" scope="col">
                      Open{" "}
                    </th>
                    <th className="smedash-th" scope="col">
                      Close
                    </th>
                    <th className="smedash-th" scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Sheetal Universal Limited{" "}
                    </td>
                    <td className="smedash-td"></td>
                    <td className="smedash-td"></td>
                    <td className="smedash-td"></td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Ask Automotive
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Valiant Laboratories
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Honasa Consumer Limited 
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td className="smedash-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="smedash-td">7 Nov</td>
                    <td className="smedash-td">9 Nov</td>
                    <td className="smedash-td">Current</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="smedash29">
            <h1 className="smedash-h1">SME IPO Review </h1>
              <h5 style={{ marginBottom: "0px" }} className="smedash28-head">
                Current SME IPO reviews of BSE SME and NSE Emerge IPO.
              </h5>

              <table className="dashtables">
                <thead>
                  <tr className="smedash-tr">
                    <th className="smedash-th" scope="col">
                      Issuer Company
                    </th>
                    <th className="smedash-th" scope="col">
                      Recommendation{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="smedash-tr">
                    <td scope="row">Tata Trechnologies</td>
                    <td></td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Ask Automotive</td>
                    <td>Apply</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Valient Laboratories</td>
                    <td>Apply</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Protien eGov Technologies</td>
                    <td>May Apply</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Plaza Wire</td>
                    <td>Apply</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Plaza Wire</td>
                    <td>May Apply</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Plaza Wire</td>
                    <td>Apply</td>
                  </tr>
                  <tr className="smedash-tr">
                    <td scope="row">Plaza Wire</td>
                    <td>Apply</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Smedashboard;
