import React from 'react';

const ResumeItem = ({ title, type, children }) => {
	return (
		<div className={`${type} section`}>
			<h2 className="title">{title}</h2>
			<div className={`list list-${type}`}>{children}</div>
		</div>
	);
};

export default ResumeItem;
