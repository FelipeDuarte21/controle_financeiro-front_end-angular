import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TokenService } from "src/app/authentication/auth/token.service";
import { InterceptorService } from "src/app/authentication/interceptor/interceptor.service";
import { HeaderModule } from "src/app/shared/header/header.module";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryComponent } from "./category.component";
import { CategoryService } from "./category.service";
import { HomeCategoryModule } from "./home-category/home-category.module";
import { SaveCategoryModule } from "./save-category/save-category.module";

@NgModule({
    declarations: [CategoryComponent],
    exports: [CategoryComponent],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        HttpClientModule,
        HeaderModule,
        HomeCategoryModule,
        SaveCategoryModule
    ],
    providers: [
        CategoryService,
        TokenService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ]
})
export class CategoryModule{

}