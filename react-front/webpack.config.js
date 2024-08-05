module.exports = {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        fs: false, // ou require.resolve("fs-browserify") se você precisar do polyfill para fs
      },
    },
  };
          