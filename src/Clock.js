import React, { Component } from 'react';
import './Clock.css';
import moment from 'moment';

class Clock extends Component {
	state = {
		time: '',
	};
	getTime = () => {
		moment.locale('ko');
		const format = 'llll';
		const time = moment().format(format);
		this.setState({
			time,
		});
	};
	componentDidMount() {
		setInterval(this.getTime, 6000);
	}
	render() {
		const { time } = this.state;
		return <div className="Clock">{time}</div>;
	}
}

export default Clock;
