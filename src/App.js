import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import Pages from "./components/Pages/Pages";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import FullPage from "./components/Pages/FullPage";


function App() {
  return (
        <div className="App">
<NavBar/>
{/*<Pages/>*/}
            <BrowserRouter>
                <Switch>
                    <Route path="/"  exact component={Pages}/>
                    <Route path="/fullpage"   component={FullPage}/>
                </Switch>
            </BrowserRouter>
        </div>




  );
}

export default App;
