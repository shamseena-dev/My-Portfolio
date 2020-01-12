const path = require("path");

module.exports = {
	mode: "development",
	devtool : "none",
	entry : {
		main: "./src/js/script.js",
		vendor2 : "./src/js/app.js",
		vendor1 : "./src/js/particles.js"

	},
	output : {
		filename: "[name].js",
		path : path.resolve(__dirname,"dist")
	}

}