import React from "react";
import "./Modal.css";
import emailjs from "emailjs-com";

export const Modal = ({ show, close }) => {
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
	return (
		<>
			{show ? (
				<div className="modelbg">
					<div className="modal d-block">
						<div
							className="modal-container"
							style={{
								transform: show ? "translateY(0vh)" : "translateY(-100vh)",
								opacity: show ? "1" : "0",
							}}
						>
							<div className="modal-header">
								<p style={{ "font-size": "27px", color: "white" ,textAlign:"center"}}>
									Contact Us
								</p>
								<span onClick={close} className="close-modal-btn">
									x
								</span>
							</div>
							<div className="modal-content">
								<div className="modal-body">
									<form action="#" onSubmit={sendEmail}>
										<label for="firstname">
										
											<input
												name="name"
												className="form-fields"
												placeholder="Full Name..."
												type="text"
											/>
										</label>
										<label for="email">
										
											<input
												name="email"
												className="form-fields"
												placeholder="Email..."
												type="text"
											/>
										</label>
										<label for="contact">
										
											<input
												name="contact"
												className="form-fields"
												placeholder="Contact..."
												type="text"
											/>
										</label>

										<button
											className="form-fields button"
											type="submit"
											value="Send"
										>
											Submit
											<i className="fa fa-paper-plane"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}{" "}
		</>
	);
};
