import { h, Component } from 'preact';
import ButtonPress from '../../components/button/index';

export default class HomeRoute extends Component {
	onButtonClick(){
		this.props.history.push('sadness');
	}
	render() {
		return (
			<div className="align-center" >
				<header className="column align-center">
					{this.props.children}
					<h2 className="no-margin text-center">Como vive alguém em depressão?</h2>
					<small className="text-center">Te explicamos com apenas alguns cliques no botão.</small>
				</header>
				<ButtonPress onClick={this.onButtonClick.bind(this)} />
			</div>
		);
	}
}
