Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-date-input">\n    ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\n    <div class="govuk-date-input__item">\n        <div class="govuk-form-group">\n            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n                   class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '">' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n            ';
 } ;
__p += '\n            <div>' +
((__t = (ctx.day)) == null ? '' : __t) +
'</div>\n        </div>\n    </div>\n    ';
 } ;
__p += '\n    ';
 if (ctx.showMonth) { ;
__p += '\n    <div class="govuk-date-input__item">\n        <div class="govuk-form-group">\n            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\n                   class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.month.required) { ;
__p += 'field-required';
 } ;
__p += '">' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\n            ';
 } ;
__p += '\n            <div>' +
((__t = (ctx.month)) == null ? '' : __t) +
'</div>\n        </div>\n    </div>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\n    <div class="govuk-date-input__item">\n        <div class="govuk-form-group">\n            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n                   class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '">' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n            ';
 } ;
__p += '\n            <div>' +
((__t = (ctx.day)) == null ? '' : __t) +
'</div>\n        </div>\n    </div>\n    ';
 } ;
__p += '\n    ';
 if (ctx.showYear) { ;
__p += '\n    <div class="govuk-date-input__item">\n        <div class="govuk-form-group">\n            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\n                   class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.year.required) { ;
__p += 'field-required';
 } ;
__p += '">' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\n            ';
 } ;
__p += '\n            <div>' +
((__t = (ctx.year)) == null ? '' : __t) +
'</div>\n        </div>\n    </div>\n    ';
 } ;
__p += '\n</div>\n<input name="data[day]" type="hidden" class="form-control" lang="en" value="" ref="input">\n';
return __p
}