//Javacript for Image slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".home-content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});


// ------------------------------ Projects Slider Script ------------------------------

let buttonRight = document.getElementById('projectRight');
let buttonLeft = document.getElementById('projectLeft');

buttonLeft.addEventListener('click', function(){
	document.getElementById('project-slider').scrollLeft -= 780
})

buttonRight.addEventListener('click', function(){
	document.getElementById('project-slider').scrollLeft += 780
})


// ------------------------------ Videos Slider Script ------------------------------

let rightbtn = document.getElementById('videoRight');
let leftbtn = document.getElementById('videoLeft');

leftbtn.addEventListener('click', function(){
	document.getElementById('video-slider').scrollLeft -= 1280
})

rightbtn.addEventListener('click', function(){
	document.getElementById('video-slider').scrollLeft += 1280
})


// ------------------------------ Zippy Life Script ------------------------------

let thumbnails = document.getElementsByClassName('office-thumbnail')
let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){
	
	thumbnails[i].addEventListener('mouseover', function(){
				
		if (activeImages.length > 0){
			activeImages[0].classList.remove('active')
		}
		this.classList.add('active')
		document.getElementById('featured').src = this.src
	})
}

let Rbutton = document.getElementById('officeRight');
let Lbutton = document.getElementById('officeLeft');

Lbutton.addEventListener('click', function(){
	document.getElementById('slider').scrollLeft -= 470
})

Rbutton.addEventListener('click', function(){
	document.getElementById('slider').scrollLeft += 470
})