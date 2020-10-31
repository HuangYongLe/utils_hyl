export default function call (fn, obj, ...args) {
    // 判断是否为 undefined 或 null
    if (obj == null) {obj = window}
    // 将原函数赋值给临时函数
    obj.tempFn = fn
    // 调用临时函数
    const result = obj.tempFn(...args)
    // 删除临时函数
    delete obj.tempFn
    // 返回结果
    return result
}