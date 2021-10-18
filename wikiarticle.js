function wikiarticle(s) {
    var ele = document.getElementById("wikitext");
    switch (s) {
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
                emojify("heat") + "Heat; Being on Internets and doing certain things on will attract attention, sometime unwanted attention. You don't want too much of it.<p>" +
                emojify("fame") + "Fame; Fame is mostly positive attention you draw. A key resources to get out of dodge and have a large Network.<p>" +
                emojify("money") + "Money; Digital Money makes the Digital World go around... at least one day. This resource can be used to pay Shills or buy later upgrades (at some point in future).<p>" +
                emojify("drama") + "Drama; Remember Reality Shows? Remember people debasing themselves for fame. Yeah, they are on Internets. Numbering in millions.<p>" +
                emojify("memes") + "Memes; A transmission medium for ideas, emotions, jokes and propaganda. In a sense it is a currency for the bored.<p>" +
                emojify("scie") + "Science; Social sciences, hard sciences, soft sciences, long sciences, tight sciences... all sorts of Science. It is not like it is a safe harbour in a mad world, but closest thing to one.<p>" +
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
                "Research tab lists available or already Researched items. You can clik on an already researched item to read the results. Researches cost resources. Some of them will be revealed after certain events, others will be follow ups to previous ones.";
            break;
        case "Network":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Network</span><br><p>" +
                "Network tab shows all the Posters related to you. Network is a place where you can view and more importantly remove Posters from your Network by clicking on them. You will kick only one Poster at a time, while each may represent more then one Poster. While kicking some Poster with upkeep is tempting, you should find and ban Interlopers which are detrimental, even fatal, in long run.";
            break;
        case "Socialize":
            ele.innerHTML = "<br><span style=\"font-weight: bold\";>Socialize</span><br><p>" +
                "Socialize tab allows you to socialize in Internets.<p>"+
                "<b>PC Minefield;</b> Talk your heart out on social media to random strangers, but becareful where you say what. If you say something politically wrong to the wrong person you will get \"cancelled\". You can close the minefield by pressing escape key if you can't find the darned red X, but can always return to an incomplete minefield later by pressing Toggle Minefield button.<br>"+
                "<b>More to come;</b> probably.";
                
            break;


    }

}
