"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(mobiles, location, name) {
        this.mobiles = mobiles;
        this.location = location;
        this.name = name;
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
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
