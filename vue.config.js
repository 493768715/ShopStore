module.exports = {
  lintOnSave: false,
  publicPath:"./",
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
 },
 devServer: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080/api',
      // ws: true,
      changeOrigin: true
    }
    // '/foo': {
    //   target: '<other_url>'
    // }
  }
}
}
