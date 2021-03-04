Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-grid-row">\n    ';
 ctx.columns.forEach(function(col) { ;
__p += '\n    <div class="govuk-grid-column-one-half">\n       <span class="govuk-body govuk-!-font-weight-bold"> ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'</span>\n    </div>\n    ';
 }) ;
__p += '\n</div>\n<hr class="dataGrid-hr"/>\n<div class="' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-tbody">\n    ';
 if (ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\n    <button class="govuk-button govuk-button--secondary"\n            aria-label="' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'"\n            ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\n    </button>\n    ';
 } ;
__p += '\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\n    <div class="govuk-grid-row" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row">\n        ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <div class="govuk-grid-column-one-half" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'"\n             data-label="' +
((__t = ( ctx.t(col.label || col.title) )) == null ? '' : __t) +
'">\n            ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n        </div>\n        ';
 }) ;
__p += '\n    </div>\n    <div class="govuk-grid-row">\n        <div class="govuk-grid-column-full">\n            ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\n            <button aria-label="Remove item" title="Remove item" type="button"\n                    class="govuk-button govuk-button--warning" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow">\n                ' +
((__t = (ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove'))) == null ? '' : __t) +
'\n            </button>\n            ';
 } ;
__p += '\n        </div>\n    </div>\n    <hr class="dataGrid-hr"/>\n    ';
 }) ;
__p += '\n    ';
 if (ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\n    <button class="govuk-button govuk-button--secondary"\n            aria-label="' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'"\n            ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\n    </button>\n    ';
 } ;
__p += '\n</div>\n\n';
return __p
}