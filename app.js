var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];


var squares = document.getElementsByClassName("square"); //of querySelectorAll
var pickedColor = colors[3]
var winningColor = document.getElementById("colorDisplay");



for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			alert("winner")
		} else {
			alert("try again")
		}
	})


};

