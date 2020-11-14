// 数组扁平化：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中
import { reduce, some } from './declares'
import { concat } from './concat'
// 方式1：递归 + reduce() + concat()
export function flatten(array) {
    return reduce(array, (pre, item) => {
        if (!Array.isArray(item)) {
            pre.push(item)
        } else {
            pre = concat(pre, flatten(item))
        }
        
        return pre
    }, [])
}
// 方式2：... + some() + concat()
export function flatten2(array) {
    let arr = concat([], ...array)
    while (some(arr, item => Array.isArray(item))) {   // arr中有元素是数组
        arr = concat([], ...arr)
    }
    return arr
}