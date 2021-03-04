Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="govuk-table ' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'">\n    ';
 if (ctx.component.header && ctx.component.header.length > 0) { ;
__p += '\n    <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n        ';
 ctx.component.header.forEach(function(header) { ;
__p += '\n        <th scope="col" class="govuk-table__header">' +
((__t = (ctx.t(header))) == null ? '' : __t) +
'</th>\n        ';
 }) ;
__p += '\n    </tr>\n    </thead>\n    ';
 } ;
__p += '\n    <tbody class="govuk-table__body">\n    ';
 ctx.tableComponents.forEach(function(row, rowIndex) { ;
__p += '\n    <tr class="govuk-table__row" ref="row-' +
((__t = (ctx.id)) == null ? '' : __t) +
'">\n        ';
 row.forEach(function(column, colIndex) { ;
__p += '\n        <td class="govuk-table__cell" ref="' +
((__t = (ctx.tableKey)) == null ? '' : __t) +
'-' +
((__t = (rowIndex)) == null ? '' : __t) +
'"';
 if (ctx.cellClassName) { ;
__p += ' class="' +
((__t = (ctx.cellClassName)) == null ? '' : __t) +
' govuk-table__cell"';
 } ;
__p += '>' +
((__t = (column)) == null ? '' : __t) +
'</td>\n        ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n    </tbody>\n</table>\n';
return __p
}