const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "../"),
  entry: { index: ["./src/index.tsx"] },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: "./dist",
    port: 8787,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      }
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ title: "Title", template: "./public/index.html" })
  ]
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};
