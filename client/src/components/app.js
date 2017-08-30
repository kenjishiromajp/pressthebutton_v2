import { h, Component } from 'preact';
import { BrowserRouter, Switch } from 'react-router-dom';

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
import DefaultLayout from '../layouts/DefaultLayout/index';


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
			<BrowserRouter onChange={this.handleRoute}>
				<Switch>
					<DefaultLayout path="/" exact component={HomeRoute} />
					<DefaultLayout path="/about" exact component={AboutRoute} />
					<DefaultLayout path="/apathy" component={ApathyRoute} />
					<DefaultLayout path="/concentration" component={ConcentrationRoute} />
					<DefaultLayout path="/death" component={DeathRoute} />
					<DefaultLayout path="/howto" component={HowtoRoute} />
					<DefaultLayout path="/irritability" component={IrritabilityRoute} />
					<DefaultLayout path="/lethargy" component={LethargyRoute} />
					<DefaultLayout path="/memory" component={MemoryRoute} />
					<DefaultLayout path="/sadness" component={SadnessRoute} />
					<DefaultLayout path="/weight" component={WeightRoute} />
				</Switch>
			</BrowserRouter>
		);
	}
}
