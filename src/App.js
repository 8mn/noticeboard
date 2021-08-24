import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import CreateNotice from './components/CreateNotice/CreateNotice';
import Home from './components/Home/Home';

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/create-notice" component={CreateNotice} />
			</Switch>
		</Router>
	);
}

// todo
//create a notice page
//rest api

export default App;
