import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { TokenService } from "src/app/authentication/auth/token.service";
import { InterceptorService } from "src/app/authentication/interceptor/interceptor.service";
import { CategoryService } from "../category.service";
import { InformationCategoryComponent } from "./information-category.component";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [InformationCategoryComponent],
    exports: [InformationCategoryComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        CategoryService,
        TokenService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        }
    ]
})
export class InformationCategoryModule{

}