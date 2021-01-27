import { CommonModule } from "@angular/common";
import { NgModule, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchByDateComponent } from "./search-by-date.component";

@NgModule({
    declarations: [SearchByDateComponent],
    exports: [SearchByDateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SearchByDateModule{

}