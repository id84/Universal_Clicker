
function emojify(str,bool) {
    var emoji = "buggered";
    switch (str) {
        case "internets": emoji = "📶"; break;
        case "fame": emoji = "🎪"; break;
        case "money": emoji = "🪙"; break;
        case "heat": emoji = "🔥"; break;
        case "drama": emoji = "🎭"; break;
        case "memes": emoji = "🖼️"; break;
        case "science": emoji = "⚗️"; break;

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
        case "Shitposter":
        case "Poo": emoji = "💩"; break;

        case "Cyber Revolutionary": emoji = "😱"; break;
        case "Cyber Edgey": emoji = "😒"; break;
        case "Cyber Blob": emoji = "🍴"; break;
        case "Cyber Skeleton": emoji = "💀"; break;

        case "Russia" : emoji = "🇷🇺"; break;
        case "Vatican" : emoji = "🇻🇦"; break;
        case "Pirates":
        case "Pirateland" : emoji = "🏴‍☠️"; break;
        case "Albania" : emoji = "🇦🇱"; break;
        case "Australia" : emoji = "🇦🇺"; break;
        case "China" : emoji = "🇨🇳"; break;
        case "France" : emoji = "🇫🇷"; break;
        
        case "Mouse":
        case "Click": emoji = "🖱️"; break;
    }
    if(bool){
    str = str[0].toUpperCase() + str.substring(1);
    emoji = emoji + " " + str;}
    return emoji;

}

var countryemojis = ["Russia", "Vatican", "Pirateland", "Albania", "Australia", "China", "France"];

var chans = ["Dumbler Blog", "Twatter", "GutHub Notices", "EmojiBook Comments", "Basket Weaving Forum", "HackerChan Thread", "Leddit Thread", "TeleTube Comments", "Mosaic Makers Forum", "CoffePress Blog", "WahooCities Blog", "Dissociated Press", "Local Newspaper", "Noosphere", "Walls of a Pompeii Tavern"]