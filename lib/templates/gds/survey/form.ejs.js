Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="govuk-table">\n    <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n        <th class="govuk-table__header"></th>\n        ';
 ctx.component.values.forEach(function(value) { ;
__p += '\n        <th class="govuk-table__header">' +
((__t = (ctx.t(value.label))) == null ? '' : __t) +
'</th>\n        ';
 }) ;
__p += '\n    </tr>\n    </thead>\n    <tbody class="govuk-table__body">\n    ';
 ctx.component.questions.forEach(function(question) { ;
__p += '\n    <tr class="govuk-table__row">\n        <td class="govuk-table__header">' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'</td>\n        ';
 ctx.component.values.forEach(function(value) { ;
__p += '\n        <td class="govuk-table__cell">\n            <div class="govuk-radios__item">\n                <input class="govuk-radios__input" type="radio" name="' +
((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +
'"\n                       value="' +
((__t = (value.value)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'" ref="input">\n                <label class="govuk-label govuk-radios__label" for="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'">\n                </label>\n            </div>\n        </td>\n        ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n    </tbody>\n</table>\n';
return __p
}