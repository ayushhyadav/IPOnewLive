import React from "react";
import "./Ipodashboard.css";
import { Link } from "react-router-dom";

function Ipodashboard() {
  return (
    <div className="ipo-container">
      <div className="ipo-1">
        <div className="ipo-2">
          <h1>
            <Link className="link" to={"/"}>
              {" "}
              IPO Dashboard
            </Link>
          </h1>
        </div>
        <div className="ipo-3">
          <Link className="link link1" to={""}>
            IPO Bharat |
          </Link>
          <Link className="link link1" to={""}>
            IPO |
          </Link>
          <Link className="link link1" to={""}>
            IPO Dashboard
          </Link>
        </div>
      </div>
      <div className="secondpart">
        <div className="secondpart-sub">
          <div className="iposub-4 iposub-42">
            <Link className="sec-head">Mainboard IPOs</Link>
          </div>
          <div className="iposub-4">
            <Link className="sec-head">SME IPOs</Link>
          </div>
        </div>

        <div className="ipo-4">
          <div className="ipo-5">
            <h1 className="ipohed-5">About IPO Dashboard</h1>
            <p className="ipo5-p">
              The IPO dashboard provides the latest info about Current IPO and
              Upcoming IPO's at BSE and NSE. Initial Public Offer (IPO) is a
              privately held company's first sale of stock to the public via a
              stock exchange. Companies use IPO funds for working capital, debt
              repayment, acquisitions, and for many other uses. The mainboard
              IPO's are listed on stock exchanges like NSE and BSE.
            </p>
          </div>
          <div className="ipo-6">
            <img src="assets/Group 89.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="thirdpart">
        <div className="thirt-heading">
          <h1 className="third-h1">IPO Dashboard India</h1>
        </div>
        <div className="third-sub1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">41</h5>

              <p class="card-text">
                Total Main Board IPOs in the year 2023 (NSE + BSE)
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">35</h5>

              <p class="card-text">IPOs Listed in Gain</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">3</h5>

              <p class="card-text">IPOs Listed in Loss</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">31</h5>
              <p class="card-text">IPOs Listed in Gain (End of Day)</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">7</h5>

              <p class="card-text">IPOs Listed in Loss (End of Day)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-div4">
        <div className="second-div">
          <div className="second-div-2">
            <div className="div-tabdash">
              <h1 className="heading-1">Current IPO (Mainboard)</h1>
              <h5 style={{ marginBottom: "0px",height:"35px",paddingTop:"5px" }} className="sub-heading">
                Current Mainboard IPO at BSE and NSE.
              </h5>
              <table className="table dashtables">
                <thead>
                  <tr className="ipo-tr ipo-tr1">
                    <th className="ipo-th" scope="col">
                      Issuer Company
                    </th>
                    <th className="ipo-th" scope="col">
                      open{" "}
                    </th>
                    <th className="ipo-th" scope="col">
                      close
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Tata Trechnologies
                    </td>
                    <td className="ipo-td"></td>
                    <td className="ipo-td"></td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Ask Automotive
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Valient Laboratories
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Protien eGov Technologies
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="div-tabdash">
              <h1 className="heading-1"> IPO Review </h1>
              <h5 style={{ marginBottom: "0px", height:"35px",paddingTop:"5px" }} className="sub-heading">
                Latest IPO review of mainboard IPO’s at BSE & NSE.
              </h5>

              <table className=" table dashtables">
                <thead>
                  <tr className="ipo-tr">
                    <th className="ipo-th" scope="col">
                      Issuer Company
                    </th>
                    <th className="ipo-th" scope="col">
                      open{" "}
                    </th>
                    <th className="ipo-th" scope="col">
                      close
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Tata Trechnologies
                    </td>
                    <td className="ipo-td"></td>
                    <td className="ipo-td"></td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Ask Automotive
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Valient Laboratories
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Protien eGov Technologies
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
                  </tr>
                  <tr className="ipo-tr">
                    <td className="ipo-td" scope="row">
                      Plaza Wire
                    </td>
                    <td className="ipo-td">7 Nov</td>
                    <td className="ipo-td">9 Nov</td>
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
export default Ipodashboard;
