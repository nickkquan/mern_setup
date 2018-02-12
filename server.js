const express = require("express");
const PORT = process.env.PORT || 9000;

const app = express();

app.get("/", (request, response) => {
	response.send("<h1>App is working</h1>");
});

app.get("/test-route", (request, response) => {
	response.send("<h1>This is a test route, if you are seeing this all is well.</h1>");
});

app.listen(PORT, () => {
	console.log("App running on PORT: ", PORT);
});
