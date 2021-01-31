import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Entry } from "../entry.model";
import { EntryService } from "../entry.service";

@Component({
    selector: 'save-component',
    templateUrl: './save-entry.component.html'
})
export class SaveEntryComponenet implements OnInit{
    
    categoryId: number;

    title:string = "Cadastrar";

    formSave: FormGroup;

    showErro: boolean = false;
    showSuccess: boolean = false;
    message: string;

    constructor(
        private formBuilder: FormBuilder,
        private entryService: EntryService
    ){}

    ngOnInit(): void {
        this.categoryId = parseInt(window.sessionStorage.getItem('categoryId'));

        this.formSave = this.formBuilder.group({
            id: [''],
            name: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
            description: ['',[Validators.required,Validators.maxLength(150)]],
            value: ['',[Validators.required]],
            date: ['',[Validators.required]],
            entryType: ['',[Validators.required]]
        });
        
    }

    getCaracteresField(field: string): number{
        if(this.formSave.get(field).value){
            let value = this.formSave.get(field).value as string;
            return value.length;
        }else{
            return 0;
        }
    }


    send(){

        let entry = this.formSave.getRawValue() as Entry;
        entry.categoryId = this.categoryId;

        this.entryService.save(entry).subscribe(
            respEntry =>{
                console.log(respEntry);
                this.showSuccess = true;
                this.message = "Lançamento realizado com sucesso!";
                this.formSave.reset();
            },
            err => {
                console.log(err);
                this.showErro = true;
                this.message = "Erro ao realizar Lançamento!";
                this.formSave.reset();
            }
        );
        
    }

}