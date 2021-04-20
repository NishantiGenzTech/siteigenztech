import React from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal d-block" : "modal d-none";
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
			
			handleClose();
	}
	return (
		<div className={showHideClassName}>
			<div className="modal-container">
				<a
					href="javascript:;"
					className="modal-close"
					style={{ float: "right" }}
					onClick={handleClose}
				>
					<i class="fas fa-times"></i>
				</a>
				{children}
				<div className="row">
					<div className="col-md-10 mx-auto">
						<div className="myform form ">
							<form action="" method="post" onSubmit={sendEmail} name="login">
								<div className="form-group">
									<input
										type="text"
										name="name"
										className="form-control my-input"
										placeholder="Name"
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="email"
										className="form-control my-input"
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="contact"
										className="form-control my-input"
										placeholder="Phone"
									/>
								</div>
								<button type="submit">
									Submit<i className="fa fa-paper-plane"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactForm;
