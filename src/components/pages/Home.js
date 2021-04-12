import React from 'react';
import '../../App.css';
import homeimg from "../../images/pexels-belle-co-1000445.jpg";
import homeimg2 from "../../images/pexels-kaboompics-com-6375.jpg";
import homeimg1 from "../../images/pexels-pixabay-355952.jpg";

export default function Home() {
  return (
    <>
    
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
            
            <p style={{textAlign:'right'}}> -Economic times ,19
            <sup>th</sup> Jan 2021</p>
          
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
    <div  id="target" className="full-width wildcard">
    
    <img className="images2home" src={homeimg2} alt="Home Images"></img>
      <div className="home2text">
        <div>
          <p className='igenz'>
          We help you manage business cyclicality, spikes in demand and setup scale. Our staffing solutions business can cater to niche expertise and technological skills to meet your staffing requirements. Once you identify the expertise and task at hand, we can offer you customized solutions to meet your workforce requirements through innovative models. Towards this, we offer experts with technical and functional domain skills.

            </p>
        </div>
    </div>
    
    
    <div  className="wildcard">
    
    <img className="home2Images" src={homeimg1} alt="Home Images"></img>
        <div className="texthome2">
          <p className='igenz'>
          Being part of various recruitment drives 
          and hiring initiatives, we have always
           felt the need for  a product in the market 
           that can cut short the entire hiring process
            and make the process efficient with the use of technology. 

            </p>
        </div>
       
    </div>

    </div>
   
   
  <button
  className="top-button  "
  data-target-id="target"
  onClick={ScrollToTop}>
  <svg className="scroll-down__frame">
    <rect x="0" y="0" />
  </svg>
  
  <svg viewBox="0 0 32 32" class="icon icon-arrow-top" viewBox="0 0 32 32" aria-hidden="true"><path d="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"/></svg>
  <div className="scroll-down__content">
    Click to Top
  </div>
</button>
     

</>
  );
}
function ScrollToTop() {
  if(window.scrollY!=0)
  {
      setTimeout(function() {
         window.scrollTo(0,window.scrollY-30);
          ScrollToTop();
      }, 20);
   }
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