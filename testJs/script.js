let br = document.querySelector('.cubes');
let move = 0;

setInterval(function () {
	if (move <= 250) {
		move++;
		br.style.left = move + "px";

	} else if (move <= 300) {
		move++;
		br.style.top = move + "px";
	} else if (move <= 550) {
		move++;
		br.style.left = move + "px";
	} else if (move <= 650) {
		move++;
		br.style.bottom = move + "px";
	}
}, 20)