exports.onCreateWebpackConfig = ({ actions, plugins }, options) => {
  if (!options || !options.provide) return;
  if (typeof options.provide !== 'object') {
    console.warn('Invalid options provided.');
    return;
  }
  actions.setWebpackConfig({
    plugins: [
      plugins.provide(options.provide)
    ]
  });
}