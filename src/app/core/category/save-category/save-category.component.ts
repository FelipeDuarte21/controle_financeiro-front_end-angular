import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Route } from "@angular/router";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
    selector: 'save-category',
    templateUrl: './save-category.component.html'
})
export class SaveCategoryComponent implements OnInit{

    title = "";

    formSave: FormGroup;

    showErro:boolean = false;
    showSuccess:boolean = false;
    message: string = "";


    private id: number;

    constructor(
        private formBuilder: FormBuilder,
        private categoryService: CategoryService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.formSave = this.formBuilder.group({
            id: [''],
            name: ['',[Validators.required,Validators.maxLength(50)]],
            description: ['',[Validators.required,Validators.maxLength(150)]],
            observation: ['',[Validators.maxLength(255)]]
        });

        this.route.params.subscribe(
            params => {
                this.id = params.id;

                if(this.id == undefined){
                    this.title = "Cadastrar";

                }else{
                    this.title = "Alterar";

                    this.categoryService.findById(this.id).subscribe(
                        category => {
                            this.setValueField(category);
                        }
                    );

                }
            }
        );

    }

    private setValueField(category: Category){
        this.formSave.get('id').setValue(category.id);
        this.formSave.get('name').setValue(category.name);
        this.formSave.get('description').setValue(category.description);
        this.formSave.get('observation').setValue(category.observation);
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
        let category = this.formSave.getRawValue() as Category;

        if(this.id == undefined){ //adicionar

            this.categoryService.save(category).subscribe(
                resp => {
                    console.log(resp);
                    this.showSuccess = true;
                    this.message = "Categoria cadastra com sucesso!";
                    this.formSave.reset();
                },
                error => {
                    console.log(error);
                    this.showErro = true;
                    this.message = "Erro ao cadastrar categoria!";
                    this.formSave.reset();
                }
            );

        }else{ //atualizar

            this.categoryService.update(category).subscribe(
                resp => { 
                    console.log(resp);
                    this.showSuccess = true;
                    this.message = "Categoria atualizada com sucesso!";
                    this.formSave.reset();
                },
                err => {
                    console.log(err);
                    this.showErro = true;
                    this.message = "Erro ao atualizar categoria!";
                    this.formSave.reset();
                }
            );

        }
        
    }

}