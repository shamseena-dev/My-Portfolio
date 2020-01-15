const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry : {
		main: "./src/js/script.js",
		vendor_particles : "./src/js/particles.js",
		vendor_app : "./src/js/app.js"

	},
	module :{
		rules: [
		   {
		   	test: /.\html$/,
		   	use: ["html-loader"]
		   },
		   {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    },
		   {
		   	test: /\.css$/,
		   	use:["style-loader", "css-loader"]
		   },
		   {
		   	test: /\.scss$/,
		   	use:[MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
		   },
		    {
		  test: /\.(svg|png|jpg|gif|JPG)$/,
		  use: [
		    {
		      loader: "file-loader",
		      options: {
		        esModule: false,
		        outputPath: "images",
		        name: "[name].[ext]"
		      }
		    }
		  ]
		}
		   ]
	},
	output : {
		filename: "[name].js",
		path : path.resolve(__dirname,"dist"),
		publicPath : 'dist'
	},
	plugins : [new HTMLWebpackPlugin({
	           	 template: "./src/index.html",
	           	 filename: "./index.html"
	           }) ]

}