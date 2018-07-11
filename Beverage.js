var MenuPosition = require('./MenuPosition').MenuPosition;

/**
* Класс, объекты которого описывают параметры напитка. 
* 
* @constructor
* @param volume        Объем напитка
* @param temperature   Температура напитка
*/

(function(){

    function Beverage(type, volume , temperature){
        MenuPosition.apply(this,type.price,type.calories);
        this._volume = volume;
        this._temperature = temperature;
    
        }

        Beverage.prototype.constructor = Beverage;

        Beverage.prototype.getVolume = function(){
            return this._volume;
        }

        Beverage.prototype.getTemperature = function(){
            return this._temperature;
        }
        Beverage.prototype.calculateCalories = function () {
            return this.calories;
        }

        Beverage.prototype.calculatePrice = function () {
            return this.price;
        }
    

    Beverage.VOLUME_SMALL = 0.3;
    Beverage.VOLUME_MEDIUM = 0.5;
    Beverage.VOLUME_BIG = 0.7;
    Beverage.TEMPERATURE_COLD = "cold";
    Beverage.TEMPERATURE_HOT = "hot";
 
    Beverage.COLA = {price: 10,calories: 20};
    Beverage.COFFEE = {price:15,calories:30};

    window.Beverage = Beverage;
    
})();

/**
* Класс, объекты которого описывают параметры кофе. 
  Наследуется от класса Beverage
* 
*
* @param volume        Объем напитка
* @param temperature   Температура напитка
* @param withMilk      Наличие молока
* @param withSugar     Наличие сахара
*/

/*

    function Coffee(type, volume, temperature, withMilk,withSugar){

        
        Beverage.call(this, type, volume, temperature);
        
/*
        if (withMilk === undefined) {
            this._withMilk = false;
          }

        if (withSugar === undefined) {
            this._withSugar = false;
          }

        Coffee.prototype.getMilkInfo = function(){
            return this._withMilk;
        }
        Coffee.prototype.getSugarInfo = function(){
            return this._withSugar;
        }
    }

    Coffee.prototype = Object.create(Beverage.prototype);
    Coffee.prototype.constructor = Coffee;

    Coffee.prototype.CALORIES = 20;
    Coffee.prototype.PRICE = 80;
    Coffee.WITH_MILK = "true";
    Coffee.WITHOUT_MILK = "false";
    Coffee.WITH_SUGAR = "true";
    Coffee.WITHOUT_SUGAR = "false";
*/
   

  

/**
* Класс, объекты которого описывают параметры колы. 
  Наследуется от класса Beverage
* 
*
* @param volume        Объем напитка
* @param temperature   Температура напитка
* @param withIce       Наличие льда
*/


/*
    function Cola(type, volume, temperature, withIce){
        
        Beverage.call(this, type, volume, temperature);

        this._withIce;
        
        if (withIce === undefined) {
            this._withIce = false;
          }
    }

    Cola.prototype = Object.create(Beverage.prototype);
    
    Cola.prototype.getIceInfo = function(){
        return this._withIce;
    }

    Cola.prototype.CALORIES = 40;
    Cola.prototype.PRICE = 50;

*/


module.exports = {
    Beverage: Beverage
  };