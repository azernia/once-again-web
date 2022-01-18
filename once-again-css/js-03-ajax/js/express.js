// 引入 express
const express = require('express');

// 创建应用 app
const app = express();

// 创建路由规则
app.get('/', (req, resp)=>{
    // 设置响应
    resp.send('HELLO EXPRESS');
});

// 监听端口
app.listen(8000, ()=>{
    console.log('服务已启动，8000 端口监听中');
})