import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonBuilderModule } from "src/app/shared/components/button-builder/button-builder.module";
import { HomeCategoryComponent } from "./home-category.component";
import { ListCategoryModule } from "./list-category/list-category.module";

@NgModule({
    declarations: [HomeCategoryComponent],
    exports: [HomeCategoryComponent],
    imports: [
        CommonModule,
        ListCategoryModule,
        ButtonBuilderModule
    ]
})
export class HomeCategoryModule{

}