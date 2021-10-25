function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sunglasschbx() {
    var cb = document.getElementById("snglschbx");
    var nts = document.getElementById("townpanel");
if (cb.checked) {
    nts.classList.add("sunglass");
} else {
    nts.classList.remove("sunglass");
}

    rendertown(true);
}

function popupclose() {
    document.getElementById("popup").style.display = "none";
}

function minepopclose() {

    document.getElementById("minepop").style.display = "none";
}



document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        document.getElementById("minepop").style.display = "none";
        document.getElementById("popup").style.display = "none";
    }
};


function opentab(evt, tab) {
    var cb = document.getElementById("snglschbx");
    if (cb.checked == true && tab != "TownTab") {
        cb.checked = false;
        sunglasschbx();
    }
    /*Do target tabs stuff:  SocializeTab VParentTab Teststuff*/
    switch (tab) {
        case "BuyTab":
            redrawshoponrequest();
            break;
        case "ResearchTab":
            redrawresearchonrequest();
            break;
        case "TownTab":
            rendertown(true);
            break;
        case "WikiTab":
            redrawwiki();
            break;
        case "WorkshopTab":
            redrawupgrades();
            break;

    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function saveGame() {
    localStorage.clear();

    //save resources
    localStorage.setItem("heat", heat);
    localStorage.setItem("fame", fame);
    localStorage.setItem("money", money);
    localStorage.setItem("drama", drama);
    localStorage.setItem("memes", memes);
    localStorage.setItem("science", science);
    localStorage.setItem("internets", internets);
    localStorage.setItem("numticks", numticks);
    localStorage.setItem("mechanicuslevel", mechanicuslevel);


    //options
    localStorage.setItem("popalerts", document.getElementById("popalertschkbx").checked);
    localStorage.setItem("sfxpopalerts", document.getElementById("sfxalertschkbx").checked);
    localStorage.setItem("autosave", document.getElementById("autosavechkbx").checked);
    localStorage.setItem("retro", document.getElementById("retrochkbx").checked);
    localStorage.setItem("nghtmode", document.getElementById("nightmodechkbx").checked);
    
    //save posters
    for (let i = 0; i < allposters.length; i++) {
        localStorage.setItem("postercount" + i, allposters[i].count);
    }
    //save levels
    for (let i = 0; i < upgradebleposters.length; i++) {
        localStorage.setItem("posterlevel" + i, upgradebleposters[i].level);
    }

    //save research
    for (let i = 0; i < allresearch.length; i++) {
        localStorage.setItem(allresearch[i].name, allresearch[i].researched);
        localStorage.setItem("researchreveal" + i, allresearch[i].revealed);
    }
    loggerize("Game Saved!")
}

function loadGame() {

    internets = parseInt(localStorage.getItem("internets"));
    heat = parseInt(localStorage.getItem("heat"));
    fame = parseInt(localStorage.getItem("fame"));
    money = parseInt(localStorage.getItem("money"));
    drama = parseInt(localStorage.getItem("drama"));
    memes = parseInt(localStorage.getItem("memes"));
    science = parseInt(localStorage.getItem("science"));
    numticks = parseInt(localStorage.getItem("numticks"));
    mechanicuslevel = parseInt(localStorage.getItem("mechanicuslevel"));

    //load options

    if (localStorage.getItem("popalerts") === "true") { document.getElementById("popalertschkbx").checked = true; }
    else { document.getElementById("popalertschkbx").checked = false; }

    if (localStorage.getItem("sfxpopalerts") === "true") { document.getElementById("sfxalertschkbx").checked = true; }
    else { document.getElementById("sfxalertschkbx").checked = false; }

    if (localStorage.getItem("autosave") === "true") { document.getElementById("autosavechkbx").checked = true; }
    else { document.getElementById("autosavechkbx").checked = false; }

    if (localStorage.getItem("retro") === "true") { document.getElementById("retrochkbx").checked = true; retromeup(); }
    else { document.getElementById("retrochkbx").checked = false; }

    if (localStorage.getItem("nghtmode") === "true") { document.getElementById("nightmodechkbx").checked = true; nightmode(); }
    else { document.getElementById("nightmodechkbx").checked = false; }

    //load poster counts
    for (let i = 0; i < allposters.length; i++) {
        allposters[i].count = parseInt(localStorage.getItem("postercount" + i));
    }

    //level up posters
    for (let i = 0; i < upgradebleposters.length; i++) {
        const c = upgradebleposters[i];

        c.level = parseInt(localStorage.getItem("posterlevel" + i));
        c.level++;
        c.power1 += c.power1l * c.level;
        c.power2 += c.power2l * c.level;

    }

    //do research
    for (let i = 0; i < allresearch.length; i++) {
        allresearch[i].researched = localStorage.getItem(allresearch[i].name);
        allresearch[i].revealed = localStorage.getItem("researchreveal" + i);
        if (allresearch[i].researched === "true") { allresearch[i].researched = true; workResearch(allresearch[i], false); }
        else { allresearch[i].researched = false; }
        if (allresearch[i].revealed === "true") { allresearch[i].revealed = true; }
        else { allresearch[i].revealed = false; }
    }

    //work mechanicus
    for (let i = 0; i < mechanicuslevel; i++) {
        workmechanicus();
    }

    loggerize("Game Loaded!")
}



function popalert(s, sfx) {
    if (document.getElementById("popalertschkbx").checked) {
        if (document.getElementById("sfxalertschkbx").checked) {
            switch (sfx) {
                default:
                case "alert":
                    icqalert.play();
                    break;
                case null:
                    break;
            }
        }
        document.getElementById("popuptext").innerHTML = s + "<br><br>";
        document.getElementById("popup").style.display = "block";
    }
}

function reviewalert(s) {
    document.getElementById("popuptext").innerHTML = s + "<br><br>";
    document.getElementById("popup").style.display = "block";
}


function loggerize(tlog) {
    var now = new Date();
    var m = now.getMinutes();
    if (m < 10) { m = "0" + m; }

    var ds = now.getDay() + "." + now.getMonth() + "." + now.getFullYear() + " " + now.getHours() + ":" + m + " - ";

    tlog = ds + tlog + "<p>";
    document.getElementById("logpanel").innerHTML = tlog + document.getElementById("logpanel").innerHTML;
}



function fillposters() {
    for (let i = 0; i < allposters.length; i++) {
        allposters[i].count += 100;
    }

}




function optionclick(o) {
    switch (o) {

    }

}


function getpopulation(poparray) {

    var pop = 0;
    for (let i = 0; i < poparray.length; i++) {
        pop += poparray[i].count;
    }
    return pop;
}
