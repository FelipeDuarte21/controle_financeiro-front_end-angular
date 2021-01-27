import { Component, Input } from "@angular/core";

@Component({
    selector: 'list-entry',
    templateUrl: './list-entry.component.html'
})
export class ListEntryComponent{

    @Input() categoryId:number = 0;

}