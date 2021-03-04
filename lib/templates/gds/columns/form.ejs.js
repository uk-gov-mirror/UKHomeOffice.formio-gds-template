Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.columns.forEach(function(column, index) {
var columnWidth;
switch(column.width) {
case 3:
columnWidth = 'govuk-grid-column-one-third';
break;
case 4:
columnWidth = 'govuk-grid-column-one-quarter';
break;
case 6:
columnWidth = 'govuk-grid-column-one-half';
break;
case 8:
columnWidth = 'govuk-grid-column-two-thirds';
break;
case 9:
columnWidth = 'govuk-grid-column-three-quarters';
break;
default:
console.warn('Unknown column width for converting to GDS column width: ' +  column.width);
columnWidth = 'govuk-grid-column-full';
}

;
__p += '\n<div class="' +
((__t = (columnWidth)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.columnKey)) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.columnComponents[index])) == null ? '' : __t) +
'\n</div>\n';
 }) ;
__p += '\n';
return __p
}