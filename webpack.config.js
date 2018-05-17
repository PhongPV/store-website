module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': __dirname,
      '@': __dirname,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
