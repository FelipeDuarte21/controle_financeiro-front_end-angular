import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication.component";
import { LoginGuardService } from "./login/login-guard.service";

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        canActivate: [LoginGuardService]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule{

}