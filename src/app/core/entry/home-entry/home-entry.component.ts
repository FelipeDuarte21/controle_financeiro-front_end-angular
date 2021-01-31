import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonBuilderModel, ButtonBuilderNatureEnum } from "src/app/shared/components/button-builder/button-builder.model";

@Component({
    selector: 'home-entry',
    templateUrl: './home-entry.component.html'
})
export class HomeEntryComponent implements OnInit{

    buttons: Array<ButtonBuilderModel>;

    showSingle:boolean = false;
    showMultiple:boolean = false;

    private ids:Array<number> = [];
    
    categoryId: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            params => {
                this.categoryId = params.categoryId;
                window.sessionStorage.setItem('categoryId', this.categoryId.toString());
            }
        );

        this.buttons = [
            {id: 0,btnName: "Voltar",btnClas: "btn-info",visible: true,nature: null,iconClass: "fa-chevron-circle-left"},
            {id: 1,btnName: "Lançar",btnClas: "btn-info",visible: true,nature: null,iconClass: "fa-plus"},
            {id: 2,btnName: "Alterar",btnClas: "btn-info",visible: false,nature: ButtonBuilderNatureEnum.SINGLE,iconClass: "fa-edit"},
            {id: 3,btnName: "Excluir",btnClas: "btn-danger",visible: false,nature: ButtonBuilderNatureEnum.SINGLE,iconClass: "fa-trash"}
        ];
    }

    onEventClickButton(btn: number){
        this.redirect(btn);
    }

    private redirect(btn: number){

        let route = "";

        switch(btn){
            case 0:
                route = "/category";
                break;
            case 1:
                route = `entry/${this.categoryId}/save`;
                break;
        }

        this.router.navigate([route]);
    }

}