Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-checkboxes">\n    ';
 ctx.values.forEach(function(item) { ;
__p += '\n    <div class="govuk-checkboxes__item" ref="wrapper">\n        <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n        ref="input"\n        ';
 for (var attr in ctx.input.attr) { ;
__p += '\n        ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
' ';
 if (attr==='class') { ;
__p += ' govuk-checkboxes__input ';
 } ;
__p += '"\n        ';
 } ;
__p += '\n        value="' +
((__t = (item.value)) == null ? '' : __t) +
'"\n        ';
 if (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value])) { ;
__p += '\n        checked=true\n        ';
 } ;
__p += '\n        id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'"\n        >\n        <label class="govuk-label govuk-checkboxes__label" for="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'">\n            <span>' +
((__t = (ctx.t(item.label))) == null ? '' : __t) +
'</span>\n        </label>\n    </div>\n    ';
 }) ;
__p += '\n</div>\n';
return __p
}