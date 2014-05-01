var exec = require('child_process').exec;
var cmd = ''
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function(callback) {
  console.log('running test 3')
  cmd='touch /root/test3.txt'
  exec(cmd, function() {
    callback()
  })
}
