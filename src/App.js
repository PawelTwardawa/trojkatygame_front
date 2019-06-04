import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login"; 
import Error from "./components/Error/Error";
import Navigation  from "./components/Navigation/Navigation";

function App() {
  return (
    //<div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route  component={Error} />
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
