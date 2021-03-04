Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-grid-row">\n    <div class="govuk-grid-column-three-quarters">\n        <div class="govuk-grid-row">\n            <div class="govuk-grid-column-one-half">\n                <div class="govuk-date-input">\n                    <div class="govuk-date-input__item">\n                        <div class="govuk-form-group">\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n                            ';
 } ;
__p += '\n                            <div>' +
((__t = (ctx.day)) == null ? '' : __t) +
'</div>\n                        </div>\n                    </div>\n                    <div class="govuk-date-input__item">\n                        <div class="govuk-form-group">\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\n                            ';
 } ;
__p += '\n                            <div>' +
((__t = (ctx.month)) == null ? '' : __t) +
'</div>\n                        </div>\n                    </div>\n                    <div class="govuk-date-input__item">\n                        <div class="govuk-form-group">\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\n                            ';
 } ;
__p += '\n                            <div>' +
((__t = (ctx.year)) == null ? '' : __t) +
'</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="govuk-grid-column-one-half">\n                <div class="govuk-date-input">\n                    <div class="govuk-date-input__item">\n                        <div class="govuk-form-group">\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-hour"\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Hour'))) == null ? '' : __t) +
'</label>\n                            ';
 } ;
__p += '\n                            <div>' +
((__t = (ctx.hour)) == null ? '' : __t) +
'</div>\n                        </div>\n                    </div>\n                    <div class="govuk-date-input__item">\n                        <div class="govuk-form-group">\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-minute"\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Minute'))) == null ? '' : __t) +
'</label>\n                            ';
 } ;
__p += '\n                            <div>' +
((__t = (ctx.minute)) == null ? '' : __t) +
'</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<input name="data[dateTime]" type="hidden" class="form-control" lang="en" value="' +
((__t = (ctx.dataValue)) == null ? '' : __t) +
'" ref="input">\n';
return __p
}