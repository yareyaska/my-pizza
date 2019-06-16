
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
