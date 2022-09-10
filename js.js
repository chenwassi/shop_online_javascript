let price=document.querySelectorAll(".price");

let input=document.querySelectorAll(".inputPrice");

let newPrice = [];
for (let i =0; i<price.length; i++){
    newPrice[i]= Number(price[i].innerHTML);
    
}
console.log(newPrice);

let inputArr=[input[0],input[1],input[2],input[3]]
let prices=[];
let sum = document.querySelector(".sum");

for(let i=0;i<inputArr.length;i++)
{
    function red(){
price[i].innerHTML= newPrice[i]*inputArr[i].value;
prices[i]= Number(price[i].innerHTML);
}
console.log(prices);

input[i].addEventListener("change",newTotalPrice);
function newTotalPrice() {
    let numStart = 0;
    red();
    let finArr=prices.reduce(function(previousValue,currentValue) {
     return previousValue + currentValue;
    },numStart)
    sum.innerHTML=finArr;
    }
}







