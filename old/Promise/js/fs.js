const fs = require('fs');

// 回调函数的形式
// fs.readFile('../resource/content.txt', (error, data) => {
//     if(error) {
//         throw error;
//     }
//     console.log(data.toString());
// });

// Promise 的形式
let promise = new Promise((resolve, reject) => {
    fs.readFile('../resource/content.txt', (error, data) => {
        if(error) {
            reject(error);
        }
        resolve(data);
    });
});

// 调用 than 方法
promise.then(value => {
    console.log(value.toString())
},reason => {
    console.log(reason);
});