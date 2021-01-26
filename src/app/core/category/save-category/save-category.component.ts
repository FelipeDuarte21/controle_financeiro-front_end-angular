import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
    selector: 'save-category',
    templateUrl: './save-category.component.html'
})
export class SaveCategoryComponent implements OnInit{

    title = "Cadastrar";

    formSave: FormGroup;

    showErro:boolean = false;
    showSuccess:boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private categoryService: CategoryService
    ){}

    ngOnInit(): void {
        this.formSave = this.formBuilder.group({
            id: [''],
            name: ['',[Validators.required,Validators.maxLength(50)]],
            description: ['',[Validators.required,Validators.maxLength(150)]],
            observation: ['',[Validators.maxLength(255)]]
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
        let category = this.formSave.getRawValue() as Category;
        
        this.categoryService.save(category).subscribe(
            resp => {
                console.log(resp);
                this.showSuccess = true;
                this.formSave.reset();
            },
            error => {
                console.log(error);
                this.showErro = true;
                this.formSave.reset();
            }
        );
        
    }

}