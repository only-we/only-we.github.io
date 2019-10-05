function validForm() {
	setInterval(function(){
		let firstName = document.getElementById("first_name").value;
		let autoName = document.getElementById("auto_name").value;
		let sizeInAuto = document.getElementById("size_in_auto").value;
		let userEmail = document.getElementById("user-email").value;
		let telephone = document.getElementById("telephone").value;

		if (firstName.length <= 12) {
			true;
		} else {
			alert("Не верно указано имя!");
		}

		if (autoName.length <= 15) {
			true;
		} else {
			alert("Неверное название автомобиля!");
		}

		if (sizeInAuto.length <=2) {
			true;
		} else {
			alert("Неверный диаметр руля!");
		}

		if (userEmail.length <= 20) {
			true;
		} else {
			alert("Неверный E-mail!");
		}

		if (telephone.length <= 11) {
			true;
		} else {
			alert("Неверный номер телефона!");
		}
		}, 5000)
		};
validForm();