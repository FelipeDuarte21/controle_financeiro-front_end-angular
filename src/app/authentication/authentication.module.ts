import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";

@NgModule({
    declarations: [AuthenticationComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        LoginModule,
        RegisterModule
    ],
    exports: [AuthenticationComponent]
})
export class AuthenticationModule{

}