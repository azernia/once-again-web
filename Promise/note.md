# Promise
- 是 JS 中异步编程的新解决方案(ES6)
    - 旧解决方案为回调函数
    - promise
        - 启动异步任务 => 返回 promise 对象 => 给 promise 对象绑定回调函数(甚至可以在异任务结束后绑定多个)

# 为什么要使用 Promise
- 指定回调函数的方式更加灵活
- 支持链式调用，解决回调的地域问题
    - 回调地域：回调函数的嵌套调用，外部回调函数的异步执行结果是嵌套的回调执行的条件
- 回调地狱的特点
    - 不便于阅读
    - 不方便异常处理

# Promise 的状态
- 实例对象中的属性 `PromiseState`
    - pending **默认值**
    - resolved / fullfilled
    - rejected

# Promise 对象的值 `PromiseResult`
- 保存对象 **成功/失败** 的结果
- 通过 resolve reject 修改

# Promise API
- Promise 构造函数
    ```
        Promise(excutor){}
    ```
- `excutor`在 `Promise`中同步调用，异步执行在执行器中
- `cathc` 只接受失败的回调