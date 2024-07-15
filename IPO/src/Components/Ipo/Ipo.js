import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Ipo.css";
import { Link } from "react-router-dom";
import Ipodetails from "../Ipodetails/Ipodetails";
import Subscription from "../Subscription/Subscription";
import Docs from "../Docs/Docs";
import Gmp from "../Gmp/Gmp";

function Ipo() {
  const { ipoId } = useParams();
  const [componentName, setComponentName] = useState('IPO Details');
  const [ipoData, setIpoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIpoData = async () => {
      try {
        console.log(`Fetching data for IPO ID: ${ipoId}`);
        const response = await axios.get(`http://localhost:3001/ipo/${ipoId}`);
        console.log('Response data:', response.data);
        setIpoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchIpoData();
  }, [ipoId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading IPO data: {error.message}</div>;

  return (
    <div className="Ipo">
      <div className="change">
        <h1 className="heading-tata">{ipoData.ipoName} IPO</h1>
        <div className="uldivipo">
          <Link className="ipolink" to="">IPO Bharat |</Link>
          <Link className="ipolink" to="">IPO |</Link>
          <Link className="ipolink" to="">IPO Dashboard |</Link>
          <Link className="ipolink" to="">IPO List |</Link>
          <Link className="ipolink" to="">{ipoData.ipoName}</Link>
        </div>
      </div>
      <div className="mid">
        <div className="mid-nav">
          <button className="mid-link" style={{
            color: componentName === 'IPO Details' ? '#4C45B9' : 'black',
            background: componentName === 'IPO Details' ? 'gainsboro' : '',
            padding: "9px",
            borderRadius: "10px"
          }} onClick={() => setComponentName('IPO Details')}>
            IPO Details
          </button>
          <button className="mid-link" style={{
            color: componentName === 'Docs' ? '#4C45B9' : 'black',
            background: componentName === 'Docs' ? 'gainsboro' : '',
            padding: "9px",
            borderRadius: "10px"
          }} onClick={() => setComponentName('Docs')}>
            Docs
          </button>
          <button className="mid-link" style={{
            color: componentName === 'Subscription' ? '#4C45B9' : 'black',
            background: componentName === 'Subscription' ? 'gainsboro' : '',
            padding: "9px",
            borderRadius: "10px"
          }} onClick={() => setComponentName('Subscription')}>
            Subscription
          </button>
          <button className="mid-link" style={{
            color: componentName === 'GMP' ? '#4C45B9' : 'black',
            background: componentName === 'GMP' ? 'gainsboro' : '',
            padding: "9px",
            borderRadius: "10px"
          }} onClick={() => setComponentName('GMP')}>
            GMP
          </button>
        </div>
        <div className="content">
          {componentName === 'IPO Details' && <Ipodetails ipoData={ipoData} />}
          {componentName === 'Docs' && <Docs />}
          {componentName === 'Subscription' && <Subscription />}
          {componentName === 'GMP' && <Gmp />}
        </div>
      </div>
    </div>
  );
}

export default Ipo;
