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

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}