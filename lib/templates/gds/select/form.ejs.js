Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<select ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'selectContainer')) == null ? '' : __t) +
'"\n        ' +
((__t = ( ctx.input.multiple ? 'multiple' : '' )) == null ? '' : __t) +
'\n';
 for (var attr in ctx.input.attr) { ;
__p += '\n' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t);
 if (attr==='class') { ;
__p += ' govuk-select ';
 } ;
__p += '"\n';
 } ;
__p += '\n>' +
((__t = (ctx.selectOptions)) == null ? '' : __t) +
'</select>';
return __p
}