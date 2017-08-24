import { h, Component } from 'preact';
import style from './style.scss';

export default class ButtonPress extends Component {
	render() {
		return (
			<button class={style.button}>
				<span></span>
			</button>
		);
	}
}
