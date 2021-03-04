Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div>\n    <input class="govuk-input govuk-input--width-2" value="' +
((__t = (ctx.hour)) == null ? '' : __t) +
'" type="number" step="1" ref="hour" placeholder="HH"/>\n    <input class="govuk-input govuk-input--width-2" value="' +
((__t = (ctx.minute)) == null ? '' : __t) +
'" type="number"  step="1" ref="minute" placeholder="MM"/>\n</div>\n';
return __p
}