import React from "react";
import { LandingPage } from "./LandingPage";
import Shimla from './Pages/Shimla'
import Manali from "./Pages/Manali";
import Owner from "./Pages/Owner";
import {Route,Switch} from "react-router-dom"
import Tenant from "./Pages/Tenant";
import Error from "./Pages/Error";
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/Shimla' component={Shimla}/>
      <Route exact path='/Manali' component={Manali}/>
      <Route exact path='/Owner' component={Owner}/>
      <Route exact path='/Tenant' component={Tenant}/>
      <Route component={Error}/>
    </Switch>
    </> 
  );
}

export default App;
