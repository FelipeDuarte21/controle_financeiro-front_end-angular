import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListFilterModule } from "src/app/shared/components/list-filter/list-filter.module";
import { ListCategoryComponent } from "./list-category.component";

@NgModule({
    declarations: [ListCategoryComponent],
    exports: [ListCategoryComponent],
    imports: [
        CommonModule,
        ListFilterModule
    ]
})
export class ListCategoryModule{

}