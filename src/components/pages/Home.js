import React from "react";
import "../../App.css";
import homeimg from "../../images/pexels-belle-co-1000445.jpg";
import homeimg2 from "../../images/pexels-kaboompics-com-6375.jpg";
import homeimg1 from "../../images/pexels-pixabay-355952.jpg";
import data from '../../data/data.json'
export default function Home() {
	return (
		<>
			<div className="wildcard">
				<img className="images" src={data.Home[0].src} alt="Home Images"></img>
				<div className="box">
					<div>
						<p className="igenz">
							{data.Home[0].paragraph1}
						</p>

						<p style={{ textAlign: "right" }}>
							{" "}
							-Economic times ,19
							<sup>th</sup> Jan 2021
						</p>

						<p className=" info">
							{data.Home[0].paragraph2}
						</p>
					</div>
				</div>
				<button
					className="scroll-down"
					data-target-id="target"
					onClick={handleScroll}
				>
					<svg className="scroll-down__frame">
						<rect x="0" y="0" />
					</svg>
					<div className="scroll-down__content">Click to scroll</div>
					<i className="fas fa-long-arrow-alt-down fa-2x"></i>
				</button>
			</div>
			<div id="target" className="full-width wildcard">
				<img className="images2home" src={data.Home[1].src} alt="Home Images"></img>
				<div className="home2text">
					<div>
						<p className="igenz">
							{data.Home[1].paragraph1}
						</p>
					</div>
				</div>

				<div className="wildcard">
					<img className="home2Images" src={data.Home[2].src} alt="Home Images"></img>
					<div className="texthome2">
						<p className="igenz">
							{data.Home[2].paragraph1}
						</p>
					</div>
				</div>
			</div>

			<button
				className="top-button  "
				data-target-id="target"
				onClick={ScrollToTop}
			>
				<svg className="scroll-down__frame">
					<rect x="0" y="0" />
				</svg>

				<i className="fas fa-long-arrow-alt-up fa-2x"></i>
				<div className="scroll-down__content">Click to Top</div>
			</button>
		</>
	);
}
function ScrollToTop() {
	if (window.scrollY != 0) {
		setTimeout(function () {
			window.scrollTo(0, window.scrollY - 30);
			ScrollToTop();
		}, 20);
	}
}
const handleScroll = (e) => {
	
	const targetId = e.target.dataset.targetId;
	if (targetId) {
		const targetElement = document.getElementById(targetId);
		const scrollDistance = targetElement.getBoundingClientRect().top;
		processScroll(scrollDistance);
	}
};
const processScroll = (dimenY) => {
	
	__processScroll(dimenY, 0, 1);
};
const __processScroll = (distanceLeft, distanceCovered, stepSize) => {
	
	setTimeout(() => {
		if (distanceLeft > distanceCovered) {
			stepSize = 1.1 * stepSize;
		} else {
			stepSize = Math.ceil(0.91 * stepSize);
		}
		window.scrollTo(1, distanceCovered);

		if (distanceLeft > 0) {
			__processScroll(
				distanceLeft - stepSize,
				distanceCovered + stepSize,
				stepSize
			);
		}
		
	}, 10);
};
