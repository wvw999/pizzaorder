// back end
function Order (name) {
  this.name = name;
  this.size = [];
  this.sauce = [];
  this.pepperoni = 0;
  this.sausage = 0;
  this.onion = 0;
  this.greenpeppers = 0;
  this.blackolive = 0;
  this.kalamottaolive = 0;
  this.anchovy = 0;
  this.artichoke = 0;
  this.roastedgarlic = 0;
  this.mincedgarlic = 0;
}

Order.prototype.toppings = function (tops,val) {
  if ((val == -1) && (this[tops] == 0)){
  } else {
  this[tops] = this[tops] + val;
  }
}

Order.prototype.tallyUpdate = function (val,value) {
  $('#' + val).text(this[value]);
}

function pageBuilder(tops) {
  tops.forEach(function(val) {
    $('#toppings').append('<button id="' + val + '" class="btn btn-primary" type="submit" name="' + val + '">+</button>' +
              '<button class="btn btn-basic" type="submit" name="' + val + '">' + val + '</button>' +
              '<button id="less' + val + '" class="btn btn-danger" type="submit" name="' + val + '">-</button>' +
              '<span id="tally' + val + '">0</span><br> <br>'
    )
  });
}

Order.prototype.cashier = function (arr,pricearr) {
  var x = 0;
  var subttl = 5
  var food = this;
  arr.forEach(function(val) {
    $('.' + val).text(food[val] + " times $" + pricearr[x].toFixed(2) + " = $" + (food[val] * pricearr[x]).toFixed(2));
    subttl = subttl + (food[val] * pricearr[x]);
    $('.size').text(food.size + " = $3.00");
    $('.sauce').text(food.sauce + " = $2.00");
    $('#total').text("     =      $ " + subttl);
    x++;
  });
}

function toggler() {
  $('.buildOrder').toggle(200);
  $('.completeOrder').toggle(200);
}

// front end
$(document).ready(function() {
  var pizza = new Order("Dinner");
  var topArray = ["pepperoni", "sausage", "onion", "greenpeppers", "blackolive", "kalamottaolive", "anchovy", "artichoke", "roastedgarlic", "mincedgarlic"];
  var priceArray = [3, 3, 1.75, 1.75, 1.75, 2.5, 3, 2.5, 1.75, 1.75]
  var reftopArray = []
  var tallytopArray = []
  var sizeArray = ["small", "medium", "large", "extra large"]
  var sauceArray = ["marinara", "white", "olive oil", "pesto"]
  topArray.forEach(function(val){reftopArray.push("less" + val)});
  topArray.forEach(function(val){tallytopArray.push("tally" + val)});
  pageBuilder(topArray);
  var allNames = [pepperoni, sausage, onion, greenpeppers, blackolive, kalamottaolive, anchovy, artichoke, roastedgarlic, mincedgarlic];

  $('#pepperoni, #sausage, #onion, #greenpeppers, #blackolive, #kalamottaolive, #anchovy, #artichoke, #roastedgarlic, #mincedgarlic').click(function(e) {
    e.preventDefault();
    pizza.toppings(this.id,1);
    var tallyIndex = tallytopArray[topArray.indexOf(this.id)];
    pizza.tallyUpdate(tallyIndex,this.id);
  });

  $('#lesspepperoni, #lesssausage, #lessonion, #lessgreenpeppers, #lessblackolive, #lesskalamottaolive, #lessanchovy, #lessartichoke, #lessroastedgarlic, #lessmincedgarlic').click(function(e) {
    e.preventDefault();
    var lessIndex = topArray[reftopArray.indexOf(this.id)];
    pizza.toppings(lessIndex,-1);
    var tallyIndex = tallytopArray[reftopArray.indexOf(this.id)];
    pizza.tallyUpdate(tallyIndex,lessIndex);
  });

  $('#complete').click(function(e) {
    e.preventDefault();
    toggler();
    pizza.size.push(sizeArray[parseInt($("input:radio[name=q1]:checked").val())])
    pizza.sauce.push(sauceArray[parseInt($("input:radio[name=q2]:checked").val())])
    pizza.cashier(topArray,priceArray)
  });
  $('#goback').click(function(e) {
    e.preventDefault();
    toggler();
  });
});
