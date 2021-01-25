export interface ButtonBuilderModel{
    id: number;
    btnName: string,
    btnClas: string,
    visible: boolean,
    nature: number,
    iconClass: string
}

export enum ButtonBuilderNatureEnum{
    SINGLE = 0,
    MULTIPLE = 1
}