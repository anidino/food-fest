const path = require('path');

module.exports = {
	entry: "./assets/js/scripts.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'main.bundle.js', 
		
	},
	mode: 'development'
}