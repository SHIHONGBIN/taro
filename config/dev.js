const isH5 = process.env.CLIENT_ENV = 'h5'
// 你自己的请求域名
const HOST = '"http://localhost:10086"';

module.exports = {
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  env: {
    NODE_ENV: '"development"',
    experimentalDecorators:true
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : JSON.parse(HOST)
  },
  mini: {},
  h5: {

    devServer: {
      // 设置代理来解决 H5 请求的跨域问题
      proxy: {
        //代理名称
        '/': {    
           //代理的域名  http://www.baidu.com 也行
          target: JSON.parse(HOST),    
          // 如果你的真实的api路径中没有/API这一个路径，把这句加上，如果本来就有/API这一路径的话，这句一定要去掉，要不然会导致域名找不到的
          pathRewrite: {   
            '^/': '/'
          },
          changeOrigin: true
        },
      }
    }
  }
}
