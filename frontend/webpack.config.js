module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader"]
			}
		]
	}
}