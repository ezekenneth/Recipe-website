import React from 'react';

const ResetPassword = () => {
  return (
    <div className="container p-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Reset your Password</h5>
              <form>
                <div className="form-group fw-bold">
                  <label htmlFor="newPassword">New Password</label>
                  <input type="password" className="form-control" id="newPassword" placeholder="Enter your new password" required />
                </div>
                <div className="form-group fw-bold">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your new password" required />
                </div>
                <button type="submit" className="btn btn-danger btn-block rounded-pill">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
