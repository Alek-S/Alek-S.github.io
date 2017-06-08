	$(document).ready(function(){
		var delay = 200;
		var fadeLength = 700;

		//Fade in sections once DOM is ready
		$('#Skills').delay(delay).fadeIn(fadeLength);
		$('#Articles').delay(delay * 2).fadeIn(fadeLength);
		$('#Current').delay(delay * 3).fadeIn(fadeLength);

		$('.moreBtn').on('click', function(){
			$(this).toggleClass('expanded');
			$(this).siblings('.moreSection').slideToggle();

			if( $(this).hasClass('expanded') ){
				$(this).html('Show Less');
			}else{
				$(this).html('Show More');
			}
		});
	});