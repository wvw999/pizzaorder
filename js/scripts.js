// back end
function Order (name) {
  this.name = name;
  this.size = ["small", "medium", "large", "extra large"];
  this.sauce = ["marinara", "white", "olive oil", "pesto"];
  this.pepperoni = 0;
  this.sausage = 0;
  this.onion = 0;
  this.greenpep = 0;
  this.blackolive = 0;
  this.kalamottaolive = 0;
  this.anchovy = 0;
  this.artichoke = 0;
  this.roastgarlic = 0;
  this.mincedgarlic = 0;
}

Order.prototype.toppings = function (topping) {
  console.log(this);
  console.log(topping);
  this.topping = this.topping + 1;
}

// front end
$(document).ready(function() {
  var pizza = new Order("fuckin' pizza");
  $('#pepperoni').click(function(e) {
    console.log(pizza.name);
    console.log("before " + pizza);
    pizza.toppings(this.id);
    console.log("after " + pizza);
  });

});
