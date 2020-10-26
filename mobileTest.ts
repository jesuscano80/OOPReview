import {Mobile} from "./mobile"

let nokia3210= new Mobile ("Nokia 3210","3210","Nokia",4,"Blanco",false,1,140);
let iphone3g = new Mobile ("iPhone 3g","3g","Apple",16,"blanco",false,1,240);
let galaxy10= new Mobile ("Galaxy10","Galaxy 10","Samsung",32,"negro",true,3,550);






iphone3g.toStringNuevo();
galaxy10.toStringNuevo();

nokia3210.is5G=true;
nokia3210.cameraNumber=4;
nokia3210.toStringNuevo();