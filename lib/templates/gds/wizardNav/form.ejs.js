Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-nav">\n    ';
 if (ctx.buttons.cancel) { ;
__p += '\n    <button class="govuk-button govuk-button--secondary" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-cancel">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n    ';
 } ;
__p += '\n    ';
 if (ctx.buttons.previous) { ;
__p += '\n    <button class="govuk-button " ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-previous">' +
((__t = (ctx.t('previous'))) == null ? '' : __t) +
'</button>\n    ';
 } ;
__p += '\n    ';
 if (ctx.buttons.next) { ;
__p += '\n    <button class="govuk-button" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-next">' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
'</button>\n    ';
 } ;
__p += '\n    ';
 if (ctx.buttons.submit) { ;
__p += '\n    <button class="govuk-button" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button>\n    ';
 } ;
__p += '\n</div>';
return __p
}