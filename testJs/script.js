let br = document.querySelector('.cubes');
let move = 0;

setInterval(function () {

	if (move < 250) {
		move++;
		br.style.left = move + "px";

	} else if (move < 350) {
		move++;
		br.style.top = move + "px";
	} else if (move < 450) {
		move++;
		br.style.left = move + "px";
	} else if (move < 550) {
		move++;
		br.style.top = move + "px";
	} else {
		br.style.backgroundColor = "green";
	}
}, 10)