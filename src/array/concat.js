// 将 n 个数组或值与当前数组合并成一个新数组，原数组不会改变
export function concat (array, ...values) {
    const arr = [...array]
    // 遍历 values 将 values 或里面的元素添加到 arr
    values.forEach(value => {
        if (Array.isArray(value)) {
            arr.push(...value)
        }else{
            arr.push(value)
        }
    })
    return arr
}