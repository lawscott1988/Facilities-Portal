//FILTER DROPDOWN MENU

function dropDownFunc() {
	var x = document.getElementById("filterDropDown");
	if(x.style.display == "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
}

//MODAL BOXES FOR BUTTONS

function displayModal(elt) {
	var x = document.getElementById(elt);
	x.style.display = "block";
}

function closeModal(elt) {
	var x = document.getElementById(elt);
	x.style.display = "none";
}

function expandMenu() {

	var burger = document.getElementById("burgerIcon");

	if(burger.className === "icon") {
		burger.className = "icon_clicked";
	}
	else {
		burger.className = "icon";
	}

	var link1 = document.getElementById("facInfoL");
	var link2 = document.getElementById("logActionL");
	var link3 = document.getElementById("viewActionL");
	var link4 = document.getElementById("keySystemL");

	var links = [
		link1,
		link2,
		link3,
		link4,
	]

	for (i = 0; i < links.length; i++) {
		if(links[i].style.display == "none") {
			links[i].style.display = "block";
		}
		else {
			links[i].style.display = "none";
		}
	}
}
