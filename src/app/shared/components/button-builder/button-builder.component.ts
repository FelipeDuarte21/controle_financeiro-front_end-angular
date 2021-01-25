import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonBuilderModel } from "./button-builder.model";

@Component({
    selector: 'button-builder',
    templateUrl: './button-builder.component.html'
})
export class ButtonBuilderComponent{

    @Input() buttons: Array<ButtonBuilderModel> = [];

    @Input() showSingle: boolean = false;
    @Input() showMultiple: boolean = false;

    @Output() eventClick = new EventEmitter<number>();


    onEventClick(id: number){
        return this.eventClick.emit(id);
    }

}