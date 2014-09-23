var exec = require('child_process').exec;
var cmd = ''

module.exports = function(callback) {
  console.log('running script 0.0.6.js')
  cmd += 'cd /root/Fido;'
  cmd += 'git remote add fidoserver https://github.com/fidoserver/Fido.git;'
  cmd += 'cd /root/Fido; git fetch fidoserver; git fetch fidoserver --tags; git checkout fidoserver/master; git checkout 0.0.6;'
  exec(cmd, function(error, stdout, stderr) {
    console.log(error + " :::: " + stdout + " :::: " + stderr) 
    callback()
  })
}
