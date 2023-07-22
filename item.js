class Item{
    constructor(itemid,item=[]){
        this.itemid = itemid
        this.item = item
    }

}


export class Diamond extends Item{
    constructor(itemid = 10, item= ['💎']){
        super(itemid, item)
        this.itemid= itemid
        this.item = item
    }
}

