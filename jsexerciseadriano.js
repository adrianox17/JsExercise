// Exercise 1
// 2 variables
var number1 = 3;
var number2 = 5;
console.log(number1 + number2);

// 2 strings
var number1 ="number1";
var number2 ="number2";
console.log(number1 + number2);

//Exercise 2
var books = ["scifi" , "fantasy"];
var music = ["rock", "reggea"];
var interests = [books, music];
var interests = [ ["scifi","fantasy"],["rock","reggea"] ];
console.log(interests[0][0]);
console.log(interests[1][1]);

//Exercise 3
var number = 40;
// Can there be a way to put x<100?
// Exact number name?
if (number <100){
	alert("Your variable is less than 100")
}
else{
	alert("Your variable is greater than 100")
}

//Exercise 4
function AnyName(name){
	return "You have entered the name " + name;
}
console.log(AnyName ("Antoine"))


//Exercise 5
function Doors(selectionofdoor){
	if(selectionofdoor === "door1"){
		alert ("You get a guitar");
	}
	else if(selectionofdoor === "door2"){
		alert ("You get a puppy");
	}
	else if(selectionofdoor === "door3"){
		alert ("You get a sword")
	}
	else if(selectionofdoor === "door4"){
		alert ("You get a shield")
	}
	else {
		alert ("Sorry, no prize for you")
	}	
console.log("selectionofdoor", selectionofdoor);
}
// Assigning each value (4 values) to the function: Door 
Doors("door1");
Doors("door2");
Doors("door3");
Doors("door4");
Doors("door5");
// Can there be a way to put door>4?
