module.exports = {
    // 关闭 eslint 校验
    lintOnSave:  false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211'
            }
        }
    }
}