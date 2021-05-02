const { configProviderContextKey } = require('element-plus')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true, // 是否在开发环境下每次保存代码时都启用 eslint 验证
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    proxy: {
      "/api": {
        target: '/',
        ws: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, './src'),
        '@views': path.join(__dirname, './src/views'),
        "@components": path.join(__dirname, './src/components'),
        "@utils": path.join(__dirname, './src/utils')
      }
    },
    plugins: [
      require("unplugin-vue-components/webpack")({
        /* options */
      }) //ElementPlus 按需导入插件
      // 详见https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%89%8B%E5%8A%A8%E5%AF%BC%E5%85%A5
      // https://github.com/antfu/unplugin-vue-components#installation
    ]
  }
}
