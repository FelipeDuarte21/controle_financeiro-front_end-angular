import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'search-by-name',
    templateUrl: './search-by-name.component.html'
})
export class SearchByNameComponent implements OnInit{
    
    @Output() eventSearch = new EventEmitter<string>();

    formSearch: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.formSearch = this.formBuilder.group({
            name: ['',Validators.required]
        });
    }

    send(){
        let name = this.formSearch.get('name').value;
        this.onEventSearch(name);
    }

    onEventSearch(name: string){
        return this.eventSearch.emit(name);
    }

}