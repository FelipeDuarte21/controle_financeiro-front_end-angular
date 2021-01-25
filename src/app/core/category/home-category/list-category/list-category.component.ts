import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'list-category',
    templateUrl: './list-category.component.html',
    styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent{

    currentPages: number = 0;
    totalPages: number = 1;    

    options: Array<string> = ['4','8','12'];
    
    @Output() eventClickCard = new EventEmitter<any>();

    private countCardSelected:number = 0;
    private idsCardSelected: Array<number> = [];

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
        console.log(page)
    }

    onEventSelectQuantity(quantity:number){
        console.log(quantity);
    }

    onEventSearch(name: string){
        console.log(name);
    }

}