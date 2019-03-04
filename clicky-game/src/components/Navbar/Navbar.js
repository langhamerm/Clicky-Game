import React, {Component} from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="left">Pokemember??</li>
                    <li className="center"></li>
                    <li className="right">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;