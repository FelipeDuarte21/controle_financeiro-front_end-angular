import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SearchByDateModel } from "src/app/shared/components/list-filter/filter-parts/search-by-date/search-by-date.model";
import { Entry } from "../../entry.model";
import { EntryService } from "../../entry.service";

@Component({
    selector: 'list-entry',
    templateUrl: './list-entry.component.html'
})
export class ListEntryComponent{

    @Input() categoryId:number = 0;

    entries: Array<Entry> =  [];
    
    currentPage: number = 0;
    totalPages: number = 1;
    size: number = 5;
    totalElements: number = 0;    

    private name: string = null;

    options: Array<string> = ['5','10','20','30','50'];
    
    //@Output() eventClickCard = new EventEmitter<any>();

    //private countCardSelected:number = 0;
    //private idsCardSelected: Array<number> = [];

    constructor(
        private entryService: EntryService
    ){}

    ngOnInit(): void {
        this.findAll(this.currentPage,this.size);
    }

    private findAll(page:number,size:number){
        this.entryService.findAll(this.categoryId,page,size).subscribe(
            pageEntry => {
                this.entries = pageEntry.content;
                this.totalPages = pageEntry.totalPages;
                this.currentPage = pageEntry.number;
                this.totalElements = pageEntry.totalElements;
            }
        );
    }

    private findByName(name:string,page:number,size:number){
        this.entryService.findByName(this.categoryId,name,page,size).subscribe(
            pageEntry => {
                this.entries = pageEntry.content;
                this.totalPages = pageEntry.totalPages;
                this.currentPage = pageEntry.number;
            }
        );
    }

    /*
    onEventClickCard(id: number){

        let cardSelected = true;

        let card = document.querySelector(`#card-${id}`);

        if(card.classList.contains('card-selected')){
            card.classList.remove('card-selected');
            
            cardSelected = false;
            
            this.countCardSelected--;

            let index = this.idsCardSelected.indexOf(id);
            this.idsCardSelected.splice(index,1);

        }else{
            card.classList.add('card-selected');

            cardSelected = true;
            
            this.countCardSelected++;
            
            this.idsCardSelected.push(id);
        }

        let selecteds = {
            count: this.countCardSelected,
            ids: this.idsCardSelected
        }
        
        return this.eventClickCard.emit(selecteds);
    }*/

    onEventPage(page: number){
        this.currentState(page,this.size);
    }

    onEventSelectQuantity(quantity:number){
        this.size = quantity;
        this.currentPage = 0;
        this.currentState(this.currentPage,this.size);
    }

    onEventSearch(name: string){
        this.name = name;
        if(this.name.length == 0) this.name == null;
        this.currentState(0,this.size);
    }

    onEventSearchByDate(value: SearchByDateModel){
        console.log(value);
        for(let i=0; i < 2; i++){
            value.start = value.start.replace('-','/');
            value.end = value.end.replace('-','/');
        }
        this.entryService.findByDate(this.categoryId,value.start,value.end,0,this.size).subscribe(
            pageEntry => {
                console.log(pageEntry);
            }
        );
    }

    private currentState(page:number,size:number = 0){
        if(!this.name){
            this.findAll(page,size);
        }else{
            this.findByName(this.name,page,size);
        }
    }

    /*
    builderId(id: number):string{
        return `card-${id}`;
    }*/

}