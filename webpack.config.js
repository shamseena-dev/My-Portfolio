const path = require("path");
const WebPackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
	mode: "development",
	devtool : "none",
	entry : {
		main: "./src/js/script.js",
		vendor_app : "./src/js/app.js",
		vendor_particles : "./src/js/particles.js"

	},
	module :{
		rules: [
		   {
		   	test: /\.css$/,
		   	use:["style-loader", "css-loader"]
		   },
		   {
		   	test: /\.(svg|png|jpg|gif)$/,
		   	use: {
		   		loader: "file-loader",
		   		options: {
		   			name: "[name].[ext]",
		   			outputPath: "images"
		   		} 
		    }
		   }

		   ]
	},
	output : {
		filename: "[name].js",
		path : path.resolve(__dirname,"dist")
	},
	plugins : [new WebPackCleanupPlugin()]

}