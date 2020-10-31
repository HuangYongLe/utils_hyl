import call from "./call";

export function bind (fn, obj, ...args) {
    // 返回一个新函数
    return (...args2) => {
        // 调用原函数，指定 this 为 obj，参数列表由 args 和 args2 依次组成
        return call(fn, obj, ...args, ...args2)
    }
}