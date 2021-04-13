import React from "react";
import "./AiCard.css";

export default function Aicard() {
	return (
		<>
			{/* <button>Left</button> */}
			<div className="aitopbox">
			<p className=''>
			Being part of various recruitment drives 
			and hiring initiatives, we have always
			 felt the need for  a product in the market 
			 that can cut short the entire hiring process
			  and make the process efficient with the use of technology. 
  
			  </p>
		  </div>
			<div className="grid">
				<div className="grid__item">
					<div className="card">
						<img className="card__img card__img_paper" />
						<div className="card__content">
							<h1 className="card__header"></h1>
						</div>
					</div>
				</div>
			</div>
			<div className="grid">
				<div className="grid__item">
					<div className="card">
						<img className="card__img card__img_Aibas" />
						<div className="card__content">
							<h1 className="card__header">AI based candidate filtering</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="grid">
				<div className="grid__item">
					<div className="card">
						<img className="card__img card__img_Predictivematching" />
						<div className="card__content">
							<h1 className="card__header">Predictive matching</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="grid">
				<div className="grid__item">
					<div className="card">
						<img className="card__img card__img_Candidatesranking" />
						<div className="card__content">
							<h1 className="card__header">Candidates ranking</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="grid">
				<div className="grid__item">
					<div className="card">
						<img className="card__img card__img_Quick" />
						<div className="card__content">
							<h1 className="card__header">Quick hiring</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="aibottombox">
          <p className=''>
          Being part of various recruitment drives 
          and hiring initiatives, we have always
           felt the need for  a product in the market 
           that can cut short the entire hiring process
            and make the process efficient with the use of technology. 

            </p>
        </div>
		</>
	);
}
