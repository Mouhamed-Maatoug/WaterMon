export class CommonMethod {
    constructor(){}
    public deleteArrayRow(id:number , array : any[]) : void{
        array.splice(
            array.findIndex(item => {
                return item.id == id
            }) , 1
        )
    }
}
