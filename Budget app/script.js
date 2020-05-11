var budget = 2500;
var savingsPriority = "low";

var rent = 800;
var utilities = 200;
var newLaptop = 2200;


var totalCosts = rent + utilities;
var budgetLeft = budget - totalCosts;
var buyLaptop = budgetLeft >= newLaptop;
console.log("New Laptop Within Budget:");
console.log(buyLaptop);
console.log("Postpone Purchase and Save Instead:");
console.log(savingsPriority == "high");
