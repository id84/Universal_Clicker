function emojify(str) {
    var emoji = "buggered";
    switch (str) {
        case "internets": emoji = "📶"; break;
        case "fame": emoji = "🎪"; break;
        case "money": emoji = "🪙"; break;
        case "heat": emoji = "🔥"; break;
        case "drama": emoji = "🎭"; break;
        case "memes": emoji = "🖼️"; break;
        case "scie": emoji = "⚗️"; break;

        case "Bot": emoji = "🤖"; break;
        case "NPC": emoji = "👤"; break;
        case "Shill": emoji = "📣"; break;

        case "Philosopher": emoji = "👨🏻‍🎓"; break;
        case "Scientist": emoji = "👩🏻‍🔬"; break;
        case "Artist": emoji = "👩🏻‍🎨"; break;
        case "Wagie": emoji = "👩‍💼"; break;

        case "Politician": emoji = "🤵"; break;
        case "Expert": emoji = "👨‍🏫"; break;
        case "DIY": emoji = "👨‍🔧"; break;
        case "Patron": emoji = "👨‍💼"; break;

        case "Alphabet": emoji = "🧚"; break;
        case "Wizard": emoji = "🧙"; break;
        case "Photoshopper": emoji = "👩‍💻"; break;
        case "Dramatist": emoji = "👩‍🎤"; break;

        case "Somethingist": emoji = "🙋"; break;
        case "Detective": emoji = "🕵️"; break;
        case "Scriptkiddie": emoji = "👨‍💻"; break;
        case "Veteran": emoji = "👴"; break;

        case "Devout": emoji = "👳"; break;

        case "Lizard": emoji = "🦎"; break;
        case "Glowie":
        case "Random":
            emoji = emojify(disguises[getRandomInt(disguises.length)].name);
            break;

        case "RedFlag": emoji = "🚩"; break;

        case "Car": emoji = "🚗"; break;
        case "Truck": emoji = "🚚"; break;
        case "Taxi": emoji = "🚕"; break;
        case "Bus": emoji = "🚌"; break;
        case "Minibus": emoji = "🚐"; break;
        case "Ambulance": emoji = "🚑"; break;
        case "Fireengine": emoji = "🚒"; break;
        case "PoliceCar": emoji = "🚓"; break;
        case "Suv": emoji = "🚙"; break;
        case "Lorry": emoji = "🚛"; break;

        case "Alert": emoji = "⚠️"; break;

        case "Shower": emoji = "🚿"; break;
        case "Food": emoji = "🥫"; break;
        case "Love": emoji = ""; break;


        case "Baby": emoji = "👶"; break;
        case "DeadBaby": emoji = "👼"; break;
        case "Poo": emoji = "💩"; break;

        case "Cyber Revolutionary": emoji = "😱"; break;
        case "Cyber Edgey": emoji = "😒"; break;
        case "Cyber Blob": emoji = "🍴"; break;
        case "Cyber Skeleton": emoji = "💀"; break;

    }
    return emoji;

}