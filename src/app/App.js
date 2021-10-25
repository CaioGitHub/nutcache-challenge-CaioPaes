import './app.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import People from '../pages/Home/index';

function App() {
  return (
    <Router>
      

        <Switch>
          <Route path="/" exact component={People} />
        </Switch>

      
    </Router>
  );
}

export default App;