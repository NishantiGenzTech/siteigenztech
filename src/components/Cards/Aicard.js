import React from "react";
import "./AiCard.css";
import data from "../../data/data.json";

export default function Aicard() {

	return (
		<>
			{/* <button>Left</button> */}
			<div className="aitopbox">
				<p className="">{data.Aihiring[0].paragraph1}</p>
			</div>
			{data.Aihiring[0].image.map((x) => (
				<div className="grid">
					<div className="grid__item">
						<div className="card">
							<img
								className="card__img card__img_paper"
								style={{ backgroundImage: `url(${x.src})` }}
							/>

							<div className="card__content">
								<h1 className="card__header">{x.text}</h1>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className="aibottombox">
				<p className="">{data.Aihiring[0].paragraph2}</p>
			</div>
		</>
	);
}
