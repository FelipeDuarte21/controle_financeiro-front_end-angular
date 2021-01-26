import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
    selector: 'delete-category',
    templateUrl: './delete-category.component.html'
})
export class DeleteCategoryComponent implements OnInit{

    category: Category;

    showErro: boolean = false;
    showSuccess: boolean = false;
    message:string = "";

    constructor(
        private router: ActivatedRoute,
        private categoryService: CategoryService
    ){}

    ngOnInit(): void {
        this.router.params.subscribe(
            params => {
                let id = params.id;
                this.categoryService.findById(id).subscribe(
                    category => {
                        this.category = category;
                    }
                );
            }
        );
    }

    delete(id:number){

        if(confirm('Deseja realmente excluir esta categoria?')){
            
            this.categoryService.delete(id).subscribe(
                resp => {
                    this.showSuccess = true;
                    this.category = null;
                    this.message = "Categoria excluida com sucesso!";
                },
                err => {
                    console.log(err);
                    this.showErro = true;
                    this.message = "Erro ao excluir categoria!";
                }
            );

        }

    }

}