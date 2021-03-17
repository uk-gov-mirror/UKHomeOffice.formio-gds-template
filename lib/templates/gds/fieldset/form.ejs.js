Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="govuk-fieldset">\n    <legend ref="header" class="govuk-fieldset__legend govuk-fieldset__legend--m">\n        ' +
((__t = (ctx.t(ctx.component.legend))) == null ? '' : __t) +
'\n        ';
 if (ctx.component.tooltip) { ;
__p += '\n        <details class="govuk-details" style="margin-top: 5px" data-module="govuk-details">\n            <summary class="govuk-details__summary">\n                        <span class="govuk-details__summary-text">\n                          ' +
((__t = (ctx.component.tooltipTitle || 'Help')) == null ? '' : __t) +
'\n                        </span>\n            </summary>\n            <div class="govuk-details__text">\n                ' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'\n            </div>\n        </details>\n        ';
 } ;
__p += '\n    </legend>\n    ';
 if (!ctx.collapsed) { ;
__p += '\n    <div ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n    </div>\n    ';
 } ;
__p += '\n</fieldset>';
return __p
}