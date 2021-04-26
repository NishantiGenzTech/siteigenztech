import { useState, useEffect } from "react";
import axios from "axios";
// import { app } from "./base";

const useForm = (callback, validate) => {
	const url = "http://localhost:3002/api/form";
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [attachment, setAttachment] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState(false);
	const [disable, setDisable] = useState(true);
	const [msg, setMsg] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	function handleAttachment(event) {
		//values.append("file", this.uploadInput.files[0]);
		setAttachment(event.target.files[0]);
		console.log(attachment);
		// const storageRef = app.storage().ref();
		// const fileRef = storageRef.child(e.target.files[0].name);
		// fileRef.put(e.target.files[0]).then(() => {
		// 	console.log("Uploaded a file");
		// });
	}

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
		console.log("con 1");
		event.preventDefault();
		const formData = new FormData();
		for (let name in values) {
			formData.append(name, values[name]);
		}
		if (attachment) {
			formData.append("attachment", attachment);
		}
		console.log("con 2");
		console.log(values);
		// formData.append("attachment", attachment);
		console.log(formData);
		console.log("con 3");
		axios
			.post(url, formData)
			.then((res) => {
				console.log(res.data);
				//  setData(
				//    {
				// 	   send: true,
				//    },
				//    resetForm()
				//  );
			})
			.catch((error) => {
				console.log(error);
			});
		setStatus(true);

		setValues({});
		setAttachment(null);
		// setDisable(true);
		console.log("con 4");
	};

	const handleChange = (event) => {
		event.persist();
		setErrors(validate(values));
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
		if (values.messages) {
			setMsg(true);
		}
		console.log("in handlechange");
	};

	return {
		handleChange,
		handleSubmit,
		handleAttachment,
		disable,
		setStatus,
		setDisable,
		values,
		errors,
		status,
		attachment,
		msg,
	};
};

export default useForm;
