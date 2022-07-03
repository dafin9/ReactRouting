import React from 'react'

function forgotPw() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 form">
                    <form action="forgot-password.php" method="POST" autoComplete>
                        <h2 className="text-center">Forgot Password</h2>
                        <p className="text-center">Enter your email address</p>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Enter email address" required defaultValue="Enter Your Email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control button" type="submit" name="check-email" defaultValue="Continue" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default forgotPw