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
            this.totalprice= this.totalPriceCalculation();
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
 
    private totalPriceCalculation():number{
        var resultado=0;
        for (let i=0;i<this.mobiles.length;i++){
            resultado+=this.mobiles[i].getPrice();
        }
        return resultado
    }
    
    public printLibrary(){
        console.log("Estos son todos los moviles\n" + this.mobiles.forEach(function(elem){elem.imprimirprivadas()}) + "Precio total : " + this.totalprice);
    }
  
}

var movil1 = new Mobile ("mi5","Mi5","Xiaomi",32,"negro",true,2,500);
var movil2 = new Mobile ("mi6","Mi6","Xiaomi",64,"blanco",true,3,600);
var movil3 = new Mobile ("mi7","Mi7","Xiaomi",128,"blanco",true,4,700);
var movil4 = new Mobile ("mi8","Mi8","Xiaomi",128,"amarillo",true,5,700);
var movil5 = new Mobile ("mi10","Mi10","Xiaomi",256,"blanco",true,5,800);
let mylibrary22= new MobileLibrary ([movil1,movil2,movil3,movil4,movil5],"Barcelona","superalmacen");

mylibrary22.printLibrary();

export{MobileLibrary};