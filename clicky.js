//Variables
/*jshint esversion: 6 */
var totaltime = 0;
var internets = 10000;
var heat = 0;
var fame = 0;
var money = 0;
var drama = 0;
var memes = 0;
var scie = 0;

var iadd = 0;
var fadd = 0;
var madd = 0;
var hadd = 0;
var dadd = 0;
var meadd = 0;
var sadd = 0;

var glowies = 0;

var townarr = [];





var Bot = {
    name : 	"Bot",
	type : "network",
	tooltip :	"Utilize bots from elite hackers to automatically win arguments. Will get mass banned frequently.",
	revealed : true,
	c1type : 	"internets",
	c1rate : 	10,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	1,
	p1type : 	"internets",
	p2rate :	0,
	p2type : 	0,
	count : 0,
  };

var NPC = {
    name : 	"NPC",
	type : "network",
	tooltip :	"NPCs are real people repeating what you say. Something is wrong with them. Very wrong. They are somewhat resistant to mass bans.",
	revealed : false,
	c1type : 	"fame",
	c1rate : 	10,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	20,
	p1type : 	"internets",
	p2rate :	0,
	p2type : 	0,
	count : 0,
  };

var Shill = {
    name : 	"Shill",
	type : "network",
	tooltip :	"Shills will softly propagate your message for a single shilling. Shills will abandon when not paid. They are resistant to mass bans.",
	revealed : false,
	c1type : 	"money",
	c1rate : 	5,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	75,
	p1type : 	"internets",
	p2rate :	-1,
	p2type : 	"money",
	count : 0,
  };

//Normies
var Philosopher = {
    name : 	"Philosopher",
	type : "normie",
	tooltip :	"Internet philosophers will think of most daring things nobody else ever did yet",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	10,
	p1type : 	"internets",
	p2rate :	1,
	p2type : 	"heat",
	count : 0,
  };

var Scientist = {
    name : 	"Scientist",
	type : "normie",
	tooltip :	"Engage in deep conversations about how round the Earth is",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	1,
	p1type : 	"fame",
	p2rate :	0,
	p2type : 	0,
	count : 0,
  };

var Artist = {
    name : 	"Artist",
	type : "normie",
	tooltip :	"Get in the art circles. The TITLATING world of ARTS is filled INSPIRATION and TRASH",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	-10,
	p1type : 	"internets",
	p2rate :	5,
	p2type : 	"fame",
	count : 0,
  };

var Wagie = {
    name : 	"Wagie",
	type : "normie",
	tooltip :	"Wage Worker. They have a fixed income and not much else, so they will spend it to fill the void",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	"fame",
	c2rate : 	50,
	p1rate : 	-100,
	p1type : 	"internets",
	p2rate :	1,
	p2type : 	"money",
	count : 0,
  };

//Advanced Normies
var Politician = {
    name : 	"Politician",
	type : "normie",
	tooltip :	"Internet Politicians, especially ones who still live sheltered lifes with their middle class families, know it all about the plight of common folks",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	150,
	c2type : 	"fame",
	c2rate : 	25,
	p1rate : 	25,
	p1type : 	"internets",
	p2rate :	5,
	p2type : 	"heat",
	count : 0,
  };

var Expert = {
    name : 	"Expert",
	type : "normie",
	tooltip :	"Experts have expertise in expertship. They experience life as it is but more expertly",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	500,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	5,
	p1type : 	"fame",
	p2rate :	-50,
	p2type : 	"internets",
	count : 0,
  };

var DIY = {
    name : 	"DIY",
	type : "normie",
	tooltip : "From knitting to industrial engineering, these people will make anything happen just by reading about it",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	150,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	10,
	p1type : 	"internets",
	p2rate :	5,
	p2type : 	"fame",
	count : 0,
  };

var Patron = {
    name : 	"Patron",
	type : "normie",
	tooltip :	"Some people have a lot of disposable income. So they help unfortunate by commissioning questionable content",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	250,
	c2type : 	"fame",
	c2rate : 	100,
	p1rate : 	-100,
	p1type : 	"internets",
	p2rate :	2,
	p2type : 	"money",
	count : 0,
  };


//Neets
var Alphabet = {
    name : 	"Alphabet",
	type : "neet",
	tooltip :	"Alphabet people define their personality around a single character from alphabet from A to Ω",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	"fame",
	c2rate : 	50,
	p1rate : 	10,
	p1type : 	"internets",
	p2rate :	1,
	p2type : 	"heat",
	count : 0,
  };

var Wizard = {
    name : 	"Wizard",
	type : "neet",
	tooltip :	"Unsullied by the sex, Wizards wield mystical powers of no-sex. Their path is long and leads many places",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	"fame",
	c2rate : 	50,
	p1rate : 	-5,
	p1type : 	"fame",
	p2rate :	100,
	p2type : 	"internets",
	count : 0,
  };

var Photoshopper = {
    name : 	"Photoshopper",
	type : "neet",
	tooltip :	"Cat pictures, motivational posters that depress, lame slogans on stock photos... and many more unfortunately",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	"fame",
	c2rate : 	5,
	p1rate : 	1,
	p1type : 	"heat",
	p2rate :	5,
	p2type : 	"fame",
	count : 0,
  };

