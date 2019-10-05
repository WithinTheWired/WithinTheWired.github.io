/*======== NAVIGATION =======*/

$(document).ready(function()	{
	// $('.ipad').tilt({
	// 	glare: true,
    // 	maxGlare: 1
	// })
	$(window).scroll(function(){
		if($(this).scrollTop()	> 300)  {

			$('.navbar').addClass('solid');
			$('.nav-link').addClass('hide');
			$('.navbar-brand').addClass('inverse');
			$('.svg-inline--fa.fa-w-14').addClass('inverse2');	
			$('.navbar').addClass('borderNav');		
		} else {
			$('.navbar').removeClass('solid');
			$('.navbar').removeClass('borderNav');		
			$('.nav-link').removeClass('hide');
			$('.navbar-brand').removeClass('inverse');
			$('.svg-inline--fa.fa-w-14').removeClass('inverse2');
		}
	});
});


/*====== CLOSE MOBILE NAV ON CLICK =======*/

$(document).ready(function()	{
	$(document).click(function(event)	{
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if(_opened === true && !clickover.hasClass("navbar-toggle")) {
			$(".navbar-toggler").click();
		}
	});
});

/*========= SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function()	{
	$("a").on('click', function(event)	{
		if	(this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate( {
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			})
		}	//End if
	});
});

/*======== BOUNCING DOWN ARROW =========*/

$(document).ready(function()	{
	$(window).scroll(function()	{
		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 100);
	});
});