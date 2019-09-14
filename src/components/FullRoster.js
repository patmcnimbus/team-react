import React from "react";
import PlayerAPI from "../player-api";
import { Link } from "react-router-dom";

const RosterHeader = () => {
    return (
        <div className="thead row">
            <div className="ros-col-num">Number</div>
            <div className="ros-col-name">Name</div>
            <div className="ros-col-pos">Position</div>
            <div className="ros-col-cls">Class</div>
        </div>
    );
};

const RosterBody = props => {
    const rows = props.players.map((row, index) => {
        return (
            <div className="row">
                <div className="ros-col-num">{row.number}</div>
                <div className="ros-col-name">
                    <Link to={`/roster/${row.number}`}>{row.name}</Link>
                </div>
                <div className="ros-col-pos">{row.position}</div>
                <div className="ros-col-cls">{row.class}</div>
            </div>
        );
    });

    return <div>{rows}</div>;
};

const FullRoster = props => {
    const isVarsity = props.isVarsity;
    let players = props;
    let headerText = "";
    if (isVarsity) {
        players = PlayerAPI.varsity();
        headerText = "Varsity";
    } else {
        players = PlayerAPI.jv();
        headerText = "JV";
    }

    return (
        <div>
            <h2 className="ros-header">{headerText} Roster</h2>
            <div>
                <RosterHeader />
                <RosterBody players={players} />
            </div>
        </div>
    );
};

export default FullRoster;
