import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SelectQuantityComponent } from "./select-quantity.component";

@NgModule({
    declarations: [SelectQuantityComponent],
    exports: [SelectQuantityComponent],
    imports: [
        CommonModule
    ]
})
export class SelectQuantityModule{

}