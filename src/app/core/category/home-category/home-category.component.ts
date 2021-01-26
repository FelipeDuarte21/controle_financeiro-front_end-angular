import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonBuilderModel, ButtonBuilderNatureEnum } from "src/app/shared/components/button-builder/button-builder.model";

@Component({
    selector: 'home-category',
    templateUrl: './home-category.component.html'
})
export class HomeCategoryComponent implements OnInit{
   
    buttons: Array<ButtonBuilderModel>;

    showSingle:boolean = false;
    showMultiple:boolean = false;

    private ids:Array<number> = [];

    constructor(
        private router: Router
    ){}
   
    ngOnInit(): void {
        this.buttons = [
            {id: 0,btnName: "Adicionar",btnClas: "btn-info",visible: true,nature: null,iconClass: "fa-plus"},
            {id: 1,btnName: "Visualizar Lançamentos",btnClas: "btn-info",visible: false,nature: ButtonBuilderNatureEnum.SINGLE,iconClass: "fa-eye"},
            {id: 2,btnName: "Alterar",btnClas: "btn-info",visible: false,nature: ButtonBuilderNatureEnum.SINGLE,iconClass: "fa-edit"},
            {id: 3,btnName: "Excluir",btnClas: "btn-danger",visible: false,nature: ButtonBuilderNatureEnum.MULTIPLE,iconClass: "fa-trash"}
        ];
    }

    onEventClickCard(value: any){
        this.ids = value.ids;
        if(value.count == 0){
            this.showSingle = false;
            this.showMultiple = false;
        }
        if(value.count == 1){
            this.showSingle = true;
            this.showMultiple = true;
        }
        if(value.count > 1){
            this.showSingle = false;
        }
    }

    onEventClickButton(id: number){
        this.redirect(id);
    }

    private redirect(btn: number, ){
        let route = "";

        switch(btn){
            case 0:
                route = "category/save";
                break;
            case 2:
                route = `category/save/${this.ids[0]}`;
                break;
        }

        this.router.navigate([route]);

    }

}