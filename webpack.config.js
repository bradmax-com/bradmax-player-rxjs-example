const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssPlugins = [require('precss'), require('autoprefixer')];

module.exports = {
	mode: 'development',
	entry: [
		require.resolve('react-dev-utils/webpackHotDevClient'),
		"./src/index.tsx"
	],
	output: {
		path: __dirname + "/dist",
		filename: "[name].js"
	},
	devtool: 'cheap-module-source-map',
	resolve: {
		modules: [
			__dirname + '/src',
			__dirname + '/node_modules'
		],
		descriptionFiles: ['package.json'],
		extensions: ['.ts', '.tsx', '.js', '.json'],
		enforceExtension: false,
		unsafeCache: true,
		alias: {
			"@bradmax/player/*": "/node_modules/@bradmax/player/*"
		}
	},
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		strictExportPresence: true,
		rules: [{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
				include: [
					__dirname + '/src'
				],
				exclude: [
					__dirname + '/old',
					__dirname + '/node_modules'
				]
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				include: [
					__dirname + '/src'
				],
				exclude: [
					__dirname + '/old',
					__dirname + '/node_modules'
				]
			},
			{
				test: /\.scss$|\.sass$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							minimize: true,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: cssPlugins
						}
					},
					{
						loader: 'sass-loader'
					}
				],
				include: [__dirname + '/src'],
				exclude: [__dirname + '/node_modules']
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: __dirname + '/public/index.html',
		}),
		new CopyWebpackPlugin([{
			from: "./assets/",
			to: "./assets/"
		}], {
			ignore: ['.DS_Store']
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CaseSensitivePathsPlugin(),
	],
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
	performance: {
		hints: false,
	},
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		hot: true,
		hotOnly: false,
		historyApiFallback: {
			disableDotRule: true
		},
		watchOptions: {
			progress: true,
			aggregateTimeout: 1000,
			poll: true,
			ignored: /node_modules/
		},
		progress: true,
		publicPath: '/',
		contentBase: __dirname + 'assets',
		watchContentBase: false,
		inline: true,
		open: true,
		overlay: {
			warnings: true,
			errors: true
		},
		clientLogLevel: "info",
		stats: "minimal",
	}
};
