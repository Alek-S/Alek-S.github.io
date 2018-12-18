//DOM cache
const projectView = document.getElementById('projectView');
const projects = document.getElementById('Projects');
const overview = document.getElementById('overview');
const overviewSection = document.getElementsByClassName('overviewSection');
const projectsSection = document.getElementsByClassName('projectsSection');
const skills = document.getElementById('Skills');
const articles = document.getElementById('Articles');
const current = document.getElementById('Current');



//Fade in overview sections - true/false for 200ms delay
const overviewFadeIn = () => {
	const delayTime = 200;

	for (let i = 0; i < overviewSection.length; i++) {
		overviewSection[i].style.display = 'block';
	}

	setTimeout(() => { skills.style.opacity = 1 }, delayTime);
	setTimeout(() => { articles.style.opacity = 1 }, delayTime * 2);
	setTimeout(() => { current.style.opacity = 1 }, delayTime * 3);
}



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

	// hide overview and show projects
	for (let i = 0; i < overviewSection.length; i++) {
		overviewSection[i].style.display = 'none';
		overviewSection[i].style.opacity = 0;
	}

	projects.style.display = 'block';
	setTimeout(() => { projects.style.opacity = 1 }, 100);
});




//switch to overview when clicked
overview.addEventListener('click', event => {
	event.preventDefault();

	//update nav buttons
	projectView.classList.remove("active");
	projectView.classList.add("notActive");

	overview.classList.remove("notActive");
	overview.classList.add("active");

	// hide projects component and show overview
	projects.style.display = 'none';
	projects.style.opacity = 0;

	overviewFadeIn();
});