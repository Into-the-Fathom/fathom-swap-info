import path from 'path'

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  resolve: {
    root: [path.resolve('./src')],
  },
}
