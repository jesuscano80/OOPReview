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
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTradeMark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5g = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameranumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (nuevonombre) {
        this.name = nuevonombre;
    };
    Mobile.prototype.setModel = function (nuevomodel) {
        this.model = nuevomodel;
    };
    Mobile.prototype.setTradeMark = function (nuevamarca) {
        this.trademark = nuevamarca;
    };
    Mobile.prototype.setSDsize = function (nuevosdsize) {
        this.sdSize = nuevosdsize;
    };
    Mobile.prototype.setColor = function (nuevocolor) {
        this.color = nuevocolor;
    };
    Mobile.prototype.setIs5g = function (cambio5g) {
        this.is5G = cambio5g;
    };
    Mobile.prototype.setCameraNumber = function (nuevascamaras) {
        this.cameraNumber = nuevascamaras;
    };
    Mobile.prototype.setPrecio = function (nuevoprecio) {
        this.price = nuevoprecio;
    };
    Mobile.prototype.imprimirprivadas = function () {
        console.log("Las características del modelo " + this.getName() + " son: \n " + this.toStringNuevo());
    };
    Mobile.prototype.toStringNuevo = function () {
        return "\t nombre comercial - " + this.name + " \n \t model - " + this.model + " \n \t marca - " + this.trademark + " \n \t Tama\u00F1o SD - " + this.sdSize + " \n \t Color - " + this.color + " \n \t Es 5G - " + this.is5G + " \n \t Numero de camaras - " + this.cameraNumber + " \n \t Precio - " + this.price + "\n\n";
    };
    return Mobile;
}());
exports.Mobile = Mobile;
