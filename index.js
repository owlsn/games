export = module.export = {}

var info = require('./lib/info.js')
var file = require('./lib/file.js')

export.info = info.log;
export.writeFile = file.writeFile;
export.readFile = file.readFile;
