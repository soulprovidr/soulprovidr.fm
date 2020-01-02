exports.onCreateWebpackConfig = ({ actions, plugins }, options) => {
  if (!options || !options.define) return;
  if (typeof options.define !== 'object') {
    console.warn('Invalid options provided.');
    return;
  }
  actions.setWebpackConfig({
    plugins: [
      plugins.define(options.define)
    ]
  });
}