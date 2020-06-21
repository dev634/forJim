window.addEventListener("DOMContentLoaded", function (e) {
	function move(direction, element) {
		element.classList.add(direction);
	}

	function previousElmt(obj) {
		for (let elmt of obj) {
			if (elmt.classList.contains("is-current")) {
				return elmt;
			}
		}
	}

	function toggleClass(elmt, className) {
		elmt.classList.toggle(className);
	}

	function listen(element, event, callback) {
		return element.addEventListener(event, callback);
	}

	let arrow1 = document.getElementById("arrow-1");
	let arrow2 = document.getElementById("arrow-2");
	let arrow3 = document.getElementById("arrow-3");
	let arrow4 = document.getElementById("arrow-4");
	let wrapper = document.getElementById("wrapper");
	let img2 = document.getElementById("img-2");
	let selector = document.getElementsByClassName("selector");

	// selector init
	selector[0].classList.add("is-current");

	for (let elmt of selector) {
		listen(elmt, "click", function (e) {
			let previous = previousElmt(selector);

			if (elmt.classList.contains("selector__3")) {
				wrapper.classList.remove("toLeft", "toDown");
				wrapper.classList.add("toRight", "toUp");
			}

			if (elmt.classList.contains("selector__2")) {
				wrapper.classList.remove("toRight", "toUp");
				wrapper.classList.add("toLeft", "toDown");
			}

			if (elmt.classList.contains("selector__4")) {
				wrapper.classList.remove("toRight", "toDown");
				wrapper.classList.add("toLeft", "toUp");
			}
			toggleClass(previous, "is-current");
			toggleClass(elmt, "is-current");
		});
	}

	arrow1.addEventListener("click", function (e) {
		wrapper.classList.remove("toRight", "toUp");
		wrapper.classList.add("toLeft", "toDown");
		setTimeout(function () {
			img2.classList.add("is-scaling");
			selector[0].classList.remove("is-current");
			selector[1].classList.add("is-current");
		}, 200);
	});

	arrow2.addEventListener("click", function (e) {
		wrapper.classList.remove("toRight", "toDown");
		wrapper.classList.add("toLeft", "toUp");
		setTimeout(function () {
			img2.classList.remove("is-scaling");
			selector[1].classList.remove("is-current");
			selector[3].classList.add("is-current");
		}, 400);
	});

	arrow4.addEventListener("click", function (e) {
		wrapper.classList.remove("toLeft", "toDown");
		wrapper.classList.add("toRight", "toUp");
		setTimeout(function () {
			selector[3].classList.remove("is-current");
			selector[2].classList.add("is-current");
		}, 400);
	});

	arrow3.addEventListener("click", function (e) {
		wrapper.classList.remove("toLeft", "toUp");
		wrapper.classList.add("toRight", "toDown");
		setTimeout(function () {
			wrapper.classList.remove("toUp", "toLeft", "toRight", "toDown");
			selector[2].classList.remove("is-current");
			selector[0].classList.add("is-current");
		}, 400);
	});
});
