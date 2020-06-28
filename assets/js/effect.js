window.addEventListener("DOMContentLoaded", function (e) {
	function simulateClick(target, eventName) {
		var event = new MouseEvent(eventName, {
			"view": window,
			"bubbles": true,
			"cancelable": true
		});
		target.dispatchEvent(event);
	}

	function byId(id) {
		return document.getElementById(id);
	}
	function byClass(classe) {
		return document.getElementsByClassName(classe);
	}

	function verifyClass(elmt, className) {
		return elmt.classList.contains(className);
	}

	function removeClass(elmt, className) {
		elmt.classList.remove(className);
	}

	function toggleClass(elmt, className) {
		elmt.classList.toggle(className);
	}

	function addClass(elmt, className) {
		elmt.classList.add(className);
	}

	function move(direction = [], element) {
		switch (direction.join()) {
			case ["toRight", "toUp"].join():
				element.classList.remove("toLeft", "toDown");
				break;
			case ["toLeft", "toUp"].join():
				element.classList.remove("toRight", "toDown");
				break;
			case ["toRight", "toDown"].join():
				element.classList.remove("toLeft", "toUp");
				break;
			case ["toLeft", "toDown"].join():
				element.classList.remove("toRight", "toUp");
				break;
			default:
				console.log("Bad direction ....");
				break;
		}
		element.classList.add(direction[0], direction[1]);
	}

	function previousElmt(obj) {
		for (let elmt of obj) {
			if (elmt.classList.contains("is-current")) {
				return elmt;
			}
		}
	}

	function listen(element, event, callback) {
		return element.addEventListener(event, callback);
	}

	//Init variables
	let arrow1 = byId("arrow-1");
	let arrow2 = byId("arrow-2");
	let arrow3 = byId("arrow-3");
	let arrow4 = byId("arrow-4");
	let selector1 = byClass("selector__1");
	let selector2 = byClass("selector__2");
	let selector3 = byClass("selector__3");
	let selector4 = byClass("selector__4");
	let wrapper = byId("wrapper");
	let img1 = byId("img-1");
	let img2 = byId("img-2");
	let img3 = byId("img-3");
	let img4 = byId("img-4");
	let navbarBox = byId("navbar_box");
	let selector = byClass("selector");
	let sidebar = byId("sidebar");
	let isClicked = false;

	// selector init
	selector[0].classList.add("is-current");

	for (let elmt of selector) {
		listen(elmt, "click", function (e) {
			let previous = previousElmt(selector);
			if (verifyClass(elmt, "selector__3")) {
				if (verifyClass(img2, "is-scaling")) {
					removeClass(img2, "is-scaling");
				}
				move(["toRight", "toUp"], wrapper);
				if (isClicked) {
					simulateClick(navbarBox, "click");
				}
			}

			if (verifyClass(elmt, "selector__2")) {
				if (!verifyClass(img2, "is-scaling")) {
					addClass(img2, "is-scaling");
				}
				move(["toLeft", "toDown"], wrapper);
				if (isClicked) {
					simulateClick(navbarBox, "click");
				}
			}

			if (verifyClass(elmt, "selector__4")) {
				if (verifyClass(img2, "is-scaling")) {
					removeClass(img2, "is-scaling");
				}
				move(["toLeft", "toUp"], wrapper);
				if (isClicked) {
					simulateClick(navbarBox, "click");
				}
			}
			toggleClass(previous, "is-current");
			toggleClass(elmt, "is-current");
		});
	}

	arrow1.addEventListener("click", function (e) {
		move(["toLeft", "toDown"], wrapper);
		img2.classList.add("is-scaling");
		setTimeout(function () {
			selector[0].classList.remove("is-current");
			selector[1].classList.add("is-current");
		}, timeOut);
		if (isClicked) {
			simulateClick(navbarBox, "click");
		}
	});

	arrow2.addEventListener("click", function (e) {
		move(["toLeft", "toUp"], wrapper);
		setTimeout(function () {
			if (verifyClass(img2)) {
				removeClass(img2, "is-scaling");
			}
			selector[1].classList.remove("is-current");
			selector[3].classList.add("is-current");
		}, timeOut);
		if (isClicked) {
			simulateClick(navbarBox, "click");
		}
	});

	arrow3.addEventListener("click", function (e) {
		move(["toRight", "toDown"], wrapper);
		setTimeout(function () {
			selector[2].classList.remove("is-current");
			selector[0].classList.add("is-current");
		}, timeOut);
		if (isClicked) {
			simulateClick(navbarBox, "click");
		}
	});

	arrow4.addEventListener("click", function (e) {
		move(["toRight", "toUp"], wrapper);
		setTimeout(function () {
			selector[3].classList.remove("is-current");
			selector[2].classList.add("is-current");
		}, timeOut);
		if (isClicked) {
			simulateClick(navbarBox, "click");
		}
	});

	listen(navbarBox, "click", function (e) {
		if (isClicked) {
			navbarBox.childNodes[1].style.transformOrigin = "center left";
			navbarBox.childNodes[1].style.transform = "rotateZ(0deg)";
			navbarBox.childNodes[5].style.transformOrigin = "center left";
			navbarBox.childNodes[5].style.transform = "rotateZ(0deg)";
			navbarBox.childNodes[3].style.visibility = "visible";
			e.target.removeEventListener("click", this);
			isClicked = false;
			sidebar.style.left = "-25rem";
			if (verifyClass(selector1[0], "is-current")) {
				img1.style.marginLeft = "0";
				img1.style.paddingRight = "0";
				img1.style.width = "100vw";
			} else if (verifyClass(selector2[0], "is-current")) {
				img2.style.marginLeft = "0";
				img2.style.width = "100vw";
			} else if (verifyClass(selector3[0], "is-current")) {
				img3.style.marginLeft = "0";
				img3.style.paddingRight = "0";
			} else if (verifyClass(selector4[0], "is-current")) {
				img4.style.marginLeft = "0";
				img4.style.width = "100vw";
			}
		} else {
			navbarBox.childNodes[3].style.visibility = "hidden";
			navbarBox.childNodes[1].style.transformOrigin = "center left";
			navbarBox.childNodes[1].style.transform = "rotateZ(45deg)";
			navbarBox.childNodes[5].style.transformOrigin = "center left";
			navbarBox.childNodes[5].style.transform = "rotateZ(-45deg)";
			e.target.removeEventListener("click", this);
			isClicked = true;
			sidebar.style.left = 0;
			if (verifyClass(selector1[0], "is-current")) {
				img1.style.marginLeft = "25rem";
				img1.style.width = "calc(100vw - 25rem)";
			} else if (verifyClass(selector2[0], "is-current")) {
				img2.style.marginLeft = "25rem";
				img2.style.width = "calc(100vw - 25rem)";
			} else if (verifyClass(selector3[0], "is-current")) {
				img3.style.marginLeft = "25rem";
				img3.style.width = "calc(100vw - 25rem)";
			} else if (verifyClass(selector4[0], "is-current")) {
				img4.style.marginLeft = "25rem";
				img4.style.width = "calc(100vw - 25rem)";
			}
		}
	});
});
