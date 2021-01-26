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

    update(category: Category): Observable<Category>{
        return this.http.put<Category>(`${this.route}`,category);
    }

    delete(id:number): Observable<any>{
        return this.http.delete(`${this.route}/${id}`);
    }

    findById(id:number): Observable<Category>{
        return this.http.get<Category>(`${this.route}/${id}`);
    }

    findByName(name:string,page:number,size:number):Observable<CategoryPage>{
        return this.http.get<CategoryPage>(`${this.route}/search?name=${name}&page=${page}&size=${size}`);
    }

    findAll(page:number,size:number): Observable<CategoryPage>{
        return this.http.get<CategoryPage>(`${this.route}?number=${page}&size=${size}`);
    }

}