import React from "react";
import { Switch, Route } from "react-router-dom";
import FullRoster from "./FullRoster";
import Player from "./Player";

const Roster = () => (
    <Switch>
        <Route
            path="/roster/varsity"
            render={props => <FullRoster {...props} isVarsity={true} />}
        />
        <Route
            path="/roster/jv"
            render={props => <FullRoster {...props} isJV={true} />}
        />
        <Route path="/roster/:number" component={Player} />
    </Switch>
);

export default Roster;
