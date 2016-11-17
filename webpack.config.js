module.exports = {
  entry: './client.js',
  output: {
  	 filename: 'bundle.js',
    path: 'public'
  },
  module: {
    loaders: [
      {
      	  test: /\.jsx$/,
      	  exclude: /node_modulus/,
      	  loader: 'babel-loader',
      	  query: {
      	  	  presets: ['react']
      	  }
      }
    ]
  }
}