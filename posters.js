var Bot = {
    name: "Bot",
    type: "network",
    tooltip: "Utilize bots from elite hackers to automatically win arguments. Will get mass banned frequently.",
    revealed: true,
    c1type: "internets",
    c1rate: 20,
    c2type: 0,
    c2rate: 0,
    p1rate: 1,
    p1type: "internets",
    p2rate: 0,
    p2type: 0,
    count: 0,
    power1: 25,
    power1l : 25,
    power1txt: "maximum number of Bots that won't trigger Bans",
    power2: 25,
    power2l : 1,
    power2txt: "% chance of Bots avoid triggering Bans",
    level: 1,
    levelcost: 2000,
};

var NPC = {
    name: "NPC",
    type: "network",
    tooltip: "NPCs are real people repeating what you say. Something is wrong with them. Very wrong. They are somewhat resistant to mass bans.",
    revealed: false,
    c1type: "fame",
    c1rate: 10,
    c2type: 0,
    c2rate: 0,
    p1rate: 20,
    p1type: "internets",
    p2rate: 0,
    p2type: 0,
    count: 0,
    power1: 500,
    power1l: 50,
    power1txt: "maximum number of NPCs that won't trigger Bans",
    power2: 50,
    power2l: 1,
    power2txt: "% chance of NPCs avoid triggering Bans",
    level: 1,
    levelcost: 2000,
};

var Shill = {
    name: "Shill",
    type: "network",
    tooltip: "Shills will softly propagate your message for a single shilling. Shills will abandon when not paid. They are resistant to mass bans.",
    revealed: false,
    c1type: "money",
    c1rate: 5,
    c2type: 0,
    c2rate: 0,
    p1rate: 75,
    p1type: "internets",
    p2rate: -1,
    p2type: "money",
    count: 0,
};

//Normies
var Philosopher = {
    name: "Philosopher",
    type: "normie",
    tooltip: "Internet philosophers will think of most daring things nobody else ever did yet",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: 0,
    c2rate: 0,
    p1rate: 10,
    p1type: "internets",
    p2rate: 1,
    p2type: "heat",
    count: 0,
    extratext: false,
};

var Scientist = {
    name: "Scientist",
    type: "normie",
    tooltip: "Engage in deep conversations about how round the Earth is",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: 0,
    c2rate: 0,
    p1rate: 1,
    p1type: "science",
    p2rate: 0,
    p2type: 0,
    count: 0,
    power1: 5,
    extratext: "Scientist are immune to Skeleton spooking and will reduce their spooking power.",
};

var Artist = {
    name: "Artist",
    type: "normie",
    tooltip: "Get in the art circles. The TITLATING world of ARTS is filled INSPIRATION and TRASH",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: 0,
    c2rate: 0,
    p1rate: 1,
    p1type: "drama",
    p2rate: 1,
    p2type: "memes",
    count: 0,
    extratext: "Artists may devolve and become Critics.",
};

var Wagie = {
    name: "Wagie",
    type: "normie",
    tooltip: "Wage Worker. They have a fixed income and not much else, so they will spend it to fill the void",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: 0,
    c2rate: 0,
    p1rate: -100,
    p1type: "internets",
    p2rate: 1,
    p2type: "money",
    count: 0,
    extratext: "Wagies may get promoted into bigger spenders, like Simps.",
};

//Advanced Normies
var Politician = {
    name: "Politician",
    type: "normie",
    tooltip: "Internet Politicians, especially ones who still live sheltered lifes with their middle class families, know it all about the plight of common folks",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "drama",
    c2rate: 100,
    p1rate: 5,
    p1type: "fame",
    p2rate: 5,
    p2type: "heat",
    count: 0,
    extratext: "Politicians may cause events or used as currency during events.",
};

var Expert = {
    name: "Expert",
    type: "normie",
    tooltip: "Experts have expertise in expertship. They experience life as it is but more expertly",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "drama",
    c2rate: 100,
    p1rate: 5,
    p1type: "drama",
    p2rate: 5,
    p2type: "science",
    count: 0,
    extratext: false,
};

