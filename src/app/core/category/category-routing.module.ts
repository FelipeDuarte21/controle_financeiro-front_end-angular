import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { HomeCategoryComponent } from "./home-category/home-category.component";
import { SaveCategoryComponent } from "./save-category/save-category.component";

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        children: [
            {
                path: '',
                component: HomeCategoryComponent
            },
            {
                path: 'save',
                component: SaveCategoryComponent
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