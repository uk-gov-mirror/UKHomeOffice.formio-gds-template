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
var utils_1 = require("formiojs/utils");
var _ = require("lodash");
var moment = require("moment");
var TimeHelper_1 = require("../util/TimeHelper");
var Field = formiojs_1.Components.components.field;
var Day = formiojs_1.Components.components.day;
// @ts-ignore
var GDSDatetimeComponent = /** @class */ (function (_super) {
    __extends(GDSDatetimeComponent, _super);
    function GDSDatetimeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeHelper = new TimeHelper_1.default();
        return _this;
    }
    Object.defineProperty(GDSDatetimeComponent.prototype, "format", {
        get: function () {
            return 'DD-MM-YYYY';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GDSDatetimeComponent.prototype, "defaultValue", {
        get: function () {
            var defaultValue = this.component.defaultValue;
            if (!defaultValue && this.component.defaultDate) {
                defaultValue = utils_1.default.getDateSetting(this.component.defaultDate);
                defaultValue = defaultValue ? moment(defaultValue).format() : '';
            }
            return defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GDSDatetimeComponent.prototype, "emptyValue", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GDSDatetimeComponent.prototype, "parts", {
        get: function () {
            return {
                day: this.getFieldValue('day'),
                month: this.getFieldValue('month'),
                year: this.getFieldValue('year'),
                hour: this.getFieldValue('hour'),
                minute: this.getFieldValue('minute'),
            };
        },
        enumerable: true,
        configurable: true
    });
    GDSDatetimeComponent.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, { hour: 'single', minute: 'single' });
        this.addEventListener(this.refs.hour, 'input', function () {
            _this.timeHelper.checkAndValidateHour(_this.refs.hour);
            _this.setPristine(false);
            _this.checkComponentValidity(_this.data, true);
            _this.updateValue(null, {
                modified: true,
            });
            _this.triggerChange();
        });
        this.addEventListener(this.refs.minute, 'input', function () {
            _this.timeHelper.checkAndValidateMinutes(_this.refs.minute);
            _this.setPristine(false);
            _this.checkComponentValidity(_this.data, true);
            _this.updateValue(null, {
                modified: true,
            });
            _this.triggerChange();
        });
        this.addEventListener(this.refs.hour, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.minute, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        if (this.shouldDisabled) {
            this.setDisabled(this.refs.hour, true);
            this.setDisabled(this.refs.minute, true);
        }
        var superAttach = _super.prototype.attach.call(this, element);
        this.addEventListener(this.refs.year, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.month, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.day, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.year, 'input', function () {
            _this.timeHelper.validateDateInput(_this.refs.year, 4);
        });
        this.addEventListener(this.refs.day, 'input', function () {
            _this.timeHelper.validateDateInput(_this.refs.day, 2);
        });
        this.addEventListener(this.refs.month, 'input', function () {
            _this.timeHelper.validateDateInput(_this.refs.month, 2);
        });
        return superAttach;
    };
    GDSDatetimeComponent.prototype.init = function () {
        _super.prototype.init.call(this);
        this.validators = this.validators.filter(function (v) { return v !== 'day'; }).concat(['date']);
        this.component.maxDate = this.component.datePicker.maxDate;
        this.component.minDate = this.component.datePicker.minDate;
        this.component.suffix = null;
        this.component.fields.day.required = this.component.validate.required;
        this.component.fields.month.required = this.component.validate.required;
        this.component.fields.year.required = this.component.validate.required;
        this.component.fields.hour = {
            type: 'number', placeholder: 'HH',
            required: this.component.validate.required,
        };
        this.component.fields.minute = {
            type: 'number', placeholder: 'MM',
            required: this.component.validate.required,
        };
    };
    GDSDatetimeComponent.prototype.setErrorClasses = function (elements, dirty, hasError) {
        // @ts-ignore
        _super.prototype.setErrorClasses.call(this, __spreadArrays([this.refs.hour, this.refs.minute], elements), dirty, hasError);
    };
    GDSDatetimeComponent.prototype.removeInputError = function (elements) {
        // @ts-ignore
        _super.prototype.removeInputError.call(this, __spreadArrays([this.refs.hour, this.refs.minute], elements));
    };
    GDSDatetimeComponent.prototype.render = function () {
        return Field.prototype.render.call(this, this.renderTemplate('datetime', {
            component: this.component,
            dataValue: this.dataValue,
            day: this.renderField('day'),
            month: this.renderTemplate('input', {
                input: this.inputDefinition('month'),
            }),
            year: this.renderField('year'),
            hour: this.renderField('hour'),
            minute: this.renderField('minute'),
        }));
    };
    GDSDatetimeComponent.prototype.getDate = function (value) {
        var defaults = [];
        var _a = [0, 1, 2, 3, 4], DAY = _a[0], MONTH = _a[1], YEAR = _a[2], HOUR = _a[3], MINUTE = _a[4];
        var defaultValue = value || this.component.defaultValue;
        if (defaultValue) {
            try {
                var defaultDate = moment(defaultValue);
                defaults[DAY] = defaultDate.format('DD');
                defaults[MONTH] = defaultDate.format('MM');
                defaults[YEAR] = defaultDate.format('YYYY');
                defaults[HOUR] = defaultDate.format('HH');
                defaults[MINUTE] = defaultDate.format('mm');
            }
            catch (e) {
                // ignored
            }
        }
        var day = this.processField('day', defaults, DAY);
        var month = this.processField('month', defaults, MONTH);
        var year = this.processField('year', defaults, YEAR);
        var hour = this.processField('hour', defaults, HOUR);
        var minute = this.processField('minute', defaults, MINUTE);
        if (!day && !month && !year && (!hour && !minute)) {
            return null;
        }
        day = day.toString().padStart(2, 0);
        month = month.toString().padStart(2, 0);
        year = year.toString().padStart(4, 0);
        hour = hour.toString().padStart(2, 0);
        minute = minute.toString().padStart(2, 0);
        var toMoment = moment(year + "-" + month + "-" + day + " " + hour + ":" + minute, 'YYYY-MM-DD HH:mm');
        return toMoment.format();
    };
    GDSDatetimeComponent.prototype.getFieldValue = function (name) {
        if (this.dataValue && this.dataValue !== 'Invalid date') {
            try {
                var val = null;
                var date = moment(this.dataValue, 'YYYY-MM-DD HH:mm');
                switch (name) {
                    case 'month':
                        val = date.format('MM');
                        break;
                    case 'day':
                        val = date.format('DD');
                        break;
                    case 'year':
                        val = date.format('YYYY');
                        break;
                    case 'hour':
                        val = date.format('HH');
                        break;
                    case 'minute':
                        val = date.format('mm');
                        break;
                }
                return val;
            }
            catch (e) {
                return null;
            }
        }
        return null;
    };
    GDSDatetimeComponent.prototype.boolValue = function (value) {
        if (_.isBoolean(value)) {
            return value;
        }
        else if (_.isString(value)) {
            return (value.toLowerCase() === 'true');
        }
        else {
            return !!value;
        }
    };
    GDSDatetimeComponent.prototype.setValueAt = function (index, value) {
        // temporary solution to avoid input reset
        // on invalid date.
        if (!value || value === 'Invalid date') {
            return;
        }
        var date = moment(value, moment.ISO_8601);
        if (date.isValid()) {
            if (this.refs.day) {
                this.refs.day.value = date.format('DD');
            }
            if (this.refs.month) {
                this.refs.month.value = date.format('MM');
            }
            if (this.refs.year) {
                this.refs.year.value = date.format('YYYY');
            }
            if (this.refs.hour) {
                this.refs.hour.value = date.format('HH');
            }
            if (this.refs.minute) {
                this.refs.minute.value = date.format('mm');
            }
        }
    };
    GDSDatetimeComponent.prototype.getValueAt = function (index) {
        // @ts-ignore
        var date = this.date;
        if (date) {
            this.refs.input[index].value = date;
            return this.refs.input[index].value;
        }
        else {
            this.refs.input[index].value = '';
            return null;
        }
    };
    GDSDatetimeComponent.prototype.normalizeValue = function (value) {
        return value;
    };
    GDSDatetimeComponent.prototype.validateRequired = function (setting, value) {
        var _a = this.parts, day = _a.day, month = _a.month, year = _a.year, minute = _a.minute, hour = _a.hour;
        if (this.component.validate.required && (!day || parseInt(day, 10) === 0)) {
            return false;
        }
        if (this.component.validate.required && (!month || parseInt(month, 10) === 0)) {
            return false;
        }
        if (this.component.validate.required && (!year || parseInt(year, 10) === 0)) {
            return false;
        }
        if (this.component.validate.required && ((this.refs.minute && this.refs.minute.value === '') || !minute)) {
            return false;
        }
        if (this.component.validate.required && ((this.refs.hour && this.refs.hour.value === '') || !hour)) {
            return false;
        }
        if (!this.boolValue(setting)) {
            return true;
        }
        return !this.isEmpty(value);
    };
    GDSDatetimeComponent.prototype.processField = function (field, defaults, fieldIndex) {
        var fieldValue = this.refs["" + field] ? parseInt(this.refs["" + field].value, 10) : undefined;
        if (fieldValue === undefined || _.isNaN(fieldValue)) {
            fieldValue = defaults[fieldIndex] && !_.isNaN(defaults[fieldIndex]) ? defaults[fieldIndex] : 0;
        }
        return fieldValue;
    };
    return GDSDatetimeComponent;
}(Day));
exports.default = GDSDatetimeComponent;
