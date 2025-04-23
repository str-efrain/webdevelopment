const  setup = () => {
	let saveBtn= document.querySelector("#save");
	let sliders = document.getElementsByClassName("slider");

	for (let i=0; i<sliders.length; i++){
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	loadSavedSliders()
	update();
	saveBtn.addEventListener("click", saveColor);
}

const loadSavedSliders = () => {
	let sliders = document.getElementsByClassName("slider");
	let savedSlider = JSON.parse(localStorage.getItem("savedSlider"));
	let colorDiv = document.querySelector("#savedColors");
	sliders[0].value = savedSlider.r;
	sliders[1].value = savedSlider.g;
	sliders[2].value = savedSlider.b;
	let savedColors = JSON.parse(localStorage.getItem("savedColors"));
	for (let i= 0; i < savedColors.length; i++){
		let r = savedColors[i].r;
		let g = savedColors[i].g;
		let b = savedColors[i].b;
		let newColor = document.createElement("div");
		newColor.style.backgroundColor="rgb("+r+", "+g+", "+b+")";
		newColor.setAttribute("data-r", r);
		newColor.setAttribute("data-g", g);
		newColor.setAttribute("data-b", b);
		newColor.classList.add("newColors");
		colorDiv.appendChild(newColor);
		let deleteBtn = document.createElement("input");
		deleteBtn.classList.add("deleteButton");
		deleteBtn.setAttribute("type", "button");
		deleteBtn.setAttribute("value", "X");
		newColor.appendChild(deleteBtn);
		deleteBtn.addEventListener("click", deleteColor);
		newColor.addEventListener("click", loadColor);
	}
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
	saveToStorage();
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
	saveToStorage();
}
const deleteColor = (event) => {
	event.target.parentElement.remove();
	event.target.remove();
	event.stopPropagation();
	saveToStorage();
}
const loadColor = (event) => {
	let color = event.currentTarget;
	let sliders = document.getElementsByClassName("slider");
	sliders[0].value = color.getAttribute("data-r");
	sliders[1].value = color.getAttribute("data-g");
	sliders[2].value = color.getAttribute("data-b");
	update();
}
const saveToStorage = () => {
	let savedColors = document.querySelectorAll(".newColors");
	let storageArray = [];
	if (savedColors.length > 0) {
		for (let i = 0; i < savedColors.length; i++) {
			let r = savedColors[i].getAttribute("data-r");
			let g = savedColors[i].getAttribute("data-g");
			let b = savedColors[i].getAttribute("data-b");
			storageArray.push({r: r, g: g, b: b});
		}
	}
	let currentColor = document.getElementsByClassName("slider");
	let r = currentColor[0].value;
	let g = currentColor[1].value;
	let b = currentColor[2].value;
	let currentSlider = {r: r, g: g, b: b};
	localStorage.setItem("savedSlider", JSON.stringify(currentSlider));
	localStorage.setItem("savedColors", JSON.stringify(storageArray));
}
window.addEventListener("load", setup);