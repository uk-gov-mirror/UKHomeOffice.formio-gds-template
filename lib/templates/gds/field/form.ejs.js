Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.label.labelPosition !== 'bottom') { ;
__p += '\n' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n';
 if (ctx.component.description) { ;
__p += '\n<div class="govuk-hint">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</div>\n';
 } ;
__p += '\n<div ref="messageContainer" class="govuk-error-message"></div>\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n';
 if (ctx.component.tooltip) { ;
__p += '\n<details class="govuk-details" style="margin-top: 5px" data-module="govuk-details">\n    <summary class="govuk-details__summary">\n                        <span class="govuk-details__summary-text">\n                          ' +
((__t = (ctx.component.tooltipTitle || 'Help')) == null ? '' : __t) +
'\n                        </span>\n    </summary>\n    <div class="govuk-details__text">\n        ' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'\n    </div>\n</details>\n';
 } ;
__p += '\n';
 if (ctx.label.labelPosition === 'bottom') { ;
__p += '\n' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n';
return __p
}