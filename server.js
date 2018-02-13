const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, "client", "dist")));

// app.get("/", (request, response) => {
// 	response.send("<h1>App is working! Now with Nodemon!</h1>");
// });

app.get("/test-route", (request, response) => {
	response.send("<h1>This is a test route, if you are seeing this all is well.</h1>");
});

app.get("/api/get-user", (request, response) => {
	response.send({ username: "BobTheBuilder", email: "bob@mail.com", name: "Bob" });
});

app.get("/api/get-articles", (request, response) => {
	response.send(["article-1", "article-2", "article-3"]);
});

app.get("*", (request, response) => {
	response.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
	console.log("App running on PORT: ", PORT);
});
