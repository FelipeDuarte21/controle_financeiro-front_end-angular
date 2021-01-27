import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryGuardService } from "./category-guard.service";
import { CategoryComponent } from "./category.component";
import { DeleteCategoryComponent } from "./delete-category/delete-category.component";
import { HomeCategoryComponent } from "./home-category/home-category.component";
import { SaveCategoryComponent } from "./save-category/save-category.component";

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        canActivate: [CategoryGuardService],
        children: [
            { //listar
                path: '',
                component: HomeCategoryComponent
            },
            {//cadastrar
                path: 'save',
                component: SaveCategoryComponent
            },
            {//atualizar
                path: 'save/:id',
                component: SaveCategoryComponent
            },
            {//excluir
                path: 'delete/:id',
                component: DeleteCategoryComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule{

}