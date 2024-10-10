import React from 'react';

const ForgotPassword = () => {
  return (
    <div>
        <div className="container rounded-3 pt-5">
      <div className="row justify-content-center mx-5 mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Forgot Password</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="email">we will send an email to reset your password</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <button type="submit" className="btn btn-danger btn-block rounded-pill">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
