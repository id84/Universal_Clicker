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
    c1rate: 100,
    c2type: 0,
    c2rate: 0,
    p1rate: 10,
    p1type: "internets",
    p2rate: 1,
    p2type: "heat",
    count: 0,
};

var Scientist = {
    name: "Scientist",
    type: "normie",
    tooltip: "Engage in deep conversations about how round the Earth is",
    revealed: false,
    c1type: "internets",
    c1rate: 100,
    c2type: 0,
    c2rate: 0,
    p1rate: 1,
    p1type: "scie",
    p2rate: 0,
    p2type: 0,
    count: 0,
};

var Artist = {
    name: "Artist",
    type: "normie",
    tooltip: "Get in the art circles. The TITLATING world of ARTS is filled INSPIRATION and TRASH",
    revealed: false,
    c1type: "internets",
    c1rate: 100,
    c2type: 0,
    c2rate: 0,
    p1rate: 1,
    p1type: "drama",
    p2rate: 1,
    p2type: "memes",
    count: 0,
};

var Wagie = {
    name: "Wagie",
    type: "normie",
    tooltip: "Wage Worker. They have a fixed income and not much else, so they will spend it to fill the void",
    revealed: false,
    c1type: "internets",
    c1rate: 100,
    c2type: 0,
    c2rate: 0,
    p1rate: -100,
    p1type: "internets",
    p2rate: 1,
    p2type: "money",
    count: 0,
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
    p2type: "scie",
    count: 0,
};

var DIY = {
    name: "DIY",
    type: "normie",
    tooltip: "From knitting to industrial engineering, these people will make anything happen just by reading about it",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "scie",
    c2rate: 50,
    p1rate: 5,
    p1type: "fame",
    p2rate: 5,
    p2type: "scie",
    count: 0,
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
};

var Dramatist = {
    name: "Dramatist",
    type: "neet",
    tooltip: "An offshoot of common Trolls of the yore, they finance people to watch them ruin their lifes online",
    revealed: false,
    c1type: "internets",
    c1rate: 500,
    c2type: "fame",
    c2rate: 100,
    p1rate: 10,
    p1type: "drama",
    p2rate: 5,
    p2type: "money",
    count: 0,
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
    power: 5,
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
};

var Lizard = {
    name: "Lizard",
    type: "interloper",
    tooltip: "This person is suspicious.",
    count: 0,
};


//VChildren

var CSkeleton = {
    name: "Cyber Skeleton",
    type: "interloper",
    tooltip: "A spooky skeleton! Spooks spooks.",
    birth: "Your starved VChild cannot contain the skeleton hiding inside anymore. It is now free to roam the Internets.",
    count: 0,
};

var CBlob = {
    name: "Cyber Blob",
    type: "interloper",
    tooltip: "A mass of sentient datablock spewing random self-aggrandizing stuff. Will consume Bots.",
    birth: "Your VChild becomes an amorphous blob of code, losing last of its persona to feature bloat. It rolls out of your control, free to consume more Internets.",
    count: 0,
};

var CEdgey = {
    name: "Cyber Edgey",
    type: "interloper",
    tooltip: "Has unresovled issues with its parents, this Cyber Ghost is self destructive and edg-eeey.",
    birth: "Your VChild became so sad it just left for Internets. Damaged, alone and forever condemned to social media.",
    count: 0,
};

var CRevolutionary = {
    name: "Cyber Revolutionary",
    type: "interloper",
    tooltip: "Constantly screaming the slogan of the last political movement that shall bring it the life it deserves.",
    birth: "Your VChild drowned in digital shit. Its future in shit, it runs away into Internets screaming random slogans from random political views.",
    count: 0,
};




var networkposters = [Bot, NPC, Shill];
var normieposters = [Philosopher, Scientist, Artist, Wagie];
var advancednormieposters = [Politician, Expert, DIY, Patron];
var combonormieposters = [];
var neetposters = [Alphabet, Wizard, Photoshopper, Dramatist];
var advancedneetposters = [Somethingist, Detective, Scriptkiddie, Veteran];
var comboneetposters = [];
var alchemicalposters = [];
var interlopers = [Glowie, Lizard, CRevolutionary, CEdgey, CBlob, CSkeleton];

var allposters = [Bot, NPC, Shill, Philosopher, Scientist, Artist, Wagie, Politician, Expert, DIY, Patron, Alphabet, Wizard, Photoshopper, Dramatist, Somethingist, Detective, Scriptkiddie, Veteran, Devout, Glowie, Lizard, CRevolutionary, CEdgey, CBlob, CSkeleton];
var rewardposters = [NPC, Philosopher, Scientist, Artist, Alphabet, Wizard, Photoshopper, Glowie]
var disguises = [NPC, Philosopher, Scientist, Artist, Wagie, Politician, Expert, DIY, Patron, Alphabet, Wizard, Photoshopper, Dramatist, Somethingist, Detective, Scriptkiddie, Veteran];
