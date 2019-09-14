const PlayerAPI = {
    players: [
        {
            number: 1,
            name: "Betty Blocker",
            class: "Freshman",
            position: "G",
            team: "Varsity",
        },
        {
            number: 2,
            name: "Diane Defender",
            class: "Senior",
            position: "D",
            team: "JV",
        },
        {
            number: 3,
            name: "Sam Sweeper",
            class: "Junior",
            position: "D",
            team: "JV",
        },
        {
            number: 4,
            name: "Maddie Midfielder",
            class: "Sophomore",
            position: "M",
            team: "Varsity",
        },
        {
            number: 5,
            name: "Winnie Winger",
            class: "Senior",
            position: "M",
            team: "JV",
        },
        {
            number: 6,
            name: "Fiona Forward",
            class: "Sophomore",
            position: "F",
            team: "Varsity",
        },
    ],
    all: function() {
        return this.players;
    },
    varsity: function() {
        const isVarsity = p => p.team === "Varsity";
        return this.players.filter(isVarsity);
    },
    jv: function() {
        const isJV = p => p.team === "JV";
        return this.players.filter(isJV);
    },
    get: function(id) {
        const isPlayer = p => p.number === id;
        return this.players.find(isPlayer);
    },
};

export default PlayerAPI;
