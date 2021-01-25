import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent{

    @Input() currentPage:number = 0;
    @Input() totalPages:number = 1;
    
    @Output() eventPage = new EventEmitter<number>();


    onEventPage(page: number){
        return this.eventPage.emit(page);
    }

}