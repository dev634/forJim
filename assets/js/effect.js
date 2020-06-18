let arrow1 = document.getElementById("arrow-1");
let arrow2 = document.getElementById("arrow-2");
let arrow3 = document.getElementById("arrow-3");
let arrow4 = document.getElementById("arrow-4");
let wrapper = document.getElementById("wrapper");
let img2 = document.getElementById("img-2");

arrow1.addEventListener("click", function (e) {
	wrapper.classList.add("toLeft");
});

arrow2.addEventListener("click", function (e) {
	wrapper.classList.add("toUp");
});

arrow3.addEventListener("click", function (e) {
	wrapper.classList.add("toDown");
	setTimeout(function () {
		wrapper.classList.remove("toUp", "toLeft", "toRight", "toDown");
	}, 500);
});

arrow4.addEventListener("click", function (e) {
	wrapper.classList.add("toRight");
});

window.onscroll = function () {
	console.log("hello");
};
