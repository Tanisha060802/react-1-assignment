"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortTable;
function sortTable(table, sortOrder, sortField) {
  var data = table;
  var reversed = sortOrder === 'asc' ? 1 : -1;
  data = data.sort(function (a, b) {
    return reversed * a[sortField].localeCompare(b[sortField]);
  });
  return data;
}
