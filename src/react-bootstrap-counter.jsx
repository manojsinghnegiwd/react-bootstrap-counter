import React from 'react';

export default class CounterInput extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			value: this.props.value || '',
			min: this.props.min || 0,
			max: this.props.max || -1
		}

	}

	render () {
		return (
			<div className="input-group counter-input">
				<span className="input-group-addon" onClick={() => {this._increaseValue(this.state.value)}}>
					<i className="fa fa-plus" />
				</span>
				<input ref="input" className="form-control" type="text" onChange={this._onChange} value={this.state.value} />
				<span className="input-group-addon" onClick={() => {this._decreaseValue(this.state.value)}}>
					<i className="fa fa-minus"/>
				</span>
			</div>
		)
	}
}