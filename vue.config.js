module.exports = {
  outputDir: "docs",
  devServer: {
    port: 8086,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Meu Portfólio";
      return args;
    });
  },
  css: {},
};
