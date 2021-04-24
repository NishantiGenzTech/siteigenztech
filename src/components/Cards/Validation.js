function Validation(values) {
    let errors={}
    if(!values.username){
        errors.username="Name is required"
    }
    if(!values.phone){
        errors.phone="Phone Number is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\. \S+/.test(values.email)){
        errors.email="Invalid Email"
    }
    if(!values.attachment){
        errors.username="Name is required"
    }
    if(!values.username){
        errors.username="Name is required"
    }
    return errors;
}

export default Validation
