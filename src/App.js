import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Product from './components/pages/Product';
import Careers from "./components/pages/Careers";
import ContactUs from "./components/pages/ContactUs";
// import JsonData from './data/data.json'
import StaffingSolutions from "./components/pages/StaffingSolutions";
import AIHiring from "./components/pages/AIHiring";
import Footer from "./components/pages/Footer";

function App() {
	return (
		<div className="app">
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Careers" component={Careers} />
						<Route path="/contact-us" component={ContactUs} />
						<Route path="/StaffingSolutions" component={StaffingSolutions} />
						<Route path="/AIHiring" component={AIHiring} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
