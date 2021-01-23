import { Injectable } from "@angular/core";

@Injectable()
export class TokenService{

    private KEY:string = "user_token";

    setToken(token: string){
        window.localStorage.setItem(this.KEY,token);
    }

    getToken(): string{
        return window.localStorage.getItem(this.KEY);
    }

    rmvToken(){
        window.localStorage.removeItem(this.KEY);
    }
    
}