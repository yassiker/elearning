var xlsx = require("xlsx");

var wb = xlsx.readFile("LexIDs.xlsx");

var ws = wb.Sheets["Sheet1"];

var data = xlsx.utils.sheet_to_json(ws);
var data2 = xlsx.utils.sheet_to_csv(ws);
console.log(data);
// run node script.js
