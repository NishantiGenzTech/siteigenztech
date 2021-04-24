import React, { useState,useEffect } from "react";
import "./cfile.css";
import axios from "axios";
import FlashMessage from "react-flash-message";

import useForm from "./useForm";
import validate from './FormValidationRules';

export default function CForm({ handleClose, show, children, position, text }) {
	const url = "http://localhost:3002/api/form";

	// const [errors,setErrors]=useState({});
	const [dataCorrect, setDataCorrect]=useState(false);
	const [attachment, setAttachment] = useState(null);
	// const [values, setValues] = useState({
	// 	username: "",
	// 	email: "",
	// 	phone: "",
	// 	messages: "",
	// 	attachment:null

		
	// });
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	  } = useForm(submit, validate);
	  function submit() {
		console.log('No errors, submit callback called!');
	  }
	// const handleSubmit=(e)=>{
	// 	e.preventDefault();
	// 	setErrors(Validation(values));
	// 	setDataCorrect(true);
	// }
	// const handelChange=(e)=>{
	// 	setValues({
	// 		...values,
	// 		[e.target.name]:e.target.value,
	// 	})

	// }
	useEffect(()=>{
		// if (Object.keys(errors).length===0 && dataCorrect){
		// 	submitForm(true)
		// }
	},[errors])
	// const formDefaultValue={
	// 	username: "",
	// 	email: "",
	// 	phone: "",
	// 	messages: "",
	// 	// attachment:null
	// }
	// const formDefaultErrors={
	// 	email:[],
	// 	username:[],
	// 	phone:[],
	// 	messages:[],
	// }
	// const [formErrors,setFromErrors]=useState()
	
	// const {formValue, setFormValue}=useState (formDefaultValue)
	// const {username,email,phone,messages }=formValue
	// useEffect(()=>{
	// 	console.dir(formValue)
	// },[formValue])

	// useEffect(()=>{
	// 	console.dir("conponentDidMount")
	// },[])
	// function noBlanks(value){
	// 	return{
	// 		valid:value.replace(/\$+/, "").length>0,
	// 		messages:"cannot be blank"
	// 	}
	// }
	// function handelChange(e, validators){
	// 	const target=e.target
	// 	setFormValue(prevState=>({
	// 		...prevState,
	// 		[target.name]:target.value
	// 	}))
	// 	handelValidations(target,validators)
	// }
	// function handelValidations(target ,validators){
	// 	validators.forEach(validation=>{
	// 		const result=validation(target.value)
	// 		const errors=formErrors[target.name]
	// 		if (result.valid){
	// 			if(errors.includes(result.message)){
	// 				setFromErrors(prevState=>({
	// 					...prevState,
	// 					[target.name]:errors.filter(error=>error !==result.message)
	// 				}))
	// 			}
	// 		}else{
	// 			if(!errors.includes(result.message)){
	// 				setFromErrors(prevState=>({
	// 					...prevState,
	// 					[target.name]:[...errors,result.message]
	// 				}))
	// 			}
	// 		}
	// 	})
	// }
	const [status, setStatus] = useState(false);
	// const [isSubmitting, setIsSubmitting] = useState(false);
	// const {inputs, handleInputChange ,errors} = useForm({email:'',password:''},validate);
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

	// if (data.username) {
	// 	console.log(data.username.length);
	// } else {
	// 	console.log(data.username);
	// }

	// console.log(isSubmitting);
	// useEffect(() => {
	// 	console.log(attachment);
	// });
	// function handle(e) {
	// 	const newdata = { ...data };
	// 	newdata[e.target.id] = e.target.value;
	// 	setData(newdata);
	// 	// console.log(newdata.username);
	// }
	
	// function handleAttachment(e) {
	// 	setAttachment(e.target.files[0]);
	// 	// console.log(attachment);
	// }

	

	//  function handleSubmit(e) {
	// 	// if (!canBeSubmitted()) {
	// 		e.preventDefault();
		// 	return;
		// }
		// setIsSubmitting(true);

		// const formData = new FormData();
		// for (let name in formValue) {
		// 	formData.append(name, formValue[name]);
		// }
		// console.log(data);
		// formData.append("attachment", attachment);
		// console.log(formData);

	// 	 axios
	// 		.post(url)

	// 		.then((res) => {
	// 			console.log(res.data);
	// 			// setData({
	// 			// 	send: true,
	// 			// });
	// 			console.log("Should go ");
	// 			// resetForm();
	// 		})

	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// 	setStatus(true);
	// }

	

	// function resetForm() {
	// 	setData({
	// 		username: "",
	// 		email: "",
	// 		phone: "",
	// 		message: "",
	// 	});
	// 	console.log("Hello from rest");
	// 	setIsSubmitting(false);
	// 	// setAttachment(null);
	// 	setTimeout(() => {
	// 		handleClose();
	// 		// setData({
	// 		// 	send: false,
	// 		// });
	// 	}, 4000);
	// }

	

	// const shouldMarkError = (field) => {
	// 	const errors = validate(data.email, data.username, data.password);
	// 	const isDisabled = Object.keys(errors).some((x) => errors[x]);
	// 	const hasError = errors[field];
	// 	const shouldShow = data.touched[field];

	// 	return hasError ? shouldShow : false;
	// };
	// function rendermsg() {
	// 	console.log("Helloste");
	// 	// return alert("Hello");
	// }
	
	function handleUpload(event) {
		setAttachment(event.target.files[0]);
	
		// Add code here to upload file to server
		// ...
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
					onSubmit={handleSubmit}
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
						className={"wrap-input100 validate-input m-b-26"}
					>
						<span className="label-input100">
							Full Name<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							name={"username"}
							// id="username"
							value={values.username || ""}
							onChange={handleChange}
							placeholder="Enter Username"
						/>
					</div>
					{errors.username && <p className="error">{errors.username}</p>}

					<div
						className={"wrap-input100 validate-input m-b-26"
						}
					>
						<span className="label-input100">
							Email<span className="red"> *</span>
						</span>
						<input
							className="input100"
							type="text"
							id="email"
							name={"email"}
							
							value={values.email  || ""}
							onChange={handleChange}
							placeholder="Enter Email"
							
						/>
					
					</div>
					{errors.email && <p className="error">{errors.email}</p>}
					<div className="wrap-input100 validate-input m-b-26">
						<span className="label-input100">Phone</span>
						<input
							className="input100"
							type="text"
							value={values.phone  || ""}
							id="phone"
							onChange={handleChange}
							name={"phone"}
							
							placeholder="Enter Phone(Optional)"
						/>
						
					</div>{errors.phone && <p className="error">{errors.phone}</p>}
					{text ? (
						<div
							className={ "wrap-input100 validate-input m-b-26"
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
											name={""}
											value={values.attachment || ""}
											accept=".pdf,.doc,.docx"
											onChange={handleUpload}
											// onChange={(e) => handleAttachment(e)}
											data-error="#err-file-5"
											
										/>
									</div>
									<div className="file-path-wrapper">
										<input
											className="file-path garlic-auto-save"
											name={"attachment"}
											type="text"
											// id="resume"
											value={values.attachment}
											onChange={handleUpload}
											placeholder="Click Browse to upload files"
											data-error="#err-file-5"
											data-msg-required="Please upload a file"
										/>
									</div>
									
									
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
								name={"messages"}
							
								value={values.messages}
								onChange={handleChange}
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
