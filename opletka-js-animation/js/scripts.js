let btnSend = document.getElementById("btnSend");
let formSend = document.getElementById("formSend");
let closedForm = document.querySelector(".closed");

closedForm.addEventListener('click', function () {
	formSend.style.display = "none";
})

btnSend.addEventListener('click', function () {
	formSend.style.display = "block";
	formSend.classList.add("animation");
});