import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonBuilderModule } from "src/app/shared/components/button-builder/button-builder.module";
import { InformationCategoryModule } from "../../category/information-category/information-category.module";
import { HomeEntryComponent } from "./home-entry.component";
import { ListEntryModule } from "./list-entry/list-entry.module";

@NgModule({
    declarations: [HomeEntryComponent],
    exports: [HomeEntryComponent],
    imports: [
        CommonModule,
        RouterModule,
        ButtonBuilderModule,
        ListEntryModule,
        InformationCategoryModule
    ]
})
export class HomeEntryModule{

}