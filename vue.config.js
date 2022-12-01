module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    // limpa os loaders antigos
    svgRule.uses.clear();

    // Regra para conseguir importar svgs pelo import
    // svgs no import devem receber no final o '?inline' ex.: "img/icone-svg-exemplo.svg?inline"
    // svgs dentro do css sem o file-loader, vão ficar como [object Object]
    // logo foi necessário também o uso do file-loader

    // as options com name ".options({name: 'img/[name].[hash:8].[ext]'})", é o caminho que o svg vai receber na hora de aparecer no browser pelo css
    // [name] = nome do svg
    // [hash] = numero gerado pela build
    // [ext] = extensao do svg
    // background-image: url(/img/[name].[hash:8].[ext])
    // ex: background-image: url(/img/icon-hourpicker.42a1dd9f.svg);    
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]',
      });
  },
  transpileDependencies: [
    "vue-html2pdf",
    "crypto-js"
  ]
};