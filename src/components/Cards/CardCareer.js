import React, { Component } from 'react'
import './cardcareer.css'
import ContactForm from './ContactForm'

export default class CardCareer extends Component {
	constructor(){
		super();
		this.state = {
		  animation_name : '',
		  depth: '',
		  fade: ''
		};
	  }
	
	  closePopUp(){
		this.setState({animation_name: 'animate-out'});
		this.setState({depth:'above'});
		 this.setState({fade:'fade-out'});
	  }
	  openPopUp(){
		this.setState({animation_name: 'animate-in'});
		this.setState({depth:'below'});
		this.setState({fade:'fade-in'});
	  }
    render() {
        return (
        <>
		<div>
        <div className="courses-container">
			<div className="course">
				<div className="course-preview">
					<i class="fab fa-python"></i>
					<h2>Python Developer</h2>
					
				
					<button className="btn"
					id={this.state.depth} onClick={this.openPopUp.bind(this)}
					> Apply</button>
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
					
				
					<button className="btn" 
					> Apply</button>
				
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
					
				
					<button className="btn"> Apply</button>
				</div>
				<div className="course-info">
					<h6>Fresher preferred!</h6>
					<h4>Great opportunity for freshers (2020 passed) willing to adapt the learn python quickly</h4>
					<h4>Education:B.E, B.Tech (CS or Electronics)* preferred.</h4>
					<h4>* Please apply. if you are a graduate in any other discipline and have good pregramming skills.</h4>
				</div>
			</div>
		</div>	</div>
		
			
			</>
        
        )
    }
	openModal() {
        this.setState({ isModalOpen: true })
		console.log("1")
      }
  
      closeModal() {
        this.setState({ isModalOpen: false })
		console.log("2")
      }
}
