import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'valid-field',
    templateUrl: './valid-field.component.html'
})
export class ValidFieldComponent{
    
    @Input() form:FormGroup;
    @Input() field: string;

    checkField(): boolean{
        let check = this.form.get(this.field).errors && this.form.get(this.field).touched;
        let input  = document.querySelector(`[formControlName=${this.field}]`);
        if(check){
            input.classList.add('is-invalid');
        }else{
            if(input.classList.contains('is-invalid')){
                input.classList.remove('is-invalid');
            }
        }
        return check;
    }

    getMessageError(): string{

        let message = "";

        if(this.form.get(this.field).errors?.required){
            message = "campo requerido";
        }

        if(this.form.get(this.field).errors?.email){
            message = "email inválido";
        }

        if(this.form.get(this.field).errors?.minlength){
            message = "campo não atingiu valor mínimo";
        }

        if(this.form.get(this.field).errors?.maxlength){
            message = "campo ultrapassou valor máximo";
        }

        return message;
    } 

}