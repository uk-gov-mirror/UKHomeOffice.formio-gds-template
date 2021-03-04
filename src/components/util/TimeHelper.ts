export default class TimeHelper {

    public static MAX_LENGTH = 2;

    public checkAndValidateMinutes(element: any): void {
        if (element.value) {
            if (element.value.length > TimeHelper.MAX_LENGTH) {
                element.value = element.value.slice(0, 2);
            }
            const minuteAsNumber = parseInt(element.value, 10);
            if (minuteAsNumber > 59) {
                element.value = '59';
            }
            if (minuteAsNumber < 0) {
                element.value = '00';
            }
        }
    }

    public checkAndValidateHour(element: any): void {

        if (element.value) {
            if (element.value.length > TimeHelper.MAX_LENGTH) {
                element.value = element.value.slice(0, 2);
            }

            const hourAsNumber = parseInt(element.value, 10);
            if (hourAsNumber > 23) {
                element.value = '23';
            }
            if (hourAsNumber < 0) {
                element.value = '00';
            }
        }
    }

    public preventNonNumericKeyPress(evt: any) {
        if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    }

    validateDateInput(element: any, length: number) {
        if (element.value && element.value.length > length) {
            element.value = element.value.slice(0, length);
        }
    }
}
