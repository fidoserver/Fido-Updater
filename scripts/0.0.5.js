var exec = require('child_process').exec;
var cmd = ''

module.exports = function(callback) {
  console.log('running script 0.0.5.js')
  cmd += 'cd /root/Fido-Updater/scripts; '
  cmd += 'chmod +x 0.0.5.sh; '
  cmd += './0.0.5.sh; '
  exec(cmd, function(error, stdout, stderr) {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
    callback()
  })
}
