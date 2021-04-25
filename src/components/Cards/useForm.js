import { useState, useEffect } from 'react';
import axios from "axios";

const useForm = (callback, validate) => {
  const url = "http://localhost:3002/api/form";
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [attachment, setAttachment] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  function handleAttachment(event) {
    values.append('file', this.uploadInput.files[0]);
		setAttachment(event.target.files[0]);
		console.log(attachment);
	}
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log("con 1")
		event.preventDefault();
		const formData = new FormData();
		for (let name in values) {
			formData.append(name, values[name]);
		}
    console.log("con 2")
		console.log(values);
		// formData.append("attachment", attachment);
		console.log(formData);
    console.log("con 3")
	   axios.post(url, formData)
	   .then((res) => {
		   console.log(res.values);
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
     console.log("con 4")
  };

  const handleChange = (event) => {
    event.persist();
    setErrors(validate(values));
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    console.log("in handlechange")
  };

  return {
    handleChange,
    handleSubmit,
    handleAttachment,
    values,
    errors,
  }
};

export default useForm;