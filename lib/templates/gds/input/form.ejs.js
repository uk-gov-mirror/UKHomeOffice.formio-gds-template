Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\n<div class="input-group">\n  ';
 } ;
__p += '\n';
 if (ctx.component.prefix) { ;
__p += '\n<div ref="prefix" class="input-prefix-tag">\n  <span>\n    ' +
((__t = (ctx.component.prefix)) == null ? '' : __t) +
'\n  </span>\n</div>\n';
 } ;
__p += '\n<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\nref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'input')) == null ? '' : __t) +
'"\nstyle="margin-bottom: 10px"\n';
 for (var attr in ctx.input.attr) { ;
__p += '\n' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t);
 if (attr==='class') { if (ctx.input.type === 'textarea'){ ;
__p += ' govuk-textarea ';
 } else { ;
__p += ' govuk-input ';
} } ;
__p += '"\n';
 } ;
__p += '\nid="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n>' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n';
 if (ctx.component.showCharCount) { ;
__p += '\n<span class="govuk-hint govuk-character-count__message" style="float:left; margin-right: 5px" ref="charcount"></span>\n';
 } ;
__p += '\n';
 if (ctx.component.showWordCount) { ;
__p += '\n<span class="govuk-hint govuk-character-count__message" style="float:left; margin-right: 5px" ref="wordcount"></span>\n';
 } ;
__p += '\n';
 if (ctx.component.suffix) { ;
__p += '\n<div class="input-suffix-tag">\n  <span>\n    ' +
((__t = (ctx.component.suffix)) == null ? '' : __t) +
'\n  </span>\n</div>\n';
 } ;
__p += '\n';
 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\n</div>\n';
 } ;

return __p
}