import babel from 'rollup-plugin-babel';

export default {
    entry: 'main.js', //入口
    format: 'umd', //amd、cjs、es、iife、umd
    moduleName: 'typhoon', //iife或umd模式下，若入口文件含 export，必须加上该属性
    plugins: [babel()],
    dest: 'build/typhoon.js', //最终文件
    sourceMap: false, //方便调试编译后文件，自动生成一个 build/index.js.map 关联到buildrel/index.js 中，sourceMap: 'inline'独立生成一个map文件
};