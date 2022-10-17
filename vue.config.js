const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/main.js', // 修改入口文件
    }
  },
  lintOnSave: false, // 关闭代码检查
  // 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  //方式二
  devServer: {
    proxy: {
      '/api': {   //在端口后添加
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }  //将添加的/api前缀删除
      }
    }
  }
})
