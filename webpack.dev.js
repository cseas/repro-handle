import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  devServer: {
    contentBase: "./build",
    port: 3000,
  },
  devtool: "inline-source-map",
  entry: "./app/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      title: "Development",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "build"),
    clean: true,
  },
};