var Dramatist = {
    name : 	"Dramatist",
	type : "neet",
	tooltip :	"An offshoot of common Trolls of the yore, they finance people to watch them ruin their lifes online.",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	"fame",
	c2rate : 	10,
	p1rate : 	5,
	p1type : 	"heat",
	p2rate :	2,
	p2type : 	"money",
	count : 0,
  };



//Advanced Neets
var Somethingist = {
    name : 	"Somethingist",
	type : "neet",
	tooltip :	"Somethingists are extremely into something, but they spent their every awake moment on the opposite of that thing",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	100,
	c2type : 	"fame",
	c2rate : 	10,
	p1rate : 	50,
	p1type : 	"internets",
	p2rate :	15,
	p2type : 	"heat",
	count : 0,
  };

var Detective = {
    name : 	"Detective",
	type : "neet",
	tooltip :	"by research everything there is to find out, by Googling or using DuckDuckGo in extremely hard cases, these detectives will dissipate Heat",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	200,
	c2type : 	"fame",
	c2rate : 	50,
	p1rate : 	-1,
	p1type : 	"heat",
	p2rate :	-50,
	p2type : 	"internets",
	count : 0,
  };

var Scriptkiddie = {
    name : 	"Scriptkiddie",
	type : "neet",
	tooltip : "First steps into Hackery, don't make fun of them as they learn by experience. Leads to many paths.",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	200,
	c2type : 	"fame",
	c2rate : 	100,
	p1rate : 	50,
	p1type : 	"internets",
	p2rate :	2,
	p2type : 	"money",
	count : 0,
  };


//Ingredient Posters
var Veteran = {
    name : 	"Veteran",
	type : "normie",
	tooltip :	"Veterans of thousand operations these people are not easily amused, but full of (shit) advice",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	250,
	c2type : 	0,
	c2rate : 	0,
	p1rate : 	-1,
	p1type : 	"fame",
	p2rate :	100,
	p2type : 	"internets",
	count : 0,
  };

var Devout = {
    name : 	"Devout",
	type : "normie",
	tooltip :	"Devout people follow a set of instructions very seriously like Judaism, Atheism or My Little Pony.",
	revealed : false,
	c1type : 	"internets",
	c1rate : 	250,
	c2type : 	"fame",
	c2rate : 	5,
	p1rate : 	10,
	p1type : 	"heat",
	p2rate :	150,
	p2type : 	"internets",
	count : 0,
  };

//Interlopers
var Glowie = {
    name : 	"Glowie",
	type : "interloper",
	tooltip :	"This person is glowing in dark!",
	count : 0,
  };

var Lizard = {
    name : 	"Lizard",
	type : "interloper",
	tooltip :	"This person is suspicious.",
	count : 0,
  };


//VChildren

var CSkeleton = {
    name : 	"Cyber Skeleton",
	type : "interloper",
	tooltip :	"A spooky skeleton! Spooks spooks.",
	birth: "Your starved VChild cannot contain the skeleton hiding inside anymore. It is now free to roam the Internets.",
	count : 0,
  };

var CBlob = {
    name : 	"Cyber Blob",
	type : "interloper",
	tooltip :	"A mass of sentient datablock spewing random self-aggrandizing stuff. Will consume Bots.",
	birth : "Your VChild becomes an amorphous blob of code, losing last of its persona to feature bloat. It rolls out of your control, free to consume more Internets.",
	count : 0,
  };
  
  var CEdgey = {
    name : 	"Cyber Edgey",
	type : "interloper",
	tooltip :	"Has unresovled issues with its parents, this Cyber Ghost is self destructive and edg-eeey.",
	birth : "Your VChild became so sad it just left for Internets. Damaged, alone and forever condemned to social media.",
	count : 0,
  };
  
    var CRevolutionary = {
    name : 	"Cyber Revolutionary",
	type : "interloper",
	tooltip :	"Constantly screaming the slogan of the last political movement that shall bring it the life it deserves.",
	birth : "Your VChild drowned in digital shit. Its future in shit, it runs away into Internets screaming random slogans from random political views.",
	count : 0,
  };




var networkposters = [Bot, NPC, Shill];
var normieposters = [Philosopher, Scientist, Artist, Wagie];
var advancednormieposters = [Politician ,Expert, DIY, Patron];
var combonormieposters = [];
var neetposters = [Alphabet, Wizard, Photoshopper, Dramatist];
var advancedneetposters = [Somethingist, Detective, Scriptkiddie, Veteran];
var comboneetposters = [];
var alchemicalposters = [];
var interlopers = [];
var mishappenVChildren = [CRevolutionary, CEdgey, CBlob, CSkeleton];

var allposters = [Bot, NPC, Shill, Philosopher, Scientist, Artist, Wagie, Politician ,Expert, DIY, Patron, Alphabet, Wizard, Photoshopper, Dramatist, Somethingist, Detective, Scriptkiddie, Veteran, Devout, Glowie, Lizard, CRevolutionary, CEdgey, CBlob, CSkeleton];
var disguises = [NPC, Philosopher, Scientist, Artist, Wagie, Politician ,Expert, DIY, Patron, Alphabet, Wizard, Photoshopper, Dramatist, Somethingist, Detective, Scriptkiddie, Veteran, Devout];

