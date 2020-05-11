var orderList = document.getElementById("orders");

var marinara = document.createElement("li");
marinara.innerHTML = "1 Pizza Marinara";
orderList.appendChild(marinara);

var romana = document.createElement("li");
romana.innerHTML =
"1 Pizza Romana, extra anchovies";
orderList.appendChild(romana);

var readyList = document.getElementById("ready");
var margherita = document.getElementById(
 "margherita");
orderList.removeChild(margherita);
readyList.appendChild(margherita);
