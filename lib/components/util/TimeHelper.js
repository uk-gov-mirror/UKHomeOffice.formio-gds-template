"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeHelper = /** @class */ (function () {
    function TimeHelper() {
    }
    TimeHelper.prototype.checkAndValidateMinutes = function (element) {
        if (element.value) {
            if (element.value.length > TimeHelper.MAX_LENGTH) {
                element.value = element.value.slice(0, 2);
            }
            var minuteAsNumber = parseInt(element.value, 10);
            if (minuteAsNumber > 59) {
                element.value = '59';
            }
            if (minuteAsNumber < 0) {
                element.value = '00';
            }
        }
    };
    TimeHelper.prototype.checkAndValidateHour = function (element) {
        if (element.value) {
            if (element.value.length > TimeHelper.MAX_LENGTH) {
                element.value = element.value.slice(0, 2);
            }
            var hourAsNumber = parseInt(element.value, 10);
            if (hourAsNumber > 23) {
                element.value = '23';
            }
            if (hourAsNumber < 0) {
                element.value = '00';
            }
        }
    };
    TimeHelper.prototype.preventNonNumericKeyPress = function (evt) {
        if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    };
    TimeHelper.prototype.validateDateInput = function (element, length) {
        if (element.value && element.value.length > length) {
            element.value = element.value.slice(0, length);
        }
    };
    TimeHelper.MAX_LENGTH = 2;
    return TimeHelper;
}());
exports.default = TimeHelper;
