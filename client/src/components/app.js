import React from "react";
import { Route, Link } from "react-router-dom";

import "../assets/css/app.css";
import logo from "../assets/images/logo.svg";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import APITest from "./api_test";

const App = () => (
	<div>
		<div className="app">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
				<li>
					<Link to="/test">API Test</Link>
				</li>
			</ul>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/test" component={APITest} />
		</div>
	</div>
);

export default App;
