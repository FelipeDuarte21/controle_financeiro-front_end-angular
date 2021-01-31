import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Entry } from "./entry.model";

import { API_ROUTE } from '../../app-api-route';

@Injectable()
export class EntryService{

    private route = `${API_ROUTE}/entry`;

    constructor(
        private http: HttpClient
    ){}

    save(entry: Entry): Observable<Entry>{
        return this.http.post<Entry>(this.route,entry);
    }

}