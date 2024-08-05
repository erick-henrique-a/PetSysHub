console.log("rodando")
module.exports = {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        fs: require.resolve("fs-browserify")
      },
    },
  };
          