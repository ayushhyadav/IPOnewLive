import React from "react";
import "./Ipocalender.css";
import { Link } from "react-router-dom";
function Ipocalender() {
  return (
    <div className="ipocalender1">
      <div className="ipocalender2">
        <div className="ipocalender3">
          <h1 className="ipocalender3-head">IPO Calendar</h1>
          <div className="ipocalender4">
            <Link className="ipocalender4-lnk">IPO Bharat |</Link>
            <Link className="ipocalender4-lnk"> IPO |</Link>
            <Link className="ipocalender4-lnk"> IPO Calender </Link>
          </div>
        </div>
      </div>
      <div className="ipocalender5">
        <div className="ipocalender6">
          <Link className="ipocalender6-btn ipocalender6-btn1">
            IPO Calender
          </Link>
          <Link className="ipocalender6-btn">SME IPO Calender</Link>
        </div>
        <div className="ipocalender7">
          <h1 className="ipocalender7-head">About IPO Calendar</h1>
          <div className="ipocalende8">
            <p className="ipocalender8-p">
              Track the events of primary stock markets (IPO) in India using
              simple calendar view. The IPO Calendar provides IPO schedule and
              timeline of IPO for current and upcoming IPOs. Find IPO opening
              today. Below calendar provides date wise IPO activity in November
              2023. Click on the event name to get more information.
            </p>
            <img
              className="ipocalender8-img"
              src="assets/Group 89.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="ipocalender10">
          <span className="ipocalender10-b">IPO Search:</span>
          <input
            type="text"
            placeholder="Enter first few letters to get company"
            className="ipocalender10-in"
          ></input>
          <button className="ipocalender10-btn">Search IPO</button>
        </div>
        <div className="ipocalender11">
          <h4 className="ipocalender11-head">IPO Calendar November 2023</h4>
        </div>
      <div className="ipocalender9">

        
        <div className="ipocalender12">
          <div className="ipocalender13">
            <table class="table ipocalendertab">
              <thead>
                <tr>
                  <th className="ipo-th1" scope="col">Sunday</th>
                  <th scope="col">Monday</th>
                  <th scope="col">Tuesday</th>
                  <th scope="col">Wednesday</th>
                  <th scope="col">Thursday</th>
                  <th scope="col">Friday</th>
                  <th className="ipo-th2" scope="col">saturday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row"></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td scope="row">6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td scope="row">13</td>
                  <td>14</td>
                  <td>15 </td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ipocalender14">
            <input type="button" className="ipocalender14-in" placeholder="<" />
            <span id="span1">2023</span>
            <input type="button" placeholder=">" className="ipocalender14-in" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ipocalender;
