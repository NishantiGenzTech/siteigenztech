import React from 'react';
import './Modal.css';
import emailjs from 'emailjs-com';

export  const Modal = ({ show, close }) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_k66nlin', 'template_waqpg06', e.target, 'user_AxPlzgIo4G8UqVAGZredu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
      <div className='modelbg'>
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p style={{'font-size':'27px'}}>Contact Us</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
        <form action="#" onSubmit={sendEmail}>
        <label for="firstname">
            <i class="cntfrmicn fa fa-user" />
            <input name="name" class="form-fields" placeholder="Name" type="text" />
        </label>
        <label for="email">
            <i class="cntfrmicn fa fa-envelope" />
            <input name="email" class="form-fields" placeholder="Email_Id" type="text" />
        </label>
        <label for="contact">
            <i class="cntfrmicn fa fa-phone" />
            <input name="contact" class="form-fields" placeholder="Contact" type="text" />
        </label>
        
        <button class="form-fields button" type="submit" value="Send">Send <i class="fa fa-paper-plane"></i></button>
    </form>
    
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
};