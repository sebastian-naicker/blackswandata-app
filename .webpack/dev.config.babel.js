import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import env from 'dotenv'

const dotenv = env.config({ path: '.env' });

export default {
	mode: "development",
	devtool: 'inline-source-map',
	stats: 'errors-only',
	entry: [
		'@babel/polyfill',
		path.resolve(__dirname, '../src/index.js'),
		path.resolve(__dirname, '../src/index.scss'),
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.test'],
		modules: [
			'node_modules',
			path.resolve(__dirname, '../src/app'),
			path.resolve(__dirname, '../src/shared'),
		]
	},
	devServer: {
		contentBase: path.join(__dirname, '../dist/index.html'), // boolean | string | array, static file location
		compress: true, // enable gzip compression
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
		historyApiFallback: true,
		stats: 'errors-only'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		// handle html files
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		}),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('dev'),
				API_URL: JSON.stringify(dotenv.parsed.API_URL),
			}
		}),

		// enable debug mode
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				enforce: 'pre',
				loader: ['import-glob-loader2']
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							native: false,
							svgo: false
						}
					}
				]
			},
			{
				test: /\.scss$/,
				loader: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' }
				]
			},
		]
	}
};
