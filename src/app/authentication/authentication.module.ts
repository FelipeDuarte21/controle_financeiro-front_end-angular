import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { TokenService } from "./auth/token.service";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";

@NgModule({
    declarations: [AuthenticationComponent],
    exports: [AuthenticationComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        RouterModule,
        LoginModule,
        RegisterModule
    ],
    providers: [
        AuthService,
        TokenService
    ]
})
export class AuthenticationModule{

}