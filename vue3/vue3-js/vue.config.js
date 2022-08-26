module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      '/': {
        ws: false,
        target: process.env.VUE_APP_BASE_RUL,
        pathRewrite: { '^/': '' }
      }
    }
  }
};
