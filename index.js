const express = require("express");
const app = express();
const users = require("./data/users.json");
const products = require("./data/products.json");
const pictures = require("./data/pictures.json");
const addresses = require("./data/addresses.json");
const docs = require("./data/docs.json");
const getData = (arr, count = 1) => {
	let arrToSend = [];

	for (let i = 0; i < count; i++) {
		let num = Math.floor(Math.random() * 500);
		arrToSend[i] = arr[num];
	}

	return arrToSend;
};

app.get("/", function (req, res) {
	res.redirect("/docs");
});

app.get("/docs", function (req, res) {
	res.json(docs);
});

app.get("/show/users", function (req, res) {
	res.json(users);
});

app.get("/user", function (req, res) {
	res.json(getData(users, req.query.qty));
});

app.get("/show/products", function (req, res) {
	res.json(products);
});

app.get("/product", function (req, res) {
	res.json(getData(products, req.query.qty));
});

app.get("/show/pictures", function (req, res) {
	res.json(pictures);
});

app.get("/picture", function (req, res) {
	res.json(getData(pictures, req.query.qty));
});

app.get("/show/addresses", function (req, res) {
	res.json(addresses);
});

app.get("/address", function (req, res) {
	res.json(getData(addresses, req.query.qty));
});

app.get("*", function (req, res) {
	res.json({
		"error": "could not find the page you are looking for"
	})
});

let port = process.env.PORT || 3000

app.listen(port, '0.0.0.0', function() {
	console.log(`listening at port ${port}`);
});

