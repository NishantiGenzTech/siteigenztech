import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
	const { pathname } = useLocation();
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<>
			<nav className="navbar">
				<NavLink
					to="/"
					className="navbar-logo"
					
					onClick={closeMobileMenu}
				>
					<img
						className="clogo responsive"
						src={require("../images/igenzlogo-removebg-preview.png")}
						alt="logo"
					/>
				</NavLink>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<NavLink
							to="/StaffingSolutions"
							className="nav-links"
							activeClassName="active"
							isActive={() => ["/StaffingSolutions", "/AIHiring"].includes(pathname)}
						>
							Product <i className="fas fa-caret-down" />
						</NavLink>
						{dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<NavLink
							to="/Careers"
							className="nav-links"
							onClick={closeMobileMenu}
							activeClassName="active"
						>
							Careers
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
							activeClassName="active"
						>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
