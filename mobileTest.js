"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("Nokia 3210", "3210", "Nokia", 4, "Blanco", false, 1, 140);
var iphone3g = new mobile_1.Mobile("iPhone 3g", "3g", "Apple", 16, "blanco", false, 1, 240);
var galaxy10 = new mobile_1.Mobile("Galaxy10", "Galaxy 10", "Samsung", 32, "negro", true, 3, 550);
// iphone3g.toStringNuevo();
// galaxy10.toStringNuevo();
// nokia3210.is5G=true;
// nokia3210.cameraNumber=4;
// nokia3210.toStringNuevo();
nokia3210.setIs5g(true);
nokia3210.setCameraNumber(4);
console.log(nokia3210.imprimirprivadas());
