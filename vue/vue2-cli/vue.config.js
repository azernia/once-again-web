module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave:false, //关闭语法检查
    //开启代理服务器（方式一）
    /* devServer: {
    proxy: 'http://localhost:5001'
  }, */
    //开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/students': {
                target: 'http://localhost:5001',
                // pathRewrite:{'^/atguigu':''}, // 路径重写
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值 false 为实际端口 true 为代理端口 默认 true
            },
            '/cars': {
                target: 'http://localhost:5002',
                // pathRewrite:{'^/demo':''},
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            }
        }
    }
}