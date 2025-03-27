const  setup = () => {
	let saveBtn= document.querySelector("#save");
	let sliders = document.getElementsByClassName("slider");

	for (let i=0; i<sliders.length; i++){
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	saveBtn.addEventListener("click", saveColor);
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliderNamen = document.getElementsByTagName("span");

	for (let i = 0; i < sliders.length; i++) {
		sliderNamen[i].textContent = sliderNamen[i].id +" "+ sliders[i].value;
	}
	let r = sliders[0].value;
	let g = sliders[1].value;
	let b = sliders[2].value;
	colorDemos[0].style.backgroundColor="rgb("+r+", "+g+", "+b+")";
}
const saveColor = () => {
	let sliders = document.getElementsByClassName("slider");
	let savedColors = document.querySelector("#savedColors");
	let newR = sliders[0].value;
	let newG = sliders[1].value;
	let newB = sliders[2].value;
	let newColor = document.createElement("div");
	newColor.style.backgroundColor="rgb("+newR+", "+newG+", "+newB+")";
	newColor.setAttribute("data-r", newR);
	newColor.setAttribute("data-g", newG);
	newColor.setAttribute("data-b", newB);
	newColor.classList.add("newColors");
	savedColors.appendChild(newColor);
	let deleteBtn = document.createElement("input");
	deleteBtn.classList.add("deleteButton");
	deleteBtn.setAttribute("type", "button");
	deleteBtn.setAttribute("value", "X");
	newColor.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteColor);
	newColor.addEventListener("click", loadColor);
}
const deleteColor = (event) => {
	event.target.parentElement.remove();
	event.target.remove();
}
const loadColor = (event) => {
	let color = event.currentTarget;
	let sliders = document.getElementsByClassName("slider");
	sliders[0].value = color.getAttribute("data-r");
	sliders[1].value = color.getAttribute("data-g");
	sliders[2].value = color.getAttribute("data-b");
	update();
}
window.addEventListener("load", setup);