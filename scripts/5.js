var exec = require('child_process').exec;
var cmd = ''
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function(callback) {
  console.log('running script 5.js')
  cmd='service fido stop; sleep 10s; service fido start; sleep 10s;'
  exec(cmd, function() {
    callback()
  })
}
