import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchByDateModel } from "./search-by-date.model";

@Component({
    selector: 'search-by-date',
    templateUrl: './search-by-date.component.html'
})
export class SearchByDateComponent implements OnInit{

    formSearchDate: FormGroup;

    @Output() eventSearchByDate = new EventEmitter<SearchByDateModel>();

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.formSearchDate = this.formBuilder.group({
            start: ['',[Validators.required]],
            end: ['',[Validators.required]]
        });
    }

    send(){
        let start = this.formSearchDate.get('start').value as string;
        let end = this.formSearchDate.get('end').value as string;

        let resp = {start,end} as SearchByDateModel;

        return this.eventSearchByDate.emit(resp);
    }

}