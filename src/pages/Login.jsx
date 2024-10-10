import React, { useState } from 'react'
import "./css/Login.css"

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
       <div className="container">
      <div className="row justify-content-center m-5">
        <div className="col-md-6">
          <div className="card bg-background">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input type={passwordVisible ? 'text' : 'password'} className="form-control" id="password" placeholder="Enter your password" required />
                    <div className="input-group-append d-flex">
                      <span className="input-group-text" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='d-inline'>
                <button type="submit" className="btn btn-danger btn-block rounded-pill me-4 fw-bold">Login</button>
                <button type="submit" className="btn btn-danger btn-block rounded-pill fw-bold">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
