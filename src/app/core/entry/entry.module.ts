import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/shared/header/header.module";
import { EntryRoutingModule } from "./entry-routing.module";
import { EntryComponent } from "./entry.component";
import { HomeEntryModule } from "./home-entry/home-entry.module";

@NgModule({
    declarations: [EntryComponent],
    exports: [EntryComponent],
    imports: [
        CommonModule,
        EntryRoutingModule,
        RouterModule,
        HeaderModule,
        HomeEntryModule
    ]
})
export class EntryModule{

}