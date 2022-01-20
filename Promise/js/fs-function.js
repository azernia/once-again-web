/**
 * 读取文件内容
 * @param {string} path 
 * @return Promise
 */
function myReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (error, data) => {
            if(error) {
                reject(error);
            }
            resolve(data);
        });
    });
}

myReadFile('../resource/content.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason)
});