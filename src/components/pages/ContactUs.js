import React, { Component } from "react";
import "../../App.css";
import CForm from "../Cards/CForm";
import { SocialIcon } from "react-social-icons";

export default class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
		};
	}
	modalOpen(e) {
		this.setState({ modal: true });
		console.log("model open");
	}
	modalClose(e) {
		this.setState({
			modal: false,
		});
	}

	render() {
		return (
			<section className="cont-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="google-map">
								<div className=" mapouter">
									<iframe
										width="700"
										height="375"
										id="gmap_canvas"
										src="https://maps.google.com/maps?q=4th%20Cross,%202nd%20main,%20Hongasandra%20,%20Bommanahalli%20,%20Bangalore&t=&z=19&ie=UTF8&iwloc=&output=embed"
										scrolling="no"
									></iframe>
									<a href="https://embedgooglemap.net/maps/15"> </a>
									<a href="https://www.embedgooglemap.net"> </a>
								</div>
							</div>
						</div>
						<div className="col-md-6 colsec">
							<div>
								<div className="icon-block pb-3">
									<span className="icon-block__icon">
										<span
											className="mbri-letter mbr-iconfont"
											media-simple="true"
										/>
									</span>
									<h4 className="icon-block__title align-left mbr-fonts-style display-5">
										You can reach out to us via one of the below channels
									</h4>
								</div>
								<div className="icon-contacts pb-3">
									<img
										src="https://clientdemozone.com/suyash/wp-content/uploads/2020/09/address.png"
										class="scale-with-grid"
										alt=""
										width=""
										height=""
									></img>
									<h5 className="align-left mbr-fonts-style display-7">
										2nd main 4th cross, Bangalore: 560068 Karnataka, IN
									</h5>
								</div>
								<div className="icon-contacts pb-3">
									<img
										src="https://clientdemozone.com/suyash/wp-content/uploads/2020/09/email.png"
										class="scale-with-grid"
										alt=""
										width=""
										height=""
									></img>
									<h5 className="align-left mbr-fonts-style display-7">
										info@igenztech.com
									</h5>
								</div>
								<div className="icon-contacts pb-3">
									<img
										src="https://clientdemozone.com/suyash/wp-content/uploads/2020/09/call-us-1.png"
										class="scale-with-grid"
										alt=""
										width=""
										height=""
									></img>
									<h5 className="align-left mbr-fonts-style display-7">
										1800 000 12345
									</h5>
								</div>
							</div>
							<div data-form-type="formoid">
								<div data-form-alert="" hidden="">
									<div className="call">
										<p> Or use our &nbsp;&nbsp; </p>
										<input
											onClick={(e) => this.modalOpen(e)}
											className="btn-openModal inputlink"
											type="button"
											value="Contact Form"
										/>
										<p> &nbsp;&nbsp; to place your request</p>
									</div>
								</div>
							</div>
							<div className="socialicon">
								<SocialIcon
									
									url="https://www.linkedin.com/company/igenztechnologies/"
									target="_blank"
									network="linkedin"
								/>
								&nbsp;&nbsp; Connect with Us for more updates
							</div>
						</div>
					</div>
				</div>
				<CForm
					show={this.state.modal}
					handleClose={(e) => this.modalClose(e)}
				></CForm>
			</section>
		);
	}
}
