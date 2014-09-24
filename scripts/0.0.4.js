var exec = require('child_process').exec;
var cmd = ''

module.exports = function(callback) {
  console.log('running script 0.0.4.js')
  cmd += 'cd /root; '
  cmd += 'git clone https://github.com/padelt/temper-python.git; '
  cmd += 'cd temper-python; '
  cmd += 'sudo apt-get install python-usb; '
  cmd += 'sudo python setup.py install; '
  cmd += 'cd /root/Fido; git pull origin master; git fetch --tags; git checkout master; git checkout 0.0.4;'
  exec(cmd, function(error, stdout, stderr) {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
    callback()
  })
}