//researches
var Research = {
    name : 	"Research",
	prettyname: '"Research"',
	tooltip :	"What is research?" ,
	html : "Research Html",
	type : "research",
	revealed : true,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };

var PostersResearch = {
    name : 	"PostersResearch",
	prettyname: '"Posters"',
	tooltip :	"Who are these posters?",
	html : "Research Html",
	type : "research",
	revealed : false,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };

var SocialResearch = {
    name : 	"SocialResearch",
	prettyname: '"Social Media"',
	tooltip :	"Is this a community?",
	html : "Research Html",
	type : "research",
	revealed : false,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };


var NormiesResearch = {
    name : 	"NormiesResearch",
	prettyname: "Normies",
	tooltip :	"NormiesResearch Tooltip",
	html : "NormiesResearch Html",
	type : "tnormie",
	revealed : false,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };
  
var AdvNormiesResearch = {
    name : 	"AdvNormiesResearch",
	prettyname: "More Normies",
	tooltip :	"AdvancedNormiesResearch Tooltip",
	html : "AdvancedNormiesResearch Html",
	type : "tnormie",
	revealed : false,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };

var NeetResearch = {
    name : 	"NeetResearch",
	prettyname: "NEETs",
	tooltip :	"NEETs Tooltip",
	html : "NEETs Html",
	type : "tneet",
	revealed : false,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };
  
var AdvNeetResearch = {
    name : 	"AdvNeetResearch",
	prettyname: "NEETs+",
	tooltip :	"AdvancedNEETsResearch Tooltip",
	html : "AdvancedNEETsResearch Html",
	type : "tneet",
	revealed : false,
	researched : false,
	unlocks : [],
	c1type : 	"internets",
	c1rate : 	1000,
	c2type : 	0,
	c2rate : 	0,
  };


var allresearch = [Research,PostersResearch,SocialResearch,NormiesResearch,AdvNormiesResearch,NeetResearch,AdvNeetResearch];


function setresearchtree(){
	Research.unlocks = [PostersResearch];
	PostersResearch.unlocks = [NormiesResearch, NeetResearch, NPC,SocialResearch];
	SocialResearch.unlocks = [Shill];
	NormiesResearch.unlocks = [Philosopher, Scientist, Artist, Wagie, AdvNormiesResearch];
	AdvNormiesResearch.unlocks = [Politician ,Expert, DIY, Patron];
	NeetResearch.unlocks = [Alphabet, Wizard, Photoshopper, Dramatist, AdvNeetResearch];
	AdvNeetResearch.unlocks = [];
}



//Bad naming convention ahead, not gonna merge them.
function tooltiprange(range){
	var rv = 0;
	switch (range){
		case "network":
			rv = document.getElementById("networkrange").value;
			document.getElementById("hovertext").innerHTML = "Network Buy Multiplier <strong>x" + rv + "</strong>";
		break;
		case "normie":
			rv = document.getElementById("normierange").value;
			document.getElementById("hovertext").innerHTML = "Normie Buy Multiplier <strong>x" + rv + "</strong>";
		break;
		case "neet":
			rv = document.getElementById("neetrange").value;
			document.getElementById("hovertext").innerHTML = "Neet Buy Multiplier <strong>x" + rv + "</strong>";
		break;
		case "townrange":
			rv = document.getElementById("townrange").value;
			document.getElementById("hovertext").innerHTML = "Zoom into your Network";
		break;
		case "mfrange":
			var rv1 = document.getElementById("mfxrange").value;
			var rv2 = document.getElementById("mfyrange").value;
			var rv3 = document.getElementById("mfmrange").value;
			document.getElementById("hovertext").innerHTML = "Minefield will be " + rv1 +" rows and " + rv2 + " columns and have " + rv3 + "% mine. (Currently has no win/lose state)";
		break;
	}	
	
}

function tooltips(i){
	var s = "";
	var r = 1;
	switch (i.type){
		case "network":
			r = document.getElementById("networkrange").value;
		break;
		case "neet":
			r = document.getElementById("neetrange").value;
		break;
		case "normie":
			r = document.getElementById("normierange").value;
		break;
	}
	if (i.researched == null){
	s = "Add <strong>" + i.name + " " + emojify(i.name) + " x" + r + "</strong> for <strong>" + (r * i.c1rate).toLocaleString('en-GB') + " " + emojify(i.c1type);
	if (i.c2rate != 0){
		s += ", " + (r * i.c2rate).toLocaleString('en-GB') + " " + emojify(i.c2type);
		
	}
	s += "</strong> Generates: <strong>" + (r * i.p1rate).toLocaleString('en-GB') + emojify(i.p1type) + "/s</strong>";
	if (i.p2type != 0){
		s += ", <strong>" + (r * i.p2rate).toLocaleString('en-GB') + emojify(i.p2type) + "/s</strong>";
	}
	} else {
		if (!i.researched){
			s += (i.c1rate).toLocaleString('en-GB') + " " + emojify(i.c1type);
			if (i.c2rate != 0){
				s += ", "+ (i.c2rate).toLocaleString('en-GB') + " " + emojify(i.c2type);
			}
		}
	}
	s += "<br><br>";
	document.getElementById("hovertext").innerHTML = s + i.tooltip;
}

