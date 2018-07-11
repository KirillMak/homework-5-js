function MenuPosition(price,calories){
    this._price  = price;
    this._calories = calories;
}

MenuPosition.prototype.constructor = MenuPosition;
MenuPosition.prototype.getPrice = function(){
    return this._price;
}

MenuPosition.prototype.getCalories = function(){
    return this._calories;
}

module.exports = {
      MenuPosition: MenuPosition
    };