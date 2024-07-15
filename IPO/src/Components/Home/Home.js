import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    fetch('/ipo')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setIpoData(data);
      })
      .catch(error => console.error('Error fetching IPO data:', error));
  }, []);

  return (
    <div className='mainbarhome'>
      <div className="div">
        <div className='Mainbar-1'>
          <div>
            <p>
              <span className="roundcircle green" style={{ height: "20px", width: "20px", display: "inline-block" }}></span><b className='b'>Issue open</b>
            </p>
          </div>
        </div>
        <div className='Mainbar-1'>
          <div>
            <p>
              <span className="roundcircle yellow" style={{ height: "20px", width: "20px", display: "inline-block" }}></span> <b className='b'>Closed but not listed</b>
            </p>
          </div>
        </div>
        <div className='Mainbar-1'>
          <div>
            <p>
              <span className="roundcircle blue" style={{ height: "20px", width: "20px", display: "inline-block" }}></span><b className='b'>Listing today</b>
            </p>
          </div>
        </div>
      </div>

      <div className="mainbar-container">
        {ipoData.length > 0 && (
          <>
            {ipoData.filter(ipo => ipo.Type === "Mainboard").length > 0 && (
              <div className="div-tab">
                <h2 style={{ marginBottom: "0px", height: "50px", paddingTop: "8px", borderRadius: "10px 10px 0px 0px" }} className="sub-heading">IPO 2024 List (Mainboard)</h2>
                <table className="tables">
                  <thead>
                    <tr>
                      <th className='th' scope="col">Issuer Company</th>
                      <th className='th' scope="col">Open</th>
                      <th className='th' scope="col">Close</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipoData.filter(ipo => ipo.Type === "Mainboard").map((ipo, index) => (
                      <tr key={index}>
                        <td className='td'>
                          <a href={`/ipo/${ipo._id}`}>{ipo.ipoName}</a></td>
                        <td className='td'>{ipo?.ipoTimeline?.ipoOpenDate}</td>
                        <td className='td'>{ipo?.ipoTimeline?.ipoCloseDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {ipoData.filter(ipo => ipo.Type === "SME").length > 0 && (
              <div className="table right-table">
                <div className="div-tab">
                  <h2 style={{ marginBottom: "0px", height: "50px", paddingTop: "8px", borderRadius: "10px 10px 0px 0px" }} className="sub-heading">SME IPO 2024 List</h2>
                  <table className="tables">
                    <thead>
                      <tr>
                        <th className='th' scope="col">Issuer Company</th>
                        <th className='th' scope="col">Open</th>
                        <th className='th' scope="col">Close</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ipoData.filter(ipo => ipo.Type === "SME").map((ipo, index) => (
  <tr key={index}>
  <td className='td'>
    <a href={`/ipo/${ipo._id}`}>{ipo.ipoName}</a></td>
  <td className='td'>{ipo?.ipoTimeline?.ipoOpenDate}</td>
  <td className='td'>{ipo?.ipoTimeline?.ipoCloseDate}</td>
</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
