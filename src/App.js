import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from "./login";
import EmailPage from "./lead";
import OverviewPage from "./overview";
import Loader from "./components/Loader";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/lead" exact component={EmailPage} />
          <Route path="/overview" exact component={OverviewPage} />
        </Switch>
      </Suspense>
    </Router>
  )
};

export default App;
