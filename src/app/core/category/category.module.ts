import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "src/app/shared/header/header.module";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryComponent } from "./category.component";
import { HomeCategoryModule } from "./home-category/home-category.module";

@NgModule({
    declarations: [CategoryComponent],
    exports: [CategoryComponent],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        HeaderModule,
        HomeCategoryModule
    ]
})
export class CategoryModule{

}