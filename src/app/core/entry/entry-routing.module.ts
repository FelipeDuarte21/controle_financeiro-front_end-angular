import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntryComponent } from "./entry.component";
import { HomeEntryComponent } from "./home-entry/home-entry.component";
import { SaveEntryComponenet } from "./save-entry/save-entry.component";

const routes: Routes = [
    {
        path: '',
        component: EntryComponent,
        children: [
            {
                path: '',
                component: HomeEntryComponent
            },
            {
                path: 'save',
                component: SaveEntryComponenet
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