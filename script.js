var counter = 0;

function upvote() {
 counter = counter + 1;

 document.getElementById("votes").innerHTML =
  counter + " Up votes";
}

function downvote() {
 counter = counter - 1;

 document.getElementById("votesdows").innerHTML =
  counter + " Down votes";
}
