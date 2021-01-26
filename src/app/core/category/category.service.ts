import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category, CategoryPage } from "./category.model";

import { API_ROUTE } from '../../app-api-route';

@Injectable()
export class CategoryService{

    private route = `${API_ROUTE}/category`;

    constructor(
        private http: HttpClient
    ){}

    save(category: Category): Observable<Category>{
        return this.http.post<Category>(this.route,category);
    }

    findByName(name:string,page:number,size:number):Observable<CategoryPage>{
        return this.http.get<CategoryPage>(`${this.route}/search?name=${name}&page=${page}&size=${size}`);
    }

    findAll(page:number,size:number): Observable<CategoryPage>{
        return this.http.get<CategoryPage>(`${this.route}?number=${page}&size=${size}`);
    }

}