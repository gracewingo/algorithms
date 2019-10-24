 /* 
 Object Oriented Programming concept - creating classes which allow to generate objects. 
 
Requirements:

The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
 
This program successfully passed the following tests: 

Object.keys(bob).length should return 6
bob instanceof Person should return true
bob.firstName should return undefined
bob.lastName should return undefined
bob.getFirstName() should return "Bob"
bob.getLastName() should return "Ross"
bob.getFullName() should return "Bob Ross"
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry")
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry")
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")
 */
 
var Person = function(firstAndLast) {
   let name = arguments[0].split(" ");
   let firstName = name[0];
   let lastName = name[1];

  this.setFirstName = function (first){
  	 firstName = first;
  };


  this.setLastName = function (last){
  	 lastName = last;
  };

  this.setFullName = function (firstAndLast){
  	firstName = firstAndLast.split(" ")[0]
  	lastName = firstAndLast.split(" ")[1]
  	 firstName + " " + lastName; 
  };

  this.getFirstName = function (){
  	return firstName;
  };

  this.getLastName = function (){
  	return lastName;
  };

  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  return firstAndLast;
};


var bob = new Person('Bob Ross');

bob.setFirstName("Haskell");
console.log(bob.getFullName());

bob.setLastName("Curry");
console.log(bob.getFullName());
 
