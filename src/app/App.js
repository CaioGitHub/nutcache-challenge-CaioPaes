import '../styles/app.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import people from '../pages/Home';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={people} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;