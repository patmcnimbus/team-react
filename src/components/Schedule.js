import React from "react";
import { Switch, Route } from "react-router-dom";
import ScheduleDetail from "./ScheduleDetail";
import Game from "./Game";

const Schedule = () => (
    <Switch>
        <Route
            path="/schedule/varsity"
            render={props => <ScheduleDetail {...props} isVarsity={true} />}
        />
        <Route
            path="/schedule/jv"
            render={props => <ScheduleDetail {...props} isJV={true} />}
        />
        <Route path="/schedule/:index" component={Game} />
    </Switch>
);

export default Schedule;
