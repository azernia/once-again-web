/**
 * 读取 resource 下的文件拼接并输出
 */
const fs = require('fs');
const util = require('util');
const myReadFile = util.promisify(fs.readFile);

// 使用回调函数的方式
// fs.readFile('../resource/1.txt', (error, data1) => {
//     if(error) {
//         throw error;
//     }
//     fs.readFile('../resource/2.txt', (error, data2) => {
//         if(error) {
//             throw error;
//         }
//         console.log(data1 + data2);
//     });
// });

// 使用 async 和 await
async function main() {
    // 读取第一个文件的内容
    try {
        let data1 = await myReadFile('../resource/1.txt');
        let data2 = await myReadFile('../resource/2.txt');
        console.log(data1 + ' ' + data2);
    } catch(e) {
        console.log(e);
    }
}

main();