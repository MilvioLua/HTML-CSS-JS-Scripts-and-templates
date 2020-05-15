class User {
 constructor(name, isOnline, status) {
  this.name = name;
  this.isOnline = true;
  this.status  = status;
 }
}

var user1 = new User("Arya");
user1.status = "coding";
var user2 = new User("Theon");
