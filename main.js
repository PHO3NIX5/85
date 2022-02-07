canvas = document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;


function add() {
	background_imgTag = new Image()
	background_imgTag.onload = uploadbg;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgc;
	greencar_imgTag.src = greencar_image;
}

function uploadbg() {
	ctx.drawImage(background_imgTag, 0, 0, 800, 600);
}

function uploadgc() {

	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}


window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
	var keycode = e.keyCode;
	console.log(keycode);
	if (keycode == "37") {
		console.log("left");
		left();
	}
	if (keycode == "38") {
		console.log("up");
		up();
	}
	if (keycode == "39") {
		console.log("right");
		right();
	}
	if (keycode == "40") {
		console.log("down");
		down();
	}
}


function left() {
	greencar_x = greencar_x - 10;
	uploadbg();
	uploadgc();
}

function right() {

	greencar_x = greencar_x + 10;
	uploadbg();
	uploadgc();
}



function up() {
	if (greencar_y > 0) {
		greencar_y = greencar_y - 10;
		uploadbg();
		uploadgc();
	}
}

	function down() {
		if (greencar_y < 520) {
			greencar_y = greencar_y + 10;
			uploadbg();
			uploadgc();
		}
	}



