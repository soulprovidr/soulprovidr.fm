const http = require('http');
const Queue = require('./queue');

if (process.argv.length <= 2) {
  console.error('No data provided');
  process.exit(0);
}

try {
  const metadata = JSON.parse(process.argv[2]);
  Queue.createJob(metadata).save();
} catch (e) {
  process.exit(0);
}