import React from 'react';
import homeimg from "../../images/pexels-jeshootscom-1040157.jpg";

export default function StaffingSolutions() {
  
  return (
    <>
     
      <div className="container">
      <img className="images" src={homeimg} alt="Home Images"></img>
        <div className="box">
          <div>
            <p>
                <i>
                We help you manage business cyclicality,
                 spikes in demand and setup scale. 
                 Our staffing solutions business can cater
                  to niche expertise and technological skills
                   to meet your staffing requirements. 
                   Once you identify the expertise and task at hand,
                    we can offer you customized solutions to meet 
                    your workforce requirements through innovative models.
                     Towards this, we offer experts with technical and 
                     functional domain skills.

                 
                </i>
              </p>
              <br />
              <p style={{textAlign:'right'}}> -Economic times ,19
              <sup>th</sup> Jan 2021</p>
              <br />
              <p>We offer staffing for the following functions</p>
              <p className="igenz">
                   <ul className='a'>
                    <li>Information Technology services
                    </li>
                    <li>Engineering Services
                    </li>
                    <li>Sales & Marketing
                    </li>
                    <li>Financial Services
                    </li>
                    <li>Program & Project Management
                    </li>
                   </ul>
            </p>
          </div>
      </div>
  </div>

    
    </>
  );
}
