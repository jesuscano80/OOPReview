import {Mobile} from "./mobile"
import {MobileLibrary} from "./mobileLibrary"

var movil1 = new Mobile ("mi5","Mi5","Xiaomi",32,"negro",true,2,500);
var movil2 = new Mobile ("mi6","Mi6","Xiaomi",64,"blanco",true,3,600);
var movil3 = new Mobile ("mi7","Mi7","Xiaomi",128,"blanco",true,4,700);
var movil4 = new Mobile ("mi8","Mi8","Xiaomi",128,"amarillo",true,5,700);
var movil5 = new Mobile ("mi10","Mi10","Xiaomi",256,"blanco",true,5,800);

var arraymoviles=[movil1,movil2,movil3,movil4,movil5];

var mylibreria = new MobileLibrary (arraymoviles,"Madrid","libreria1");

// console.log(mylibreria.totalPriceCalculation());

// arraymoviles.forEach(function(elem){elem.imprimirprivadas()});




