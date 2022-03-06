//import path from "path"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons")
    config.module
      //config：vue将webpack封装后，暴露给我们使用的对象
      .rule("svg-sprite")  //规则名：svg-sprite
      .test(/\.svg$/)  // 以 .svg 结尾的（整个项目的svg文件走上面的规则）
      .include.add(dir).end()  //只有dir 路径里的svg文件走这个规则，其他的svg不走
      .use("svg-sprite-loader").loader("svg-sprite-loader").options({extract: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      //svgo-loader会将 svg 的 fill 属性移除
      .tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]})).end();
    //使用 svg-sprite-loader ，不要解析出文件
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin("svg-sprite").use(require("svg-sprite-loader/plugin"), [{plainSprite: true}])
    //使用 svg-sprite-loader/plugin
    config.module
      .rule("svg").exclude.add(dir)  //其他svg loader 排除 icons 目录
  }
}
