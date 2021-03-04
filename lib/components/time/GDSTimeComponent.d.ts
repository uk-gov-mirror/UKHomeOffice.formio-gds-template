declare const Time: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/widgetcomponent/widgetComponent").WidgetComponent>;
export default class GDSTimeComponent extends Time {
    static MAX_LENGTH: number;
    private refs;
    private component;
    private loadRefs;
    private checkComponentValidity;
    private updateValue;
    private timeHelper;
    attach(element: any): any;
    setErrorClasses(elements: any, dirty: any, hasError: any): void;
    addInputError(message: any, dirty: boolean, element: any): void;
    removeInputError(elements: any): void;
    getValue(): string;
    setValue(value: any, flags: any): boolean;
    render(): any;
}
export {};
