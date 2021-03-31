import './App.css';
import login from './component/login';
import table from './component/tables';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={login} />
				<Route exact path="/table" component={table} />
			</Switch>
		</div>
	);
}

export default App;
