"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchTable;
function searchTable(table, input) {
  var data = table;
  data = data.filter(function (item) {
    return Object.keys(item).some(function (key) {
      return item[key].toLowerCase().includes(input.toLowerCase());
    });
  });
  return data;
}
