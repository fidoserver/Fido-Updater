var exec = require('child_process').exec;
var cmd = ''

module.exports = function(callback) {
  console.log('running script 0.0.6.1.js')
  cmd += 'cd /root/Fido;'
  cmd += 'cd /root/Fido; git fetch fidoserver; git fetch fidoserver --tags; git checkout fidoserver/master; git checkout 0.0.6.1;'
  exec(cmd, function(error, stdout, stderr) {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
    callback()
  })
}
