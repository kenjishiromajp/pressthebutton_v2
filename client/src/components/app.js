import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import AboutRoute from '../routes/about';
import HomeRoute from '../routes/home';
import ApathyRoute from '../routes/apathy';
import ConcentrationRoute from '../routes/concentration';
import DeathRoute from '../routes/death';
import HowtoRoute from '../routes/howto';
import IrritabilityRoute from '../routes/irritability';
import LethargyRoute from '../routes/lethargy';
import MemoryRoute from '../routes/memory';
import SadnessRoute from '../routes/sadness';
import WeightRoute from '../routes/weight';


// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<HomeRoute path="/" />
					<AboutRoute path="/about/" />
					<ApathyRoute  path="/apathy" />
					<ConcentrationRoute  path="/concentration" />
					<DeathRoute  path="/death" />
					<HowtoRoute  path="/howto" />
					<IrritabilityRoute  path="/irritability" />
					<LethargyRoute  path="/lethargy" />
					<MemoryRoute  path="/memory" />
					<SadnessRoute  path="/sadness" />
					<WeightRoute  path="/weight" />
				</Router>
			</div>
		);
	}
}
