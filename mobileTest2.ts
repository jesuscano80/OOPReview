import {Mobile} from "./mobile"

let nokia3210= new Mobile ("Nokia 3210","3210","Nokia",4,"Blanco",false,1,140);
let iphone3g = new Mobile ("iPhone 3g","3g","Apple",16,"blanco",false,1,240);
let galaxy10= new Mobile ("Galaxy10","Galaxy 10","Samsung",32,"negro",true,3,550);



nokia3210.setIs5g(true);
nokia3210.setCameraNumber(4);

nokia3210.imprimirprivadas();

let moviles:Mobile[]=[nokia3210,iphone3g,galaxy10];
console.log("IMPRIMIR LOS ATRIBUTOS DE LOS TRES OBJETOS CON UN FOR");
console.log("=====================================================")
moviles.forEach(function(elem){elem.imprimirprivadas()});

