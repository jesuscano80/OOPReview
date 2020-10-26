"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.toStringNuevo = function () {
        console.log("nombre comercial - " + this.name + " \n model - " + this.model + " \n marca - " + this.trademark + " \n Tama\u00F1o SD - " + this.sdSize + " \n Color - " + this.color + " \n Es 5G - " + this.is5G + " \n Numero de camaras - " + this.cameraNumber + " \n Precio - " + this.price + "\n\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
