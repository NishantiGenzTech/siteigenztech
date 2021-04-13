import React, { Component } from 'react'
import './cardcareer.css'
import ContactForm from './ContactForm'
import emailjs from 'emailjs-com';

export default class CardCareer extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  modal: false,
		  name: "",
		  email:"",
		  number:"",
		  modalInputName: "",
		  modalInputEmail: "",
		  modalInputNumber: ""
		};
	  }
	   sendEmail=(e) =>{
		e.preventDefault();
	
		emailjs.sendForm('service_k66nlin', 'template_waqpg06', e.target, 'user_AxPlzgIo4G8UqVAGZredu')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  this.modalClose();
	  }
	//   handleChange(e) {
	// 	const targetname = e.target.name;
	// 	const targetemail = e.target.email;
	// 	const targetnumber = e.target.number;
	// 	const name = targetname.name;
	// 	const email = targetemail.email;
	// 	const number = targetnumber.number;
	// 	// const value = target.value;
	// 	const valuename = targetname.name;
	// 	const valueemail = targetemail.email;
	// 	const valuenumber = targetnumber.number;
	
	// 	this.setState({
	// 	  [name]: valuename,
	// 	  [email]: valueemail,
	// 	  [number]: valuenumber
	// 	});
	//   }
	
	//   handleSubmit(e) {
	// 	this.setState({ name: this.state.modalInputName });
	// 	this.setState({ email: this.state.modalInputEmail });
	// 	this.setState({ number: this.state.modalInputNumber });
	// 	this.modalClose();
	//   }
	
	  modalOpen() {
		this.setState({ modal: true });
	  }
	
	  modalClose() {
		this.setState({
		  modalInputName: "",
		  modalInputEmail: "",
		  modalInputNumber: "",
		  modal: false
		});
	  }
    render() {
        return (
        <>
	
        <div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i class="fab fa-python"></i>
					<h2>Python Developer</h2>
					
				
					<button className="btn"
					 onClick={e => this.modalOpen(e)}
					> Apply</button>
				</div>
				<div className="course-info">
					<h6>Fresher preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>
		<div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i className="fab fa-react"></i>
					<h2>React Developer</h2>
					
				
					<button className="btn" 
					onClick={e => this.modalOpen(e)}
					> Apply</button>
					
				</div>
				<div className="course-info">
					<h6>Asp.net preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>
		<div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i class="fab fa-java"></i>
					<h2>java Developer</h2>
					
				
					<button className="btn" onClick={e => this.modalOpen(e)}> Apply</button>
				</div>
				<div className="course-info">
					<h6>Fresher preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>	
		<ContactForm show={this.state.modal} handleClose={e => this.modalClose(e)}>
		<h2>Apply Now</h2>
		
		<div class="row">
         <div class="col-md-10 mx-auto">
            <div class="myform form ">
               <form action="" method="post" onSubmit={this.sendEmail} name="login">
                  <div class="form-group">
				 
                     <input type="text"
					
					 
					 name="name" 
					 class="form-control my-input"
					 placeholder="Name" />
                  </div>
                  <div class="form-group">
                     <input 
					 type="text"
					 name="email"  
					 class="form-control my-input"
					 
				  
					placeholder="Email" />
                  </div>
                  <div class="form-group">
                     <input type="number"
					  min="0" name="number" 
					  
				  	
					  class="form-control my-input"
					   placeholder="Phone" />
                  </div>
                  <button onClick={e => this.sendEmail(e)} type="button">
			send
		  </button>
                  
                  
                
               </form>
            </div>
         </div>
      </div>
		
		</ContactForm>
			
			</>
        
        )
    }
	openModal() {
        this.setState({ isModalOpen: true })
		console.log("1")
      }
  
      closeModal() {
        this.setState({ isModalOpen: false })
		console.log("2")
      }
}
