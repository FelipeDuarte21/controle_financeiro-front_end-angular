import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DeleteCategoryComponent } from "./delete-category.component";

@NgModule({
    declarations: [DeleteCategoryComponent],
    exports: [DeleteCategoryComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class DeleteCategoryModule{

}