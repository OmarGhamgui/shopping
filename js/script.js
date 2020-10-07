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

let plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", (e) => {
    var x = e.target;
    var quantityelement = x.parentElement;
    quantityelement.getElementsByClassName("inputclass")[0].value =
      +quantityelement.getElementsByClassName("inputclass")[0].value + 1;
    quantityelement.nextElementSibling.getElementsByClassName(
      "total-price"
    )[0].innerHTML =
      quantityelement.getElementsByClassName("inputclass")[0].value *
      +quantityelement.getElementsByClassName("inputclass")[0].name;
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
      quantityelement.nextElementSibling.getElementsByClassName(
        "total-price"
      )[0].innerHTML =
        quantityelement.getElementsByClassName("inputclass")[0].value *
        +quantityelement.getElementsByClassName("inputclass")[0].name;
      updatecarttotal();
    }
  });
}
let likebutton = document.getElementsByClassName("like-btn");
for (var i = 0; i < likebutton.length; i++) {
  var clicks = 0;
  var like = likebutton[i];
  like.addEventListener("click", (e) => {
    var likebuttonclicked = e.target;
    if (clicks % 2 == 0) {
      likebuttonclicked.style.backgroundPositionX = "85.7%";
    } else {
      likebuttonclicked.style.backgroundPositionX = "0%";
    }
    clicks = clicks + 1;
  });
}
