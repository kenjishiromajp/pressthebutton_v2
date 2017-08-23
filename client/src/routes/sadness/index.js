/* eslint-disable react/sort-comp */
import { h, Component } from 'preact';
import style from './style';

export default class SadnessRoute extends Component {
	state = {
		time: Date.now()
	};

	// gets called when this route is navigated to
	componentDidMount() {

	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>How to</h1>
				<p>This is the user profile for a user named { user }.</p>
			</div>
		);
	}
}
