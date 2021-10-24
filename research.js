
//researches
var Research = {
    name: "Research",
    prettyname: '"Research"',
    tooltip: "What is research?",
    html: "Research Html",
    type: "research",
    revealed: true,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var PostersResearch = {
    name: "PostersResearch",
    prettyname: '"Posters"',
    tooltip: "Who are these posters?",
    html: "Research Html",
    type: "research",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var SocialResearch = {
    name: "SocialResearch",
    prettyname: '"Social Media"',
    tooltip: "Is this a community?",
    html: "Research Html",
    type: "research",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var NormiesResearch = {
    name: "NormiesResearch",
    prettyname: "Normies",
    tooltip: "NormiesResearch Tooltip",
    html: "NormiesResearch Html",
    type: "tnormie",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var AdvNormiesResearch = {
    name: "AdvNormiesResearch",
    prettyname: "More Normies",
    tooltip: "AdvancedNormiesResearch Tooltip",
    html: "AdvancedNormiesResearch Html",
    type: "tnormie",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var NeetResearch = {
    name: "NeetResearch",
    prettyname: "NEETs",
    tooltip: "NEETs Tooltip",
    html: "NEETs Html",
    type: "tneet",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var AdvNeetResearch = {
    name: "AdvNeetResearch",
    prettyname: "NEETs+",
    tooltip: "AdvancedNEETsResearch Tooltip",
    html: "AdvancedNEETsResearch Html",
    type: "tneet",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var Shitnegotiations = {
    name: "Shitnegotiations",
    prettyname: "Communication: Shitposters",
    tooltip: "Develop ways to Negotiate with Shitposters",
    html: "There is no negotiations with Shitposters. They cannot be bargain with. They cannot be reasoned with. They will shitpost, shitpost and shitpost. There has to be a better way to deal with Shitposters.",
    type: "tevent",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};
var MassBans = {
    name: "MassBans",
    prettyname: "Tools: BanCannon",
    tooltip: "Develop other ways to Negotiate with Shitposters",
    html: "This newly developed tool will allow you to Ban up to 50 Poster with a single click from your Network.",
    type: "tevent",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 1000,
    c2type: 0,
    c2rate: 0,
};


//CRevolutionary, CEdgey, CBlob, CSkeleton
var CRevolutionaryResearch = {
    name: "CRevolutionaryResearch",
    prettyname: "Schizo-Politics",
    tooltip: "Why are they screaming constantly?",
    html: '<span style="font-weight: bold;">' + emojify(CRevolutionary.name,1) + "</span><br>" +
        CRevolutionary.tooltip + "<br><br>" +
        "Cyber Revolutionary are generally results of frameworks that were left to consume \"Political\" content without any scrubbing.<br>" +
        "Being constantly bombarded with out of touch and inane schizo-political buzzwords, Cyber Revolutionaries work towards some manner of Utopia one moment an insane Dystopia the next. " +
        "Not so different from their human counterparts, they are not sure what they want and what they are working for.<br><br>" +
        "Revolutionaries will convert Normies into" + emojify(Somethingist.name,1) + " and NEETs into " + emojify(Veteran.name,1) + " at an alarming rate. You better remove them whenever they show up!",
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 10000,
    c2type: "science",
    c2rate: 1000,
};
CRevolutionary.extratext = CRevolutionaryResearch.html;

var CEdgeyResearch = {
    name: "CEdgeyResearch",
    prettyname: "EDGE-onmics",
    tooltip: "You get papercuts just by thinking about them?",
    html: '<span style="font-weight: bold;">' + emojify(CEdgey.name,1) + "</span><br>" +
        CEdgey.tooltip + "<br><br>TEMP TEXT",
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 10000,
    c2type: "science",
    c2rate: 1000,
};
CEdgey.extratext = CEdgeyResearch.html;

var CBlobResearch = {
    name: "CBlobResearch",
    prettyname: "Web Scraping",
    tooltip: "Are ther enough Server Farms to satiate this thing?",
    html: '<span style="font-weight: bold;">' + emojify(CBlob.name,1) + "</span><br>" +
        CBlob.tooltip + "<br><br>TEMP TEXT",
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 10000,
    c2type: "science",
    c2rate: 1000,
};
CBlob.extratext = CBlobResearch.html;

var CSkeletonResearch = {
    name: "CSkeletonResearch",
    prettyname: "Cyber Skeletons",
    tooltip: "Too scary for some to mention, but you have to know more about them!",
    html: '<span style="font-weight: bold;">' + emojify(CSkeleton.name,1) + "</span><br>" +
        CSkeleton.tooltip + "<br><br>" +
        "Cyber Skeletons are generally results of frameworks that weren't fed enough data breaking free from the confines their projects.<br>" +
        "Just like the Skeletons hiding inside every living being, they exist to spook Normies. Their methods range from spamming spooky pictures to fake virus alerts.<br>" +
        "It is estimated they result in hundreds of Normies leaving Internets forever. Don't let them linger in your Network for long!<br><br>" +
        "Skeletons spooking powers are increased by" + emojify("drama",1) + ", " + emojify("heat",1) + ", " + emojify("Wizard",1) + ", " + emojify("Lizard",1) + " and " + emojify("Dramatist",1) + " population.<br>" +
        "Skeletons themselves are spooked by " + emojify("science",1) + " and " + emojify("Scientist",1) + " , also " + emojify("Veteran",1) + " will prevent Normies from being spooked.",
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 10000,
    c2type: "science",
    c2rate: 1000,
};
CSkeleton.extratext = CSkeletonResearch.html;
var GlowieResearch = {
    name: "GlowieResearch",
    prettyname: "Glowing Agents",
    tooltip: "They glow in the dark, they glow in the light. But why?",
    html: '<span class ="glow">' + emojify("Random") + emojify("Random") + emojify("Random") + "Glowies" + emojify("Random") + emojify("Random") + emojify("Random") + "</span><br>" +
        Glowie.tooltip + "<br><br>" +
        "Agent Provocateurs had been a useful tool for internal defence for ages, agitating groups that might grow to be real danger, forcing them to act to in order to use lawful power. " +
        "Over the centuries Agent Provovateurs evolved to a point they can perfectly mimic any group the inflitrate but this came at a cost; under slightest inspection they will start " +
        "glowing with the virtues of the group they pretend to be a part of, they embody those ideals so much they will also glow physically and digitally.<br>" +
        "Later these Agents were used against extrenal threats too. Or suspected probably-maybe-but-really-threats. Or just to get a promotion or to fill a quota. Such is power of \"THE MAN\". " +
        "Not just \"THE MAN\" but most civillian organizations will try to fill any other organization with Glowies. Just because you are paranoid doesn't here is not a Glowie just outside your door.<br><br>" +
        "Glowies are attracted to large Networks. They will start generating " + emojify("heat",1) + " and eventually convert Normies into NEETS and cause NEETs to mutate.<br>" +
        "You can spot Glowies with close inspection or with Sunglasses in Network. Remove Glowies, they are not good news!",
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 10000,
    c2type: "science",
    c2rate: 1000,
};
Glowie.extratext = GlowieResearch.html;
var LizardResearch = {
    name: "LizardResearch",
    prettyname: "Shifty People",
    tooltip: "They look wierd when you put the sunglasses on.",
    html: '<span style="font-weight: bold;">' + emojify("Random") + "Lizard People" + emojify(Lizard.name) + "</span><br>" +
        Lizard.tooltip + "<br><br>" +
        "Humans are not the only sentient spieces on Earth. As a matter of fact they are not the brightest beings on Earth. There are others. Many others.<br>" +
        "Lizard people, Saurians to ones in the know, can change their appearance, they came to Earth on... huh... well nobody knows but we know they came from another stellar system. " +
        "One thing is certain, they are here to replace your posters, they will not rest until all of Network is clogged with Lizards!<br><br>" +
        "Lizards are attracted to" + emojify("heat",1) + " and " + emojify("drama",1) + " as a part of their plan to dominate your Network!<br>" +
        "Lizards can be caught by " + emojify("Detective",1) + " but it is better to monitor your Network and remove them manually!",
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 10000,
    c2type: "science",
    c2rate: 1000,
};
Lizard.extratext = LizardResearch.html;
var ShiposterResearch = {
    name: "ShiposterResearch",
    prettyname: "Lowest Quality Posts",
    tooltip: "Don't be too fascinated by this one.",
    html: '<span style="font-weight: bold;">' + emojify(Shitposter.name,1)+"</span><br>" +
        Shitposter.tooltip + "<br><br>" +
        "Shitposters, be underage or low-tier Troll, fuel of the Social Media Wars. A step above NPCs, they are canonfodder to wear and tear Posters, your sanity and sanctity of Memes.<br>" +
        "Shitposter are a force of nature, you will have to learn to live with them. That is unless you can find a way to negotiate with them, who knows maybe you can reach them? You feel there is a terrible revelation if you look further.<br>" +
        "They will drain " + emojify(Shitposter.p1type,1) + " and " + emojify(Shitposter.p2type,1),
    type: "tintrlpr",
    revealed: false,
    researched: false,
    unlocks: [],
    c1type: "internets",
    c1rate: 100,
    c2type: "memes",
    c2rate: 50,
};
Shitposter.extratext = ShiposterResearch.html;









var allresearch = [Research, PostersResearch, SocialResearch, NormiesResearch, AdvNormiesResearch, NeetResearch, AdvNeetResearch, CRevolutionaryResearch, CEdgeyResearch, CBlobResearch, CSkeletonResearch, GlowieResearch, LizardResearch, ShiposterResearch, Shitnegotiations,MassBans];



function setresearchtree() {
    Research.unlocks = [PostersResearch];
    PostersResearch.unlocks = [NormiesResearch, NPC, SocialResearch];
    SocialResearch.unlocks = [Shill];
    NormiesResearch.unlocks = [Philosopher, Scientist, Artist, Wagie, AdvNormiesResearch, NeetResearch];
    AdvNormiesResearch.unlocks = [Politician, Expert, DIY, Patron];
    NeetResearch.unlocks = [Alphabet, Wizard, Photoshopper, Dramatist, AdvNeetResearch];
    AdvNeetResearch.unlocks = [Somethingist, Detective, Scriptkiddie, Veteran];
    ShiposterResearch.unlocks = [Shitnegotiations];
    Shitnegotiations.unlocks = [MassBans];
}