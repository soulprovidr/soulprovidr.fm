const chalk = require('chalk');

function log(text) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${text}`);
}

module.exports = watchDir => {
  const chokidar = require('chokidar');
  const watcher = chokidar.watch(`./${watchDir}/**`, { cwd: __dirname });
  const watchRegex = new RegExp(`${__dirname}/${watchDir}\/`);
  watcher.on('ready', () => {
    watcher.on('all', () => {
      log(chalk.bold('Clearing module cache...'));
      Object.keys(require.cache).forEach(id => {
        if (watchRegex.test(id)) {
          log(`Reloading ${id}`);
          delete require.cache[id];
        }
      });
      log(chalk.bold.green('Module cache cleared.\n'));
    });
  });
}