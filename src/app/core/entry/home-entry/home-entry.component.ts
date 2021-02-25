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
        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.categoryId = queryParams.categoryId;
            }
        );

        this.buttons = [
            {id: 0,btnName: "Voltar",btnClas: "btn-info",visible: true,nature: null,iconClass: "fa-chevron-circle-left"},
            {id: 1,btnName: "Lançar",btnClas: "btn-info",visible: true,nature: null,iconClass: "fa-plus"}
        ];
    }

    onEventClickButton(btn: number){
        this.redirect(btn);
    }

    editLine(id:number){
        this.router.navigate(['entry/save',id],{queryParams: {categoryId: this.categoryId}});
    }
    
    deleteLine(id: number){
        console.log(id);
    }

    private redirect(btn: number){

        let route = "";

        switch(btn){
            case 0:
                route = "/category";
                break;
            case 1:
                route = `entry/save`;
                break;
        }

        if(btn == 1){
            this.router.navigate([route],{queryParams: {categoryId: this.categoryId}});
        }else{
            this.router.navigate([route]);
        }
        
    }

}