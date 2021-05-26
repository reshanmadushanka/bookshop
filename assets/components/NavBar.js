import React from 'react';
import {Link, withRouter} from 'react-router-dom';


function NavBar(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" className="navbar-brand"> Symfony React </a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className={"nav-link"} to={"/"}> Public Route </Link>
                    </li>

                    <li className="nav-item">
                        <Link className={"nav-link"} to={"/private"}> Protected Route </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);