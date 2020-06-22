import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import MainScreen from "./components/Screens/MainScreen/MainScreen";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FullPage from "./components/Screens/NewsFullScreen/FullPage";
import AddForm from "./components/AddForm/AddForm";


function App() {
  return (
        <div className="App">
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route path="/"  exact component={MainScreen}/>
                    <Route path="/news/:id"   component={FullPage}/>
                    <Route path="/AddForm"   component={AddForm}/>
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
