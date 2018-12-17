$(document).ready(function(){

	//====DOCUMENT LOADED====

	//DOM cache
	const $overview = $('#overview');
	const $skills = $('#Skills');
	const $articles = $('#Articles');
	const $current = $('#Current');
	const $projectsSection = $('#Projects');

	let projectView = document.getElementById('projectView');
	let projects = document.getElementById('Projects');
	let overview = document.getElementById('overview');
	let overviewSection = document.getElementsByClassName('overviewSection');
	let projectsSection = document.getElementsByClassName('projectsSection');


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
	projectView.addEventListener('click', event => {
		event.preventDefault();

		//update nav buttons
		overview.classList.remove("active");
		overview.classList.add("notActive");

		projectView.classList.remove("notActive");
		projectView.classList.add("active");

		for (let i = 0; i < overviewSection.length; i++) {
			overviewSection[i].style.display = 'none';
		}

		projects.style.display = 'block';

	});


	//switch to overview when clicked
	overview.addEventListener('click', event => {
		event.preventDefault();

		//update nav buttons
		projectView.classList.remove("active");
		projectView.classList.add("notActive");

		overview.classList.remove("notActive");
		overview.classList.add("active");

		// hide projects component
		$projectsSection.hide();

		for (let i = 0; i < projectsSection.length; i++) {
			projectsSection[i].style.display = 'none';
		}

		// show overview section
		overviewFadeIn(false);
	});
		

	//====FUNCTIONS====

	//Fade in overview sections - true/false for 200ms delay
	function overviewFadeIn(delay){
		const delayTime = 200;
		const fadeLength = 700;

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