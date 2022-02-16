module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#349E81',
            'link-color': '#349E81',
            'text-color': '#2D3541',
            'border-radius-base': '6px'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ceshi.youxiangzhitou.test',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
