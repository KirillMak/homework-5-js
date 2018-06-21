/**
* Класс, объекты которого описывают параметры напитка. 
* 
* @constructor
* @param volume        Объем напитка
* @param temperature   Температура напитка
*/

(function(){

    function Beverage(volume , temperature){

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
            return this.CALORIES;
        }

        Beverage.prototype.calculatePrice = function () {
            return this.PRICE;
        }
    

    Beverage.VOLUME_SMALL = 0.3;
    Beverage.VOLUME_MEDIUM = 0.5;
    Beverage.VOLUME_BIG = 0.7;
    Beverage.TEMPERATURE_COLD = "cold";
    Beverage.TEMPERATURE_HOT = "hot";
 

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



    function Coffee(volume, temperature, withMilk,withSugar){

        
        Beverage.call(this, volume, temperature);
        /*
        this._withMilk;
        this._withSugar;*/

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

   

  

/**
* Класс, объекты которого описывают параметры колы. 
  Наследуется от класса Beverage
* 
*
* @param volume        Объем напитка
* @param temperature   Температура напитка
* @param withIce       Наличие льда
*/



    function Cola(volume, temperature, withIce){
        
        Beverage.call(this, volume, temperature);

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

