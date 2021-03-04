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
var SelectBoxes = formiojs_1.Components.components.selectboxes;
var GDSCheckBoxes = /** @class */ (function (_super) {
    __extends(GDSCheckBoxes, _super);
    function GDSCheckBoxes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GDSCheckBoxes.prototype.render = function () {
        // @ts-ignore
        return Field.prototype.render.call(this, this.renderTemplate('selectboxes', {
            // @ts-ignore
            input: this.inputInfo,
            // @ts-ignore
            inline: this.component.inline,
            // @ts-ignore
            values: this.component.values,
            // @ts-ignore
            value: this.dataValue,
            // @ts-ignore
            row: this.row,
        }));
    };
    return GDSCheckBoxes;
}(SelectBoxes));
exports.default = GDSCheckBoxes;
