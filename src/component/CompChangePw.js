import React from 'react'

function CompChangePw(props) {
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">Change Password</span>
                </h4>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills flex-column flex-md-row mb-3">
                            <li className="nav-item">
                                <a className="nav-link" href="Account_setting.html"><i className="bx bx-user me-1" /> Account Setting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="javascript:void(0);"><i className="bx bxs-key me-1" /> Change Password</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Delete_Account.html"><i className="bx bx-trash-alt me-1" /> Delete Account</a>
                            </li>
                        </ul>
                        <div className="col-md-6 col-12">
                            <div className="card">
                                <form id="formAccountSettings" method="POST" onsubmit="return false">
                                    <h5 className="card-header">Chnage Password</h5>
                                    <div className="card-body">
                                        <div className="mb-3 col-md-6 mt-0">
                                            <label htmlFor="oldpassword" className="form-label">Old Password</label>
                                            <input type="password" className="form-control" id="oldPassword" name="oldPassword" maxLength={6} />
                                        </div>
                                        <div className="mb-3 col-md-6 mt-0">
                                            <label htmlFor="newpassword" className="form-label">New Password</label>
                                            <input type="password" className="form-control" id="newPassword" name="newPassword" maxLength={6} />
                                        </div>
                                        <div className="mb-3 col-md-6 mt-0">
                                            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" maxLength={6} />
                                        </div>
                                        <button type="submit" className="btn btn-danger change-password">Change Password</button>
                                    </div>
                                </form></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompChangePw