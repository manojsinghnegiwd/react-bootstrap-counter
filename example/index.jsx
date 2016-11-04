import React from 'react';
import ReacDOM from 'react-dom';
import CounterInput from './react-bootstrap-counter';

class App extends React.Component {
	render() {
		return (
			<CounterInput value={1} min={10} onChange={(value) => {console.log(value)}} />
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);