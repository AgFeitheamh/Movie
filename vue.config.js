module.exports = {
  // 代理
  // 开发环境
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true
      }
    }
    // headers:{
    //   'Access-Control-Allow-Origin' : '*',
    // },
    // hotOnly: false,
    // disableHostCheck: true
  },
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Project/Movie/'
    : '/'
}
