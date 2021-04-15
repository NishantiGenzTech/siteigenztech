import React, { Component } from "react";
import "./cardcareer.css";
import ContactForm from "./ContactForm";
import emailjs from "emailjs-com";
import CForm from "./CForm";

export default class CardCareer extends Component {
	constructor(props) {
		super(props);
		// console.log(text);
		this.state = {
			text: "Hello",
			python: "Python Developer",
			java: "Java Developer",
			react: "React Developer",
			modal: false,
		};
	}
	modalClose() {
		this.setState({
			modal: false,
		});
	}
	
 thanku() {
    alert("Thanku for submitting ");
  }
 resetForm() {
    this.setState({
      name: '',
      email: '',
      contact: '',
	  modal: false,
    })
  }
  
	modalOpen() {
		this.setState({ modal: true, text: "Python Developer" });
	}

	modalOpen1() {
		this.setState({ modal: true, text: "React Developer" });
	}

	modalOpen2() {
		this.setState({ modal: true, text: "Java Developer" });
	}

	render() {
		// var text1 = "";
		return (
			<>
				<div className="courses-container">
					<div className="course">
						<div className="course-preview">
							<i class="fab fa-python"></i>
							<h2>Python Developer</h2>

							<button
								className="btn"
								onClick={(e) => this.modalOpen(e)}
								
							>
								{" "}
								Apply
							</button>
						</div>
						<div className="course-info">
							<h6>Fresher preferred!</h6>
							<h4>
								Great opportunity for freshers (2020 passed) willing to adapt
								the learn python quickly
							</h4>
							<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
							<h4>
								* Please apply. if you are a graduate in any other discipline
								and have good pregramming skills.
							</h4>
						</div>
					</div>
				</div>
				<div className="courses-container">
					<div className="course">
						<div className="course-preview">
							<i className="fab fa-react"></i>
							<h2>React Developer</h2>

							<button
								className="btn"
								// text={ReactDeveloper}
								onClick={(e) => this.modalOpen1(e)}
							>
								{" "}
								Apply
							</button>
						</div>
						<div className="course-info">
							<h6>Asp.net preferred!</h6>
							<h4>
								Great opportunity for freshers (2020 passed) willing to adapt
								the learn python quickly
							</h4>
							<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
							<h4>
								* Please apply. if you are a graduate in any other discipline
								and have good pregramming skills.
							</h4>
						</div>
					</div>
				</div>
				<div className="courses-container">
					<div className="course">
						<div className="course-preview">
							<i class="fab fa-java"></i>
							<h2>java Developer</h2>

							<button
								className="btn"
								// text={JavaDeveloper}
								onClick={(e) => this.modalOpen2(e)}
							>
								{" "}
								Apply
							</button>
						</div>
						<div className="course-info">
							<h6>Fresher preferred!</h6>
							<h4>
								Great opportunity for freshers (2020 passed) willing to adapt
								the learn python quickly
							</h4>
							<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
							<h4>
								* Please apply. if you are a graduate in any other discipline
								and have good pregramming skills.
							</h4>
						</div>
					</div>
				</div>
				<CForm
					show={this.state.modal}
					handleClose={(e) => this.modalClose(e)}
					position={`You Are Applying For The Post OF` + "  " + this.state.text}
				>
					

					
				</CForm>
			</>
		);
	}
	openModal() {
		this.setState({ isModalOpen: true });
		console.log("1");
	}

	closeModal() {
		this.setState({ isModalOpen: false });
		console.log("2");
	}
}
