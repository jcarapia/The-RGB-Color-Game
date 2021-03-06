var numSquares = 6
var colors = generateRandomColors(numSquares);

var squares = document.getElementsByClassName("square"); //or querySelectorAll
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var winningColor = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");




for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			console.log("winner")
			messageDisplay.textContent = "Correct!"
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			reset.textContent = "Play Again";
		} else {
			console.log("try again")
			messageDisplay.textContent = "Try Again"
			this.style.background = "#steelblue";
		}
	})
};

// Change the color of all squares upon winning
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
};

// Picks a random color from the array of six colors
function pickColor(){
	//Get a random number from 0 to 5
	var randNumber = Math.floor(Math.random() * colors.length);
	//select the index associated with the random index
	var randColor = colors[randNumber];

	return randColor;
};

// Generate an array of random colors 
function generateRandomColors(num){
	var results = [];
	for(var i = 0; i < num; i++){
		results.push(randomColor());
	};
	return results;
};

// Generate a random rgb color
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var colorString = "rgb(" + r + ", " + g + ", " + b + ")";

	return colorString;
};

// Reset the game when the reset button is clicked 

reset.addEventListener('click', function(){
	console.log('hello')
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	};

	h1.style.background = "steelblue"
	reset.textContent = "New Colors";
});

easy.addEventListener('click', function(){
	numSquares = 3;
	hard.classList.remove("selected");
	this.classList.add("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
});

hard.addEventListener('click', function(){
	numSquares = 6;
	easy.classList.remove("selected");
	this.classList.add("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){

			squares[i].style.background = colors[i];

			squares[i].style.display = "block"

	}
});






