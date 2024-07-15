import React, { useState } from 'react';
import './Signup.css';
import logo from '../screens/Image/Group.png';
import Facebook from '../screens/Image/Facebook.png';
import Twitter from '../screens/Image/Twitter.png';
import Instagram from '../screens/Image/Instagram.png';
import Google from '../screens/Image/Google.png';
import reCAPTCHA from '../screens/Image/reCAPTCHA.png';
import { NavLink ,useNavigate} from 'react-router-dom'; // Fix import statement
import BaseUrl from './Server/BaseUrl';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  let navigate=useNavigate()

  const loginMethod = () => {
    console.log('base url  ', email, password);
    const data = {
      email,
      password,
    };
    fetch(BaseUrl.BaseUrl + '/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson?.error) {
          alert(JSON.stringify(responseJson?.error));
        } else {
          console.log("checkkk",responseJson);
          localStorage.setItem('user_id', responseJson.user_id)
        
          console.log('local storage ',localStorage.user_id)
          navigate("/")
        }
      })
      .catch((error) => {
        alert(JSON.stringify(error));
    
      });
  };
  

  return (
    <div className="Main-Container" style={{ flex: 1, height: window.innerHeight }}>
      <div className="Container" style={{ width: window.innerWidth / 2 }}>
        <div className="detail" style={{ padding: 20 }}>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              marginTop: 30,
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: 20,
            }}
          >
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img style={{ width: 45, height: 40, marginTop: 5 }} src={logo} alt="" />
              <h5 style={{ color: 'white' }}>CARIBBEANEAZE</h5>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <img style={{ width: 25, height: 25, marginRight: 10 }} src={Facebook} alt="" />
              <img style={{ width: 25, height: 25, marginRight: 10 }} src={Twitter} alt="" />
              <img style={{ width: 25, height: 25, marginRight: 10 }} src={Instagram} alt="" />
            </div>
          </div>
          <div style={{ color: 'white', fontSize: 18, alignItems: 'center', justifyContent: 'center', width: '100%', padding: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at elit in eu augue nulla porttitor interdum. Eu aliquet sit nisl amet, hac quisque turpis. Sit ut mattis amet a quis augue lacus, morbi lorem. Est dui rhoncus blandit massa sed ipsum felis.
          </div>
        </div>
      </div>
      <div style={{ height: '90%', display: "flex", background: 'white', width: window.innerWidth / 2, justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '70%' }}>
          <div style={{ flexDirection: 'row', height: 50, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontWeight: 'bold', fontSize: 32 }}>Login</p>
            <button style={{ height: 50, color: '#000000', borderRadius: 7, background: 'white', width: '23%', borderWidth: 2.4 ,fontSize:15}}>Become a Host</button>
          </div>
          <label style={{ fontSize: 20 }}>Lorem ipsum dolor sit emet conseteur</label>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', borderColor: '#C4C4C4', backgroundColor: "#F8FAFC", width: '25%', height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
              <img style={{ width: 25, height: 25, marginLeft: 10 }} src={Facebook} alt="" />
              <label style={{ marginLeft: 10, fontSize: 20, color: '#474554' }}>Facebook</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', borderColor: '#C4C4C4', backgroundColor: "#F8FAFC", width: '22%', height: 45, marginLeft: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
              <img style={{ width: 25, height: 25, marginLeft: 10 }} src={Google} alt="" />
              <label style={{ marginLeft: 10, fontSize: 20, color: '#474554' }}>Google</label>
            </div>
          </div>
          <div style={{ height: '100%', marginTop: 25 }}>
            <div style={{ width: '100%' }}>
              <label style={{ color: '#474554' }}>Email</label><br />
              <input
                style={{
                  width: '100%',
                  height: '60px',
                  padding: '20px',
                  borderWidth: '0.1px',
                  marginTop: '5px',
                  borderColor: '#E2E8F0',
                  borderRadius: '7px',
                }}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                placeholder='Enter Email'
              />
            </div>
            <div style={{ width: '100%' }}>
              <label style={{ color: '#474554' }}>Password</label><br />
              <input
                style={{
                  width: '100%',
                  height: '60px',
                  padding: '20px',
                  borderWidth: '0.1px',
                  marginTop: '5px',
                  borderColor: '#E2E8F0',
                  borderRadius: '7px',
                }}
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                type="password"
                placeholder='Enter Password here'
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 10 }}>
              <label style={{ fontSize: 18, color: '#0F172A', fontWeight: '500', alignSelf: 'flex-end' }}>Forgot password? </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '60%', marginTop: 10, height: 85, boxShadow: `1px 1px 2px 2px ${'#D3D3D3'}`, borderColor: '#D3D3D3' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <input style={{ width: 30, height: 30 }} type="checkbox" />
                <p style={{ fontSize: 21, padding: 10, marginTop: 10 }}>I'm not a robot</p>
              </div>
              <img style={{ width: 35, height: 35, marginRight: 10 }} src={reCAPTCHA} alt='' />
            </div>
            <button onClick={loginMethod} style={{ background: '#F15A29', width: '100%', height: 64, marginTop: 90, borderWidth: 0, borderRadius: 8, fontSize: 25, color: 'white', fontWeight: '500' }}>Login</button>
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 25 }}>
            <label style={{ fontSize: 20, color: '#0F172A' }}>Don't have an account?</label>
            <NavLink to='/Signup' style={{ backgroundColor: 'white', fontSize: 20, border: 'none', color: '#0F172A', fontWeight: 'bold', padding: 5 }}>Registration</NavLink>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
