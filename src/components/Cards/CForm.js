import React from "react";
import "./cfile.css";
import emailjs from "emailjs-com";

export default function CForm({ handleClose, show, children, position, text }) {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_k66nlin",
				"template_waqpg06",
				e.target,
				"user_AxPlzgIo4G8UqVAGZredu"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}
	const showHideClassName = show ? "modal d-block" : "modal d-none";
	console.log(text);
	return (
		<div className={showHideClassName}>
			<div className="wrap-login100">
				{text ? (
					<div
						className="login100-form-title"
						style={{
							backgroundImage: `url(${require("../../images/pexels-jéshoots-4831.jpg")})`,
						}}
					>
						<span className="login100-form-title-1">
							{`Applying For ` + text}
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
				) : (
					<div
						className="login100-form-title"
						style={{
							backgroundImage: `url(${require("../../images/pexels-andrea-piacquadio-789822.jpg")})`,
						}}
					>
						<span className="login100-form-title-1">Contact Us</span>
						<a
							href="javascript:;"
							className="modal-close"
							style={{ float: "right" }}
							onClick={handleClose}
						>
							<i class="fas fa-times"></i>
						</a>
					</div>
				)}

				<form className="login100-form validate-form" onSubmit={sendEmail}>
					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">
							Full Name<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							name="username"
							placeholder="Enter username"
							required
						/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">
							Email<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							name="Email"
							placeholder="Enter Email"
							required
						/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">Phone</span>
						<input
							className="input100"
							type="text"
							name="Phone"
							placeholder="Enter Phone"
						/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">Message</span>
						<textarea
							className="input100 msgborder"
							type="text"
							name="Message"
							placeholder="Enter Message"
						/>
						<span className="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							{text ? "APPLY" : "SUBMIT"}
							&nbsp;&nbsp;
							<i class="fas fa-angle-double-right"></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
