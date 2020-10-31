/**
 * 数组声明式迭代方法
 * @param {Array} array 
 * @param {Function} callback 
 * @param {Number} initValue
 */
export function map (array, callback) {
    const arr = []
    // 遍历调用的数组，调用callback得到结果，添加到arr
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element, index)
        arr.push(result)
    }
    return arr
}

export function reduce (array, callback, initValue) {
    let total = initValue
    // 遍历调用的数组，调用callback得到累加的结果数据
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        total = callback(total, element, index)
        
    }
    return total
}

export function filter (array, callback) {
    const arr = []
    // 遍历调用的数组，调用callback得到一个布尔值，如果为true，将当前element添加到arr
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element, index)
        if (result) {
            arr.push(element)
        }
    }
    return arr
}

export function find (array, callback) {
    // 遍历调用的数组，调用callback得到一个布尔值，如果为true，将当前返回element
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element, index)
        if (result) {
            return element
        }
    }
    return undefined
}

export function findIndex (array, callback) {
    // 遍历调用的数组，调用callback得到一个布尔值，如果为true，将当前返回element
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element, index)
        if (result) {
            return index
        }
    }
    return -1
}

export function every (array, callback) {
    // 遍历调用的数组，调用callback得到一个布尔值，一false则false
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element, index)
        if (!result) {
            return false
        }
    }
    return true
}

export function some (array, callback) {
    // 遍历调用的数组，调用callback得到一个布尔值，一true则true
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element, index)
        if (result) {
            return true
        }
    }
    return false
}