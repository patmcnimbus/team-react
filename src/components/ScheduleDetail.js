import React from "react";
import ScheduleAPI from "../schedule-api";
import { Link } from "react-router-dom";

const TableHeader = () => {
    return (
        <div className="thead row">
            <div className="sched-col-dt">Date</div>
            <div className="sched-col-day">Day</div>
            <div className="sched-col-opp">Opponent</div>
            <div className="sched-col-site">Site</div>
            <div className="sched-col-time">Time</div>
        </div>
    );
};

const TableBody = props => {
    const rows = props.games.map((row, index) => {
        return (
            <div className="row">
                <div className="sched-col-dt">{row.date}</div>
                <div className="sched-col-day">{row.day}</div>
                <div className="sched-col-opp">
                    <Link to={`/schedule/${row.base}`}>{row.opponent}</Link>
                </div>
                <div className="sched-col-site">{row.site}</div>
                <div className="sched-col-time">{row.time}</div>
            </div>
        );
    });

    return <div>{rows}</div>;
};

const ScheduleDetail = props => {
    const isVarsity = props.isVarsity;
    let games = props;
    let headerText = "";
    if (isVarsity) {
        games = ScheduleAPI.varsity();
        headerText = "Varsity";
    } else {
        games = ScheduleAPI.jv();
        headerText = "JV";
    }

    return (
        <div>
            <h2>{headerText} Schedule</h2>
            <div>
                <TableHeader />
                <TableBody games={games} />
            </div>
        </div>
    );
};

export default ScheduleDetail;