function tooltipstabs(i){
	var s = "";

	switch (i) {
		case "BuyTab" : s = "Add more posters to your Network";	break;
		case "ResearchTab" : s = "Research stuff by Googling them"; break;
		case "UpgradesTab" : s = "Upgrades! Buy yourself some Promotions"; break;
		case "TownTab" : s = "View your Network of posters<br>" + emojify("Bot") + "," + emojify("NPC") + "," + emojify("Shill") + " are excluded."; break;
		case "MinefieldTab" : s = "Carefully participate in society. For some reason."; break;
		case "VParentTab" : s = "Virtual Parentage. Make sure your digital lineage is not dead."; break;
		case "Teststuff" : s = "Solo amateur developer pls understand"; break;
	}
	document.getElementById("hovertext").innerHTML = s;
}

function tooltip(a){
	switch (a) {
		case "sunglass" :
		document.getElementById("hovertext").innerHTML = "Makes Glowies and Lizards easier to see.";
		break;
		case "Glowie":
		document.getElementById("hovertext").innerHTML = "<span style=\"\"class=\"glow\">This person is glowing!</span>";
		break;
		case "Lizard":
			var cb = document.getElementById("snglschbx");
			if (cb.checked){
				document.getElementById("hovertext").innerHTML = "<span style=\"color:green;\">This is a Lizard!</span>";
			} else {
				document.getElementById("hovertext").innerHTML = Lizard.tooltip;
			}
		break;
		case "vpneeddna" :
			document.getElementById("hovertext").innerHTML = "Get a new VChild with random DNA!";
		break;

	
		case "vpneedfeed" :
			document.getElementById("hovertext").innerHTML = "Feed your VChild for 30%. Over feeding leads to obesity.";
		break;
		
		case "vpneedclean" :
			document.getElementById("hovertext").innerHTML = "Clean your VChild, the learning AI, if you feed it shit, it will produce shit.";
		break;
		
		case "vpneedwrestle" :
			document.getElementById("hovertext").innerHTML = "Wrestle with your VChild. It will improve Discipline and fix some Obesity.";
		break;
		case "vpneedgame" :
			document.getElementById("hovertext").innerHTML = "Play games with your VChild, improve its already instantaneous reflexes and infinitely fast decision making.";
		break;
		case "vpneeddiscip" :
			document.getElementById("hovertext").innerHTML = "Teach boring things like responsbility and integrity to your VChild.";
		break;
		case "vpneedpract" :
			document.getElementById("hovertext").innerHTML = "Force your VChild to practice, perfecting its craft. Your VChild should practice 40 hours a day.";
		break;
		case "vpneedint" :
			document.getElementById("hovertext").innerHTML = "Allow your VChild to connect Internets. Each time will result in catastrophic devastation or amazing improvement.";
		break;
		case "vpneededucate" :
			document.getElementById("hovertext").innerHTML = "Teach your VChild a book. This button does nothing.";
		break;
		
	}
}





function emojify(str){
	var emoji ="buggered";
	switch (str){
		case "internets": emoji = "📶"; break;
		case "fame": emoji = "🎪"; break;
		case "money": emoji = "🪙"; break;
		case "heat" : emoji = "🔥"; break;
		case "drama": emoji = "🎭"; break;
		case "memes" : emoji = "🖼️"; break;
		case "scie" : emoji = "⚗️"; break;
		
		case "Bot": emoji = "🤖"; break;
		case "NPC": emoji = "👤"; break;
		case "Shill": emoji = "📣"; break;
		
		case "Philosopher" : emoji = "👨🏻‍🎓"; break;
		case "Scientist": emoji = "👩🏻‍🔬"; break;
		case "Artist": emoji = "👩🏻‍🎨"; break;
		case "Wagie": emoji = "👩‍💼"; break;
		
		case "Politician" : emoji = "🤵"; break;
		case "Expert": emoji = "👨‍🏫"; break;
		case "DIY": emoji = "👨‍🔧"; break;
		case "Patron": emoji = "👨‍💼"; break;
		
		case "Alphabet" : emoji = "🧚"; break;
		case "Wizard": emoji = "🧙"; break;
		case "Photoshopper": emoji = "👩‍💻"; break;
		case "Dramatist": emoji = "👩‍🎤"; break;
		
		case "Somethingist" : emoji = "🙋"; break;
		case "Detective": emoji = "🕵️"; break;
		case "Scriptkiddie": emoji = "👨‍💻"; break;
		case "Veteran": emoji = "👮"; break;

		case "Devout": emoji = "👳"; break;
		
		case "Lizard": emoji = "🦎"; break;
		
		case "Random" : 
		emoji = emojify(disguises[getRandomInt(disguises.length)].name);
		break;

		case "RedFlag" : emoji = "🚩"; break;
		
		case "Car" : emoji = "🚗"; break;
		case "Truck" : emoji = "🚚"; break;
		case "Taxi" : emoji = "🚕"; break;
		case "Bus" : emoji = "🚌"; break;
		case "Minibus" : emoji = "🚐"; break;
		case "Ambulance" : emoji = "🚑"; break;
		case "Fireengine" : emoji = "🚒"; break;
		case "PoliceCar" : emoji = "🚓"; break;
		case "Suv" : emoji = "🚙"; break;
		case "Lorry" : emoji = "🚛"; break;
		
		case "Shower" : emoji = "🚿"; break;
		case "Food" : emoji = "🥫"; break;
		case "Love" : emoji = ""; break;
		
		
		case "Baby" : emoji = "👶"; break;
		case "DeadBaby" : emoji = "👼"; break;
		case "Poo" : emoji = "💩"; break;
		
		case "Cyber Revolutionary" : emoji = "😱"; break;
		case "Cyber Edgey" : emoji = "😒"; break;
		case "Cyber Blob" : emoji = "🍴"; break;
		case "Cyber Skeleton" : emoji = "💀"; break;
			    
		}		
	return emoji;
	
}
  
