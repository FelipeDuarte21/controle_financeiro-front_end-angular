import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth/auth.service";
import { LoginService } from "./login.service";
import { UserLogin } from "./user-login.model";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

    formLogin: FormGroup;

    showErro:boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private authService: AuthService
    ){}

    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
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

    send(){
        let user = this.formLogin.getRawValue() as UserLogin;
        this.loginService.login(user).subscribe(
            resp => {
                
                this.authService.getUser().subscribe(
                    user => {
                        this.loginService.redirectUser(user);
                    }
                );

            },
            err => {
                this.showErro = true;
                console.log(err);
            }
        );
    }

} 