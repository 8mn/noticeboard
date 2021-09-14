import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import CreateNotice from './components/CreateNotice/CreateNotice';
import Home from './components/Home/Home';

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/dashboard" component={CreateNotice} />
			</Switch>
		</Router>
	);
}


export default App;
