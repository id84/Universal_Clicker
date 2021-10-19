
//minute ticker
setInterval(function () {
    eventdecider();
    if (document.getElementById("autosavechkbx").checked) {
    loggerize("Game saved.")
    saveGame();
}
}, 1000);
//hour ticker
setInterval(function () {
    icqalert.play();
    loggerize("Hourly Reminder: Time is going by at an alarming rate.");
}, 600000);



var numticks = 0; //keeps track of total ticks
var eventticks = 0; //keeps track of ticks since last event


function eventdecider() {
    numticks++;
    eventticks++;
    //we will try for a poster event every 5 ticks, doesn't matter if it fails or not
    if (eventticks > 5) {
        var r = getRandomInt(10);
        switch (r) {
            case 0:
                glowieattract();
                break;
            case 1:
                glowieevent();
                break;
            case 2:
            case 3:
                skeletonevent();
                break;
            case 4:
            case 5:
            case 6:
                Crevolutionaryevent();
                break;
            case 7:
            case 8:
            case 9:
                lizardattract();
                break;
            case 10:
                lizardevent();
                break;
        }
    }
    //Bot banning events will always happen above a pop
    if (Bot.count > Bot.power1) {
        var r = getRandomInt(100);
        var p = getRandomInt(50) / 100;
        p = Math.floor(p * Bot.count) + Math.floor(heat / 1000);
        if (r > Bot.power2 && p > 1) {
            workremovefromtown(0, (p))
            var log = "Mods have banned " + p + " Bots!";
            log = `<button class="emobtn" onclick="reviewalert('${log}')">${emojify("Alert")}</button>` + log;
            loggerize(log);
        }
    }
    //So does npcs and shills


    //check for heat events

    //glowies will glow
    heat += Glowie.count * 5;



}


function lizardattract() {
    if (heat > 10000 && numticks > 600) {
        Lizard.count++;
    }
}


function glowieattract() {
    var p = getpopulation(allregularposters);
    if (p > 500) {
        Glowie.count += getRandomInt(p / 500);
    }
}

function glowieevent() {
    //severity of event depends on heat
    if (Glowie.count > 1) {
        switch (true) {
            case heat === 0:
                //Glowies generate extra heat silently
                heat += Glowie.count * 750;
                break;
            case heat > 0 && 1000 > heat:
                //Glowies will convert NPCs silently
                var r = getRandomInt(Glowie.count) + Glowie.count;
                NPC.count -= r;
                Glowie.count += r;
                break;
            case heat > 1000 && 10000 > heat:
                //Glowies convert NEETs into shitposters silently

                break;
            case heat > 10000 && 100000 > heat:
                //Glowies will van money makers
                var en = findexistingfromarray(moneymakers);
                if (en.length > 0) {
                    var log = "";
                    var vd = 0;
                    for (let i = 0; i < en.length; i++) {
                        const element = en[i];
                        if (element.count > 0) {
                            var v = getRandomInt(element.count);
                            element.count -= v;
                            vd += v;
                            log += emojify(element.name);
                        }
                    }
                    var s = `Glowies offshored ${vd} Posters on the suspicion of having offshore accounts.<br>`;
                    var bts = `<button class="emobtn" onclick="reviewalert('${s}${log}')">${emojify("Alert")}</button>`;
                    loggerize (bts + s);
                    popalert(s + log);
                }
                break;
            case heat > 100000 && 1000000 > heat:
                //convert a NEET (or normie) to a Supreme Gentleman (find a less tasteless name)
                break;
            default:
                break;
        }
    }
}


