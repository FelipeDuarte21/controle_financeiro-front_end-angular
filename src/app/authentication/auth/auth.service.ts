import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserToken } from "../user.model";
import { TokenService } from "./token.service";
import { Router } from "@angular/router";

import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService{

    private userSubject = new BehaviorSubject<UserToken>(null);

    constructor(
        private tokenService: TokenService,
        private router: Router
    ){}

    loginUser(token:string){
        this.tokenService.setToken(token);

        token = token.substr(7);
        let objToken = jwt_decode(token) as any;

        let user = JSON.parse(objToken.sub) as UserToken;

        console.log(user);

        this.userSubject.next(user);
    }

    getUser(): Observable<UserToken>{
        return this.userSubject.asObservable();
    }

    getToken(): string{
        if(!this.tokenService.getToken()) return null;
        this.loginUser(this.tokenService.getToken());
        return this.tokenService.getToken();
    }

    isUserLogged(): boolean{
        if(this.tokenService.getToken()){
            this.loginUser(this.tokenService.getToken());
            return true;
        }
        return false;
    }

    deslogarUsuario(){
        this.tokenService.rmvToken();
        this.router.navigate(['/']);
    }

}