function cleartooltip(){
	document.getElementById("hovertext").innerHTML = "Are you winning?";
}




//Heartbeat
setInterval( function(){

iadd = 0;
fadd = 0;
madd = 0;
hadd = 0;
dadd = 0;
meadd = 0;
sadd = 0;

	for (i = 0; i < allposters.length; i++){
		if (allposters[i].count > 0){
			switch (allposters[i].p1type){
				case ("internets") :
					iadd += allposters[i].p1rate * allposters[i].count;
				break;
				case ("fame") :
					fadd += allposters[i].p1rate * allposters[i].count;
				break;
				case ("money") :
					madd += allposters[i].p1rate * allposters[i].count;
				break;
				case ("heat") :
					heat += allposters[i].p1rate * allposters[i].count;
				break;
				case ("drama") :
					heat += allposters[i].p1rate * allposters[i].count;
				break;
				case ("memes") :
					heat += allposters[i].p1rate * allposters[i].count;
				break;
				case ("sadd") :
					heat += allposters[i].p1rate * allposters[i].count;
				break;
			}
			switch (allposters[i].p2type){
				case ("internets") :
					iadd += allposters[i].p2rate * allposters[i].count;
				break;
				case ("fame") :
					fadd += allposters[i].p2rate * allposters[i].count;
				break;
				case ("money") :
					madd += allposters[i].p2rate * allposters[i].count;
				break;
				case ("heat") :
					hadd += allposters[i].p2rate * allposters[i].count;
				break;
				case ("drama") :
					heat += allposters[i].p2rate * allposters[i].count;
				break;
				case ("memes") :
					heat += allposters[i].p2rate * allposters[i].count;
				break;
				case ("scie") :
					heat += allposters[i].p2rate * allposters[i].count;
				break;
			}
		}
	}
	
	internets += iadd;
	fame += fadd;
	money += madd;
	heat += hadd;
	drama += dadd ;
	memes += meadd;

	redrawscoreboard();
	redrawpop();
}, 1000);


function townzoom(){
	var f = parseFloat(document.getElementById("townrange").value);
	document.getElementById("townspan").style.fontSize = f.toString() +"%";
	
}

function redrawscoreboard(){
	document.getElementById("scorepanel").innerHTML = "<table class=" + '"scoretext"' + ">" +
	"<tr><th  style=" + '"width:70%"' + ">" + internets.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("internets") + "</th><th  style=" + '"width:20%"' + ">" + iadd.toLocaleString('en-GB') + "/s</th></tr>"+
	"<tr><th  style=" + '"width:70%"' + ">" + heat.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("heat") + "</th><th  style=" + '"width:20%"' + ">" + hadd.toLocaleString('en-GB') + "/s</th></tr>"+
	"<tr><th  style=" + '"width:70%"' + ">" + fame.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("fame") + "</th><th  style=" + '"width:20%"' + ">" + fadd.toLocaleString('en-GB') + "/s</th></tr>"+
	"<tr><th  style=" + '"width:70%"' + ">" + money.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("money") + "</th><th  style=" + '"width:20%"' + ">" + madd.toLocaleString('en-GB') + "/s</th></tr>"+
	"<tr><th  style=" + '"width:70%"' + ">" + drama.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("drama") + "</th><th  style=" + '"width:20%"' + ">" + dadd.toLocaleString('en-GB') + "/s</th></tr>"+
	"<tr><th  style=" + '"width:70%"' + ">" + memes.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("memes") + "</th><th  style=" + '"width:20%"' + ">" + meadd + "/s</th></tr>"+
	"<tr><th  style=" + '"width:70%"' + ">" + scie.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("scie") + "</th><th  style=" + '"width:20%"' + ">" + sadd.toLocaleString('en-GB') + "/s</th></tr>"+
	"</table>";
}

function redrawpop(){
		prettypoptable(networkposters, "networkpop");
	if (NormiesResearch.researched){
		prettypoptable(normieposters, "normiepop1");
	}
	if (AdvNormiesResearch.researched){
		prettypoptable(advancednormieposters, "normiepop2");
	}
	if (NeetResearch.researched){
		prettypoptable(neetposters, "neetpop1");
	}
	if (AdvNeetResearch.researched){
		prettypoptable(neetposters, "neetpop2");
	}
}


