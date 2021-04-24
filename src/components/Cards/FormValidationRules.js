export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.username) {
      errors.username = 'UserName is required';
    } else if (values.username.length < 8) {
      errors.username = 'username must be 5 or more characters';
    }
    if (values.attachment != ".pdf" || values.attachment !=".doc"  || values.attachment !=".docx") {
        
        errors.attachment = 'File does not support. You must use .pdf or .doc or docx';
        
     }
     
    return errors;
  };