function total() {
    var Caffe_Mocha;
    var Cappuccino;
    var Espresso;
    var Caffe_Latte;
    var Americano;
    var Caramael_Macchiato;
    var Brewed_Coffee;
    var Cold_Brew_Black;
    var sum;
    Caffe_Mocha = parseInt(document.getElementById("qty1").value);
    Cappuccino = parseInt(document.getElementById("qty2").value);
    Espresso = parseInt(document.getElementById("qty3").value);
    Caffe_Latte = parseInt(document.getElementById("qty4").value);
    Americano = parseInt(document.getElementById("qty5").value);
    Caramael_Macchiato = parseInt(document.getElementById("qty6").value);
    Brewed_Coffee = parseInt(document.getElementById("qty7").value);
    Cold_Brew_Black = parseInt(document.getElementById("qty8").value);
    
    sum = (Caffe_Mocha * 280) + (Cappuccino * 250) + (Espresso * 175) + (Caffe_Latte * 225) + (Americano * 210) + (Caramael_Macchiato * 275) + (Brewed_Coffee * 220) + (Cold_Brew_Black * 270);
    document.getElementById("total_cost").innerHTML = "INR "+sum+".00";

  }
  function submit() {
    alert("Your Order has been Submitted, Successfully!");
  }