function prettypoptable(arr, html){
	document.getElementById(html).innerHTML = "";
	arr.forEach(element => document.getElementById(html).innerHTML += '<td style ="width:10%">'  + emojify(element.name) + '</td><td style="width:15%" class="logtext">' + element.count + "</td>");
}




function redrawshoponrequest(){
	document.getElementById("network").innerHTML = "";
	document.getElementById("normie").innerHTML = "";
	document.getElementById("neet").innerHTML = "";
	for (let i = 0; i < allposters.length; i++){
		if(allposters[i].revealed == true){
			document.getElementById(allposters[i].type).innerHTML +=  '<button class="btn" id=' + allposters[i].name + 'onmouseout="cleartooltip()" onmouseover="tooltips(' + allposters[i].name + ')" onClick="buybtnclick(' + allposters[i].name + ')">Recruit' + emojify(allposters[i].name) + "</button>";
		} else {
		}
	}
	
}

function redrawresearchonrequest(){
	document.getElementById("research").innerHTML = "";
	document.getElementById("tnormie").innerHTML = "";
	document.getElementById("tneet").innerHTML = "";
	
	for (let i = 0; i < allresearch.length; i++){
		if(allresearch[i].revealed == true){
			document.getElementById(allresearch[i].type).innerHTML +=  '<td><button class="btn" id=' + allresearch[i].name + 'onmouseout="cleartooltip()" onmouseover="tooltips(' + allresearch[i].name + ')" onClick="resbtnclick(' + allresearch[i].name + ')">' + allresearch[i].prettyname + "</button></td>";
		} else {
		}
	}
	
}

function rendertown(){
	var s = "";
	townarr = [];
	document.getElementById("townspan").innerHTML = "";
	document.getElementById("townspan").innerHTML = "";
	for (let i = 0; i < allposters.length; i++) {
		if (allposters[i].count >= 1){
			
			for (let x = 0; x < allposters[i].count; x++){
				
				switch (allposters[i].name) {
					case "Bot" :
					case "NPC" :
					case "Shill" :
					break;
					case "Glowie" :
						s = "<span class=\"glow\" onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify("Random") + "</span>";	
					break;
					case "Lizard" :
					var cb = document.getElementById("snglschbx");
					if (cb.checked){
						s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify("Lizard") + "</span>";
					} else {
						s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify("Random") + "</span>";
					}					
					break;
					default :
					if (allposters[i].type === "interloper"){}
					s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'"+ allposters[i].name+ "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify(allposters[i].name) + "</span>";
					break;
				}
				townarr.push(s);
			}
		}
	}

		for (let i = townarr.length - 1; i > 0; i--) {
			const j = getRandomInt(townarr.length);
			[townarr[i], townarr[j]] = [townarr[j], townarr[i]];
		}

	document.getElementById("townspan").innerHTML = townarr.join("");

}

function removefromtown(a){
	var i = parseInt(a);
	allposters[i].count -= 1;
	rendertown();
	
}

function resbtnclick(a){
	
	if (a.researched){
			document.getElementById("popuptext").innerHTML = a.html;
			document.getElementById("popup").style.display = "block";
		
	} else {
		var c1 = false;
		var c2 = false;
		
		var c1c = 0;
		var c2c = 0;
	
		switch (a.c1type){
			case "internets" : if ((a.c1rate) <= internets){
				c1 = true;
				c1c = (a.c1rate);
				} 
				break;
			case "fame" : if ((a.c1rate) <= fame){c1 = true; c1c = (a.c1rate); } break;	
			case "money" : if ((a.c1rate) <=  money){c1 = true; c1c = (a.c1rate); } break;
		}
		switch (a.c2type){
			case "internets" : if ((a.c2rate) <= internets){c2 = true; c1c = (a.c2rate); } break;
			case "fame" : if ((a.c2rate) <= fame){c2 = true; c1c = (a.c2rate); } break;	
			case "money" : if ((a.c2rate) <=  money){c2 = true; c1c = (a.c2rate); } break;
			case (0) : c2 = true; break;
		}
		
		if (c1 && c2){
		switch (a.c1type){
			case "internets" : internets -= c1c; break;
			case "fame" : fame -= c1c; break;
			case "money" : money -= c1c; break;
		}
		switch (a.c2type){
			case "internets" : internets -= c2c; break;
			case "fame" : fame -= c2c; break;
			case "money" : money -= c2c; break;
		}	
			for (i = 0; i < a.unlocks.length; i++) {
				a.unlocks[i].revealed = true;
			}
			a.researched = true;
			a.prettyname += "✔️";
			document.getElementById("popuptext").innerHTML = a.html;
			document.getElementById("popup").style.display = "block";
			redrawresearchonrequest();
			switch (a.name){
				case "NormiesResearch":
					document.getElementById("normierangelbl").style.display = "block";
					document.getElementById("normierange").style.display = "block";
				break;
				case "NeetResearch":
					document.getElementById("neetrangelbl").style.display = "block";
					document.getElementById("neetrange").style.display = "block";
				break;
			}
		}
	}	
}


