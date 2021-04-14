import React from "react";

const ContactForm = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal d-block" : "modal d-none";

	return (
		<div className={showHideClassName}>
			<div className="modal-container">
				<h1></h1>
				<a
					href="javascript:;"
					className="modal-close"
					style={{ float: "right" }}
					onClick={handleClose}
				>
					<i class="fas fa-times"></i>
				</a>
				{children}
			</div>
		</div>
	);
};
export default ContactForm;
