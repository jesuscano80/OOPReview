class Mobile{
    private name:string;
    private model:string;
    private trademark: string;
    private sdSize:number;
    private color:string;
    private is5G: boolean;
    private cameraNumber:number;
    private price:number;
    constructor(name:string, model:string,trademark:string, sdSize:number,color:string,is5G:boolean,cameraNumber:number, price:number){
        this.name=name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.cameraNumber=cameraNumber;
        this.price=price;
    }
    getName():string{
        return this.name;   
    }
    getModel():string{
        return this.model;
    }

    getTradeMark():string{
        return this.trademark;
    }

    getSdSize():number{
        return this.sdSize;
    }

    getColor():string{
        return this.color;
    }

    getIs5g():boolean{
        return this.is5G;
    }

    getCameranumber():number{
        return this.cameraNumber;
    }

    getPrice():number{
        return this.price;
    }
    
    setName(nuevonombre:string){
        this.name=nuevonombre;
    }

    setModel(nuevomodel:string){
        this.model=nuevomodel;
    }

    setTradeMark(nuevamarca:string){
        this.trademark=nuevamarca;
    }

    setSDsize(nuevosdsize:number){
        this.sdSize=nuevosdsize;
    }

    setColor(nuevocolor:string){
        this.color=nuevocolor;
    }

    setIs5g(cambio5g:boolean){
        this.is5G=cambio5g;
    }

    setCameraNumber(nuevascamaras:number){
        this.cameraNumber=nuevascamaras;
    }

    setPrecio(nuevoprecio:number){
        this.price=nuevoprecio;
    }
    imprimirprivadas():void{
        console.log("Las características del modelo " + this.getName() +  " son: \n :"  + this.toStringNuevo() );
    }

    toStringNuevo():string{
      return `\t nombre comercial - ${this.name} \n \t model - ${this.model} \n \t marca - ${this.trademark} \n \t Tamaño SD - ${this.sdSize} \n \t Color - ${this.color} \n \t Es 5G - ${this.is5G} \n \t Numero de camaras - ${this.cameraNumber} \n \t Precio - ${this.price}\n\n`;
    
    }

}

export {Mobile};