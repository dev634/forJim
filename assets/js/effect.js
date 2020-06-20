window.addEventListener("DOMContentLoaded", function (e) {
	let arrow1 = document.getElementById("arrow-1");
	let arrow2 = document.getElementById("arrow-2");
	let arrow3 = document.getElementById("arrow-3");
	let arrow4 = document.getElementById("arrow-4");
	let wrapper = document.getElementById("wrapper");
	let img2 = document.getElementById("img-2");
	let selector = document.getElementsByClassName("selector");

	selector[0].classList.add("is-current");

	arrow1.addEventListener("click", function (e) {
		wrapper.classList.add("toLeft");
		setTimeout(function () {
			img2.classList.add("is-scaling");
			selector[0].classList.remove("is-current");
			selector[1].classList.add("is-current");
		}, 200);
	});

	arrow2.addEventListener("click", function (e) {
		wrapper.classList.add("toUp");
		setTimeout(function () {
			img2.classList.remove("is-scaling");
			selector[1].classList.remove("is-current");
			selector[3].classList.add("is-current");
		}, 400);
	});

	arrow4.addEventListener("click", function (e) {
		selector[3].classList.remove("is-current");
		selector[2].classList.add("is-current");
		wrapper.classList.add("toRight");
	});

	arrow3.addEventListener("click", function (e) {
		wrapper.classList.add("toDown");
		setTimeout(function () {
			wrapper.classList.remove("toUp", "toLeft", "toRight", "toDown");
			selector[2].classList.remove("is-current");
			selector[0].classList.add("is-current");
		}, 500);
	});
});
