const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: __dirname + '/src',
	entry: './main.js',
	devServer: {
		historyApiFallback: true,
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			},
			{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery',
			'window.jQuery': 'jquery',
			jQuery: 'jquery'
		})
	],
	devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin()
	]);
}
