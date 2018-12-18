document.addEventListener("DOMContentLoaded", function (event) {
	//DOM cache
	const projectView = document.getElementById('projectView');
	const projects = document.getElementById('Projects');
	const overview = document.getElementById('overview');
	const overviewSection = document.getElementsByClassName('overviewSection');
	const skills = document.getElementById('Skills');
	const articles = document.getElementById('Articles');
	const current = document.getElementById('Current');
	const moreBtn = document.getElementsByClassName('moreBtn');


	//Fade in overview sections
	const overviewFadeIn = function () {
		const delayTime = 100;

		for (let i = 0; i < overviewSection.length; i++) {
			overviewSection[i].style.display = 'block';
		}

		setTimeout(function () { skills.style.opacity = 1 }, delayTime);
		setTimeout(function () { articles.style.opacity = 1 }, delayTime * 3);
		setTimeout(function () { current.style.opacity = 1 }, delayTime * 4);
	}


	//====CLICK EVENTS====
	//switch to project view when clicked
	projectView.addEventListener('click', function (event) {
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
		setTimeout(function () { projects.style.opacity = 1 }, 100);
	});



	//switch to overview when clicked
	overview.addEventListener('click', function (event) {
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


	// Show more/less info toggle
	for (let i = 0; i < moreBtn.length; i++) {
		moreBtn[i].addEventListener('click', function (event) {
			const thisMoreSection = moreBtn[i].parentNode.getElementsByClassName('moreSection')[0];
			const height = thisMoreSection.getAttribute('data-height')

			if (!thisMoreSection.style.height || thisMoreSection.style.height === '0px'){
				window.innerWidth > 768
					? thisMoreSection.style.height = `${height}px`
					: thisMoreSection.style.height = 'auto';
				moreBtn[i].innerText = 'Show Less';
			} else {
				thisMoreSection.style.height = '0';
				moreBtn[i].innerText = 'Show More';
			}
		});
	}
});