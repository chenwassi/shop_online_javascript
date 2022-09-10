//run all prices and inject to new array//
let price = document.querySelectorAll(".price");
let inputPrice = document.querySelectorAll(".inputPrice");
let sum = document.querySelector(".sum");
let maam = document.querySelector(".maam");

let priceArr = [];
for (let i = 0; i < price.length; i++) {
  let priceI = price[i];
  priceArr[i] = Number(priceI.innerText);
}

let arr = [inputPrice[0], inputPrice[1], inputPrice[2], inputPrice[3]];
let arrBox = [];
for (let i = 0; i < arr.length; i++) {
  function one() {
    price[i].innerHTML = priceArr[i] * arr[i].value;
    arrBox[i] = Number(price[i].innerHTML);
    console.log(arrBox);
  }
inputPrice[i].addEventListener("change", newTotalPrice);
inputPrice[i].addEventListener("change", mam);

function newTotalPrice() {
let numStart = 0;
one();
let finArr=arrBox.reduce(function(previousValue,currentValue) {
 return previousValue + currentValue;
},numStart)
sum.innerHTML=finArr;
}
// 
function mam() {
    let numStart = 0;
    let llo=arrBox.reduce(function(previousValue,currentValue) {
     return (previousValue + currentValue) *0.85 
    },numStart)
    maam.innerHTML=llo;
}
};
