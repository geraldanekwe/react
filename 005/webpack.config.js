module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
      path: __dirname,
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};
