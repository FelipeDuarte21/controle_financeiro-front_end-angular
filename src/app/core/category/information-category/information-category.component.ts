import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
    selector: 'information-category',
    templateUrl: './information-category.component.html'
})
export class InformationCategoryComponent implements OnInit{

    @Input() categoryId: number;

    category$: Observable<Category>;

    constructor(
        private categoryService: CategoryService
    ){}

    ngOnInit(): void {
        this.category$ = this.categoryService.findById(this.categoryId);
    }

}