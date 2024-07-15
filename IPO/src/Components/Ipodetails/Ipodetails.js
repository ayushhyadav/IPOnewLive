import React, { useState } from "react";
import "./Ipodetails.css";
// import axios from "axios";

function Ipodetails({ ipoData }) {

  const [ipodata, setipodata] = useState(null);
console.log('new data',ipoData)
  return (
    <div className="ipodetails">
      <div className="ipodetails1">
        <div className="ipodetails2">
          <p className="ipopara">
          {ipoData ? ipoData.overview : "Loading..."}
          </p>
        </div>
        <div className="ipodetails3">
          <img className="ipod-img" src= {`http://localhost:3001/uploads`+ ipoData.img.filename
          }  alt="img" />
          {/* {ipoData?.img.map((propertyImage, index) => (
          <img
            key={index}
            style={{
              width: '31.7%',
              height: 300,
              float: 'left',
              flex: '0 0 auto',
              margin: '0 30px 0 0',
            }}
            
            // src={propertyImage.property_images}
            src={`http://localhost:3001/Images/`+ propertyImage.filename
          } 
            alt=""
          />
        ))} */}
        </div>
      </div>
      <div className="tabdiv">
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">{ipoData.ipoName} Details</h2>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails7">
              <h4 className="ipodetails7-head">
                Current Mainboard IPO at BSE and NSE.
              </h4>
            </div>
            <div className="ipodetails8">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>IPO Date</td>
                    <td>{ipoData?.ipoDetails?.ipoDate}</td>
                  </tr>
                  <tr>
                    <td>Listing Date</td>
                    <td>{ipoData?.ipoDetails?.listingDate}</td>
                  </tr>
                  <tr>
                    <td>Face Value</td>
                    <td>{ipoData?.ipoDetails?.faceValue}</td>

                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{ipoData?.ipoDetails?.priceBand }</td>
                  </tr>
                  <tr>
                    <td>Lot Size</td>
                    <td>{ipoData?.ipoDetails?.lotSize}</td>
                  </tr>
                  <tr>
                    <td>Total Issue Size</td>
                    <td>{ipoData?.ipoDetails?.totalIssueSize}</td>
                  </tr>
                  <tr>
                    <td>Issue Type</td>
                    <td>{ipoData?.ipoDetails?.issueType}</td>
                  </tr>
                  <tr>
                    <td>Offer for Sale</td>
                    <td>{ipoData?.ipoDetails?.offerForSale}</td>
                  </tr>
                  <tr>
                    <td>Listing At</td>
                    <td>{ipoData?.ipoDetails?.listingAt}</td>
                  </tr>
                  <tr>
                    <td>Share Holding Pre Issue</td>
                    <td>{ipoData?.ipoDetails?.shareHoldingPreIssue}</td>
                  </tr>
                  <tr>
                    <td>Share Holding Post Issue</td>
                    <td>{ipoData?.ipoDetails?.shareHoldingPostIssue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">{ipoData.ipoName}Timeline (Tentative Schedule)</h2>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails7">
              <h4 className="ipodetails7-head">
                Krystal Integrated Services IPO Timeline (Tentative Schedule)
              </h4>
            </div>
            <div className="ipodetails8">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>IPO Open Date</td>
                    <td>{ipoData?.ipoTimeline.ipoOpenDate}</td>
                  </tr>
                  <tr>
                    <td>IPO Close Date</td>
                    <td>{ipoData?.ipoTimeline.ipoCloseDate}</td>
                  </tr>
                  <tr>
                    <td>Basis of Allotment</td>
                    <td>{ipoData?.ipoTimeline?.basisOfAllotment}</td>
                  </tr>
                  <tr>
                    <td>Initiation of Refunds</td>
                    <td>{ipoData?.ipoTimeline.initiationOfRefunds}</td>
                  </tr>
                  <tr>
                    <td>Credit of Shares to Demat</td>
                    <td>{ipoData?.ipoTimeline.
creditOfSharesToDemat
}</td>
                  </tr>
                  <tr>
                    <td>Listing Date</td>
                    <td>{ipoData?.ipoTimeline.listingDate
}</td>
                  </tr>
                  <tr>
                    <td>Cut-off time for UPI mandate confirmation</td>
                    <td>{ipoData?.ipoTimeline.
cutoffTimeForUpiMandateConfirmation

}</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="tabdiv">
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">IPO Reservation</h2>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails7">
              <h4 className="ipodetails7-head content01">
{ipoData.ipoReservation}</h4>
            </div>
            <div className="ipodetails8  main-table">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>Investor Category</td>
                    <td>Shares Offered</td>
                    <td>Maximum Allottees</td>
                  </tr>
                  <tr>
                    <td>Anchor Investor Shares Offered</td>
                    <td>{ipoData?.investorCategory?.anchorInvestorSharesOffered?.anchorInvestorsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.anchorInvestorSharesOffered?.
anchorInvestormaximumAllottees
}</td>
                  </tr>
                  <tr>
                    <td>QIB Shares Offered</td>
                    <td>{ipoData?.investorCategory?.qibSharesOffered?.qibSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.qibSharesOffered?.qibSharesOfferedmaximumAllottees}</td>
                  </tr>
                  <tr>
                    <td>NII (HNI) Shares Offered</td>
                    <td>{ipoData?.investorCategory?.niiSharesOffered?.niiSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.niiSharesOffered?.niiSharesOfferedmaximumAllottees}</td>
                  </tr>
                  <tr>
                    <td>bNII  ₹10L</td>
                    <td>{ipoData?.investorCategory?.bNiiSharesOffered?.bNiiSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.bNiiSharesOffered?.bNiiSharesOfferedmaximumAllottees}</td>
                  </tr>
                  <tr>
                    <td>sNII  ₹10L</td>
                    <td>{ipoData?.investorCategory?.sNiiSharesOffered?.sNiiSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.sNiiSharesOffered?.sNiiSharesOfferedmaximumAllottees}</td>
                  </tr>
                  <tr>
                    <td>Retail Shares Offered</td>
                    <td>{ipoData?.investorCategory?.retailSharesOffered?.retailSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.retailSharesOffered?.retailSharesOfferedmaximumAllottees}</td>
                  </tr>
                  <tr>
                    <td>Employee Shares Offered</td>
                    <td>{ipoData?.investorCategory?.employeeSharesOffered?.employeeSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.employeeSharesOffered?.employeeSharesOfferedmaximumAllottees}</td>
                  </tr>
                  <tr>
                    <td>Total Shares Offered</td>
                    <td>{ipoData?.investorCategory?.totalSharesOffered?.totalSharesOfferedsharesOffered}</td>
                    <td>{ipoData?.investorCategory?.totalSharesOffered?.totalSharesOfferedmaximumAllottees}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">IPO Lot Size</h2>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails7">
              <h4 className="ipodetails7-head content01">
 {ipoData?.ipoLotSize?.description}
              </h4>
            </div>
            <div className="ipodetails8 main-table">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>Application</td>
                    <td>Lots</td>
                    <td>Shares</td>
                    <td>Amount</td>
                  </tr>
                  <tr>
                    <td>Retail (Min)</td>
                    <td>{ipoData?.ipoLotSize?.retailMin?.retailMinlot}</td>
                    <td>{ipoData?.ipoLotSize?.retailMin?.retailMinshare}</td>
                    <td>{ipoData?.ipoLotSize?.retailMin?.retailMinprice}</td>
                  </tr>
                  <tr>
                    <td>Retail (Max)</td>
                    <td>{ipoData?.ipoLotSize?.retailMax?.retailMaxlot}</td>
                    <td>{ipoData?.ipoLotSize?.retailMax?.retailMaxshare}</td>
                    <td>{ipoData?.ipoLotSize?.retailMax?.retailMaxprice}</td>
                  </tr>
                  <tr>
                    <td>S-HNI (Min)</td>
                    <td>{ipoData?.ipoLotSize?.sHniMin?.sHniMinlot}</td>
                    <td>{ipoData?.ipoLotSize?.sHniMin?.sHniMinshare}</td>
                    <td>{ipoData?.ipoLotSize?.sHniMin?.sHniMinprice}</td>
                  </tr>
                  <tr>
                    <td>S-HNI (Max)</td>
                    <td>{ipoData?.ipoLotSize?.sHniMax?.sHniMaxlot}</td>
                    <td>{ipoData?.ipoLotSize?.sHniMax?.sHniMaxshare}</td>
                    <td>{ipoData?.ipoLotSize?.sHniMax?.sHniMaxprice}</td>
                  </tr>
                  <tr>
                    <td>B-HNI (Min)</td>
                    <td>{ipoData?.ipoLotSize?.bHniMin?.bHniMinlot}</td>
                    <td>{ipoData?.ipoLotSize?.bHniMin?.bHniMinshare}</td>
                    <td>{ipoData?.ipoLotSize?.bHniMin?.bHniMinprice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="tabdiv">
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">IPO Anchor Investors Details</h2>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails8 small-tab">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>Bid Date</td>
                    <td>{ipoData?.ipoAnchorInvestorsDetails?.bidDate}</td>
                  </tr>
                  <tr>
                    <td>Shares Offered</td>
                    <td>{ipoData?.ipoAnchorInvestorsDetails?.sharesOffered}</td>
                  </tr>
                  <tr>
                    <td>Anchor Portion Size (In Cr.)</td>
                    <td>{ipoData?.ipoAnchorInvestorsDetails?.anchorPortionSize}</td>
                  </tr>
                  <tr>
                    <td>Anchor lock-in period end date for 50% shares (30 Days)</td>
                    <td>{ipoData?.ipoAnchorInvestorsDetails?.anchorLockInPeriodEndDate50}</td>
                  </tr>
                  <tr>
                    <td>Anchor lock-in period end date for remaining shares (90 Days)</td>
                    <td>{ipoData?.ipoAnchorInvestorsDetails?.anchorLockInPeriodEndDate90}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">IPO Promoter Holding</h2>
          </div>
          <div className="ipodetails7">
            <h4 className="ipodetails7-head content01 left-side">
{ipoData?.ipoPromotorHolding?.description}
            </h4>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails8 small-tab">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>Share Holding Pre Issue</td>
                    <td>{ipoData?.ipoPromotorHolding?.shareHoldingPreIssue}</td>
                  </tr>
                  <tr>
                    <td>Share Holding Post Issue</td>
                    <td>{ipoData?.ipoPromotorHolding?.shareHoldingPostIssue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>About</h3>
       {ipoData?.about}
      </div>

      <div className="tabdiv">
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">Financial Information (Restated)</h2>
          </div>
          <div className="ipodetails7">
            <h4 className="ipodetails7-head content01 left-side">
              Gopal Snacks Limited's revenue increased by 3.1% and profit after tax (PAT) rose by 170.52% between the financial year ending with March 31, 2023 and March 31, 2022.
            </h4>
          </div>
          <div className="ipodetalils6">
            <div className="ipodetails8 small-tab inrest">
              <table class="table tableipod table-striped">

                <tbody>
                  <tr>
                    <td>Period Ended</td>
                    <td>30/09/2023</td>
                    <td>31/03/2023</td>
                    <td>31/03/2021</td>
                  </tr>
                  <tr>
                    <td>Assets</td>
                    <td>4,836,657 (29.82%)</td>
                    <td>4,836,657 (29.82%)</td>
                    <td>4,836,657 (29.82%)</td>

                  </tr>
                  <tr>
                    <td>Revenue</td>
                    <td>3,224,439 (19.88%)</td>
                    <td>3,224,439 (19.88%)</td>
                    <td>3,224,439 (19.88%)</td>

                  </tr>
                  <tr>
                    <td>Profit After Tax</td>
                    <td>2,418,329 (14.91%)</td>
                    <td>2,418,329 (14.91%)</td>
                    <td>2,418,329 (14.91%)</td>

                  </tr>
                  <tr>
                    <td>Net Worth</td>
                    <td>1,612,220 (9.94%)</td>
                    <td>1,612,220 (9.94%)</td>
                    <td>1,612,220 (9.94%)</td>
                  </tr>
                  <tr>
                    <td>Reserves and Surplus</td>
                    <td>1,612,220 (9.94%)</td>
                    <td>1,612,220 (9.94%)</td>
                    <td>1,612,220 (9.94%)</td>
                  </tr>
                  <tr>
                    <td>Total Borrowing</td>
                    <td>1,612,220 (9.94%)</td>
                    <td>1,612,220 (9.94%)</td>
                    <td>1,612,220 (9.94%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="ipodetails4">
          <div className="ipodetails5">
            <h2 className="ipodetails5-head">Key Performance Indicators</h2>
          </div>
          <div className="ipodetails7">
            <h4 className="ipodetails7-head content01 left-side key">
              {ipoData?.keyPerformanceIndicators?.description }
            </h4>
          </div>
          <div className="ipodetalils6 keys">
            <div className="ipodetails8 small-tab">
              <table class="table tableipod table-striped space-tab">

                <tbody>
                  <tr>
                    <th>KPI</th>
                    <th>Values</th>
                  </tr>
                  <tr>
                    <td>ROE</td>
                    <td>   {ipoData?.keyPerformanceIndicators?.roe }</td>
                  </tr>
                  <tr>
                    <td>ROCE</td>
                    <td>   {ipoData?.keyPerformanceIndicators?.roce }</td>
                  </tr>
                  <tr>
                    <td>Debt/Equity</td>
                    <td>   {ipoData?.keyPerformanceIndicators?.debtEquity }</td>
                  </tr>
                  <tr>
                    <td>RoNW</td>
                    <td>   {ipoData?.keyPerformanceIndicators?.ronw}</td>
                  </tr>
                  <tr>
                    <td>P/BV</td>
                    <td>   {ipoData?.keyPerformanceIndicators?.pbv}</td>
                  </tr>
                  <tr>
                    <td>PAT Margin (%)</td>
                    <td>   {ipoData?.keyPerformanceIndicators?.patMargin }</td>
                  </tr>

                  <tr>
                    <td>EPS (Rs) </td>
                    <td>   {ipoData?.keyPerformanceIndicators?.eps }</td>
                  </tr>
                  <tr>
                    <td>P/E (x) </td>
                    <td>   {ipoData?.keyPerformanceIndicators?.pe }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>Objects of the Issue</h3>
        <p>
     {ipoData?.objectsOfTheIssue}
        </p>
      </div>
      <div className="about">
        <h3>Contact Details</h3>
        <addres>
        {ipoData.limitedContactDetails}
        </addres>
      </div>
      <div className="about Registrar">
        <h3>IPO Registrar</h3>
        <addres>
          {ipoData?.ipoRegistrar}
          {/* Link Intime India Private Ltd
          <br />
          <br />
          <ul>
            <li>Phone: +91-22-4918 6270</li>
            <li>Email: gopalsnacks@linkintime.co.in</li>
            <li>Website: https://linkintime.co.in/initial_offer/public-issues.html</li>
          </ul> */}
        </addres>
      </div>
      <div className="about">
        <h3>Objects of the Issue</h3>
        <p>
         {ipoData.objectsOfTheIssue}
        </p>
      </div>
      <div className="about">
        <h3>IPO Lead Manager(s)</h3>
        <ol>
          <li> {ipoData.ipoLeadManagers}</li>
        
        </ol>
      </div>
    </div>
  );
}
export default Ipodetails;
