/**
 * 用来返回节流函数的工具函数
 * @param {Function} callback
 * @param {Number} delay 
 */

// 实现方式 1
export function throttle(callback, delay) {
    let pre = 0 // 默认值不是 Data.now() -> 第一次事件立即调用
    return function (event) {  // 节流函数/真正的事件回调函数 this 是发生事件的标签
        console.log('事件 throttle')
        const current = Date.now()
        if(current - pre > delay){ // 只有离上一次调用 callback 的时间差大于 delay
            // 调用真正处理事件的函数，this 是事件源，参数是 event
            callback.call(this, event)
            // 记录此次调用的时间
            pre = current
        }
    }
}

// 实现方式 2
export function throttle2 (callback, delay=100) {
    // timer 是在闭包中的
    let timer=null 
    return function(){
        console.log('事件 throttle')
        if(timer){return}
        timer=setTimeout(()=>{ 
            callback.apply(this, arguments)
            timer=null  //清空定时器
        }, delay)
    }
}