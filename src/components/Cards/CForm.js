import React from 'react'
import './cfile.css'

export default function CForm({ handleClose, show, children }) {
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    return (
        <div className={showHideClassName}>
        <div className="wrap-login100">
				<div className="login100-form-title" style={{"background-image": "url(images/bg-01.jpg);"}}>
					<span className="login100-form-title-1">
						Contact Us
					</span>
                    <a
					href="javascript:;"
					className="modal-close"
					style={{ float: "right" }}
					onClick={handleClose}
				>
					<i class="fas fa-times"></i>
				</a>
				</div>

				<form className="login100-form validate-form">
					<div className="wrap-input100 validate-input m-b-26" >
						<span className="label-input100">Full Name</span>
						<input className="input100" type="text" name="username" placeholder="Enter username" />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-26" >
						<span className="label-input100">Email</span>
						<input className="input100" type="text" name="Email" placeholder="Enter Email" />
						<span className="focus-input100"></span>
					</div>
                    <div className="wrap-input100 validate-input m-b-26" >
						<span className="label-input100">Phone</span>
						<input className="input100" type="text" name="Phone" placeholder="Enter Phone" />
						<span className="focus-input100"></span>
					</div>
                    <div className="wrap-input100 validate-input m-b-26" >
						<span className="label-input100">Message</span>
						<textarea className="input100 msgborder" type="text" name="Message" placeholder="Enter Message" />
						<span className="focus-input100"></span>
					</div>

					

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Apply<i class="fas fa-angle-double-right"></i>
						</button>
					</div>
				</form>
			</div>
            </div>
    )
}
