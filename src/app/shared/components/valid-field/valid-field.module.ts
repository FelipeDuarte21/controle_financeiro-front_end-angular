import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidFieldComponent } from "./valid-field.component";

@NgModule({
    declarations: [
        ValidFieldComponent
    ],
    exports: [
        ValidFieldComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ValidFieldModule{

}