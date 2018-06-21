/**
* Класс, объекты которого описывают параметры салата. 
* 
* @constructor
* @param type        Тип салата
* @param weight      Вес
*/
    function Salad(type, weight){

         this._type = type;
         this._weight = weight;
        
        }


        Salad.prototype.getType = function(){
            return this._type;
        }

        Salad.prototype.getWeight = function(){
            return this._weight;
        }
        
        Salad.prototype.calculateCalories = function(){
            return this.getType().calories * this.getWeight() / 100;
        }
        
        Salad.prototype.calculatePrice = function(){
            return this.getType().price * this.getWeight() / 100;
        }

    

Salad.CAESAR = { 
                    name: "Caesar",
                    price: 100,
                    calories: 20
                };

Salad.OLIVIE = {
                    name: "Olivie",
                    price: 50,
                    calories: 80
                };

Salad.WEIGHT_SMALL = 100;
Salad.WEIGHT_MEDIUM = 250;
Salad.WEIGHT_LARGE = 400;

Salad.prototype.constructor = Salad;



