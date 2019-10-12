$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 80,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: true,
  startVisible: true,
  easing: true
});

$('.marqueerev').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 80,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'right',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: true,
  startVisible: true,
  easing: true
});


VanillaTilt.init(document.querySelector(".header"), {
  max: 55,
  speed: 0,
});

jQuery.easing.def = "easeOutQuad";

// var slow = $(".slow");
// $(slow).slideUp({
// 	duration: 1000,
// 	easing: easeOutQuad,
// 	complete: callback});
