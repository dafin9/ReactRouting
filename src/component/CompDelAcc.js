import React from 'react'

function CompDelAcc() {
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">Delete Account</span>
                </h4>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills flex-column flex-md-row mb-3">
                            <li className="nav-item">
                                <a className="nav-link" href="Account_setting.html">
                                    <i className="bx bx-user me-1" /> Account Setting
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="change_password.html">
                                    <i className="bx bxs-key me-1" /> Change Password
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="javascript:void(0);">
                                    <i className="bx bx-trash-alt me-1" /> Delete Account
                                </a>
                            </li>
                        </ul>
                        <div className="col-md-6 col-12">
                            <div className="card">
                                <h5 className="card-header">Delete Account</h5>
                                <div className="card-body">
                                    <div className="mb-3 col-12 mb-0">
                                        <div className="alert alert-warning">
                                            <h6 className="alert-heading fw-bold mb-1">
                                                Are you sure you want to delete your account?
                                            </h6>
                                            <p className="mb-0">
                                                Once you delete your account, there is no going back.
                                                Please be certain.
                                            </p>
                                        </div>
                                    </div>
                                    <form id="formAccountDeactivation" onsubmit="return false">
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="accountActivation"
                                                id="accountActivation"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="accountActivation"
                                            >
                                                I confirm my account deactivation
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-danger deactivate-account"
                                        >
                                            Deactivate Account
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* / Content */}
                        {/* Footer */}
                        {/* / Footer */}
                        <div className="content-backdrop fade" />
                    </div>
                    {/* Content wrapper */}
                </div>
                {/* / Layout page */}
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default CompDelAcc