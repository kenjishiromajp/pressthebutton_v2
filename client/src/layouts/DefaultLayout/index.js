import { h, Component } from 'preact';
import { Route } from 'react-router-dom';
import Header from '../../components/header';

export const DefaultLayout = ({ component: Component, path, exact }) => (
	<Route exact={exact} path={path} render={matchProps => (
		<div id="app" className="app">
			<Header />
			<div className="content">
			    <Component {...matchProps} />
			</div>
		</div>
	)}
	/>
);

export default DefaultLayout;
