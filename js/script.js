// var plusbtn =document.getElementsByClassName('plus-btn')
// function(event){
// var plusbtnclicked=addEventListener(plusbtn,'click')

// }
var i;
var price1 = [40, 65, 80];
updatecarttotal = () => {
  var total = 0;
  for (i = 0; i < document.getElementsByClassName("total-price").length; i++) {
    total =
      total +
      parseFloat(document.getElementsByClassName("total-price")[i].innerHTML);
  }

  document.getElementsByClassName("carttotalprice")[0].innerHTML = total;
};

removeitem = () => {
  let deletebtn = document.getElementsByClassName("delete-btn");
  for (var i = 0; i < deletebtn.length; i++) {
    var button = deletebtn[i];
    button.addEventListener("click", function (event) {
      var buttonclicked = event.target;
      buttonclicked.parentElement.parentElement.remove();
      updatecarttotal();
    });
  }
};
// var shoppingcart = document.getElementsByClassName("shopping-cart")[0];
// var items = shoppingcart.getElementsByClassName('item');
// for (var i = 0; i < items.length; i++) {
//   var item = items[i];
//   var plusbutton = item.getElementsByClassName("plus-btn")[0]
//    plusbutton.addEventListener('click', function(event){
//     var plusbuttonclicked = event.target
//     console.log(plusbuttonclicked)
//     var count = plusbuttonclicked.parentElement.getElementsByClassName('inputclass')
//     console.log(count)
//     count = count + 1
//   })
//   updatecarttotal();
// }
let plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", (e) => {
    var x = e.target;
    var quantityelement = x.parentElement;
    quantityelement.getElementsByClassName("inputclass")[0].value =
      +quantityelement.getElementsByClassName("inputclass")[0].value + 1;
    quantityelement.nextElementSibling.getElementsByClassName('total-price')[0].innerHTML =
      quantityelement.getElementsByClassName("inputclass")[0].value * 50;
    updatecarttotal();
  });
}
let minus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", (e) => {
    var x = e.target;
    var quantityelement = x.parentElement;
    if (quantityelement.getElementsByClassName("inputclass")[0].value == 0) {
      quantityelement.getElementsByClassName("inputclass")[0].value = 0;
    } else {
      quantityelement.getElementsByClassName("inputclass")[0].value =
        +quantityelement.getElementsByClassName("inputclass")[0].value - 1;
        quantityelement.nextElementSibling.getElementsByClassName('total-price')[0].innerHTML =
        quantityelement.getElementsByClassName("inputclass")[0].value * 50;
      updatecarttotal();
    }
  });
}

dec = (i) => {
  let minusbtn = document.getElementsByClassName("inputclass");
  if (minusbtn[i].value == 0) {
    minusbtn[i].value = 0;
  } else {
    minusbtn[i].value = +minusbtn[i].value - 1;
  }
  document.getElementsByClassName("total-price")[i].innerHTML =
    price1[i] * minusbtn[i].value;
  updatecarttotal();
};
changeimg = () => {
  let img = document.getElementsByClassName("image")[0];
};
