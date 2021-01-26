import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Category } from "../../category.model";
import { CategoryService } from "../../category.service";

@Component({
    selector: 'list-category',
    templateUrl: './list-category.component.html',
    styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit{

    categories: Array<Category> =  [];
    
    currentPage: number = 0;
    totalPages: number = 1;
    size: number = 4;
    totalElements: number = 0;    

    private name: string = null;

    options: Array<string> = ['4','8','12'];
    
    @Output() eventClickCard = new EventEmitter<any>();

    private countCardSelected:number = 0;
    private idsCardSelected: Array<number> = [];

    constructor(
        private categoryService: CategoryService
    ){}

    ngOnInit(): void {
        this.findAll(this.currentPage,this.size);
    }

    private findAll(page:number,size:number){
        this.categoryService.findAll(page,size).subscribe(
            pageCategory => {
                this.categories = pageCategory.content;
                this.totalPages = pageCategory.totalPages;
                this.currentPage = pageCategory.number;
                this.totalElements = pageCategory.totalElements;
            }
        );
    }

    private findByName(name:string,page:number,size:number){
        this.categoryService.findByName(name,page,size).subscribe(
            pageCategory => {
                this.categories = pageCategory.content;
                this.totalPages = pageCategory.totalPages;
                this.currentPage = pageCategory.number;
            }
        );
    }

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
    }

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

    private currentState(page:number,size:number = 0){
        if(!this.name){
            this.findAll(page,size);
        }else{
            this.findByName(this.name,page,size);
        }
    }

    builderId(id: number):string{
        return `card-${id}`;
    }

}