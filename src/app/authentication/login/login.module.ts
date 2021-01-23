import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ValidFieldModule } from "src/app/shared/components/valid-field/valid-field.module";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ValidFieldModule
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule{

}