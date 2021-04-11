import React from 'react';
import '../../App.css';
import homeimg from "../../images/pexels-belle-co-1000445.jpg";
import homeimg2 from "../../images/pexels-kaboompics-com-6375.jpg";
import homeimg1 from "../../images/pexels-pixabay-355952.jpg";

export default function Home() {
  return (
    <>
    <div className="container">
    <div  className="wildcard">
      <img className="images" src={homeimg} alt="Home Images"></img>
        <div className="box">
          <div>
            <p className='igenz'>
                  Economists say the next 10 years could become the most
                  important in India’s economic history, because if everything
                  goes according to plan, India will be able to reap the
                  fruits of its favourable demography over 2030s and 2040s
                  before she loses that edge in the 2050s.
              </p>
              <br />
              <p style={{textAlign:'right'}}> -Economic times ,19
              <sup>th</sup> Jan 2021</p>
              <br />
              <p className=" info">
                    We at iGenZ Technologies believe that the economic growth
                    story of our country will be fueled by Generation Z. We aim to
                    bridge the gap between the skill availability and needs. This
                    is precisely the reason we call ourselves iGenZ which stands
                    for innovation for and by Generation Z.
            </p>
          </div>
      </div>
      <button
    className="scroll-down"
    data-target-id="target"
    onClick={handleScroll}>
    <svg className="scroll-down__frame">
      <rect x="0" y="0" />
    </svg>
    <div className="scroll-down__content">
      Click to scroll
    </div>
    <svg className="scroll-down__arrow-down" viewBox="0 0 25 30">
      <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
    </svg>
  </button>
      </div>
      <div  id="target" className="full-width">
      <div  className="">
      <img className="images h2Image" src={homeimg2} alt="Home Images"></img>
        <div className="home2text">
          <div>
            <p className='igenz'>
            We are a bunch of senior professionals from HR
             and IT background who felt the need to launch
              a product that can integrate technology and hiring.
               The idea was sown, as being part of various
                recruitment drives and hiring initiatives,
                 we have always felt the need for  a product 
                 in the market that can cut short the entire 
                 hiring process and make the process efficient 
                 with the use of technology. With iGenZ we aim to
                  launch tech centric products and services in the
                   HR industry and leverage the next generation technologies. 
              </p>
          </div>
      </div>
      
      </div>
      <div  className="">
      <img className="home2Images" src={homeimg1} alt="Home Images"></img>
        <div >
          <div className="texthome2">
            <p className='igenz'>
                  Economists say the next 10 years could become the most
                  important in India’s economic history, because if everything
                  goes according to plan, India will be able to reap the
                  fruits of its favourable demography over 2030s and 2040s
                  before she loses that edge in the 2050s.
              </p>
          </div>
      </div>
      </div>
      </div>
      </div>

</>
  );
}
const handleScroll = (e) => {
  console.log('clicked');
  const targetId = e.target.dataset.targetId;
  if(targetId) {
    const targetElement = document.getElementById(targetId);
    const scrollDistance = targetElement.getBoundingClientRect().top;
    processScroll(scrollDistance);
  }
}
const processScroll = (dimenY) => {
  console.log('pass 1');
  __processScroll(dimenY, 0, 1);
}
const __processScroll = (distanceLeft, distanceCovered, stepSize) => {
  console.log('pass 2');
  setTimeout(() => {
    if(distanceLeft > distanceCovered) {
      stepSize = 1.1*stepSize;
    } else {
      stepSize = Math.ceil(0.91*stepSize);
    }
    window.scrollTo(1, distanceCovered);
  
    if(distanceLeft > 0) {
      __processScroll(distanceLeft - stepSize, distanceCovered + stepSize, stepSize);
    }
    console.log('pass 3');
  }, 10);
} 