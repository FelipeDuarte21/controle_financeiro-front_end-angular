import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationModule } from "./filter-parts/pagination/pagination.module";
import { SearchByDateModule } from "./filter-parts/search-by-date/search-by-date.module";
import { SearchByNameModule } from "./filter-parts/search-by-name/search-by-name.module";
import { SelectQuantityModule } from "./filter-parts/select-quantity/select-quantity.module";
import { ListFilterComponent } from "./list-filter.component";

@NgModule({
    declarations: [ListFilterComponent],
    exports: [ListFilterComponent],
    imports: [
        CommonModule,
        PaginationModule,
        SearchByNameModule,
        SearchByDateModule,
        SelectQuantityModule
    ]
})
export class ListFilterModule{

}