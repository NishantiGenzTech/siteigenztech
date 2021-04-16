import React, { Component } from "react";
import "./cardcareer.css";
import ContactForm from "./ContactForm";
import emailjs from "emailjs-com";
import CForm from "./CForm";
import data from "../../data/data.json";

export default class CardCareer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			text: "",
		};
	}

	modalClose() {
		this.setState({
			modal: false,
		});
	}
	modalOpen() {
		this.setState({ modal: true });
	}

	thanku() {
		alert("Thanku for submitting ");
	}
	resetForm() {
		this.setState({
			name: "",
			email: "",
			contact: "",
			modal: false,
		});
	}

	render() {
		return (
			<>
				{data.Careers.map((x) => (
					<div className="courses-container">
						<div className="course">
							<div className="course-preview">
								<i
									class={
										`fab fa-` +
										x.position.replace("Developer", "").toLowerCase()
									}
								></i>
								<h2>{x.position}</h2>
								<button
									className="btn"
									onClick={() =>
										this.setState({ modal: true, text: x.position })
									}
								>
									Apply
								</button>
							</div>
							<div className="course-info">
								<h6>{x.opening}</h6>
								<h4>{x.text}</h4>
								<h4>{x.Commontext}</h4>
								<h4>{x.Commontext1}</h4>
							</div>
						</div>
					</div>
				))}

				<CForm
					text={this.state.text}
					show={this.state.modal}
					handleClose={(e) => this.modalClose(e)}
					position={`You Are Applying For The Post OF` + "  " + this.state.text}
				></CForm>
			</>
		);
	}
}
