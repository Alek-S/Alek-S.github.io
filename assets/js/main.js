$(document).ready(function(){

	//====DOCUMENT LOADED====

	//DOM cache
	var $projectView = $('#projectView');
	var $overview = $('#overview');
	var $skills = $('#Skills');
	var $articles = $('#Articles');
	var $current = $('#Current');
	var $overviewSection = $('.overviewSection');
	var $projectsSection = $('#Projects');
	//projects
	var $lbb = ('#lbb');
	var $ff = ('#ff');
	var $fix = ('#fix');

	//fade in overview section
	overviewFadeIn(true);



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
	$projectView.on('click',function(event){
		event.preventDefault();

		//update nav buttons
		$overview.removeClass('active');
		$overview.addClass('notActive');

		$projectView.removeClass('notActive');
		$projectView.addClass('active');

		//hide overview component
		$overviewSection.hide();

		//show projects section
		$('#Projects').fadeIn(500);
	});


	//switch to overview when clicked
	$overview.on('click',function(event){
		event.preventDefault();

		//update nav buttons
		$projectView.removeClass('active');
		$projectView.addClass('notActive');

		$overview.removeClass('notActive');
		$overview.addClass('active');

		// hide projects component
		$projectsSection.hide();

		// show overview section
		overviewFadeIn(false);
	});
		

	//====FUNCTIONS====

	//Fade in overview sections - true/false for 200ms delay
	function overviewFadeIn(delay){
		var delayTime = 200;
		var fadeLength = 700;

		if(delay === true){
			$skills.delay(delayTime).fadeIn(fadeLength);
			$articles.delay(delayTime * 2).fadeIn(fadeLength);
			$current.delay(delayTime * 3).fadeIn(fadeLength);
		}else{
			$skills.fadeIn(fadeLength);
			$articles.delay(delayTime).fadeIn(fadeLength);
			$current.delay(delayTime * 2).fadeIn(fadeLength);
		}
	}

});