import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import Screens
import Login from './Screens/login/login';
import Counter from './Screens/Counter/counter';

const App = () => {
  return (
    <Router>
      <Route exact path = '/' component = {Login} />
      <Route exact path = '/testing' component = {Counter} />
    </Router>
  );
}

export default App;
