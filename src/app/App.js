import '../styles/app.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import People from '../pages/Home/index';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={People} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;