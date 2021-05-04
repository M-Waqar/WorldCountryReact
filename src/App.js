import React from 'react';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ CountryList } />
          <Route path="/detail/:Name" component={ CountryDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
