// complex methods

function resetPage() {
	showLessJobs();
}

function showLessJobs() {
	show('showMoreJobs');
	hide('showLessJobs');
	hideAll('moreJob');
	document.getElementById('jobs').scrollIntoView();
}

function showMoreJobs() {
	show('showLessJobs');
	hide('showMoreJobs');
	showAll('moreJob');
	document.getElementsByClassName('moreJob')[0].scrollIntoView();
}


// primitive methods

function hide(elementId) {
	var element = document.getElementById(elementId);
	element.hidden = true;
}

function show(elementId) {
	var element = document.getElementById(elementId);
	element.hidden = false;
}


function hideAll(classname) {
	var elements = document.getElementsByClassName(classname);
	for (var i=0; i < elements.length; i++) {
		elements[i].hidden = true;
	}
}

function showAll(classname) {
	var elements = document.getElementsByClassName(classname);
	for (var i=0; i < elements.length; i++) {
		elements[i].hidden = false;
	}
}
