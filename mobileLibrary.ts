import {Mobile} from "./mobile";

class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalprice:number;

        constructor(mobiles:Mobile[],location:string,name:string)
        {
            this.mobiles=mobiles;
            this.location=location;
            this.name=name;
        }
    getName():string{
        return this.name;
    }

    getLocation():string{
        return this.location;
    }

    getMobiles():Mobile[]{
        return this.mobiles;
    }

    setName(nuevonombre:string){
        this.name=nuevonombre;
    }
    setLocation(nuevalocation:string){
        this.location=nuevalocation;
    }

    setMobiles(nuevosMobiles:Mobile[]){
        this.mobiles=nuevosMobiles;
    }
 
    public totalPriceCalculation():number{
        var resultado=0;
        for (let i=0;i<this.mobiles.length;i++){
            resultado+=this.mobiles[i].getPrice();
        }
        return resultado
    }
    
  
}

export{MobileLibrary};