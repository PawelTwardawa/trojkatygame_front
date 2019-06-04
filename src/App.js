import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Component} from "react"

import Home from "./components/Home/Home";
import Login from "./components/Login/Login"; 
import Error from "./components/Error/Error";
import Navigation  from "./components/Navigation/Navigation";


class App extends Component
{
  constructor(props)
  {
      super(props);
      this.state = {
        isLogged : false
      }
  }
  
  render()
  {
    return (
          //<div className="App">
            <BrowserRouter>
              <Navigation isLogged={this.state.isLogged} />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route  component={Error} />
              </Switch>
            </BrowserRouter>
            
        );
  }
}

// function App() {

//   return (
//     //<div className="App">
//       <BrowserRouter>
//         <Navigation />
//         <Switch>
//           <Route path="/" component={Home} exact />
//           <Route path="/login" component={Login} />
//           <Route  component={Error} />
//         </Switch>
//       </BrowserRouter>
      
//   );
// }

export default App;
