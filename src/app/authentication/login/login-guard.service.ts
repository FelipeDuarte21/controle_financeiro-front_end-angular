import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardService implements CanActivate{

    constructor(
        private authService: AuthService,
        private loginService: LoginService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this.authService.isUserLogged()){

            this.authService.getUser().subscribe(
                user => {
                    this.loginService.redirectUser(user);
                    return false;
                }
            );

        }

        return true;
    }

}