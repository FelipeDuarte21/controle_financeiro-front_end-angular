import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../user.model";
import { RegisterService } from "./register.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

    formRegister: FormGroup;

    respMessage: string = "";
    resp: boolean = false;
    showResp: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private registerService: RegisterService
    ){}


    ngOnInit(): void {
        this.formRegister = this.formBuilder.group({
            name: ['',[
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ]],
            email: ['',[
                Validators.required,
                Validators.email,
                Validators.maxLength(80)
            ]],
            password: ['',[
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(16)
            ]]
        });
    }

    checkField(field:string): boolean{
        return this.formRegister.get(field).errors && this.formRegister.get(field).touched;
    }

    getMessageError(field:string): string{

        let message = "";

        if(this.formRegister.get(field).errors?.required){
            message = "campo requerido";
        }

        if(this.formRegister.get(field).errors?.email){
            message = "email inválido";
        }

        if(this.formRegister.get(field).errors?.minlength){
            message = "campo não atingiu valor mínimo";
        }

        if(this.formRegister.get(field).errors?.maxlength){
            message = "campo ultrapassou valor máximo";
        }

        return message;
    }

    send(){
        let user = this.formRegister.getRawValue() as User;
        user.types = [1];

        this.registerService.register(user).subscribe(
            resp => {
                this.showResp = true;
                this.resp = true;
                this.respMessage = "Usuário cadastrado com sucesso!";
                this.formRegister.reset();
            },
            err => {
                this.showResp = true;
                this.resp = false;
                this.respMessage = err.error.message;
                this.formRegister.reset();
            }
        );
        
    }

}