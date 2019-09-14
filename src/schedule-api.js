const ScheduleAPI = {
    games: [
        {
            base: 0,
            date: "6 Nov",
            day: "Tuesday",
            opponent: "Escambia",
            site: "Ashton Brosnaham",
            time: "7:30pm",
            team: "Varsity",
        },
        {
            base: 1,
            date: "6 Nov",
            day: "Tuesday",
            opponent: "Escambia",
            site: "Ashton Brosnaham",
            time: "5:30pm",
            team: "JV",
        },
        {
            base: 2,
            date: "8 Nov",
            day: "Thursday",
            opponent: "Crestview",
            site: "Navarre",
            time: "7:30pm",
            team: "Varsity",
        },
        {
            base: 3,
            date: "8 Nov",
            day: "Thursday",
            opponent: "Crestview",
            site: "Navarre",
            time: "5:30pm",
            team: "JV",
        },
    ],
    all: function() {
        return this.games;
    },
    varsity: function() {
        const isVarsity = g => g.team === "Varsity";
        return this.games.filter(isVarsity);
    },
    jv: function() {
        const isJV = g => g.team === "JV";
        return this.games.filter(isJV);
    },
    get: function(id) {
        const isGame = g => g.base === id;
        return this.games.find(isGame);
    },
};

export default ScheduleAPI;
