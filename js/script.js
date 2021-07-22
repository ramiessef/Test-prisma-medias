const image = document.getElementsByClassName('logo');
new simpleParallax(image, {
    delay: .4,
	transition: 'cubic-bezier(0,0,0,1)'
});


var image2 = document.getElementsByClassName('blocFour');
new simpleParallax(image2, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});