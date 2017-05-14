	$(document).ready(function(){
		let delay = 200;
		let fadeLength = 700;

		//Fade in sections once DOM is ready
		$('#Summary').delay(delay).fadeIn(fadeLength);
		$('#Skills').delay(delay * 2).fadeIn(fadeLength);
		$('#Projects').delay(delay * 3).fadeIn(fadeLength);
		$('#Current').delay(delay * 4).fadeIn(fadeLength);

		$('.moreBtn').on('click', function(){
			$(this).toggleClass('expanded');
			$(this).siblings('.moreSection').slideToggle();

			if( $(this).hasClass('expanded') ){
				$(this).html('<a>Show Less</a>');
			}else{
				$(this).html('<a>Show More &#9656;</a>');
			}
		});
	});