import React, { useState, useEffect } from "react";
import "./cfile.css";
import axios from "axios";

export default function CForm({ handleClose, show, children, position, text }) {
	const url = "http://localhost:3002/api/form";

	const [data, setData] = useState({
		username: "",
		email: "",
		phone: "",
		message: "",
		send: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [attachment, setAttachment] = useState(null);

	//console.log(attachment);

	if (data.username) {
		console.log(data.username.length);
	} else {
		console.log(data.username);
	}

	// console.log(isSubmitting);
	useEffect(() => {
		console.log(attachment);
	});
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

	async function handleSubmit(e) {
		e.preventDefault();
		setIsSubmitting(true);
		// console.log(isSubmitting);
		// console.log("con 1");
		// console.log("con 2");
		// console.log(isSubmitting);

		const formData = new FormData();
		for (let name in data) {
			formData.append(name, data[name]);
		}
		// console.log(data);
		formData.append("attachment", attachment);
		// console.log(formData);

		axios
			.post(url, formData)

			.then((res) => {
				console.log(res.data);
				setData({
					send: true,
				});
				resetForm();
			})

			.catch((error) => {
				console.log(error);
			});
	}

	function resetForm() {
		setData({
			username: "",
			email: "",
			phone: "",
		});
		// console.log(isSubmitting);
		setIsSubmitting(false);
		setAttachment(null);
		setTimeout(() => {
			setData({
				send: false,
			});
		}, 2000);
	}

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
					{isSubmitting && !data.email.length ? (
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
								isSubmitting && !data.email.length
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
								name="message"
								id="message"
								value={data.message}
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
