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

	const [attachment, setAttachment] = useState(null);
	console.log(attachment);

	function handle(e) {
		const newdata = { ...data };
		newdata[e.target.id] = e.target.value;
		setData(newdata);
		console.log(newdata);
	}

	function handleAttachment(e) {
		setAttachment(e.target.files[0]);
		console.log(attachment);
	}

	function handleSubmit(e) {
		console.log("con 1");
		e.preventDefault();
		console.log("con 2");

		const formData = new FormData();
		for (let name in data) {
			formData.append(name, data[name]);
		}
		console.log(data);
		formData.append("attachment", attachment);
		console.log(formData);
		axios
			.post(url, formData)
			.then((res) => {
				console.log(res.data);
				setData(
					{
						send: true,
					},
					resetForm()
				);
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
			// message: "",
			// send: false,
		});
		setAttachment({
			attachment: null,
		});
		setTimeout(() => {
			setData({
				send: false,
			});
		}, 4000);
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
							href="javascript:;"
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
					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">
							Full Name<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							name="username"
							value={data.username}
							onChange={(e) => handle(e)}
							id="username"
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
							name="email"
							id="email"
							value={data.email}
							onChange={(e) => handle(e)}
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
							value={data.phone}
							onChange={(e) => handle(e)}
							name="phone"
							id="phone"
							placeholder="Enter Phone"
						/>
						<span className="focus-input100"></span>
					</div>
					{text ? (
						<div className="wrap-input100 validate-input m-b-26">
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
											// onChange={(e) => handleAttachment(e)}
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
