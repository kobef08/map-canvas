import babel from 'rollup-plugin-babel';
import module from './config';

export default {
    entry: 'src/js/' + module.src, //入口
    dest: 'build/' + module.src, //最终文件
    format: 'umd', //amd、cjs、es、iife、umd
    moduleName: module.name, //iife或umd模式下，若入口文件含 export，必须加上该属性
    plugins: [babel()],
    sourceMap: false, //方便调试编译后文件，自动生成一个 build/index.js.map 关联到buildrel/index.js 中，sourceMap: 'inline'独立生成一个map文件
};