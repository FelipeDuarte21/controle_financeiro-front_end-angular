import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "src/app/authentication/auth/token.service";

@Injectable()
export class CategoryGuardService implements CanActivate{

    constructor(
        private router: Router,
        private tokenService: TokenService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(!this.tokenService.getToken()){

            this.router.navigate(['']);

            return false;
        }

        return true;
    }

}