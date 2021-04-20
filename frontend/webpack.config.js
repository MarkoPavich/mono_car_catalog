module.exports = {
  cache: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|gif|png)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