function buybtnclick(a){

	var c1 = false;
	var c2 = false;
	
	var c1c = 0;
	var c2c = 0;
	var rv = 0;
	switch (a.type){
		case "network":
			rv = parseInt(document.getElementById("networkrange").value);
		break;
		case "normie":
			rv = parseInt(document.getElementById("normierange").value);
		break;
		case "neet":
			rv = parseInt(document.getElementById("neetrange").value);
		break;
	}
	
	switch (a.c1type){
		case ("internets") : if ((a.c1rate * rv) <= internets){c1 = true; c1c = (a.c1rate * rv); } break;
		case ("fame") : if ((a.c1rate * rv) <= fame){c1 = true; c1c = (a.c1rate * rv); } break;	
		case ("money") : if ((a.c1rate * rv) <=  money){c1 = true; c1c = (a.c1rate * rv); } break;
	}
	switch (a.c2type){
		case ("internets") : if ((a.c2rate * rv) <= internets){c2 = true; c1c = (a.c2rate * rv); } break;
		case ("fame") : if ((a.c2rate * rv) <= fame){c2 = true; c1c = (a.c2rate * rv); } break;	
		case ("money") : if ((a.c2rate * rv) <=  money){c2 = true; c1c = (a.c2rate * rv); } break;
		case (0) : c2 = true; break;
	}
	
	if (c1 && c2){
	switch (a.c1type){
		case ("internets") : internets -= c1c; break;
		case ("fame") : fame -= c1c; break;
		case ("money") : money -= c1c; break;
	}
	switch (a.c2type){
		case ("internets") : internets -= c2c; break;
		case ("fame") : fame -= c2c; break;
		case ("money") : money -= c2c; break;
	}	
			a.count += rv;
		for (let i = 0; i < rv; i++) {
			redrawscoreboard();
		}
	}
	
	//redraweverythig();
	//alert(rv + " " + town.toString());
}


function addInterloper(a){
	switch (a) {
		case "Glowie" :
			Glowie.count += 1;
		break;
		case "Lizard" :
			Lizard.count += 1;
		break;
		case CSkeleton :
			CSkeleton.count += 1;
		break;
		case CBlob :
			CBlob.count += 1;
		break;
		case CEdgey :
			CEdgey.count += 1;
		break;
		case CRevolutionary :
			CRevolutionary.count += 1;
		break;
	}

	  
}


