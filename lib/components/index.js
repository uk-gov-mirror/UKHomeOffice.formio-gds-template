"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GDSDataMap_1 = require("./datamap/GDSDataMap");
var GDSDatetimeComponent_1 = require("./datetime/GDSDatetimeComponent");
var GDSCheckBoxes_1 = require("./selectboxes/GDSCheckBoxes");
var GDSTimeComponent_1 = require("./time/GDSTimeComponent");
exports.default = {
    datamap: GDSDataMap_1.default,
    datetime: GDSDatetimeComponent_1.default,
    selectboxes: GDSCheckBoxes_1.default,
    time: GDSTimeComponent_1.default,
};
