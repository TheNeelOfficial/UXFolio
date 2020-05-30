const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.mainConfig");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dotenv = require("dotenv");
const fs = require("fs");

// module.exports = merge(common, {
//   mode: "production",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[hash].bundle.js",
//     chunkFilename: "[id].js",
//     publicPath: "",
//   },
//   plugins: [new CleanWebpackPlugin(), new webpack.DefinePlugin(envKeys)],
// });

module.exports = (env) => {
  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);

  // Create the fallback path (the production .env)
  const basePath = currentPath + "/.env";

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + "." + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  config = merge(common, {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].bundle.js",
      chunkFilename: "[id].js",
      publicPath: "",
    },
    plugins: [new CleanWebpackPlugin(), new webpack.DefinePlugin(envKeys)],
  });
  return config;
};
