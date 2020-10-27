"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var mobile_1 = require("./mobile");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(mobiles, location, name) {
        this.mobiles = mobiles;
        this.location = location;
        this.name = name;
        this.totalprice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setName = function (nuevonombre) {
        this.name = nuevonombre;
    };
    MobileLibrary.prototype.setLocation = function (nuevalocation) {
        this.location = nuevalocation;
    };
    MobileLibrary.prototype.setMobiles = function (nuevosMobiles) {
        this.mobiles = nuevosMobiles;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var resultado = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            resultado += this.mobiles[i].getPrice();
        }
        return resultado;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("Estos son todos los moviles\n" + this.mobiles.forEach(function (elem) { elem.imprimirprivadas(); }) + "Precio total : " + this.totalprice);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var movil1 = new mobile_1.Mobile("mi5", "Mi5", "Xiaomi", 32, "negro", true, 2, 500);
var movil2 = new mobile_1.Mobile("mi6", "Mi6", "Xiaomi", 64, "blanco", true, 3, 600);
var movil3 = new mobile_1.Mobile("mi7", "Mi7", "Xiaomi", 128, "blanco", true, 4, 700);
var movil4 = new mobile_1.Mobile("mi8", "Mi8", "Xiaomi", 128, "amarillo", true, 5, 700);
var movil5 = new mobile_1.Mobile("mi10", "Mi10", "Xiaomi", 256, "blanco", true, 5, 800);
var mylibrary22 = new MobileLibrary([movil1, movil2, movil3, movil4, movil5], "Barcelona", "superalmacen");
mylibrary22.printLibrary();
