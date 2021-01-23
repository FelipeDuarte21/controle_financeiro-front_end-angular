import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserLogin } from "./user-login.model";

import { API_ROUTE } from '../../app-api-route';

import { tap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { UserToken } from "../user.model";
import { Router } from "@angular/router";

@Injectable()
export class LoginService{

    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router
    ){}

    login(user:UserLogin){
        return this.http.post(`${API_ROUTE}/login`,user,{observe: 'response'})
        .pipe(tap(res => {
            let token = res.headers.get('Authorization');
            this.authService.loginUser(token);
        }));
    }

    redirectUser(user: UserToken){

        let route = "";

        user.types.forEach(type => {
            if(type === "ROLE_USER"){
                route = "/category";
            }
            if(type == "ROLE_ADMIN"){
                route = "/admin"
            }
        });

        this.router.navigate([route]);

    }

}