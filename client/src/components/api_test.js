import React, { Component } from "react";
import axios from "axios";

class APITest extends Component {
	getUserData() {
		axios
			.get("/api/get-user")
			.then(response => {
				console.log("Response from get-user: ", response);
			})
			.catch(error => {
				console.log("Error from get-user: ", error.message);
			});
	}

	getArticleData() {
		axios
			.get("/api/get-articles")
			.then(response => {
				console.log("Response from get-articles: ", response);
			})
			.catch(error => {
				console.log("Error from get-articles: ", error.message);
			});
	}

	render() {
		return (
			<div>
				<h1>API Testing Ground</h1>
				<button onClick={this.getUserData}>Get User Info</button>
				<br />
				<button onClick={this.getArticleData}>Get Article Data</button>
			</div>
		);
	}
}

export default APITest;
