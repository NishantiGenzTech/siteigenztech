import React, { Component } from "react";
import "./cardcareer.css";
import ContactForm from "./ContactForm";
import emailjs from "emailjs-com";

export default class CardCareer extends Component {
	constructor(props) {
		super(props);
		// console.log(text);
		this.state = {
			text: "Hello",
			python: "Python Developer",
			java: "Java Developer",
			react: "React Developer",
			text1: "j ",
			modal: false,
			name: "",
			email: "",
			number: "",
			modalInputName: "",
			modalInputEmail: "",
			modalInputNumber: "",
		};
	}

	sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_k66nlin",
				"template_waqpg06",
				e.target,
				"user_AxPlzgIo4G8UqVAGZredu"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		this.modalClose();
	};

	modalOpen() {
		this.setState({ modal: true, text: "Python Developer" });
	}

	modalOpen1() {
		this.setState({ modal: true, text: "React Developer" });
	}

	modalOpen2() {
		this.setState({ modal: true, text: "Java Developer" });
	}

	// setText() {
	// 	this.setState({ text });
	// }

	// changeText() {
	// 	console.log("Hello From ChangeText");
	// 	this.setState({});
	// }

	modalClose() {
		this.setState({
			modalInputName: "",
			modalInputEmail: "",
			modalInputNumber: "",
			modal: false,
		});
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
								// text={PythonDeveloper}
								// onClick={(e) => this.changeText(e)}
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
				<ContactForm
					show={this.state.modal}
					handleClose={(e) => this.modalClose(e)}
				>
					<h2>{`You Are Applying For The Post OF` + "  " + this.state.text}</h2>

					<div class="row">
						<div class="col-md-10 mx-auto">
							<div class="myform form ">
								<form
									action=""
									method="post"
									onSubmit={this.sendEmail}
									name="login"
								>
									<div class="form-group">
										<input
											type="text"
											name="name"
											class="form-control my-input"
											placeholder="Name"
										/>
									</div>
									<div class="form-group">
										<input
											type="text"
											name="email"
											class="form-control my-input"
											placeholder="Email"
										/>
									</div>
									<div class="form-group">
										<input
											type="number"
											min="0"
											name="number"
											class="form-control my-input"
											placeholder="Phone"
										/>
									</div>
									<button onClick={(e) => this.sendEmail(e)} type="button">
										send
									</button>
								</form>
							</div>
						</div>
					</div>
				</ContactForm>
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
