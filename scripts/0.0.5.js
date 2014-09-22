var exec = require('child_process').exec;
var cmd = ''
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function(callback) {
  console.log('running script 0.0.5.js')
  cmd += 'cd /root/Fido-Updater/Scripts; '
  cmd += 'chmod +x 0.0.5.sh; '
  cmd += './0.0.5.sh; '
  cmd += 'cd /root/Fido; git pull origin master; git fetch --tags; git checkout master; git checkout 0.0.5;'
  exec(cmd, function() {
    callback()
  })
}
