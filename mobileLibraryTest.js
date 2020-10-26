"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
var movil1 = new mobile_1.Mobile("mi5", "Mi5", "Xiaomi", 32, "negro", true, 2, 500);
var movil2 = new mobile_1.Mobile("mi6", "Mi6", "Xiaomi", 64, "blanco", true, 3, 600);
var movil3 = new mobile_1.Mobile("mi7", "Mi7", "Xiaomi", 128, "blanco", true, 4, 700);
var movil4 = new mobile_1.Mobile("mi8", "Mi8", "Xiaomi", 128, "amarillo", true, 5, 700);
var movil5 = new mobile_1.Mobile("mi10", "Mi10", "Xiaomi", 256, "blanco", true, 5, 800);
var arraymoviles = [movil1, movil2, movil3, movil4, movil5];
var mylibreria = new mobileLibrary_1.MobileLibrary(arraymoviles, "Madrid", "libreria1");
console.log(mylibreria.totalPriceCalculation());
