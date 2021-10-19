function wikiarticle(s) {
    var ele = document.getElementById("wikitext");
    switch (s) {
        case "News":
            ele.innerHTML = "<br><b>19.10.2021<br>Some news.";
            break;
        case "Wiki":
            ele.innerHTML = '<br><b>Welcome to <div style="float:none; transform: rotate(-180deg); display: inline-block;">W</div>iki!</b></span><br><br>Where all your edits will be reverted and you will be banned!';
            break;
        case "Log":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Log</span><br><p>" +
                "Log keeps track of events that you should keep an eye on with timestamp. Logger keeps track of alerts too, if you see " + emojify("Alert") + " you can click on it to review the Alert.";
            break;
        case "Resources":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Resources</span><br><p>" +
                "Resources represent abstract requirements to take certain actions and more importantly add more posters to your Network. !!NOT FULLY IMPLEMENTED!!<p>" +
                emojify("internets") + "Internets; This represents general \"being in the know\" and general experience interacting with it.<p>" +
                emojify("heat") + "Heat; Being on Internets and doing certain things on will attract attention, sometimes unwanted attention. You don't want too much of it.<p>" +
                emojify("fame") + "Fame; Fame is the positive attention you draw. A key resource to get out of dodge and have a large Network.<p>" +
                emojify("money") + "Money; Digital Money makes the Digital World go around... at least one day. This resource can be used to pay Shills or buy later upgrades (at some point in future).<p>" +
                emojify("drama") + "Drama; Remember Reality Shows? Remember people debasing themselves for fame. They are on Internets now. Numbering in millions.<p>" +
                emojify("memes") + "Memes; A transmission medium for ideas, emotions, jokes and propaganda. In a sense it is a currency for the bored. But not Art, absolutely not.<p>" +
                emojify("science") + "Science; Social sciences, hard sciences, soft sciences, long sciences, tight sciences... all sorts of Science. You will need these to make sense of the world... hopefully.<p>" +
                "";
            break;
        case "Population":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Population</span><br><p>" +
                "This panel shows the number of Posters you have identified. Interlopers can also be scanned but you won't see exact numbers.";
            break;
        case "Community":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Community</span><br><p>" +
                "Community tab lists Posters you can add to your Network. You will need certain Researches done in order to unlock most Posters. Use sliders to set how many Posters you want but be careful some Posters have up keep!";
            break;
        case "Research":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Research</span><br><p>" +
                "Research tab lists available or already Researched items. You can click on an already researched item to review them. Researches cost resources. Some of them will be revealed after certain events, others will be follow ups to previous ones.";
            break;
        case "Network":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Network</span><br><p>" +
                "Network tab shows all the Posters related to you. Network is a place where you can view and more importantly remove Posters from your Network by clicking on them. You will kick only one Poster at a time, while each may represent more then one Poster. While kicking some Poster with upkeep is tempting, you should find and ban Interlopers which are detrimental, even fatal, in long run.";
            break;
        case "Socialize":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Socialize</span><br><p>" +
                "Socialize tab allows you to socialize in Internets.<p>" +
                "<p><b>PC Minefield;</b> Talk your heart out on social media to random strangers, but becareful where you say what. If you say something politically wrong to the wrong person you will get \"cancelled\". You can close the minefield by pressing escape key if you can't find the darned red X, but can always return to an incomplete minefield later by pressing Toggle Minefield button." +
                "<p><b>More to come;</b> probably.";
            break;
        case "Workshop":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Workshop</span><br><p>" +
                "Workshop tab allows you to upgrade and maintain your Network Posters.<p>" +
                "<p><b>Auto Bots;</b> Set the slider to maintain a minimum population of bots. When your Bots get banned if checked, Auto Bot will buy Bots to match the set slider value, if you can afford it." +
                "<p><b>Machine Learning;</b> Since your Bots and NPCs repeat what you say, you can upgrade their Internets production by learning Machines. Because that's what machine learning is<sup>[" + getRandomInt(1000)+ " editors asked for a citation and were banned]</sup>; it is learning about machines."+
                "<p><b>Bot & NPC Upgrades;</b> Besides learning about what to make Bots say, you can make Bots more life-like so they can avoid getting banned as well as the population of Bots that can stay hidden. Oh yea, NPCs too." +
                "<p><b>Shill Upgrades;</b> ...";
                
            break;
        case "Bot":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>" + emojify("Bot", 1) + "</span><br><p>" +
                Bot.tooltip + "<p>" +
                "Costs " + Bot.c1rate + emojify(Bot.c1type) + "<br>" +
                "Produces " + Bot.p1rate + emojify(Bot.p1type) + "/s<br><br>" +
                "Your Bots are level " + Bot.level + ".<br>" +
                "Bots will remain undetected until you have more than " + Bot.power1 + "<br>" +
                "Bots have " + Bot.power2 + "% chance avoiding detection";
            break;
        case "NPC":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>" + emojify("NPC", 1) + "</span><br><p>" +
                NPC.tooltip + "<p>" +
                "Costs " + NPC.c1rate + emojify(NPC.c1type) + "<br>" +
                "Produces " + NPC.p1rate + emojify(NPC.p1type) + "/s<br><br>" +
                "Your NPCs are level " + Bot.level + ".<br>" +
                "NPC won't be banned until you have more than " + NPC.power1 + "<br>" +
                "NPCs have " + Bot.power2 + "% chance avoiding bans";
            break;

        case "Shill":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>" + emojify("Shill", 1) + "</span><br><p>" +
                Shill.tooltip + "<p>" +
                "Costs " + Shill.c1rate + emojify(Shill.c1type) + "<br>" +
                "Produces " + Shill.p1rate + emojify(Shill.p1type) + "/s<br><br>" +
                "Shills are professionals, they won't be banned. But they will start draining all your resources if not paid."
            break;


    }

}



function staticposterarticle(num) {

    var p = allregularposters[num];
    var s = "<br><span style=\"font-weight: bold\";>" + emojify(p.name, 1) + "</span><br><p>" +
        p.tooltip + "<p>" +
        "Costs " + p.c1rate + emojify(p.c1type);
    if (p.c2type !== 0) {
        s += ", " + p.c2rate + emojify(p.c2type);
    }
    s += "<br> Produces " + p.p1rate + emojify(p.p1type) + "/s";
    if (p.p2type !== 0) {
        s += ", " + p.p2rate + emojify(p.p2type) + "/s";
    }
    if (p.extratext !== false) {
        s += "<br><br>" + p.extratext;
    }


    document.getElementById("wikitext").innerHTML = s;
}

function interloperarticle(num) {
    document.getElementById("wikitext").innerHTML = interlopers[num].extratext;

}

