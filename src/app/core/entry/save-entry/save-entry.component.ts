import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Entry } from "../entry.model";
import { EntryService } from "../entry.service";

@Component({
    selector: 'save-component',
    templateUrl: './save-entry.component.html'
})
export class SaveEntryComponenet implements OnInit{
    
    categoryId: number;

    entryId: number;

    title:string = "Cadastrar";

    formSave: FormGroup;

    showErro: boolean = false;
    showSuccess: boolean = false;
    message: string;

    constructor(
        private formBuilder: FormBuilder,
        private entryService: EntryService,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void {

        this.activatedRoute.params.subscribe(
            params => {
                this.entryId = params.entryId;

                if(this.entryId == undefined){
                    this.title = "Cadastrar";
                }else{
                    this.title = "Alterar";
                }

                this.entryService.findById(this.entryId).subscribe(
                    entry => {
                        this.setValueField(entry);
                    }
                );

            }
        );
        
        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.categoryId = queryParams.categoryId;
            }
        );

        this.formSave = this.formBuilder.group({
            id: [''],
            name: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
            description: ['',[Validators.required,Validators.maxLength(150)]],
            value: ['',[Validators.required]],
            date: ['',[Validators.required]],
            entryType: ['',[Validators.required]]
        });
        
    }

    private setValueField(entry: Entry){
        this.formSave.get('id').setValue(entry.id);
        this.formSave.get('name').setValue(entry.name);
        this.formSave.get('description').setValue(entry.description);
        this.formSave.get('value').setValue(entry.value);
        this.formSave.get('date').setValue(entry.date);
        this.formSave.get('entryType').setValue(entry.entryType);
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

        if(entry.id){ //Atualizar

            this.entryService.update(entry).subscribe(
                respEntry =>{
                    console.log(respEntry);
                    this.showSuccess = true;
                    this.message = "Lançamento alterado com sucesso!";
                    this.formSave.reset();
                },
                err => {
                    console.log(err);
                    this.showErro = true;
                    this.message = "Erro ao alterar Lançamento!";
                    this.formSave.reset();
                }
            )

        }else{ //Cadastrar

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

}