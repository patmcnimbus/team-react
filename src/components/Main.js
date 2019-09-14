import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Roster from "./Roster";
import Schedule from "./Schedule";
import About from "./About";
import Sponsors from "./Sponsors";

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route
                path="/roster/varsity"
                render={props => <Roster {...props} isVarsity={true} />}
            />
            <Route
                path="/roster/jv"
                render={props => <Roster {...props} isJV={true} />}
            />
            <Route
                path="/roster/:number"
                render={props => <Roster {...props} />}
            />
            <Route
                path="/schedule/varsity"
                render={props => <Schedule {...props} isVarsity={true} />}
            />
            <Route
                path="/schedule/jv"
                render={props => <Schedule {...props} isJV={true} />}
            />
            <Route
                path="/schedule/:index"
                render={props => <Schedule {...props} />}
            />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/about" component={About} />
        </Switch>
    </main>
);

export default Main;
