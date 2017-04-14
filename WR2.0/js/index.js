
//  FULL PAGE MENU ACTIVE //
$('#btn').click(function() { 
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
  $('main').toggleClass('hide');
});

//  PARALLAX //
$.fn.parallax = function(options) {
 
	var windowHeight = $(window).height();

	var settings = $.extend({
		speed        : 0.15
	}, options);

	return this.each( function() {

		var $this = $(this);

		$(document).scroll(function(){

			var scrollTop = $(window).scrollTop();
			var offset = $this.offset().top;
			var height = $this.outerHeight();

			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}

			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
			
			$this.css('background-position', 'center ' + yBgPosition + 'px');

		});
	});
}
 
$('.img-gradient').parallax({ speed :   0.15 });
 
//  OPACITY IMG //
var lastScrollTop = 0;
var navChange = $('.div-gradient').height();
var isUp = 0;

$(window).scroll(function(event){
  var st = $(this).scrollTop();
  console.log(st);
	
  if (st > lastScrollTop){
		
    $('.gradient').css('opacity','+=0.2');
		
    if(st > navChange && !isUp){
      $('.navbar-default').animate({'minHeight':'-=45px'},500);
      isUp = 1;
    }
  } else {
    $('.gradient').css('opacity','-=0.2');
		
    if(st < navChange && isUp){
      $('.navbar-default').animate({'minHeight':'+=45px'},500);
      isUp = 0;
    }
  }
	
  lastScrollTop = st;
});