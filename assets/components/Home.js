import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import PublicResources from "./index";

class Home extends Component {

    async componentDidMount() {
    }

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path={"/callback"} component={Callback} />
                    <Route path={"/"} component={PublicResources} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Home);