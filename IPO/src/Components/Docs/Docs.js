import React from "react";
import "./Docs.css"

function Docs(){
    return(<><div className="mid-content">
         <p className="para">
      Tata Technologies IPO Reviews, analysis and views by popular
      members. Read Tata Technologies Limited IPO reviews by retail
      investors to find recommended ipo to buy.
    </p>
  </div>
  <div className="mid-heading">
    <h2 className="mid-head">
      Tata Technologies IPO Review Summary by Members
    </h2>
  </div>
  <div className="mid-table">
    <table class="table table1">
      <thead class="thead-dark">
        <tr className="tr-1">
          <th className="th-1 th-11" scope="col">
            Review By
          </th>
          <th className="th-1 " scope="col">
            Apply
          </th>
          <th className="th-1" scope="col">
            May Apply
          </th>
          <th className="th-1" scope="col">
            Neutral
          </th>
          <th className="th-1 th-12" scope="col">
            Avoid
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="tr-1">
          <td className="td-1" scope="row">
            Count
          </td>
          <td className="td-1">16</td>
          <td className="td-1">0</td>
          <td className="td-1">1</td>
          <td className="td-1">0</td>
        </tr>
        <tr className="tr-1 tr-2">
          <td className="td-1" scope="row">
            Percent
          </td>
          <td className="td-1">94.12</td>
          <td className="td-1">0.00</td>
          <td className="td-1">5.88</td>
          <td className="td-1">0.00</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="mid-blocks">
    <div className="midsub-block">
      <div className="midheaddiv middiv1">
        <h6 className="midhead5">
          Apply for Listing Gain at Cut-off Price
        </h6>
        <div className="middiv-cont">
          <b>IPO Chacha</b>
          <p>
            A big player in tech field. The ipo is much awaited. Can
            expect some good listing gain irrespective of issue price.
          </p>
        </div>
      </div>
    </div>
    <div className="midsub-block">
      <div className="midheaddiv middiv1">
        <h6 className="midhead5">
          Apply for Long Term at Upper Price Band
        </h6>
        <div className="middiv-cont">
          <b>gauravndx</b>
          <p>
            Tata tech Huge buying interest from Jaipur brokers Gmp 262-263
            10 lac + 14700
          </p>
        </div>
      </div>
    </div>
    <div className="midsub-block">
      <div className="midheaddiv middiv1">
        <h6 className="midhead5">
          Apply for Long Term at Upper Price Band
        </h6>
        <div className="middiv-cont">
          <b>Sanny Soni</b>
          <p>
            Long time waiting IPO, Tata technologies visible now. Name is
            enough to make this over subscribe stocks..
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="bot-div">
    <label className="label-1">Comments</label><br/>
    <input type="text" placeholder="Add a Public Comment"></input>

    <div className="divbtn">
      <button id="btn-1">Post New Comment</button>
    </div>
  </div>
  <div className="note">
    <b className="bold-1">Note:</b>
    <ul>
      <li>
        The recommendations or analysis of public issues posted above
        expresses the views of its author and does not represent the views
        of Chittorgarh.com or its staff.
      </li>
      <li>
        We reserve the right to remove any objectionable post without
        providing a reason.
      </li>
    </ul>
  </div></>)
}
export default Docs;