  
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import i1signup from "./components/i1signup";
import i2signup from "./components/i2signup";
import i1form from "./components/i1form";
import i2form from "./components/i2form";
import Home from "./components/Home";
import userhome from "./components/userhome";

import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/i1signup" component={i1signup} />
                    <Route path="/i2signup" component={i2signup} />
                    <Route path="/i1form" component={i1form} />
                    <Route path="/i2form" component={i2form} />
                    <Route path="/userhome" component={userhome}/>
                </Switch>
            </Router>
        )
    }
}
