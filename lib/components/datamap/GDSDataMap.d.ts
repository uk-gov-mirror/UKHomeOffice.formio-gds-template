declare const DataMap: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/nested/nestedComponent").NestedComponent>;
export default class GDSDataMap extends DataMap {
    private getRows;
    private hasRowGroups;
    private getGroups;
    private visibleColumns;
    private hasAddButton;
    private hasRemoveButtons;
    private hasTopSubmit;
    private hasBottomSubmit;
    private hasExtraColumn;
    private datagridKey;
    private allowReorder;
    private getColumns;
    render(): any;
}
export {};
