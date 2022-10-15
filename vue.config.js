const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/main.js', // 修改入口文件
    }
  },
  lintOnSave: false // 关闭代码检查
})
