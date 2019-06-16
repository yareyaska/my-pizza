
function Pizza(selectedSize,selectedToppings) {
  this.selectedSize = selectedSize;
  this.selectedToppings = selectedToppings;
}



Pizza.prototype.sizeCost = function() {
  var sizes = {
  
    small: 600,
    medium: 800,
    large: 1000
  };

  return sizes[this.selectedSize];
}


Pizza.prototype.toppingsCost = function() {
  var totalToppingsCost = 0;
  var toppings = {
    pepperoni: 200,
    sausage: 200,
    bacon: 200,
    cheese: 200,
    onion: 200,
  };

  this.selectedToppings.forEach(function(topping) {
    totalToppingsCost += toppings[topping];
  });

  return totalToppingsCost;
}

Pizza.prototype.pizzaCost = function() {
  return this.sizeCost() + this.toppingsCost();
}
