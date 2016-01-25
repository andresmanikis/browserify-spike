var files = { "dist/bundle.js": "src/app.js" };

module.exports = {
  build: { files: files },
  watch: {
    files: files,
    options: {
      watch: true,
      keepAlive: true,
    }
  }
};
