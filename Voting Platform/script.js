var counter = 0;
var counterdown= 0;
function upvote() {
 counter = counter + 1;

 document.getElementById("votes").innerHTML =
  counter + " Up votes";
}

function downvote() {
 counterdown = counterdown - 1;

 document.getElementById("votesdows").innerHTML =
  counterdown + " Down votes";
}
