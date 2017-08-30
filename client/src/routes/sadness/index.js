import { h, Component } from 'preact';
import ButtonPress from '../../components/button';
import style from './style.scss';
import styleSadness from './../../components/button/index.scss';


export default class SadnessRoute extends Component {
	onButtonClick(){

	}
	render({ user }, { time, count }) {
		return (
			<div class={[style['sadness-route'], 'align-center'].join(' ')} >
				<header className="column align-center">
					<h2 className="no-margin text-center">Tristeza</h2>
					<small className="text-center">Com motivo ou sem, aparece sem ser chamada e nem sempre quer ir embora</small>
				</header>
				<ButtonPress class={styleSadness['-sadness']} onClick={this.onButtonClick.bind(this)} />
				<div class={style.ripple}></div>
			</div>
		);
	}
}
