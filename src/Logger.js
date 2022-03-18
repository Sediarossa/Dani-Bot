const fs = require("fs");
const logFilePath = "./logs/latest";
require("colors");

function Info(text) {
    console.log(text.white);
}
function Success(text) {
    console.log(text.brightGreen);
}
function Warning(text) {
    console.log(text.yellow);
}
function Error(text) {
    console.log(text.brightRed);
}

exports.Info = Info;
exports.Success = Success;
exports.Warning = Warning;
exports.Error = Error;
