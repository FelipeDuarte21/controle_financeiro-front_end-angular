import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'select-quantity',
    templateUrl: './select-quantity.component.html'
})
export class SelectQuantityComponent{

    @Input() options: string[] = ['3','6','9'];

    @Output() eventSelectQuantity = new EventEmitter<number>();

    onChange(option: number){
        return this.eventSelectQuantity.emit(option);
    }

}