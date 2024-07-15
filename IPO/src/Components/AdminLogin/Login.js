import React from 'react';
import './Login.css'
const Login = () => {
    return (

        <div class="container w-50 main-box">
            <h2>Admin Login</h2>
            <form class="row g-3">
                <div class="col-md-12">
                    <label class="form-label">User Name</label>
                    <input type="text" class="form-control mb-3"/>
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control mb-3" />
                </div>
  
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-ipo">Sign in</button>
                </div>
            </form>

        </div>
    )
}
export default Login;
