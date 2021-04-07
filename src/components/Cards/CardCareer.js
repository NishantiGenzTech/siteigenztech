import React, { Component } from 'react'
import './cardcareer.css'

export default class CardCareer extends Component {
    render() {
        return (
        <>
        <div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i class="fab fa-python"></i>
					<h2>Python Developer</h2>
					<h6>iGenZ Techonologies Pvt ltd. Bangalore Karnataka, India  12 hours ago . Over 200 applications</h6>
				
					<button className="btn"><i class="fab fa-linkedin"></i>  Apply</button>
				</div>
				<div className="course-info">
					<h6>Fresher preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>
		<div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i className="fab fa-react"></i>
					<h2>React Developer</h2>
					<h6>iGenZ Techonologies Pvt ltd. Bangalore Karnataka, India  12 hours ago . Over 200 applications</h6>
				
					<button className="btn"><i class="fab fa-linkedin"></i>  Apply</button>
				</div>
				<div className="course-info">
					<h6>Asp.net preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>
		<div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i class="fab fa-java"></i>
					<h2>java Developer</h2>
					<h6>iGenZ Techonologies Pvt ltd. Bangalore Karnataka, India  12 hours ago . Over 200 applications</h6>
				
					<button className="btn"><i class="fab fa-linkedin"></i>  Apply</button>
				</div>
				<div className="course-info">
					<h6>Fresher preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>	
			</>
        
        )
    }
}
