import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import Pages from "./components/Pages/Pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FullPage from "./components/Pages/FullPage";
import AddForm from "./components/AddForm/AddForm";


function App() {
  return (

        <div className="App">
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route path="/"  exact component={Pages}/>
                    <Route path="/FullPage"   component={FullPage}/>
                    <Route path="/AddForm"   component={AddForm}/>
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
