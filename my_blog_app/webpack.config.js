const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "app.tsx"), // First we specify an application entry point
  output: {
    // Up next is the output location for our built bundle.
    path: path.join(__dirname, "dist"),
    filename: path.join("build", "app.js")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"] // Next we tell Webpack to support .ts and .tsx file extensions along with the original .js extension.
  },
  module: {
    rules: [
      // Finally we tell webpack that for .ts and .tsx files, it should use ts-loader.
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
