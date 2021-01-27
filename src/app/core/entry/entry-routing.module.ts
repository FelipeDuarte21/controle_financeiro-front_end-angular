import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntryComponent } from "./entry.component";
import { HomeEntryComponent } from "./home-entry/home-entry.component";

const routes: Routes = [
    {
        path: '',
        component: EntryComponent,
        children: [
            {
                path: '',
                component: HomeEntryComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntryRoutingModule{

}