const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	mode: "development",
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	entry: "./src/main.js",
	output: {
		filename: "./dist/main.js"
	},
	module: {
		rules: [
			// es6
			{
				test: /\.es$/,
				exclude: "/node_modules/",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			// scss
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			},
			// 字体图标
			{
				test: /\.(woff|ttf)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin ()
	]
}