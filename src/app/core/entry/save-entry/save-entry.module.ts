import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ValidFieldModule } from "src/app/shared/components/valid-field/valid-field.module";
import { SaveEntryComponenet } from "./save-entry.component";

@NgModule({
    declarations: [SaveEntryComponenet],
    exports: [SaveEntryComponenet],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ValidFieldModule
    ]
})
export class SaveEntryModule{

}