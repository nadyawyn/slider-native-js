//Set a variable to indicate the current slide:
let slideIndex = 1;
// Put all the necessary DOM elements into variables:
let slides = document.querySelectorAll('.slider__item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider__dots'),
	dot = document.querySelectorAll('.slider__dot');