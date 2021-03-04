"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var Field = formiojs_1.Components.components.field;
var DataMap = formiojs_1.Components.components.datamap;
var GDSDataMap = /** @class */ (function (_super) {
    __extends(GDSDataMap, _super);
    function GDSDataMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GDSDataMap.prototype.render = function () {
        var columns = this.getColumns();
        return Field.prototype.render.call(this, this.renderTemplate('datamap', {
            rows: this.getRows(),
            columns: columns,
            groups: this.hasRowGroups() ? this.getGroups() : [],
            visibleColumns: this.visibleColumns,
            hasAddButton: this.hasAddButton(),
            hasRemoveButtons: this.hasRemoveButtons(),
            hasTopSubmit: this.hasTopSubmit(),
            hasBottomSubmit: this.hasBottomSubmit(),
            numColumns: columns.length + (this.hasExtraColumn() ? 1 : 0),
            datagridKey: this.datagridKey,
            allowReorder: this.allowReorder,
            builder: this.builderMode,
        }));
    };
    return GDSDataMap;
}(DataMap));
exports.default = GDSDataMap;
