declare const Day: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
export default class GDSDatetimeComponent extends Day {
    get format(): string;
    get defaultValue(): any;
    get emptyValue(): any;
    get parts(): {
        day: any;
        month: any;
        year: any;
        hour: any;
        minute: any;
    };
    private refs;
    private component;
    private updateValue;
    private renderField;
    private inputDefinition;
    private checkComponentValidity;
    private triggerChange;
    private timeHelper;
    attach(element: any): any;
    init(): void;
    setErrorClasses(elements: any, dirty: any, hasError: any): void;
    removeInputError(elements: any): void;
    render(): any;
    getDate(value: any): string;
    getFieldValue(name: any): any;
    boolValue(value: any): boolean;
    setValueAt(index: any, value: any): void;
    getValueAt(index: any): any;
    normalizeValue(value: any): any;
    validateRequired(setting: any, value: any): boolean;
    private processField;
}
export {};
