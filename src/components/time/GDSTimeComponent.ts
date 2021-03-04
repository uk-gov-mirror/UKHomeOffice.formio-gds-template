import {Components} from 'formiojs';
import * as moment from 'moment';
import TimeHelper from '../util/TimeHelper';

const Field = Components.components.field;
const Time = Components.components.time;

// @ts-ignore
export default class GDSTimeComponent extends Time {
    public static MAX_LENGTH = 2;

    private refs: any;
    private component: any;
    private loadRefs: any;
    private checkComponentValidity: any;
    private updateValue: any;

    private timeHelper: TimeHelper = new TimeHelper();

    public attach(element) {
        this.loadRefs(element, {
            hour: 'single',
            minute: 'single',
        });

        this.addEventListener(this.refs.hour, 'input', () => {
            this.timeHelper.checkAndValidateHour(this.refs.hour);
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {modified: true});
        });

        this.addEventListener(this.refs.minute, 'input', () => {
            this.timeHelper.checkAndValidateMinutes(this.refs.minute);
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {modified: true});
        });

        this.addEventListener(this.refs.hour, 'keypress', (evt) => {
            this.timeHelper.preventNonNumericKeyPress(evt);
        });

        this.addEventListener(this.refs.minute, 'keypress', (evt) => {
            this.timeHelper.preventNonNumericKeyPress(evt);
        });
        return super.attach(element);
    }

    public setErrorClasses(elements, dirty, hasError) {
        // @ts-ignore
        super.setErrorClasses( [this.refs.hour, this.refs.minute, ...elements], dirty, hasError);
    }

    // @ts-ignore
    public addInputError(message: any, dirty: boolean, element: any): void {
        // @ts-ignore
        super.addInputError(message, dirty, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        super.addInputError(message, dirty, element);
    }

    public removeInputError(elements) {
        // @ts-ignore
        super.removeInputError([this.refs.hour, this.refs.minute]);
        // @ts-ignore
        super.removeInputError(elements);
    }

    public getValue() {
        if (!this.refs.hour.value || !this.refs.minute.value) {
            return '';
        }
        const value = `${this.refs.hour.value}:${this.refs.minute.value}`;
        return moment(value, this.component.format).format(this.component.dataFormat);
    }

    public setValue(value: any, flags: any) {

        if (this.refs.hour && this.refs.minute && value) {
            const parts = value.split(':');
            this.refs.hour.value = parts[0];
            this.refs.minute.value = parts[1];
            return true;
        }
        return false;
    }

    public render() {
        return Field.prototype.render.call(this, this.renderTemplate('time', {
            hour: super.getValue().split(':')[0],
            minute: super.getValue().split(':')[1],
        }));
    }
}
