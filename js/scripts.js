// back end
function Order (name) {
  this.name = name;
  this.size = ["small", "medium", "large", "extra large"];
  this.sauce = ["marinara", "white", "olive oil", "pesto"];
  this.pepperoni = 0;
  this.sausage = 0;
  this.onion = 0;
  this.greenpeppers = 0;
  this.blackolive = 0;
  this.kalamottaolive = 0;
  this.anchovy = 0;
  this.artichoke = 0;
  this.roastgarlic = 0;
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

function toggler() {
  $('.buildOrder').toggle(200);
  $('.completeOrder').toggle(200);
}

// front end
$(document).ready(function() {
  var pizza = new Order("Dinner");
  var topArray = ["pepperoni", "sausage", "onion", "greenpeppers", "blackolive", "kalamottaolive", "anchovy", "artichoke", "roastedgarlic", "mincedgarlic"];
  var reftopArray = []
  var tallytopArray = []
  topArray.forEach(function(val){reftopArray.push("less" + val)});
  topArray.forEach(function(val){tallytopArray.push("tally" + val)});
  pageBuilder(topArray);

  $('#pepperoni, #sausage, #onion, #greenpeppers, #blackolive, #kalamottaolive, #anchovy, #artichoke, #roastedgarlic, #mincedgarlic').click(function(e) {
    e.preventDefault();
      console.log("got to add click event");
    pizza.toppings(this.id,1);
    console.log("back from toppings");
    var tallyIndex = tallytopArray[topArray.indexOf(this.id)];
    pizza.tallyUpdate(tallyIndex,this.id);
    console.log("back from tally update");
    console.log("tallyIndex " + tallyIndex);
    console.log("this.id " + this.id);
  });

  $('#lesspepperoni, #lesssausage, #lessonion, #lessgreenpeppers, #lessblackolive, #lesskalamottaolive, #lessanchovy, #lessartichoke, #lessroastedgarlic, #lessmincedgarlic').click(function(e) {
    e.preventDefault();
    var lessIndex = topArray[reftopArray.indexOf(this.id)];
    pizza.toppings(lessIndex,-1);
    var tallyIndex = tallytopArray[reftopArray.indexOf(this.id)];
    console.log("tallyIndex " + tallyIndex);
    console.log("lessIndex " + lessIndex);
    pizza.tallyUpdate(tallyIndex,lessIndex);
  });

  $('#complete').click(function(e) {
    e.preventDefault();
    toggler();
  });
  $('#goback').click(function(e) {
    e.preventDefault();
    toggler();
  });
});
