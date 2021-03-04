Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-accordion gov-accordion-no-bottom ' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'"  data-module="govuk-accordion" id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\n    ';
 if (ctx.component.collapsible) { ;
__p += '\n    <div class="govuk-accordion__section ' +
((__t = (!ctx.collapsed ? 'govuk-accordion__section--expanded': '')) == null ? '' : __t) +
'">\n        <div class="govuk-accordion__section-header" ref="header">\n            <h2 class="govuk-accordion__section-heading">\n                <span class="govuk-accordion__section-button" id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading">\n                   ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\n                </span>\n                <span class="govuk-accordion__icon"></span>\n            </h2>\n        </div>\n        ';
 if (!ctx.collapsed ) { ;
__p += '\n        <div id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-content"\n             aria-labelledby="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading"\n             class="govuk-accordion__section-content" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\n            ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n        </div>\n        ';
 } ;
__p += '\n    </div>\n    ';
 } else { ;
__p += '\n    <div class="govuk-accordion__section govuk-accordion__section--expanded">\n        <div class="govuk-accordion__section-header" ref="header">\n            <h2 class="govuk-accordion__section-heading">\n                <span class="govuk-accordion__section-button" id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading">\n                   ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\n                </span>\n            </h2>\n        </div>\n        <div class="govuk-accordion__section-content"\n             id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-content"\n             aria-labelledby="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading"\n             ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\n            ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n        </div>\n    </div>\n    ';
 } ;
__p += '\n</div>\n';
return __p
}