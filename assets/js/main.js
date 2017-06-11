	$(document).ready(function(){

		//====DOCUMENT LOADED====

		//DOM cache
		var $projectView = $('#projectView');
		var $overview = $('#overview');
		var $skills = $('#Skills');
		var $articles = $('#Articles');
		var $current = $('#Current');
		var $overviewSection = $('.overviewSection');

		//fade in overview section
		overviewFadeIn();



		//====CLICK EVENTS====

		//show more for work section
		$('.moreBtn').on('click', function(){
			$(this).toggleClass('expanded');
			$(this).siblings('.moreSection').slideToggle();

			if( $(this).hasClass('expanded') ){
				$(this).html('Show Less');
			}else{
				$(this).html('Show More');
			}
		});

		//switch to project view when clicked
		$projectView.on('click',function(){
			event.preventDefault();

			//update nav buttons
			$overview.removeClass('active');
			$overview.addClass('notActive');

			$projectView.removeClass('notActive');
			$projectView.addClass('active');

			//hide overview component
			$overviewSection.hide();

			//show projects section
		});


		//switch to overview when clicked
		$overview.on('click',function(){
			event.preventDefault();

			//update nav buttons
			$projectView.removeClass('active');
			$projectView.addClass('notActive');

			$overview.removeClass('notActive');
			$overview.addClass('active');

			// hide projects component
			$('#Projects').hide();

			// show overview section
			overviewFadeIn();
		});
		

		//====FUNCTIONS====

		//Fade in sections once DOM is ready
		function overviewFadeIn (){
			var delay = 200;
			var fadeLength = 700;

			$skills.delay(delay).fadeIn(fadeLength);
			$articles.delay(delay * 2).fadeIn(fadeLength);
			$current.delay(delay * 3).fadeIn(fadeLength);
		}

	});