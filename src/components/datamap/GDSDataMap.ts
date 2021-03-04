import {Components} from 'formiojs';

const Field = Components.components.field;
const DataMap = Components.components.datamap;

export default class GDSDataMap extends DataMap {
    private getRows: any;
    private hasRowGroups: any;
    private getGroups: any;
    private visibleColumns: any;
    private hasAddButton: any;
    private hasRemoveButtons: any;
    private hasTopSubmit: any;
    private hasBottomSubmit: any;
    private hasExtraColumn: any;
    private datagridKey: any;
    private allowReorder: any;
    private getColumns: any;

    public render() {
        const columns = this.getColumns();
        return Field.prototype.render.call(this, this.renderTemplate('datamap', {
            rows: this.getRows(),
            columns,
            groups: this.hasRowGroups() ? this.getGroups() : [],
            visibleColumns: this.visibleColumns,
            hasAddButton: this.hasAddButton(),
            hasRemoveButtons: this.hasRemoveButtons(),
            hasTopSubmit: this.hasTopSubmit(),
            hasBottomSubmit: this.hasBottomSubmit(),
            numColumns: columns.length + (this.hasExtraColumn() ? 1 : 0),
            datagridKey: this.datagridKey,
            allowReorder: this.allowReorder,
            builder: this.builderMode,
        }));
    }
}
