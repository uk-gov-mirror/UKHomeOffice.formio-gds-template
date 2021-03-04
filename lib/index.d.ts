declare const _default: {
    framework: string;
    templates: {
        gds: {
            transform(type: any, text: any): any;
            defaultIconset: string;
            iconClass: (iconset: any, name: any, spinning: any) => string;
            cssClasses: {
                'has-error': string;
                'formio-tab-link-container-active': string;
                'is-invalid': string;
                'formio-error-wrapper': string;
                row: string;
                'form-control ui fluid selection dropdown': string;
                'formio-day-component-month': string;
                'formio-day-component-day': string;
                'formio-day-component-year': string;
                'formio-day-component-hour': string;
                'formio-day-component-minute': string;
            };
            button: {
                form: string;
            };
            checkbox: {
                form: string;
            };
            columns: {
                form: string;
            };
            component: {
                form: string;
            };
            container: {
                form: string;
            };
            datetime: {
                form: string;
            };
            day: {
                form: string;
            };
            datagrid: {
                form: string;
            };
            datamap: {
                form: string;
            };
            input: {
                form: string;
            };
            editgrid: {
                form: string;
            };
            field: {
                form: string;
            };
            file: {
                form: string;
            };
            fieldset: {
                form: string;
            };
            label: {
                form: string;
            };
            message: {
                form: string;
            };
            panel: {
                form: string;
            };
            radio: {
                form: string;
            };
            select: {
                form: string;
            };
            selectboxes: {
                form: string;
            };
            selectOption: {
                form: string;
            };
            survey: {
                form: string;
            };
            table: {
                form: string;
            };
            tab: {
                form: string;
            };
            time: {
                form: string;
            };
            warning: {
                form: string;
            };
            wizard: {
                form: string;
            };
            wizardHeader: {
                form: string;
            };
            wizardNav: {
                form: string;
            };
        };
    };
    components: {
        datamap: typeof import("./components/datamap/GDSDataMap").default;
        datetime: typeof import("./components/datetime/GDSDatetimeComponent").default;
        selectboxes: typeof import("./components/selectboxes/GDSCheckBoxes").default;
        time: typeof import("./components/time/GDSTimeComponent").default;
    };
};
export default _default;
