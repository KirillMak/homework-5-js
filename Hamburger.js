var MenuPosition = require('./MenuPosition').MenuPosition;

/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
*/

(function(){
    function Hamburger(size, stuffing) { 
                MenuPosition.apply(this,size.price,size.calories);
                this._size = size;
                this._stuffing = stuffing;
            }
            Hamburger.prototype.constructor = Hamburger;
    
            /**
             * Узнать размер гамбургера
             */
            Hamburger.prototype.getSize = function () {
                return this._size;
            }

            /**
            * Узнать начинку гамбургера
            */
            Hamburger.prototype.getStuffing = function () {
                return this._stuffing;
            }

            /**
             * Узнать цену гамбургера
             * @return {Number} Цена в тугриках
             */
            Hamburger.prototype.calculatePrice = function () {
                return this.getSize().price + this.getStuffing().price;
            }

            /**
             * Узнать калорийность
             * @return {Number} Калорийность в калориях
             */
            Hamburger.prototype.calculateCalories = function () {
                return this.getSize().calories + this.getStuffing().calories;
            }
            
            /* Размеры, виды начинок и добавок */

            Hamburger.SIZE_SMALL = {price: 50, calories: 20};
            Hamburger.SIZE_LARGE = {price: 100, calories: 40};
            Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
            Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
            Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
    

            window.Hamburger = Hamburger;
})()


module.exports = {
    Hamburger: Hamburger
  };

/*
console.log(Ham.getSize());
console.log(Ham.getStuffing());
console.log(Ham.calculateCalories());
console.log(Ham.calculatePrice());
*/