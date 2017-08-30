import { h, Component } from 'preact';
import './index.scss';

export default class ButtonPress extends Component {
	constructor(props){
		super(props);
		this.interval = null;
	}
	onClick(){
		clearInterval(this.interval);
		this.interval = setTimeout(_ => {
			this.props.onClick();
		},200);
	}
	render() {
		const className = `button ${this.props.class}`;
		return (
			<button onClick={this.onClick.bind(this)} className={className}>
				<span />
			</button>
		);
	}
}
