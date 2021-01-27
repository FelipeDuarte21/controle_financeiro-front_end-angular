import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: ()=>import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'category',
        loadChildren: ()=>import('./core/category/category.module').then(m => m.CategoryModule)
    },
    {
        path: 'entry/:id',
        loadChildren: ()=>import('./core/entry/entry.module').then(m => m.EntryModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
