import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
    const toggleBurger = () => {
        let linksEl = document.querySelector(".narrowLinks");
        if (linksEl.style.display === "block") {
            linksEl.style.display = "none";
        } else {
            linksEl.style.display = "block";
        }
    };

    return (
        <nav>
            <div className="navWide">
                <div className="wideDiv">
                    <Link to="/">
                        <a>
                            <i class="fas fa-home"></i>
                        </a>
                    </Link>
                    <div className="dropdown">
                        <a className="dropbtn">Roster</a>
                        <div className="dropdown-content">
                            <Link to="/roster/varsity">
                                <a>Varsity Roster</a>
                            </Link>
                            <Link to="/roster/jv">
                                <a>JV Roster</a>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a className="dropbtn">Schedule</a>
                        <div className="dropdown-content">
                            <Link to="/schedule/varsity">
                                <a>Varsity Schedule</a>
                            </Link>
                            <Link to="/schedule/jv">
                                <a>JV Schedule</a>
                            </Link>
                        </div>
                    </div>
                    <Link to="/sponsors">
                        <a>Sponsors</a>
                    </Link>
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                </div>
            </div>
            <div className="navNarrow">
                <i className="fa fa-bars fa-2x" onClick={toggleBurger}></i>
                <div className="narrowLinks">
                    <Link to="/">
                        <a onClick={toggleBurger}>
                            <i class="fas fa-home"></i>
                        </a>
                    </Link>
                    <Link to="/roster/varsity">
                        <a onClick={toggleBurger}>Varsity Roster</a>
                    </Link>
                    <Link to="/roster/jv">
                        <a onClick={toggleBurger}>JV Roster</a>
                    </Link>
                    <Link to="/schedule/varsity">
                        <a onClick={toggleBurger}>Varsity Schedule</a>
                    </Link>
                    <Link to="/schedule/jv">
                        <a onClick={toggleBurger}>JV Schedule</a>
                    </Link>
                    <Link to="/sponsors">
                        <a onClick={toggleBurger}>Sponsors</a>
                    </Link>
                    <Link to="/about">
                        <a onClick={toggleBurger}>About</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
