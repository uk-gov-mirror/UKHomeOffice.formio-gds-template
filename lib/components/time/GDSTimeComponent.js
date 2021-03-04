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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var moment = require("moment");
var TimeHelper_1 = require("../util/TimeHelper");
var Field = formiojs_1.Components.components.field;
var Time = formiojs_1.Components.components.time;
// @ts-ignore
var GDSTimeComponent = /** @class */ (function (_super) {
    __extends(GDSTimeComponent, _super);
    function GDSTimeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeHelper = new TimeHelper_1.default();
        return _this;
    }
    GDSTimeComponent.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, {
            hour: 'single',
            minute: 'single',
        });
        this.addEventListener(this.refs.hour, 'input', function () {
            _this.timeHelper.checkAndValidateHour(_this.refs.hour);
            _this.setPristine(false);
            _this.checkComponentValidity(_this.data, true);
            _this.updateValue(null, { modified: true });
        });
        this.addEventListener(this.refs.minute, 'input', function () {
            _this.timeHelper.checkAndValidateMinutes(_this.refs.minute);
            _this.setPristine(false);
            _this.checkComponentValidity(_this.data, true);
            _this.updateValue(null, { modified: true });
        });
        this.addEventListener(this.refs.hour, 'keypress', function (evt) {
            _this.timeHelper.preventNonNumericKeyPress(evt);
        });
        this.addEventListener(this.refs.minute, 'keypress', function (evt) {
            _this.timeHelper.preventNonNumericKeyPress(evt);
        });
        return _super.prototype.attach.call(this, element);
    };
    GDSTimeComponent.prototype.setErrorClasses = function (elements, dirty, hasError) {
        // @ts-ignore
        _super.prototype.setErrorClasses.call(this, __spreadArrays([this.refs.hour, this.refs.minute], elements), dirty, hasError);
    };
    // @ts-ignore
    GDSTimeComponent.prototype.addInputError = function (message, dirty, element) {
        // @ts-ignore
        _super.prototype.addInputError.call(this, message, dirty, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        _super.prototype.addInputError.call(this, message, dirty, element);
    };
    GDSTimeComponent.prototype.removeInputError = function (elements) {
        // @ts-ignore
        _super.prototype.removeInputError.call(this, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        _super.prototype.removeInputError.call(this, elements);
    };
    GDSTimeComponent.prototype.getValue = function () {
        if (!this.refs.hour.value || !this.refs.minute.value) {
            return '';
        }
        var value = this.refs.hour.value + ":" + this.refs.minute.value;
        return moment(value, this.component.format).format(this.component.dataFormat);
    };
    GDSTimeComponent.prototype.setValue = function (value, flags) {
        if (this.refs.hour && this.refs.minute && value) {
            var parts = value.split(':');
            this.refs.hour.value = parts[0];
            this.refs.minute.value = parts[1];
            return true;
        }
        return false;
    };
    GDSTimeComponent.prototype.render = function () {
        return Field.prototype.render.call(this, this.renderTemplate('time', {
            hour: _super.prototype.getValue.call(this).split(':')[0],
            minute: _super.prototype.getValue.call(this).split(':')[1],
        }));
    };
    GDSTimeComponent.MAX_LENGTH = 2;
    return GDSTimeComponent;
}(Time));
exports.default = GDSTimeComponent;
