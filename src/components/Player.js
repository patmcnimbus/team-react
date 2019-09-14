import React from "react";
import PlayerAPI from "../player-api";
import { Link } from "react-router-dom";

const Player = props => {
    const player = PlayerAPI.get(parseInt(props.match.params.number, 10));

    if (!player) {
        return <div>Sorry, but the player was not found</div>;
    }
    const team = player.team.toLowerCase();
    return (
        <div>
            <h1>
                {player.name} (#{player.number})
            </h1>
            <h2>Position: {player.position}</h2>
            <h2>Class: {player.class}</h2>
            <Link to={team}>Back</Link>
        </div>
    );
};

export default Player;
