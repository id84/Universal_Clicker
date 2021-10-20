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
                //Needs Normies to work
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
            case "memeout":
                //Needs Meme resource
                var norm = findexistingnormies();
                var neets = findexistingneets();
                    if (norm.length >= 1 && neets.length >=1) {
                        var neetpop = 0; 
                        var normpop = 0;
                        norm.forEach(element => {
                            normpop += element.count
                        });
                        neets.forEach(element => {
                            neetpop += element.count
                        });

                        var p = neetpop / normpop;
                        var m = Math.floor(memes * p);

                        var log = "Memeouts erupt across the Network! ";
                        var btn = log + "<br><br>" + emojify("memes",1) + " have been ";
                        if (m < memes) {
                            log += "Normies solved the secrets of Turquise Tasselled Wobbegongs favourite movie, NEETs are outraged!";
                            btn += "devalued by " + m + " as a result.<br>";
                            memes = m;
                        } else {
                            log += "NEETs have defended their Memes, Normies are confused about the political leanings of purple Gerenuks."
                            btn += "protected and their rarity increased by " + m + "!<br>";
                            memes += m;
                        }
                         btn += log + "<br><br>";
                        log = `<button class="emobtn" onclick="reviewalert('${btn}')">${emojify("Alert")}</button>` + log;

                        loggerize(log);
                        popalert(btn);

                    }
                break;
    }
}
