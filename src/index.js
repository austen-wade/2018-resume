import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import Resume from './components/Resume';

const App = () => {
	return <Resume></Resume>;
};

ReactDOM.render(<App />, document.querySelector('#app'));
