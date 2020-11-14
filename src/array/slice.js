// 返回一个由 begin 和 end 决定的原数组浅拷贝，原数组不会改变
export function slice(array, begin, end) {
    const arr = []
    // 如果原数组是空数组，直接返回
    if ( array.length === 0 ) {
        return arr
    }
    // 处理没有指定的情况
    begin = begin || 0
    end = end || array.length
    // 范围限制
    if ( begin < 0 ) {
        begin = 0
    }
    if ( end > array.length ) {
        end = array.length
    }
    for (let index = begin; index < end; index++) {
        arr.push(array[index])
    }
    return arr
}