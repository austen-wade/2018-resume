import data from './data.js';
import styles from '../scss/main.scss';

var section = {
	'objective': document.querySelector('.objective'),
	'languages': document.querySelector('.languages'),
	'tools': document.querySelector('.tools'),
	'education': document.querySelector('.education'),
	'experience': document.querySelector('.experience'),
	'footer': document.querySelector('footer')
}

window.onload = function() {
	getSkills('languages');
	getSkills('tools');
	getEducation();
	getExperience();

	revealPage();
}

function getObjective() {
	section.objective.style.display = 'block';
	objectiveHTML = data.introduction;
	section.objective.querySelector('.objective-text').innerHTML 
		+= objectiveHTML;
}

function getSkills(target) {
	data[target].forEach( (item) =>
		section[target].innerHTML += `
			<div class="skill">
				${item.name}
				
				${getComfort(item.comfort)}
			</div>
		`);
}

function getComfort(com) {
	var bubbles = '';
	for (var i = 1; i <= 10; i++) {
		bubbles += `<div class="bubble 
		${com >= i ? 'bubble-active' : ''}
		">${i}</div>`;
	}
	return '<div class="comfort"><span>Comfort level</span>' + bubbles + '</div>';
}

function getEducation() {
	data.education.forEach( (item) => 
		section.education.innerHTML += 
			`
			<div class="school">
				<div class="school-name">${item.school}</div>
				<div class="dates">${item.date}</div>
			</div>
			`
	);
};

function getExperience() {
	/*
	'workplace': '',
	'title': '',
	'dates': '',
	'tasks': ['', '']
	*/

	data.experience.forEach( function(experience) {
		var endHTML = '';

		endHTML += 
		`<div class="experience">
			<div class="workplace">${experience.workplace}</div>
			<div class="title">${experience.title}</div>
			<div class="dates">${experience.dates}</div>
			<ul class="task-list">`;

		experience.tasks.forEach( function(task) {
			endHTML += `<li class="work-task">
				${task}
			</li>`;
		});

		section.experience.innerHTML += endHTML + '</ul></div>';
	});
}

function revealPage() {
	document.querySelector('body').style.opacity = 1;
};