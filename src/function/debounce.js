/**
 * 用来返回防抖函数的工具函数
 * @param {Function} callback
 * @param {Number} delay 
 */

// debounce 方式1
export function debounce (callback, delay) {
    return function (event) {
        // 如果上次事件还没有真正处理，取消它
        // if (callback.timeoutId) {  // 两种方式均可，但此方式会查找原型链
        if (callback.hasOwnProperty('timeoutId')) {
            // 清除定时器
            clearTimeout(callback.timeoutId)
        }
        // 在发生指定事件后才调用处理事件的回调函数
        // 启动定时器，只是准备真正处理
        callback.timeoutId = setTimeout(() => {
            // 正在处理事件
            callback.call(this, event)
            // 删除准备处理的标记
            delete callback.timeoutId
        }, delay);
    }
}

// debounce 方式2
export function debounce2 (callback, delay=500) {
    // timer 是在闭包中的
    let timer=null 
    return function(){
        if(timer){clearTimeout(timer)}
        timer=setTimeout(()=>{ 
            callback.apply(this, arguments)
            timer=null  //清空定时器
        }, delay)
    }
}