import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Main from './pages/main';
import Login from './pages/login'

function App() {

  return (
    <Router>
      <Route exact path="/login" component={Login} />

      <Route exact path="/" component={Main} />
    </Router>
  );
}

export default App;