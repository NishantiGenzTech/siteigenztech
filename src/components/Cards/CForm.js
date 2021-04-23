import React, { useState, useEffect } from "react";
import "./cfile.css";
import axios from "axios";
import FlashMessage from "react-flash-message";

export default function CForm({ handleClose, show, children, position, text }) {
	const url = "http://localhost:3002/api/form";
	const [attachment, setAttachment] = useState(null);
	const [data, setData] = useState({
		username: "",
		email: "",
		phone: "",
		message: "",

		touched: {
			email: false,
			username: false,
			attachment: false,
		},
	});
	const [status, setStatus] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// const [resetData, setresetData] = useState({
	// 	username,
	// 	email,
	// 	phone,
	// 	message,
	// 	send,
	// 	isSubmitting,
	// 	attachment,
	// });

	//console.log(attachment);

	if (data.username) {
		console.log(data.username.length);
	} else {
		console.log(data.username);
	}

	// console.log(isSubmitting);
	// useEffect(() => {
	// 	console.log(attachment);
	// });
	function handle(e) {
		const newdata = { ...data };
		newdata[e.target.id] = e.target.value;
		setData(newdata);
		// console.log(newdata.username);
	}

	function handleAttachment(e) {
		setAttachment(e.target.files[0]);
		// console.log(attachment);
	}

	function handleBlur(field) {
		setData({
			touched: { ...data.touched, [field]: true },
		});
	}

	async function handleSubmit(e) {
		if (!this.canBeSubmitted()) {
			e.preventDefault();
			return;
		}
		setIsSubmitting(true);

		const formData = new FormData();
		for (let name in data) {
			formData.append(name, data[name]);
		}
		// console.log(data);
		formData.append("attachment", attachment);
		// console.log(formData);

		await axios
			.post(url, formData)

			.then((res) => {
				console.log(res.data);
				// setData({
				// 	send: true,
				// });
				console.log("Should go ");
				resetForm();
			})

			.catch((error) => {
				console.log(error);
			});
		setStatus(true);
	}

	function canBeSubmitted() {
		const errors = validate(this.email, this.username, attachment);
		const isDisabled = Object.keys(errors).some((x) => errors[x]);
		return !isDisabled;
	}

	function resetForm() {
		setData({
			username: "",
			email: "",
			phone: "",
			message: "",
		});
		console.log("Hello from rest");
		setIsSubmitting(false);
		// setAttachment(null);
		setTimeout(() => {
			handleClose();
			// setData({
			// 	send: false,
			// });
		}, 4000);
	}

	function validate(email, username, attachment) {
		// true means invalid, so our conditions got reversed
		return {
			email: email.length === 0, //true if email is empty
			username: username.length === 0, //true if username is empty
			attachment: attachment === null, //true if password is empty
		};
	}

	const shouldMarkError = (field) => {
		const hasError = errors[field];
		const shouldShow = data.touched[field];

		return hasError ? shouldShow : false;
	};
	// function rendermsg() {
	// 	console.log("Helloste");
	// 	// return alert("Hello");
	// }
	const showHideClassName = show ? "modal d-block" : "modal d-none";
	// console.log(text);
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
							className="modal-close"
							style={{ float: "right" }}
							onClick={handleClose}
						>
							<i className="fas fa-times"></i>
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
							className="modal-close"
							style={{ float: "right" }}
							onClick={handleClose}
						>
							<i className="fas fa-times"></i>
						</a>
					</div>
				)}

				<form
					className="login100-form validate-form"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div>
						{status && (
							<FlashMessage duration={3000}>
								<strong className="alert-success">
									Thanku for applying for {text} Position We Will You Shortly
								</strong>
							</FlashMessage>
						)}
					</div>
					<div
						className={
							isSubmitting && !data.username.length
								? "error validate-input m-b-26"
								: "wrap-input100 validate-input m-b-26"
						}
					>
						<span className="label-input100">
							Full Name<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							name="username"
							value={data.username ? data.username : ""}
							onChange={(e) => handle(e)}
							id="username"
							placeholder="Enter Username"
						/>
						<span className="focus-input100"></span>
					</div>
					{isSubmitting && !data.username.length ? (
						<div className="errorMsg">*Enter Username</div>
					) : (
						""
					)}

					<div
						className={
							isSubmitting && !data.email.length
								? "error validate-input m-b-26"
								: "wrap-input100 validate-input m-b-26"
						}
					>
						<span className="label-input100">
							Email<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							name="email"
							id="email"
							value={data.email || ""}
							onChange={(e) => handle(e)}
							placeholder="Enter Email"
						/>
						<span className="focus-input100"></span>
					</div>
					{isSubmitting && !data.email.length ? (
						<div className="errorMsg">*Enter Email</div>
					) : (
						""
					)}
					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">Phone</span>
						<input
							className="input100"
							type="text"
							value={data.phone || ""}
							onChange={(e) => handle(e)}
							name="phone"
							id="phone"
							placeholder="Enter Phone(Optional)"
						/>
						<span className="focus-input100"></span>
					</div>
					{text ? (
						<div
							className={
								isSubmitting && !attachment
									? "error validate-input m-b-26"
									: "wrap-input100 validate-input m-b-26"
							}
						>
							<span className="label-input100">
								Resume <span className="red"> *</span>
							</span>
							<div className="input-field">
								<div className="file-field input-field">
									<div className="btn file-upload-btn">
										<span>Browse</span>
										<input
											type="file"
											name="attachment"
											id="ctrlq-file-5-temp"
											accept=".pdf,.doc,.docx"
											// id="resume"
											// required
											onChange={(e) => handleAttachment(e)}
											data-error="#err-file-5"
										/>
									</div>
									<div className="file-path-wrapper">
										<input
											className="file-path garlic-auto-save"
											name="attachment"
											type="text"
											// id="resume"
											onChange={(e) => handleAttachment(e)}
											placeholder="Click Browse to upload files"
											data-error="#err-file-5"
											data-msg-required="Please upload a file"
										/>
									</div>
									<div id="err-file-5"></div>
								</div>
							</div>
							<span className="focus-input100"></span>
						</div>
					) : (
						<div className="wrap-input100 validate-input m-b-26">
							<span className="label-input100">Message</span>
							<textarea
								className="input100 msgborder"
								type="text"
								name="messages"
								id="messages"
								value={data.messages}
								onChange={(e) => handle(e)}
								placeholder="Enter Message"
							/>
							<span className="focus-input100"></span>
						</div>
					)}
					{isSubmitting && !data.email.length ? (
						<div className="errorMsg">*Upload Resume</div>
					) : (
						""
					)}

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							{text ? "APPLY" : "SUBMIT"}
							&nbsp;&nbsp;
							<i className="fas fa-angle-double-right"></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
