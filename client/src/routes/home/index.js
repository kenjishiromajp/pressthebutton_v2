import { h, Component } from 'preact';
import style from './style';
import ButtonPress from '../../components/button/index';

export default class HomeRoute extends Component {
	render() {
		return (
			<div class={style.home} >
				<ButtonPress />
			</div>
		);
	}
}
