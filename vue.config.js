const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  piblicPath: process.env.NODE_ENV === 'production' ? '/Product-chart/' : '/'
})
