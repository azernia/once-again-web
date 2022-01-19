// 引入 express
const express = require('express');

// 创建应用 app
const app = express();

// 创建路由规则
// get 请求
app.get('/server', (req, resp)=>{
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    resp.send('Hello GET');

});

// 延时响应
app.get('/delay', (req, resp)=>{
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 设置响应
        resp.send('延时响应');
    }, 3000);
});

// JQuery 服务
app.get('/jquery', (req, resp)=>{
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    resp.send('Hello JQuery Ajax GET');
});

app.post('/server', (req, resp) => {
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // 允许所有类型的头
    resp.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应
    resp.send('Hello POST');
});

app.post('/jquery', (req, resp) => {
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // 允许所有类型的头
    resp.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应
    resp.send('Hello JQuery Ajax POST');
});

app.all('/json-server', (req, resp) => {
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // 允许所有类型的头
    resp.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应数据
    const data = {
        name: 'RUI',
        sex: 'male'
    }
    let str = JSON.stringify(data);
    // 设置响应
    resp.send(str);
});

app.all('/jquery-server', (req, resp) => {
    // 设置响应头 设置允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // 允许所有类型的头
    resp.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应数据
    const data = {
        name: 'RUI',
        sex: 'male'
    }
    let str = JSON.stringify(data);
    // 设置响应
    resp.send(str);
});

// 监听端口
app.listen(8000, ()=>{
    console.log('服务已启动，8000 端口监听中!');
});