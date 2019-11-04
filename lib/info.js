var file = require('./file')
// var config = require('./config')
module.exports = {
  file: function (path, data) {
    return file.writeFile(path, data)
  },
  log: function (data) {
    console.log(data)
    return data
  }
}
