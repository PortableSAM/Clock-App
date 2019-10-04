import React, { Component } from 'react';
import './Clock.css';
import moment from 'moment';
import 'moment/locale/ko';

class Clock extends Component {
	state = {
		time: '',
		day: '',
	};
	getTime = async () => {
		const day = await moment().format('LL');
		const time = await moment().format('LTS');
		this.setState({
			time,
			day,
		});
	};

	componentDidMount() {
		setInterval(this.getTime, 1000);
	}
	render() {
		const { time, day } = this.state;
		return (
			<div className="container">
				<div className="Day">
					{day}
					<div className="Clock">{time}</div>
				</div>
			</div>
		);
	}
}

export default Clock;
