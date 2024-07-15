import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <div>
            <div className="bottom-div">
                <div className="sub-bootomdiv0">
                    <div className="sub-bottomdiv1">
                        <Link to='/home'>
                            <img src={require('../Logo/IPO-logo.png')} alt="Logo" className="navbar-logo" />

                        </Link>
                        <pre id='pr-2'>Chittorgarh.com is flagship financial <br />
                            portal of Chittorgarh infotech Private<br />
                            Limited.
                        </pre>
                    </div>
                    <div className="div-bottomdiv2">
                        <ul className='ul2'>
                            <b className='bold'>IPO Bharat</b>
                            <li><Link href='#'>Contact Us</Link></li>
                            <li><Link href='#'>Advertise With Us</Link></li>
                            <li><Link href='#'>Contact us</Link></li>
                            <li><Link href='#'>Pricing</Link></li>
                            <li><Link href='#'>Help & Support</Link></li>
                            <li><Link className='admin-footer' href='/admin'>Admin</Link></li>
                        </ul>
                    </div>
                    <div className="div-bottomdiv2">
                        <ul className='ul2'>
                            <b className='bold'>Quick Links</b>
                            <li><Link href='#'>Ipo</Link></li>
                            <li><Link href='#'>SME IPO</Link></li>
                            <li><Link href='#'>Site Map</Link></li>

                        </ul>
                    </div>
                    <div className="div-bottomdiv2">
                        <ul className='ul2'>
                            <b className='bold'>Contact Us</b>
                            <li><a href='#'>101,Connaught Place,<br /> Shobhagpura,Uaipur,Rajasthan <br />313001 India</a></li>
                            <li><a href='#'>+91 75002 78900</a></li>
                            <li><a href='#'>info@chittorgarh.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="foot">

                    <div className='Chittorgarh'>
                        <p>© 2023 IPO Bharat  All Rights Reserved.</p>
                        <p>Designed & Developed by <Link href='https://4tunerstech.com'>4Tuners Technologies</Link></p>
                    </div>
                    <div className='fa'>
                        <ul >
                            <Link to="/">Terms & conditions</Link>
                            <Link style={{ paddingLeft: "20px" }} to="/">Privacy Policy</Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;