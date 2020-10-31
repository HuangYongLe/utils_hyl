const path = require('path')

module.exports = {
    // 模式
    // mode: 'development', // 开发模式
    mode: 'production', // 生产模式
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'h-utils.js',
        filename: 'h-utils.min.js',
        library: 'huts', // 向外暴露对象的名称
        libraryTarget: 'umd' // u表示统一 针对 esm / commenjs / amd
    }
}