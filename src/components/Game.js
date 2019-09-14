import React from "react";
import ScheduleAPI from "../schedule-api";
import { Link } from "react-router-dom";

const Game = props => {
    const game = ScheduleAPI.get(parseInt(props.match.params.index, 10));
    if (!game) {
        return <div>Sorry, but the game was not found</div>;
    }
    const team = game.team.toLowerCase();
    return (
        <div>
            <h2>
                Date: {game.date} Day: {game.day}
            </h2>
            <h2>Time: {game.time}</h2>
            <h2>Opponent: {game.opponent}</h2>
            <h2>Site: {game.site}</h2>
            <Link to={team}>Back</Link>
        </div>
    );
};

export default Game;
