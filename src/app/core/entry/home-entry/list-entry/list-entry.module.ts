import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListFilterModule } from "src/app/shared/components/list-filter/list-filter.module";
import { ListEntryComponent } from "./list-entry.component";

@NgModule({
    declarations: [ListEntryComponent],
    exports: [ListEntryComponent],
    imports: [
        CommonModule,
        RouterModule,
        ListFilterModule
    ]
})
export class ListEntryModule{

}