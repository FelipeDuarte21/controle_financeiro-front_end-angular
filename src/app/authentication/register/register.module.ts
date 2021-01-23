import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidFieldModule } from "src/app/shared/components/valid-field/valid-field.module";
import { RegisterComponent } from "./register.component";
import { RegisterService } from "./register.service";

@NgModule({
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ValidFieldModule
    ],
    providers: [
        RegisterService
    ]
})
export class RegisterModule{

}