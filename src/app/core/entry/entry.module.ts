import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/shared/header/header.module";
import { EntryRoutingModule } from "./entry-routing.module";
import { EntryComponent } from "./entry.component";
import { EntryService } from "./entry.service";
import { HomeEntryModule } from "./home-entry/home-entry.module";
import { SaveEntryModule } from "./save-entry/save-entry.module";

@NgModule({
    declarations: [EntryComponent],
    exports: [EntryComponent],
    imports: [
        CommonModule,
        EntryRoutingModule,
        RouterModule,
        HttpClientModule,
        HeaderModule,
        HomeEntryModule,
        SaveEntryModule
    ],
    providers: [
        EntryService
    ]
})
export class EntryModule{

}