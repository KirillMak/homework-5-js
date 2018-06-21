/**
* Класс, объекты которого описывают параметры заказа. 
* 
*  
* @param composition   Состав заказа
*
*        _isPaid        Состояние заказа: оплачен/не оплачен
*        _date          Дата оформления заказа
*/


        function Order(composition){
                this._date;
                this._composition = composition;
                this._isPaid = false;

        }
            
        Order.prototype.constructor = Order; 

        Order.prototype.getComposition = function(){
            return this._composition;
        }

        Order.prototype.getPaymentInfo = function(){
            return this._isPaid;
        }

        Order.prototype.pay = function(){
            this._isPaid = true;
            this._date = new Date();
            Object.freeze(this);
            return "Заказ успешно оплачен!";
        } 
        Order.prototype.getDate = function(){
            return this._date;
        }

        Order.prototype.addPosition = function(position){
            if(!this._isPaid){
                    this._composition.push(position);
                    return "Позиция успешно добавлена!";
            }
            else {
                return "Операция невозможна. Заказ оплачен!"
            }
            
        }

        Order.prototype.removePosition = function(position){
            if(!this._isPaid){
                
                if(this._composition.indexOf(position) != -1){
                    this._composition.splice(1,this._composition.indexOf(position));
                    return "Элемент успешно удален!"
                }
                else {
                    return "Данный элемент отсутствует!";
                }
                
            }
            else {
                return "Операция невозможна. Заказ оплачен!"
            }
        }

        Order.prototype.calculateTotalPrice = function(){
            var totalPrice = 0;
            this._composition.forEach(function(item){
                //console.log(item);
                totalPrice+=item.calculatePrice();
            });

            return totalPrice;
        }

        Order.prototype.calculateTotalCalories = function(){
            var totalCalories = 0;
            this._composition.forEach(function(item){
                //console.log(item);
                totalCalories+=item.calculateCalories();
            });

            return totalCalories;
        }
    

      