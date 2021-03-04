export default class TimeHelper {
    static MAX_LENGTH: number;
    checkAndValidateMinutes(element: any): void;
    checkAndValidateHour(element: any): void;
    preventNonNumericKeyPress(evt: any): void;
    validateDateInput(element: any, length: number): void;
}
