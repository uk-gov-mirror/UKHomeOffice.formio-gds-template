Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }


var columnLength = ctx.columns.length;
switch(columnLength) {
case 1:
columnWidth = 'govuk-grid-column-full';
break;
case 2:
columnWidth = 'govuk-grid-column-one-half';
break;
case 3:
columnWidth = 'govuk-grid-column-one-third';
break;
case 4:
columnWidth = 'govuk-grid-column-one-quarter';
break;
case 6:
columnWidth = 'govuk-grid-column-one-half';
break;
default:
console.warn('Unknown column width for converting to GDS column width: ' +  columnLength);
columnWidth = 'govuk-grid-column-full';
}
;
__p += '\n\n<div class="' +
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
__p += '\n    <div ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row" class="govuk-grid-row">\n        <div class="govuk-grid-column-full">\n            <div class="govuk-grid-row">\n                ';
 ctx.columns.forEach(function(col) { ;
__p += '\n                <div class="' +
((__t = (columnWidth)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'" data-label="' +
((__t = ( ctx.t(col.label || col.title) )) == null ? '' : __t) +
'">\n                    ';
 if (!ctx.component.hideLabel) { ;
__p += '\n                    ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\n                    ';
 } ;
__p += '\n                    ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n                </div>\n                ';
 }) ;
__p += '\n            </div>\n            <div class="govuk-grid-row govuk-!-margin-top-3">\n                <div class="govuk-grid-column-full">\n                    ';
 if (ctx.component.reorder) { ;
__p += '\n                    <button\n                            aria-label="' +
((__t = (ctx.t(ctx.component.properties['reorderItemLabel'] || 'Reorder item'))) == null ? '' : __t) +
'"\n                            type="button"\n                            title="' +
((__t = (ctx.t(ctx.component.properties['reorderItemLabel'] || 'Reorder item'))) == null ? '' : __t) +
'"\n                            class="formio-drag-button govuk-button govuk-button--secondary">\n                        ' +
((__t = (ctx.t(ctx.component.properties['reorderItemLabel'] || 'Reorder'))) == null ? '' : __t) +
'\n                    </button>\n                    ';
 } ;
__p += '\n                    ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\n                    <button aria-label="' +
((__t = (ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove item'))) == null ? '' : __t) +
'"\n                            title="' +
((__t = (ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove item'))) == null ? '' : __t) +
'"\n                            type="button"\n                            class="govuk-button govuk-button--warning" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow">\n                        ' +
((__t = (ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove'))) == null ? '' : __t) +
'\n                    </button>\n                    ';
 } ;
__p += '\n                </div>\n            </div>\n            <hr class="dataGrid-hr"/>\n        </div>\n    </div>\n    ';
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