var path = require('path');

filePath = '/Users/esn/test.pdf'

exports.getFileName = function () {
    var fileName = path.basename(filePath);
    console.log("File name: " + fileName);
}

exports.getDirName = function () {
    var dirName = path.dirname(filePath);
    console.log("Dir name: " + dirName);

}

exports.getFileExt = function () {
    var fileExt = path.extname(filePath);
    console.log("File extension: " + fileExt);
}

// isAbsolute()
// join() https://nodejs.org/api/path.html#path_path_join_paths
// resolve()
// cross platform
// parse() parse a path into object (self work) https://nodejs.org/api/path.html#path_path_join_paths
// format https://nodejs.org/api/path.html#path_path_format_pathobject


