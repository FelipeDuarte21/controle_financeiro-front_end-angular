import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { RegisterService } from "./register.service";

@NgModule({
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        RegisterService
    ]
})
export class RegisterModule{

}