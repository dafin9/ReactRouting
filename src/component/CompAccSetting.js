import React from 'react'

function CompAccSetting() {
    return (<div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light" />
                Account Settings{" "}
            </h4>

            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="javascript:void(0);">
                                <i className="bx bx-user me-1"></i> Account Setting
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="change_password.html">
                                <i className="bx bxs-key me-1"></i>Change Password
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Delete_Account.html">
                                <i className="bx bx-trash-alt me-1"></i>Delete Account
                            </a>
                        </li>
                    </ul>
                    <div className="card mb-4">
                        <h5 className="card-header">Profile Details</h5>
                        <div className="card-body">
                            <div className="d-flex align-items-start align-items-sm-center gap-4">
                                <img
                                    src="../assets/img/avatars/1.png"
                                    alt="user-avatar"
                                    className="d-block rounded"
                                    height="100"
                                    width="100"
                                    id="uploadedAvatar"
                                />
                                <div className="button-wrapper">
                                    <label
                                        for="upload"
                                        className="btn btn-primary me-2 mb-4"
                                        tabindex="0"
                                    >
                                        <span className="d-none d-sm-block">
                                            Upload new photo
                                        </span>
                                        <i className="bx bx-upload d-block d-sm-none"></i>
                                        <input
                                            type="file"
                                            id="upload"
                                            className="account-file-input"
                                            hidden
                                            accept="image/png, image/jpeg"
                                        />
                                    </label>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary account-image-reset mb-4"
                                    >
                                        <i className="bx bx-reset d-block d-sm-none"></i>
                                        <span className="d-none d-sm-block">Reset</span>
                                    </button>

                                    <p className="text-muted mb-0">
                                        Allowed JPG, GIF or PNG. Max size of 800K
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="card-body">
                            <form
                                id="formAccountSettings"
                                method="POST"
                                onsubmit="return false"
                            >
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label for="firstName" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value="John Deo"
                                            autofocus
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="UserId" className="form-label">
                                            UserId
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="UserId"
                                            id="UserId"
                                            value="John_12"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="email"
                                            name="email"
                                            value="john.doe@example.com"
                                            placeholder="john.doe@example.com"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label className="form-label" for="phoneNumber">
                                            Phone Number
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <span className="input-group-text">IN (+91)</span>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="form-control"
                                                value="202 555 0111"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="address" className="form-label">
                                            AddressLine 1
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address1"
                                            name="address1"
                                            value="AddressLine1"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="address" className="form-label">
                                            AddressLine 2
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address2"
                                            name="address2"
                                            value="AddressLine2"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="City" className="form-label">
                                            City
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="city"
                                            name="city"
                                            value="Vadodara"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="PinCode" className="form-label">
                                            Pincode Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pincode"
                                            name="pincode"
                                            value="231465"
                                            maxlength="6"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label className="form-label" for="gender">
                                            Gender
                                        </label>
                                        <select id="gender" className="select2 form-select">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="blood" className="form-label">
                                            Blood
                                        </label>
                                        <select id="blood" className="select2 form-select">
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="AB+">AB+</option>
                                            <option value="O+">O+</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label for="dob" className="form-label">
                                            Date Of Blood
                                        </label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            id="dob"
                                            name="dob"
                                            value="20/04/1990"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <button type="submit" className="btn btn-primary me-2">
                                        Save changes
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-outline-secondary"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CompAccSetting