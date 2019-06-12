import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Component} from "react"

import Home from "./components/Home/Home";
import ValidateQuestion from "./components/ValidateQuestion/ValidateQuestion";
import Login from "./components/Login/Login"; 
import Error from "./components/Error/Error";
import Navigation  from "./components/Navigation/Navigation";
import NewQuestion  from "./components/NewQuestion/NewQuestion";
import Admin from './components/Admin/Admin';
import NewCategory from './components/NewCategory/NewCategory';


class App extends Component
{
  constructor(props)
  {
      super(props);
      this.state = {
        isLogged : false
      }

      this.changeLoggedState = this.changeLoggedState.bind(this);
      this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  changeLoggedState(state)
  {
    this.setState({isLogged: state});
  }

  isLoggedIn()
  {
    if(sessionStorage.getItem('userData') && !this.state.isLogged)
    {
      this.setState({isLogged : true});
    }
    if(!sessionStorage.getItem('userData') && this.state.isLogged)
    {
      this.setState({isLogged : false});
    }

    if(sessionStorage.getItem('userData'))
    {
      return true;
    }
    else 
    {
      return false;
    }
  }
  
  render()
  {

    //console.log(this.isLoggedIn());
    return (
          //<div className="App">
            <BrowserRouter>
              <Navigation isLoggedIn={this.isLoggedIn} changeLoggedState={this.changeLoggedState} />
              <Switch>
                <Route path="/" render={routeProps => ( <Home {... routeProps} isLoggedIn={this.isLoggedIn} />)} exact />
                <Route path="/ValidateQuestion" render={routeProps => ( <ValidateQuestion {... routeProps} isLoggedIn={this.isLoggedIn} />)} exact />
                <Route path="/newQuestion" render={routeProps => ( <NewQuestion {... routeProps} isLoggedIn={this.isLoggedIn} />)} exact />
                <Route path="/newCategory" render={routeProps => ( <NewCategory {... routeProps} isLoggedIn={this.isLoggedIn} />)} exact />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/login" render={(routeProps) => (<Login {... routeProps} isLoggedIn={this.isLoggedIn} changeLoggedState={this.changeLoggedState} />)} />
                <Route path="/admin" render={(routeProps) => (<Admin {... routeProps} isLoggedIn={this.isLoggedIn} changeLoggedState={this.changeLoggedState} />)} />
                <Route  component={Error} />
              </Switch>
            </BrowserRouter> 
        );
  }
}

export default App;
