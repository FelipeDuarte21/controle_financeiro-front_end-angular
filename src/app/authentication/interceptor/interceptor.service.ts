import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../auth/token.service";

@Injectable()
export class InterceptorService implements HttpInterceptor{

    constructor(
        private tokenService: TokenService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = this.tokenService.getToken();

        if(token){

            req = req.clone({
                setHeaders: {
                    "Authorization":token
                }
            });

        }

        return next.handle(req);
    }

}