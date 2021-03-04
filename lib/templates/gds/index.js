"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("./button");
var checkbox_1 = require("./checkbox");
var columns_1 = require("./columns");
var component_1 = require("./component");
var container_1 = require("./container");
var cssClasses_1 = require("./cssClasses");
var datagrid_1 = require("./datagrid");
var datamap_1 = require("./datamap");
var datetime_1 = require("./datetime");
var day_1 = require("./day");
var editgrid_1 = require("./editgrid");
var field_1 = require("./field");
var file_1 = require("./file");
var fieldset_1 = require("./fieldset");
var iconClass_1 = require("./iconClass");
var input_1 = require("./input");
var label_1 = require("./label");
var message_1 = require("./message");
var panel_1 = require("./panel");
var radio_1 = require("./radio");
var select_1 = require("./select");
var selectboxes_1 = require("./selectboxes");
var selectOption_1 = require("./selectOption");
var survey_1 = require("./survey");
var tab_1 = require("./tab");
var table_1 = require("./table");
require("./template.css");
var time_1 = require("./time");
var warning_1 = require("./warning");
var wizard_1 = require("./wizard");
var wizardHeader_1 = require("./wizardHeader");
var wizardNav_1 = require("./wizardNav");
exports.default = {
    transform: function (type, text) {
        if (!text) {
            return text;
        }
        if (type === 'class') {
            return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
        }
        return text;
    },
    defaultIconset: 'fa',
    iconClass: iconClass_1.default,
    cssClasses: cssClasses_1.default,
    button: button_1.default,
    checkbox: checkbox_1.default,
    columns: columns_1.default,
    component: component_1.default,
    container: container_1.default,
    datetime: datetime_1.default,
    day: day_1.default,
    datagrid: datagrid_1.default,
    datamap: datamap_1.default,
    input: input_1.default,
    editgrid: editgrid_1.default,
    field: field_1.default,
    file: file_1.default,
    fieldset: fieldset_1.default,
    label: label_1.default,
    message: message_1.default,
    panel: panel_1.default,
    radio: radio_1.default,
    select: select_1.default,
    selectboxes: selectboxes_1.default,
    selectOption: selectOption_1.default,
    survey: survey_1.default,
    table: table_1.default,
    tab: tab_1.default,
    time: time_1.default,
    warning: warning_1.default,
    wizard: wizard_1.default,
    wizardHeader: wizardHeader_1.default,
    wizardNav: wizardNav_1.default,
};
