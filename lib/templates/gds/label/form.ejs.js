Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<label\n    class="\n        govuk-label\n        ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'\n        ';
 if (ctx.label.hidden) { ;
__p += ' govuk-visually-hidden';
 } ;
__p += '\n    "\n    for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n>\n    ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\n</label>\n';
return __p
}