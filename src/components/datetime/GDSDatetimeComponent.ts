import {Components} from 'formiojs';
import FormioUtils from 'formiojs/utils';
import * as _ from 'lodash';
import * as moment from 'moment';
import TimeHelper from '../util/TimeHelper';

const Field = Components.components.field;
const Day = Components.components.day;

// @ts-ignore
export default class GDSDatetimeComponent extends Day {

    get format() {
        return 'DD-MM-YYYY';
    }
    get defaultValue() {

        let defaultValue = this.component.defaultValue;
        if (!defaultValue && this.component.defaultDate) {
            defaultValue = FormioUtils.getDateSetting(this.component.defaultDate);
            defaultValue = defaultValue ? moment(defaultValue).format() : '';
        }
        return defaultValue;
    }

    get emptyValue() {
        return null;
    }

    get parts() {
        return {
            day: this.getFieldValue('day'),
            month: this.getFieldValue('month'),
            year: this.getFieldValue('year'),
            hour: this.getFieldValue('hour'),
            minute: this.getFieldValue('minute'),
        };
    }

    private refs: any;
    private component: any;
    private updateValue: any;
    private renderField: any;
    private inputDefinition: any;
    private checkComponentValidity: any;
    private triggerChange: any;

    private timeHelper: TimeHelper = new TimeHelper();

    public attach(element: any) {
        this.loadRefs(element, {hour: 'single', minute: 'single'});
        this.addEventListener(this.refs.hour, 'input', () => {
            this.timeHelper.checkAndValidateHour(this.refs.hour);
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {
                modified: true,
            });
            this.triggerChange();
        });

        this.addEventListener(this.refs.minute, 'input', () => {
            this.timeHelper.checkAndValidateMinutes(this.refs.minute);
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {
                modified: true,
            });
            this.triggerChange();
        });

        this.addEventListener(this.refs.hour, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.minute, 'keypress', this.timeHelper.preventNonNumericKeyPress);

        if (this.shouldDisabled) {
            this.setDisabled(this.refs.hour, true);
            this.setDisabled(this.refs.minute, true);
        }

        const superAttach = super.attach(element);

        this.addEventListener(this.refs.year, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.month, 'keypress', this.timeHelper.preventNonNumericKeyPress);
        this.addEventListener(this.refs.day, 'keypress', this.timeHelper.preventNonNumericKeyPress);

        this.addEventListener(this.refs.year, 'input', () => {
            this.timeHelper.validateDateInput(this.refs.year, 4);
        });
        this.addEventListener(this.refs.day, 'input', () => {
            this.timeHelper.validateDateInput(this.refs.day, 2);
        });
        this.addEventListener(this.refs.month, 'input', () => {
            this.timeHelper.validateDateInput(this.refs.month, 2);
        });


        return superAttach;
    }

    public init() {
        super.init();
        this.validators = this.validators.filter((v) => v !== 'day').concat(['date']);

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
    }

    public setErrorClasses(elements, dirty, hasError) {
        // @ts-ignore
        super.setErrorClasses( [this.refs.hour, this.refs.minute, ...elements], dirty, hasError);
    }

    public removeInputError(elements) {
        // @ts-ignore
        super.removeInputError([this.refs.hour, this.refs.minute, ...elements]);
    }

    public render() {
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
    }

    public getDate(value) {
        const defaults = [];
        const [DAY, MONTH, YEAR, HOUR, MINUTE] = [0, 1, 2, 3, 4];
        const defaultValue = value || this.component.defaultValue;

        if (defaultValue) {
            try {
                const defaultDate = moment(defaultValue);
                defaults[DAY] = defaultDate.format('DD');
                defaults[MONTH] = defaultDate.format('MM');
                defaults[YEAR] = defaultDate.format('YYYY');
                defaults[HOUR] = defaultDate.format('HH');
                defaults[MINUTE] = defaultDate.format('mm');
            } catch (e) {
                // ignored
            }
        }

        let day: any = this.processField('day', defaults, DAY);
        let month: any = this.processField('month', defaults, MONTH);
        let year: any = this.processField('year', defaults, YEAR);
        let hour: any = this.processField('hour', defaults, HOUR);
        let minute: any = this.processField('minute', defaults, MINUTE);

        if (!day && !month && !year && (!hour && !minute)) {
            return null;
        }

        day = day.toString().padStart(2, 0);
        month = month.toString().padStart(2, 0);
        year = year.toString().padStart(4, 0);
        hour = hour.toString().padStart(2, 0);
        minute = minute.toString().padStart(2, 0);

        const toMoment = moment(`${year}-${month}-${day} ${hour}:${minute}`, 'YYYY-MM-DD HH:mm');
        return toMoment.format();
    }

    public getFieldValue(name) {
        if (this.dataValue && this.dataValue !== 'Invalid date') {
            try {
                let val = null;
                const date = moment(this.dataValue, 'YYYY-MM-DD HH:mm');

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
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    public boolValue(value) {
        if (_.isBoolean(value)) {
            return value;
        }
        else if (_.isString(value)) {
            return (value.toLowerCase() === 'true');
        }
        else {
            return !!value;
        }
    }
    public setValueAt(index, value) {
        // temporary solution to avoid input reset
        // on invalid date.
        if (!value || value === 'Invalid date') {
            return;
        }
        const date = moment(value, moment.ISO_8601);
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

    }

    public getValueAt(index) {
        // @ts-ignore
        const date = this.date;
        if (date) {
            this.refs.input[index].value = date;
            return this.refs.input[index].value;
        }
        else {
            this.refs.input[index].value = '';
            return null;
        }
    }

    public normalizeValue(value) {
        return value;
    }

    public validateRequired(setting, value) {
        const {day, month, year, minute, hour} = this.parts;

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
    }

    private processField(field: string, defaults: any[], fieldIndex: number) {
        let fieldValue = this.refs[`${field}`] ? parseInt(this.refs[`${field}`].value, 10) : undefined;
        if (fieldValue === undefined || _.isNaN(fieldValue)) {
            fieldValue = defaults[fieldIndex] && !_.isNaN(defaults[fieldIndex]) ? defaults[fieldIndex] : 0;
        }
        return fieldValue;

    }

}
