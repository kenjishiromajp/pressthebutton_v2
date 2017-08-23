import { h, Component } from 'preact';
import style from './style';

export default class ButtonPress extends Component {
	render() {
		return (
			<button class={style.button}>
				Botao
			</button>
		);
	}
}
