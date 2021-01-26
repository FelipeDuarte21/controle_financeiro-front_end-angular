import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ValidFieldModule } from "src/app/shared/components/valid-field/valid-field.module";
import { SaveCategoryComponent } from "./save-category.component";

@NgModule({
    declarations: [SaveCategoryComponent],
    exports: [SaveCategoryComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ValidFieldModule
    ]
})
export class SaveCategoryModule{

}