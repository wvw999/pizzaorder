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
  var shit = topping
  console.log("here is this " + this.name);
  console.log("here is topping " + shit);
  return this.shit = this.shit + 1;
}

// front end
$(document).ready(function() {
  var pizza = new Order("fuckin' pizza");
  $('#pepperoni').click(function(e) {
    e.preventDefault();
    console.log(pizza.name);
    console.log("this id " + this.id);
    pizza.toppings(this.id);
    console.log("after " + pizza.pepperoni);
  });
});
