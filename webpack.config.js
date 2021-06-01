"use strict";

const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, "index.js"),
    styles: path.join(__dirname, "styles.scss"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "dist"),
  },
};
