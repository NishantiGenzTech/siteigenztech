import React, { useState } from "react";
import "../../App.css";
import { Modal } from "../Cards/Modal";

export default function ContactUs() {
	const [show, setShow] = useState(false);

	const closeModalHandler = () => setShow(false);
	console.log(show);
	return (
		<div className="body-content">
			<form action="#" onsubmit="showAddress(this.address.value); return false">
				<div className="content">
					<div className="col-md-6 the-map">
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
							<Modal show={show} close={closeModalHandler} />
						</div>
					</div>
					<div class="col-md-6 centereds">
						<div className="textfield">
							<div className="centered centeredmob">
								<div className="textheader">
									<h6>You can reach out to us via one of the below channels</h6>
								</div>
								<br />
								<div className="iconalign">
									<i className="fas fa-map-marker-alt "> </i>
									&nbsp;&nbsp;&nbsp;
									<p className="paragraph">
										2 nd main 4 th cross,
										<br /> Bangalore: 560068
										<br /> Karnataka, IN
									</p>
								</div>
								<br />
								<div className="iconalign">
									<i className="fas fa-envelope-open-text "> </i>
									&nbsp;&nbsp;&nbsp;
									<p className="paragraph"> info @igenztech.com </p>
								</div>
								<br />
								<div className="iconalign">
									<i className="fas fa-headset "> </i>
									&nbsp;&nbsp;&nbsp;
									<p className="paragraph"> 1800 000 12345 </p>
								</div>
								<br />
								<div className="call">
									<p> Or use our &nbsp;&nbsp; </p>
									<input
										onClick={() => setShow(true)}
										className="btn-openModal inputlink"
										type="button"
										value="contact form"
									/>
									<p> &nbsp;&nbsp; to place your request</p>
								</div>
							</div>
						</div>{" "}
						{/* <Modal show={show} close={closeModalHandler} /> */}
						<p id="error-msg"></p>
					</div>
				</div>
			</form>
		</div>
	);
}
