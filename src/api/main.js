const fs = require('fs');
const Queue = require('./queue');

while (true) {
  Queue.process((job, done) => {
    fs.writeFileSync('./metadata.txt', job.data, 'utf8');
    return done();
  });
}