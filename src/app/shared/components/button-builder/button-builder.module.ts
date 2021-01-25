import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonBuilderComponent } from "./button-builder.component";

@NgModule({
    declarations: [ButtonBuilderComponent],
    exports: [ButtonBuilderComponent],
    imports: [
        CommonModule
    ]
})
export class ButtonBuilderModule{

}