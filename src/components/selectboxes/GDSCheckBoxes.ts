import {Components} from 'formiojs';
const Field = Components.components.field;
const SelectBoxes = Components.components.selectboxes;

export default class GDSCheckBoxes extends SelectBoxes {
    public render() {
         // @ts-ignore
        return Field.prototype.render.call(this, this.renderTemplate('selectboxes', {
            // @ts-ignore
            input: this.inputInfo,
            // @ts-ignore
            inline: this.component.inline,
            // @ts-ignore
            values: this.component.values,
            // @ts-ignore
            value: this.dataValue,
            // @ts-ignore
            row: this.row,
        }));
    }
}
