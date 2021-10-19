function decideevent() {
    wokrevent("e");
}

function wokrevent(e) {

    switch (e) {

        case "neet1":
            //Needs NEETs to work
            var neets = findexistingneets();
            if (neets.length >= 1) {
                var c = getRandomInt(countryemojis.length);
                var r = getRandomInt(neets.length);
                var b = getRandomInt(neets[r].count);
                var f = getRandomInt(chans.length);
                var rr = Math.floor(b * Math.random());
                var log = "Anime is banned in " + emojify(countryemojis[c], 1) + "! Several NEETs took " + countryemojis[c] + "s Ban of Anime as a personal attack!";
                if (rr <= 0) { rr = 1; }
                neets[r].count -= rr;
                var btn = log + "<br><br>Unrest among NEETs grew to a point " + emojify(neets[r].name, 1) + "s could not take it anymore and " + rr + " of them left the Internets forever after writing a thousand word article on " + chans[f] +".";
                log = `<button class="emobtn" onclick="reviewalert('${btn}')">${emojify("Alert")}</button>` + log;
                loggerize(log);
                popalert(btn);
            }
            break;
            default:
            case "normie1":
                //Needs NEETs to work
                var norm = findexistingnormies();
                if (norm.length >= 1) {
                    var c = getRandomInt(countryemojis.length);
                    var d = getRandomInt(countryemojis.length);
                    var e = getRandomInt(countryemojis.length);
                    var f = getRandomInt(chans.length);
                    var r = getRandomInt(norm.length);
                    var b = getRandomInt(norm[r].count);
                    var rr = Math.floor(b * Math.random());
                    var log = "A person in " + emojify(countryemojis[d], 1) + " offended a person in " + emojify(countryemojis[c], 1) + " over Internets! Several Normies are shaken!";
                    if (rr <= 0) { rr = 1; }
                    norm[r].count -= rr;
                    var btn = log + "<br><br>Upheaval among Normies after " + countryemojis[c] + " person and " + countryemojis[d] + " person disagree on a topic. " +
                    "<br>After hearing about the event " + rr + " " + emojify(norm[r].name,1) + "s left the Internets forever, unable accept a disagreement about an unknown topic, between people they do not know, on " + chans[f] + ".";
                    log = `<button class="emobtn" onclick="reviewalert('${btn}')">${emojify("Alert")}</button>` + log;
                    loggerize(log);
                    popalert(btn);
                }
                break;
    }
}
