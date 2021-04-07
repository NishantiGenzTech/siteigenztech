import React from 'react';
import '../../App.css';
import homeimg from "../../images/pexels-belle-co-1000445.jpg";

export default function Home() {
  return (
    <>
    <div className="container">
      <img className="images" src={homeimg} alt="Home Images"></img>
        <div className="box">
          <div>
            <p>
                <i>
                  Economists say the next 10 years could become the most
                  important in India’s economic history, because if everything
                  goes according to plan, India will be able to reap the
                  fruits of its favourable demography over 2030s and 2040s
                  before she loses that edge in the 2050s.
                 
                </i>
              </p>
              <br />
              <p style={{textAlign:'right'}}> -Economic times ,19
              <sup>th</sup> Jan 2021</p>
              <br />
              <p className="igenz">
                    We at iGenZ Technologies believe that the economic growth
                    story of our country will be fueled by Generation Z. We aim to
                    bridge the gap between the skill availability and needs. This
                    is precisely the reason we call ourselves iGenZ which stands
                    for innovation for and by Generation Z.
            </p>
          </div>
      </div>
  </div>

</>
  );
}
