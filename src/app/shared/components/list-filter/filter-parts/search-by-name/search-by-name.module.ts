import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchByNameComponent } from "./search-by-name.component";

@NgModule({
    declarations: [SearchByNameComponent],
    exports: [SearchByNameComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SearchByNameModule{

}