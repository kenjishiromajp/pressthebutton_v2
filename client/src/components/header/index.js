import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1><Link activeClassName={style.active} href="/">Press the button</Link></h1>
				<nav>
					<Link activeClassName={style.active} href="/about">Sobre</Link>
					<Link activeClassName={style.active} href="/howto">Como ajudar</Link>
				</nav>
			</header>
		);
	}
}