function opentab(evt, tab) {
redrawshoponrequest();
redrawresearchonrequest();
rendertown();
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

function popupclose(){
document.getElementById("popup").style.display = "none";	
}

function minepopclose(){
document.getElementById("minepop").style.display = "none";	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sunglasschbx(){
	var cb = document.getElementById("snglschbx");
	if (cb.checked == true){
		document.getElementById("maincontainer").style.background = "#000000";
		
	}
	else  {
		document.getElementById("maincontainer").style.background = "#FFFFFF";
	}
	rendertown();
}


const TILE_STATUSES={
	HIDDEN: 'hidden',
	MINE: 'mine',
	NUMBER: 'number',
	MARKED: 'marked'
};

var TOTAL_MINES = 0;
var board = [];
var row = [];
var boardSizex = 0;
var boardSizey = 0;
var totaltiles = 0;
	var minePositions = [];
		var positions = [];
var mfgameon = false;

function createBoardclick(){
	
	if (!mfgameon){
		
	
	var x = parseInt(document.getElementById("mfxrange").value);
	var y = parseInt(document.getElementById("mfyrange").value);
	var m = parseInt(document.getElementById("mfmrange").value);
	
	m = parseInt((x*y)*(m/100));
	
	
	if (m>=x*y){
		var c = confirm("I'm not judging but you have " + (x*y) + " tiles and they are all mines. Is that you rolling?");
		if (c){m = x*y;} else {return;}
	}
	
	createBoard(x, y, m);
	}
	document.getElementById("minepop").style.display = "flex";

}


document.onkeydown = function(evt) {
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




setInterval( function(){
	var s = "";

	for (let i = 0; i < 15; i++){
			var r = getRandomInt(15);
		switch (r){
			case 0 : s+= emojify("Car") + '<span style="opacity: 0.1;">__</span>'; break;
			case 1 : s+= emojify("Truck") + '<span style="opacity: 0.1;">__</span>'; break;
			case 2 : s+= emojify("Bus") + '<span style="opacity: 0.1;">__</span>'; break;
			case 3 : s+= emojify("Minibus")+  '<span style="opacity: 0.1;">__</span>'; break;
			case 4 : s+= emojify("Taxi") + '<span style="opacity: 0.1;">__</span>'; break;
			case 5 : s+= emojify("Ambulance") + '<span style="opacity: 0.1;">__</span>'; break;
			case 6 : s+= emojify("Fireengine") + '<span style="opacity: 0.1;">__</span>'; break;
			case 7 : s+= emojify("PoliceCar") + '<span style="opacity: 0.1;">__</span>'; break;
			case 8 : s+= emojify("Suv") + '<span style="opacity: 0.1;">__</span>'; break;
			case 9 : s+= emojify("Lorry") + '<span style="opacity: 0.1;">__</span>'; break;			
			default : s+= '<span style="opacity: 0.1;">__</span>'; break;
			
		}
	}
	
	document.getElementById("traffic").innerHTML = s;
}, 15000);



function asd(){
	alert("asd");
}

var VChild = {
	happiness : 100,
	hunger : 100,
	discipline : 50,
	hp : 25,
	
	age : 0,
	birth : 0,
	alive : false,
	emojidiv : "",
	emoji: emojify("Baby"),
	quality : 100,
	
	obesity : 0,
	shitmeter : 0,
	shits : 0,
	
	slack : 0,
	
	
};

var vchildtimelast = 0;
var vchildtimenext = 0;


function dateInt(){
	//retuns in minutes since January 1, 1970
  var d = new Date();
  var n = parseInt(d.getTime()/60000);
  return n;
}

function vpneedbtnclick (a){
	switch (a){
		case "new" :
			rollnewvchild();
		break;
		case "clean" :
			if(VChild.alive){
				VChild.shits--;
			}
		break;
		case "feed" :
			if(VChild.alive && VChild.discipline > 0){
				VChild.hunger += 30;
				if(VChild.hunger > 100){
					VChild.obesity = parseInt((VChild.hunger - 100)/2);
				}
			}
		break;
		case "wrestle" :
			if(VChild.alive && VChild.discipline > 0){
				VChild.hunger -= 15;
				VChild.obesity -= 5;
				VChild.discipline += 5;
				VChild.slack -= 5;
				if (VChild.age < 7){
					VChild.alive = false;
					alert("You crush VChilds tiny body with a spectacular Greco-Roman headlock. It explodes into tiny bits of code. Maybe it was too young for this.");
				}
			}
		break;
	}	
}


var vfamily=[];


function rollnewvchild() {
	VChild.happiness = 100;
	VChild.hunger = 100;
	VChild.discipline = 50;
	VChild.hp = 25;
	
	VChild.age = 0;
	VChild.birth = dateInt();
	VChild.alive = true;
	VChild.emojidiv = document.getElementById("vchildemoji");
	VChild.emoji= emojify("Baby");
	VChild.quality = 100;
	
	VChild.obesity = 0;
	VChild.shitmeter = 0;
	VChild.shits = 0;
	
	VChild.slack = 0;
	VChild.emojidiv.innerHTML = VChild.emoji;
	document.getElementById("vchildemoji2").innerHTML = "";
}

setInterval( function(){
	if (VChild.alive){
		
	VChild.clean -= 1;
	VChild.hunger -= 1;
	//Livefeed
	document.getElementById("vchappy").innerHTML = "Happiness: " + VChild.happiness;
	document.getElementById("vchunger").innerHTML = "Hunger: " + VChild.hunger;
	document.getElementById("vcdscpln").innerHTML = "Discipline: " + VChild.discipline;
	
	document.getElementById("vchp").innerHTML = "Health: " + VChild.hp;
	document.getElementById("vcobesity").innerHTML = "Obesity: " + VChild.obesity;
	document.getElementById("vcslack").innerHTML = "Psychopathy: " + VChild.slack;
	
	//VChild.emojidiv.innerHTML = emojify(VChild.emoji);
	
	//Starve Note: Skipping a meal should not instantly kill a baby
	if (VChild.hunger < 0 ){
		VChild.obesity -= 2;
		VChild.happiness -= 1;
	}
	
	if (VChild.hunger > 0 ){
		VChild.shitmeter += 1;
	}
	
	if (VChild.shitmeter > 30){
		VChild.shitmeter = 0;
		VChild.shits++;
	}
	
	if (VChild.shits > 0){
		VChild.happiness -= 1;
		VChild.hp -= 1;
		VChild.slack += 1;
	}
	
	if (VChild.hunger <= 100 && VChild.obesity > 0){
		VChild.obesity -= 0.5;
		VChild.hp += 0.5;
	}
	
	if (VChild.obesity > 99){
		
		addVChildtoTown(CBlob);
	}	
	if (VChild.obesity < -99){
		addVChildtoTown(CSkeleton);

	}
	if (VChild.happiness < -99){
		addVChildtoTown(CEdgey);
	}
	if (VChild.shits > 4){
		addVChildtoTown(CRevolutionary);
	}
	}
	
	document.getElementById("vchildemoji2").innerHTML = "";
	for (let i = 0; i < VChild.shits; i++)
		document.getElementById("vchildemoji2").innerHTML += emojify("Poo");
}, 10);

function addVChildtoTown(c){
		VChild.emojidiv.innerHTML = emojify(c.name);
		document.getElementById("popuptext").innerHTML = c.birth + "<br><br>Added to Network:<br>" + emojify(c.name) + " " + c.tooltip;
		document.getElementById("popup").style.display = "block";
		VChild.alive = false;
		addInterloper(c);
}

function init(){
setresearchtree();

document.getElementById("snglschbx").checked = false;
document.getElementById("townrange").value = 100;
  
document.getElementById("normierangelbl").style.display = "none";
document.getElementById("neetrangelbl").style.display = "none";
  
document.getElementById("normierange").style.display = "none";
document.getElementById("neetrange").style.display = "none";

}