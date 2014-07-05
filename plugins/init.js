exports.init = function () {
    Reg.init('MOTD', '');
    Reg.init('maxPlayersOnline', 0);
    Reg.init('servername', Config.servername);
    Reg.init('League',
        {
            Gym1: "", Gym2: "", Gym3: "", Gym4: "", Gym5: "", Gym6: "", Gym7: "", Gym8: "",
            Elite1: "", Elite2: "", Elite3: "", Elite4: "",
            Champ: "",
            Managers: []
        }
    );

    // Global var name: reg val name
    var regVals = {
        "Mutes": "Mutes",
        "Rangebans": "Rangebans",
        "Kickmsgs": "Kickmsgs",
        "Mutemsgs": "Mutemsgs",
        "Banmsgs": "Banmsgs",
        "Welmsgs": "Welmsgs",
        "Emotetoggles": "Emotetoggles",
        "Feedmons": "Feedmon",
        "League": "League"
    };

    for (var i in regVals) {
        Reg.init(regVals[i], {});

        try {
            global[i] = Reg.get(regVals[i]);
        } catch (e) {
            global[i] = {};
        }
    }

    if (!League.hasOwnProperty("Managers")) {
        League.Managers = [];
    }

    var globalVars = {
        tourmode: 0,
        spinTypes: [], // can contain: items, emotes, pokemons
        muteall: false,
        supersilence: false,
        rouletteon: false,
        htmlchat: false,
        capsmode: false,
        marxmode: false,
        georgemode: false,
        comicmode: false,
        scramblemode: false,
        colormode: false,
        pewpewpew: false,
        nightclub: false,
        warnings: {},
        uncockblocks: {},
        teamSpammers: {},
        reconnectTrolls: {},
        uniqueVisitors: {
            ips: {},
            count: 0,
            total: 0
        },
        Poll: {
            active: false,
            subject: '',
            by: '',
            options: [],
            votes: {}
        }
    };
    var j;

    for (j in globalVars) {
        if (typeof global[j] === "undefined") {
            global[j] = globalVars[j];
        }
    }

    function makeChan(cname) {
        return sys.createChannel(cname) || sys.channelId(cname);
    }

    staffchannel = makeChan("Auth Party");
    testchan = makeChan("Ground Zero");
    watch = makeChan("Watch");
    pluschannel = makeChan("MF's Lounge");
};

module.reload = function reloadInit() {
    module.exports.init();
    return true;
};
