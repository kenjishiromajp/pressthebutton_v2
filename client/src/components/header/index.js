import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1 className="logo"><Link activeClassName="active" href="/">Press the button</Link></h1>
				<nav>
					<Link activeClassName="active" href="/about">Sobre</Link>
					<Link activeClassName="active" href="/howto">Como ajudar</Link>
				</nav>
			</header>
		);
	}
}
