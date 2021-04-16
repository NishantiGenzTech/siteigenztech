import React from "react";
import homeimg from "../../images/pexels-jeshootscom-1040157.jpg";
import data from "../../data/data.json";

export default function StaffingSolutions() {
	return (
		<>
			<div className="wildcard">
				<img className="images" src={homeimg} alt="Home Images"></img>
				<div className="box">
					<div className="igenz">
						<p>
							<i>{data.Staffing[0].paragraph}</i>
						</p>

						<p>{data.Staffing[0].paragraph1}</p>
						<p className="igenz">
							<ul className="a">
                {data.Staffing[0].list.map(x=>
								<li>{x}</li>
                )}
							</ul>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
