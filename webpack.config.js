var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(ttf|eot|svg|gif|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'url-loader?name=images/[name].[ext]'
				}]
			}									
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './app/index.html',
			filename: './index.html',
			inject: 'body'	
		})
	]
};