function skeletonevent() {
    if (CSkeleton.count > 0) {
        var sklpwr = Math.floor(drama / 1000); //drama increases skeleton power
        sklpwr += Math.floor(heat / 1000); //more heat on you more spookier
        sklpwr += (Wizard.count * 10); //wizards amplify skeleton power
        sklpwr += (Lizard.count * 10); //lizards also amplify skeleton power
        sklpwr += (Dramatist.count * 10); //Dramatist too
        sklpwr -= Math.floor(science / 1000); //skeletons fear science
        sklpwr -= (Scientist.count * 5); //so scientists
        sklpwr -= (Veteran.count * 10); //Veterans won't let anyone fall for skeletons cheap tricks


        if (sklpwr < 0) { sklpwr = CSkeleton.count * (getRandomInt(2) + 1); }  //however skeletons will still scare some if skelepower is negative
        var en = [];
        en = findexistingnormies();


        var log = "";
        var nspk = 0;
        //pick a random existing normie

        if (en.length > 0) {
            for (let i = 0; i < sklpwr; i++) {
                var r = getRandomInt(en.length);
                if (en[r].count > 0 && en[r].name !== "Scientist" && en[r].name !== "Veteran") { en[r].count = en[r].count - 1; nspk++; log += emojify(en[r].name); }
            }
            if (nspk > 0) {
                log = "Skeletons are out doing spooky things! They scared away " + nspk + " Posters! <br>" + log;
                popalert(log);
                var bts = '<button class="emobtn" onclick="reviewalert(' + "'" + log + "'" + ')">' + emojify("Alert") + "</button>";
                loggerize(bts + "Skeletons have spooked " + nspk + " away from Network!");
                eventticks = 0;
                redrawscoreboard();
                redrawpop();
                rendertown(true);
            }
        }
    }

}

function lizardevent() {
    if (Lizard.count > 0) {
        //lizards will slowly and silently replace posters they won't contribute anything
        var en = [];
        en = findexistingnormies();
        var ent = [];
        ent = findexistingneets();
        var lizd = 0;
        var ec = [];
        ec = en.concat(ent);
        if (ec.length > 0) {
            for (let i = 0; i < Lizard.count; i++) {
                var r = getRandomInt(ec.length);
                if (ec[r].count > 0) { ec[r].count--; }
            }
            Lizard.count += lizd;
            if (Detective.count > 1) {
                //Detectives have 5% (default) chance to expose lizards after replacement and autoban them
                var dt = Math.floor((Detective.count * Detective.power1) / 100);
                if (dt >= 1) {
                    Lizard.count -= dt * 2;
                    var log = emojify("Detective") + "Detectives spotted " + dt * 2 + emojify("Lizard", 1) + " replacing your Posters!</span><br><br>" +
                        "Once spotted Lizards fled your Network, sadly fate of " + dt + " posters they were replacing is unknown.";
                    popalert(log);
                    var bts = '<button class="emobtn" onclick="reviewalert(' + "'" + log + "'" + ')">' + emojify("Alert") + "</button>";


                    loggerize(bts + dt * 2 + " Lizards were exposed!");
                }
            }
            eventticks = 0;
            redrawscoreboard();
            redrawpop();
            rendertown(true);
        }

    }

}

function Crevolutionaryevent() {
    if (CRevolutionary.count > 0) {
        var en = findexistingnormies();
        if (en.length > 0) {
            for (let i = 0; i < CRevolutionary.count; i++) {
                var r = getRandomInt(en.length);
                if (en[r].count > 0) { en[r].count = en[r].count - 1; Somethingist.count += 1; }

            }
        }
        var ent = findexistingneets();
        if (ent.length > 0) {
            for (let i = 0; i < CRevolutionary.count; i++) {
                var r = getRandomInt(ent.length);
                if (ent[r].count > 0) { ent[r].count = ent[r].count - 1; Veteran.count += 1; }
            }
        }
        eventticks = 0;
    }
}





function findexistingnormies() {
    var en = [];
    for (let i = 0; i < normieposters.length; i++) {
        if (normieposters[i].count > 0) {
            en.push(normieposters[i]);
        }
    }
    for (let i = 0; i < advancednormieposters.length; i++) {
        if (advancednormieposters[i].count > 0) {
            en.push(advancednormieposters[i]);
        }
    }
    return en;
}

function findexistingneets() {
    var en = [];
    for (let i = 0; i < neetposters.length; i++) {
        if (neetposters[i].count > 0) {
            en.push(neetposters[i]);
        }
    }
    for (let i = 0; i < advancedneetposters.length; i++) {
        if (advancedneetposters[i].count > 0) {
            en.push(advancedneetposters[i]);
        }
    }
    return en;
}

function findexistingfromarray(array) {
    var en = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].count > 0) {
            en.push(array[i]);
        }
    }
    return en;
}