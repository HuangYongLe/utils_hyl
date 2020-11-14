/**
 * 入口js
 * 向外暴露工具函数
 */

export { default as call } from './function/call'
export { apply } from './function/apply'
export { bind } from './function/bind'
export { debounce, debounce2 } from './function/debounce'
export { throttle, throttle2 } from './function/throttle'
export { map, reduce, filter, find, findIndex, every, some } from './array/declares'
export { unique1, unique2, unique3 } from './array/unique'
export { concat } from './array/concat'
export { slice } from './array/slice'
export { flatten, flatten2 } from './array/flatten'