var DIY = {
    name: "DIY",
    type: "normie",
    tooltip: "From knitting to industrial engineering, these people will make anything happen just by reading about it",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "science",
    c2rate: 50,
    p1rate: 5,
    p1type: "fame",
    p2rate: 5,
    p2type: "science",
    count: 0,
    extratext: false,
};

var Patron = {
    name: "Patron",
    type: "normie",
    tooltip: "Some people have a lot of disposable income. So they help unfortunate by commissioning questionable content",
    revealed: false,
    c1type: "memes",
    c1rate: 500,
    c2type: "fame",
    c2rate: 500,
    p1rate: 5,
    p1type: "heat",
    p2rate: 5,
    p2type: "money",
    count: 0,
    extratext: false,
};


//Neets
var Alphabet = {
    name: "Alphabet",
    type: "neet",
    tooltip: "Alphabet people define their personality around a single character from alphabet from A to Ω",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: 0,
    c2rate: 0,
    p1rate: 25,
    p1type: "internets",
    p2rate: 1,
    p2type: "drama",
    count: 0,
    extratext: "Alphabets may cause events or used as currency during events. They will also evolve into many different Posters.",
};

var Wizard = {
    name: "Wizard",
    type: "neet",
    tooltip: "Unsullied by the sex, Wizards wield mystical powers of no-sex. Their path is long and leads many places",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: "drama",
    c2rate: 50,
    p1rate: 5,
    p1type: "heat",
    p2rate: 250,
    p2type: "internets",
    count: 0,
    extratext: "Wizards may evolve into better or worse Posters, cause event and increase Skeletons spooking powers",
};

var Photoshopper = {
    name: "Photoshopper",
    type: "neet",
    tooltip: "Cat pictures, motivational posters that depress, lame slogans on stock photos... and many more unfortunately",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: "memes",
    c2rate: 50,
    p1rate: 5,
    p1type: "heat",
    p2rate: 5,
    p2type: "fame",
    count: 0,
    extratext: false,
};

var Dramatist = {
    name: "Dramatist",
    type: "neet",
    tooltip: "An offshoot of common Trolls of the yore, they finance people to watch them ruin their lifes online",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: "fame",
    c2rate: 100,
    p1rate: 10,
    p1type: "drama",
    p2rate: 5,
    p2type: "money",
    count: 0,
    extratext: "Dramatists increase Skeletons Spooking powers. Will contribute Posters to evolve into other kinds."
};



//Advanced Neets
var Somethingist = {
    name: "Somethingist",
    type: "neet",
    tooltip: "Somethingists are extremely into something, they spent their every awake moment thinking about the opposite of that thing",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "drama",
    c2rate: 100,
    p1rate: 500,
    p1type: "internets",
    p2rate: 10,
    p2type: "heat",
    count: 0,
    extratext: "Somethingists may cause events or used as currency during events.",
};

var Detective = {
    name: "Detective",
    type: "neet",
    tooltip: "By research everything there is to find out, by Googling or using DuckDuckGo in extremely hard cases, these detectives will dissipate Heat",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "fame",
    c2rate: 100,
    p1rate: -1,
    p1type: "heat",
    p2rate: -500,
    p2type: "internets",
    count: 0,
    power1: 5,
    extratext: "Detectives may evolve into better kinds. Detectives are immune to Lizard attacks and may spot Lizards as they are replacing Posters and scare them away. But they won't be able stop them from making Posters disappear."
};

var Scriptkiddie = {
    name: "Scriptkiddie",
    type: "neet",
    tooltip: "First steps into Hackery, don't make fun of them as they learn by experience. Leads to many paths.",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "fame",
    c2rate: 100,
    p1rate: 10,
    p1type: "heat",
    p2rate: 5,
    p2type: "money",
    count: 0,
    extratext: false,
};

var Veteran = {
    name: "Veteran",
    type: "neet",
    tooltip: "Veterans of thousand operations these people are not easily amused, but full of (shit) advice",
    revealed: false,
    c1type: "internets",
    c1rate: 1000,
    c2type: "fame",
    c2rate: 500,
    p1rate: 500,
    p1type: "internets",
    p2rate: -5,
    p2type: "memes",
    count: 0,
    power1: 5,
    extratext: "Veterans will decrease the number of Normies Cyber Skeletons can scare away.",
};


