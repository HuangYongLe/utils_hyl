/**
 * 数组去重
 * 1.理解：
 * 根据当前数组产生一个去除重复元素后的新数组
 * 如：[2, 3, 2, 7, 6, 7]==>[2, 3, 7, 6]
 * 2.实现：
 * 方法1：利用forEach()和indexof()
 * 说明：本质是双重遍历，效率差些
 * 方法2：利用forEach()+对象容器
 * 说明：只需一重遍历，效率高些
 * 方法3：利用ES6语法：from + Set 或者 ... + Set
 * 说明：编码简洁
 */

// 方法1：利用forEach()和indexof()
export function unique1 (array) {
    const arr = []
    // 遍历原数组
    array.forEach(item => {
        // item不在arr中，就添加
        if (arr.indexOf(item)===-1) {
            arr.push(item)
        }
    });
    return arr
}

// 方法2：利用forEach()+对象容器
export function unique2 (array) {
    const arr = []
    const contain = {}
    // 遍历原数组
    array.forEach(item => {
        // contain中没有item属性，就添加
        // if (!contain[item]) {
        if (!contain.hasOwnProperty(item)) { // 不需要遍历
            arr.push(item)
            contain[item] = true
        }
    });
    return arr
}

// 利用ES6语法：from + Set 或者 ... + Set
export function unique3 (array) {
    // return Array.from(new Set(array))
    return [...new Set(array)]
}