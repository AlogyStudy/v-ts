module.exports = {
  devServer: {
    port: 1229
  },
  // 设置路径别名
  chainWebpack: config => {
    // config.resolve.alias.set()
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
