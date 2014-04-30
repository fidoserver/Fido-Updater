var exec = require('child_process').exec;
var cmd = ''
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function(callback) {
  console.log('running test 2')
  cmd='touch /root/test2.txt'
  exec(cmd, function() {
    callback()
  })
}
