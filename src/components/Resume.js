import React from 'react';
import data from '../data.js';
import ResumeItem from './ResumeItem';

console.log(data);

const Resume = ({ children }) => {
	return (
		<div className="container">
			<div className="header">
				<h1 className="title">Austen Wade</h1>
				<div className="contact-info">
					<a
						className="link email"
						href="mailto:austen.wade.ut@gmail.com">
						austen.wade.ut@gmail.com
					</a>
					<br />
					<a
						className="link linkedin -hide-print"
						href="https://www.linkedin.com/in/austen-wade-3b723613b/">
						LinkedIn
					</a>
					<br />
					<a
						className="link github -hide-print"
						target="_blank"
						href="https://www.github.com/austen-wade">
						GitHub
					</a>
					<br />
					<a
						className="link codepen -hide-print"
						target="_blank"
						href="https://www.codepen.io/austen-wade">
						CodePen
					</a>
				</div>
			</div>

			<ResumeItem type="languages" title="Languages">
				{data.languages.map((lang, idx) => (
					<span key={lang} className="item language">
						{lang}
						{idx !== data.languages.length - 1 ? ', ' : ''}
					</span>
				))}
			</ResumeItem>

			<ResumeItem type="libraries" title="Libraries &amp; Frameworks">
				{data.libraries.map((library, idx) => (
					<span key={library} className="item libraries">
						{library}
						{idx !== data.libraries.length - 1 ? ', ' : ''}
					</span>
				))}
			</ResumeItem>

			<ResumeItem type="tools" title="Tools &amp; Software">
				{data.tools.map((tool, idx) => (
					<span key={tool} className="item tool">
						{tool}
						{idx !== data.tools.length - 1 ? ', ' : ''}
					</span>
				))}
			</ResumeItem>

			<ResumeItem type="experience" title="Experience">
				{data.experience.map((job, idx) => (
					<div key={job.title} className="item experience">
						<div className="position">{job.title}</div>
						<div className="workplace">{job.workplace}</div>
						<div className="dates">{job.dates}</div>
						<ul className="task">
							{job.tasks.map((task) => (
								<li key={task}>{task}</li>
							))}
						</ul>
					</div>
				))}
			</ResumeItem>

			{/* 
			<resume-item type="languages" title="Languages">
				<span
					className="item language"
					data-for="lang in languages"
					key="lang">
					{lang}
				</span>
			</resume-item>

			<resume-item type="libraries" title="Libraries &amp; Frameworks">
				<span
					className="item libraries"
					data-for="item in libraries"
					key="item">
					{item}
				</span>
			</resume-item>

			<resume-item type="tools" title="Tools &amp; Software">
				<span className="item tool" data-for="tool in tools" key="tool">
					{tool}
				</span>
			</resume-item>

			<resume-item type="experience" title="Experience">
				<div
					className="item experience"
					data-for="job in experience"
					key="job.title">
					<div className="position">{job.title}</div>
					<div className="workplace">{job.workplace}</div>
					<div className="dates">{job.dates}</div>
					<ul className="tasks">
						<li data-for="task in job.tasks" key="task">
							{task}
						</li>
					</ul>
				</div>
			</resume-item> */}
		</div>
	);
};

export default Resume;
