module.exports = {
	cache: false,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".js", ".jsx"]
				},
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(jpg|gif|png)$/i,
				use: {
					loader: 'url-loader'
				}
			}
		]
	}
};