var Devout = {
    name: "Devout",
    type: "normie",
    tooltip: "Devout people follow a set of instructions very seriously like Judaism, Atheism or My Little Pony.",
    revealed: false,
    c1type: "internets",
    c1rate: 250,
    c2type: "fame",
    c2rate: 5,
    p1rate: 10,
    p1type: "heat",
    p2rate: 150,
    p2type: "internets",
    count: 0,
};




//Interlopers
var Glowie = {
    name: "Glowie",
    type: "interloper",
    tooltip: "This person is glowing in dark!",
    count: 0,
    extratext: "",
};

var Lizard = {
    name: "Lizard",
    type: "interloper",
    tooltip: "This person is suspicious.",
    count: 0,
    extratext: "",
};

var Shitposter = {
    name: "Shitposter",
    type: "interloper",
    tooltip: "You can see the quality of posts from here.",
    revealed: false,
    p1rate: -10,
    p1type: "memes",
    p2rate: -50,
    p2type: "internets",
    count: 0,
    extratext: "",
};


//VChildren

var CSkeleton = {
    name: "Cyber Skeleton",
    type: "interloper",
    tooltip: "A spooky skeleton! Spooks spooks.",
    birth: "Your starved VChild cannot contain the skeleton hiding inside anymore. It is now free to roam the Internets.",
    count: 0,
    extratext: "",
};

var CBlob = {
    name: "Cyber Blob",
    type: "interloper",
    tooltip: "A mass of sentient datablock spewing random self-aggrandizing stuff. Will consume Bots.",
    birth: "Your VChild becomes an amorphous blob of code, losing last of its persona to feature bloat. It rolls out of your control, free to consume more Internets.",
    count: 0,
    extratext: "",
};

var CEdgey = {
    name: "Cyber Edgey",
    type: "interloper",
    tooltip: "Has unresovled issues with its parents, this Cyber Ghost is self destructive and edg-eeey.",
    birth: "Your VChild became so sad it just left for Internets. Damaged, alone and forever condemned to social media.",
    count: 0,
    extratext: "",
};

var CRevolutionary = {
    name: "Cyber Revolutionary",
    type: "interloper",
    tooltip: "Constantly screaming the slogan of the last political movement that shall bring it the life it deserves.",
    birth: "Your VChild drowned in digital shit. Its future in shit, it runs away into Internets screaming random slogans from random political views.",
    count: 0,
    extratext: "",
};




var networkposters = [Bot, NPC, Shill];

var normieposters = [Philosopher, Scientist, Artist, Wagie];
var advancednormieposters = [Politician, Expert, DIY, Patron];

var neetposters = [Alphabet, Wizard, Photoshopper, Dramatist];
var advancedneetposters = [Somethingist, Detective, Scriptkiddie, Veteran];

var interlopers = [Glowie, Lizard, Shitposter, CRevolutionary, CEdgey, CBlob, CSkeleton];

var allnormieposters = normieposters.concat(advancednormieposters);
var allneetposters = neetposters.concat(advancedneetposters);
var allregularposters = allnormieposters.concat(allneetposters);

var moneymakers = [Wagie, Patron, Dramatist, Scriptkiddie]


var allposters = [Bot, NPC, Shill, Philosopher, Scientist, Artist, Wagie, Politician, Expert, DIY, Patron, Alphabet, Wizard, Photoshopper, Dramatist, Somethingist, Detective, Scriptkiddie, Veteran, Devout, Glowie, Lizard, Shitposter, CRevolutionary, CEdgey, CBlob, CSkeleton];
var upgradebleposters = [Bot, NPC];


var rewardposters = [NPC, Philosopher, Scientist, Artist, Alphabet, Wizard, Photoshopper, Glowie]
var disguises = [NPC, Philosopher, Scientist, Artist, Wagie, Politician, Expert, DIY, Patron, Alphabet, Wizard, Photoshopper, Dramatist, Somethingist, Detective, Scriptkiddie, Veteran];
