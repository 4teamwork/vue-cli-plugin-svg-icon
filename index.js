module.exports = (api, { pluginOptions = {}}) => {
  if (!pluginOptions.svgDir) {
    throw new Error('No svgDir is set in the pluginOptions.')
  }
  const { svgDir } = pluginOptions;

  console.info(`Serving svg files from: ${svgDir}`);

  api.chainWebpack(config => {
    config.module
      .rule('svg')
      .exclude
      .add(svgDir);
  });
  api.configureWebpack(() => ({
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          include: [svgDir],
          use: [
            { loader: 'svg-sprite-loader' },
            { loader: 'svgo-loader' },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        svg: svgDir,
      },
    },
  }));
};
