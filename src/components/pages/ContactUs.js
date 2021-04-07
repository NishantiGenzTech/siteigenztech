import React from 'react';
import '../../App.css';
// import ContactForm from '../Cards/ContactForm';

export default function ContactUs() {

  function callUser() {
   
  }
  return( 
    <div className='contact-us'>
    <div className="split left">
    <div className="centered">
    <div className=" mapouter">
    <div className="gmap_canvas">
    </div><iframe 
    width="629" 
    height="500" 
    id="gmap_canvas" 
    src="https://maps.google.com/maps?q=4th%20Cross,%202nd%20main,%20Hongasandra%20,%20Bommanahalli%20,%20Bangalore&t=&z=19&ie=UTF8&iwloc=&output=embed" 
    
    scrolling="no" 
    >
    </iframe>
    <a href="https://embedgooglemap.net/maps/15"></a>
     <a href="https://www.embedgooglemap.net"></a>
    </div>
    </div>
  </div>
  
  <div className="split right">
    <div className="centered">
    <div>
    <h6>You can reach out to us via one of the below channels
    </h6></div>
      <div>
      <i className="fas fa-map-marker-alt"></i>
      <p>2nd main 4th cross, Bangalore: 560068
      Karnataka, IN
      </p>
      </div>
      <div>
      <i className="fas fa-envelope-open-text"></i>
      <p>info@igenztech.com
      </p></div>
      <div>
      <i className="fas fa-headset"></i>
      <p>1800 000 12345
      </p></div>
      <div className="call"> <p >Or use our  <a href="../" onClick={callUser}>contact form </a> to place your request</p></div>
    </div>
  </div>
  </div>
  )
}
