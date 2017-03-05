const webpack = require('webpack');
const path = require('path');

// Whatever comes as an environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
	entry : ['./examples/index.html', './lib/index.js'],
	output : {
		path : path.resolve(__dirname, "examples"),
		filename : "bundle.js",
		library : 'plateCalculator',
		libraryTarget : 'umd',
	},
	module : {
		rules : [
			{ test : /\.js$/, exclude : /node_modules/, loader : "babel-loader" },
			{
				test : /\.html$/,
				loader : ['babel-loader', "html-loader"]
			}
		]
	},
	devtool : "source-map",
	devServer : {
		contentBase : "./examples",
	},
	plugins : [
		// This makes it possible for us to safely use env vars on our code
		new webpack.DefinePlugin({
			'process.env.ASSET_PATH' : JSON.stringify(ASSET_PATH)
		})
	]
};
