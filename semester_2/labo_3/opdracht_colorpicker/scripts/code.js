const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	for (let i=0; i<sliders.length; i++){
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
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
window.addEventListener("load", setup);