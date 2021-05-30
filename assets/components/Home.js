import React, { Component } from "react";
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import Items from "./Items";
import Cart from "./Cart";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const carts = JSON.parse(localStorage.getItem("dataCart"));
    if (carts) {
      this.setState({
        count: carts.length,
      });
    }
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className={"navbar-brand"} to={"/"}>
            Online Book Shop
          </Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/item">Book List</Link>
              </li>
            </ul>
          </div>
          <div className="nav-cart">
            <span>{count}</span>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </nav>
        <div>
          <Switch>
            <Redirect exact from="/" to="/" />
            <Route path="/cart" component={Cart} />
            <Route path="/item" component={Items} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
