import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'list-filter',
    templateUrl: './list-filter.component.html'
})
export class ListFilterComponent{

    @Input() currentPage:number;
    @Input() totalPages:number;

    @Input() options: Array<string>;

    @Output() eventSearch = new EventEmitter<string>();
    @Output() eventPage = new EventEmitter<number>();
    @Output() eventSelectQuantity = new EventEmitter<number>();

    onEventPage(page:number){
        return this.eventPage.emit(page);
    }

    onEventSearch(name: string){
        return this.eventSearch.emit(name);
    }
    
    onEventSelectQuantity(option:number){
        return this.eventSelectQuantity.emit(option);
    }

}