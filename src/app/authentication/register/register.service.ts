import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../user.model";
import { Observable } from "rxjs";

import { API_ROUTE } from '../../app-api-route';

@Injectable()
export class RegisterService{

    constructor(
        private http: HttpClient
    ){}

    register(user: User): Observable<User>{
        return this.http.post<User>(`${API_ROUTE}/user`,user);
    }

}