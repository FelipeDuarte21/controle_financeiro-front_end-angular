import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Entry, EntryPage } from "./entry.model";

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

    update(entry: Entry): Observable<Entry>{
        return this.http.put<Entry>(this.route,entry);
    }

    findById(id: number): Observable<Entry>{
        return this.http.get<Entry>(`${this.route}/${id}`);
    }

    findByName(categoryId: number, name:string, page:number,size:number):Observable<EntryPage>{
        return this.http.get<EntryPage>(`${this.route}/category/${categoryId}/search?name=${name}&number=${page}&size=${size}`);
    }

    findByDate(categoryId: number, start:string, end:string, page:number, size: number): Observable<EntryPage>{
        return this.http.get<EntryPage>(`${this.route}/category/${categoryId}/search/date?start=${start}&end=${end}&number=${page}&size=${size}`);
    }

    findAll(categoryId:number, page:number,size:number): Observable<EntryPage>{
        return this.http.get<EntryPage>(`${this.route}/category/${categoryId}?number=${page}&size=${size}`);
    }

}