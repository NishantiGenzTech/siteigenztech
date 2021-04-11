import React, { useState } from 'react';
import '../../App.css';
import { Modal } from '../Cards/Modal';

export default function ContactUs() {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);

    return ( 
        <div class="container body-content">

<form action="#" onsubmit="showAddress(this.address.value); return false">
    <div style={{display:'flex'}}>
    <div class="col-md-6 the-map">
        <div className = " mapouter" >
        
        <iframe 
            width = "629"
            height = "500"
            id = "gmap_canvas"
            src = "https://maps.google.com/maps?q=4th%20Cross,%202nd%20main,%20Hongasandra%20,%20Bommanahalli%20,%20Bangalore&t=&z=19&ie=UTF8&iwloc=&output=embed"
            scrolling = "no" >
        </iframe>
        <a href = "https://embedgooglemap.net/maps/15" > </a> 
        <a href = "https://www.embedgooglemap.net" > </a> 
    </div >
        </div>
        <div class="col-md-6 centereds">
        <div>
        <div className = "centered centeredmob" >
                        <div >
                            <h6 className='textheader'> You can reach out to us via one of the below channels </h6>
                        </div >
                        <div >
                            <i className = "fas fa-map-marker-alt" > </i> 
                            <p> 2 nd main 4 th cross, Bangalore: 560068 Karnataka, IN </p>
                        </div >
                        <div>
                            <i className = "fas fa-envelope-open-text" > </i> 
                            <p > info @igenztech.com </p>
                        </div >
                        <div >
                            <i className = "fas fa-headset" > </i> 
                            <p > 1800 000 12345 </p>
                        </div >
                        <div className = "call" >
                            <p> Or use our  &nbsp;&nbsp; </p>
                            
                            <input 
                            onClick = {() => setShow(true)} 
                            className = "btn-openModal inputlink" 
                            type="button" 
                            value="contact form" /> 
                            <p > &nbsp;&nbsp;  to place your request</p>
                            
                           
                        </div>
                       
                    </div >
        </div> <Modal show = { show }
        close = { closeModalHandler } /> 
       
          <p id="error-msg"></p>
        </div>
        
       
    </div>
   
</form>

  </div>
    )
}