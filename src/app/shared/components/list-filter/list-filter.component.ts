import { Component, Output, EventEmitter, Input } from "@angular/core";
import { SearchByDateModel } from "./filter-parts/search-by-date/search-by-date.model";

@Component({
    selector: 'list-filter',
    templateUrl: './list-filter.component.html'
})
export class ListFilterComponent{

    @Input() currentPage:number;
    @Input() totalPages:number;

    @Input() options: Array<string>;

    @Input() showSearchByDate:boolean = false;

    @Output() eventSearch = new EventEmitter<string>();
    @Output() eventSearchByDate = new EventEmitter<SearchByDateModel>();
    @Output() eventPage = new EventEmitter<number>();
    @Output() eventSelectQuantity = new EventEmitter<number>();

    onEventPage(page:number){
        return this.eventPage.emit(page);
    }

    onEventSearch(name: string){
        return this.eventSearch.emit(name);
    }

    onEventSearchByDate(value: SearchByDateModel){
        return this.eventSearchByDate.emit(value);
    }
    
    onEventSelectQuantity(option:number){
        return this.eventSelectQuantity.emit(option);
    }

}