  
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import i1login from "./components/i1login";
import Home from "./components/Home";
import userhome from "./components/userhome";

import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/i1login" component={i1login} />
                    <Route path="/userhome" componet={userhome}/>
                </Switch>
            </Router>
        )
    }
}