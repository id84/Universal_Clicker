function tooltips(i) {
	var s = "";
	var r = 1;
	switch (i.type) {
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
	if (i.researched == null) {
		s = "Add <strong>" + i.name + " " + emojify(i.name) + " x" + r + "</strong> for <strong>" + (r * i.c1rate).toLocaleString('en-GB') + " " + emojify(i.c1type);
		if (i.c2rate != 0) {
			s += ", " + (r * i.c2rate).toLocaleString('en-GB') + " " + emojify(i.c2type);

		}
		s += "</strong> Generates: <strong>" + (r * i.p1rate).toLocaleString('en-GB') + emojify(i.p1type) + "/s</strong>";
		if (i.p2type != 0) {
			s += ", <strong>" + (r * i.p2rate).toLocaleString('en-GB') + emojify(i.p2type) + "/s</strong>";
		}
	} else {
		if (!i.researched) {
			s += (i.c1rate).toLocaleString('en-GB') + " " + emojify(i.c1type);
			if (i.c2rate != 0) {
				s += ", " + (i.c2rate).toLocaleString('en-GB') + " " + emojify(i.c2type);
			}
		}
	}
	s += "<br><br>";
	document.getElementById("hovertext").innerHTML = s + i.tooltip;
}
function tooltipstabs(i) {
	var s = "";

	switch (i) {
		case "BuyTab": s = "Add more posters to your Network"; break;
		case "ResearchTab": s = "Research stuff by Googling them"; break;
		case "TownTab": s = "View your Network of posters."; break;
		case "SocializeTab": s = "Carefully participate in society. For some reason."; break;
		case "VParentTab": s = "Virtual Parentage. Make sure your digital lineage is not dead."; break;
		case "Teststuff": s = "Solo amateur developer pls understand"; break;
	}
	document.getElementById("hovertext").innerHTML = s;
}
function tooltip(a) {
	switch (a) {
		case "sunglass":
			document.getElementById("hovertext").innerHTML = "Makes Glowies and Lizards easier to see.";
			break;
		case "Glowie":
			document.getElementById("hovertext").innerHTML = "<span style=\"\"class=\"glow\">This person is glowing!</span>";
			break;
		case "Lizard":
			var cb = document.getElementById("snglschbx");
			if (cb.checked) {
				document.getElementById("hovertext").innerHTML = "<span style=\"color:green;\">This is a Lizard!</span>";
			} else {
				document.getElementById("hovertext").innerHTML = Lizard.tooltip;
			}
			break;
		case "vpneeddna":
			document.getElementById("hovertext").innerHTML = "Get a new VChild with random DNA!";
			break;


		case "vpneedfeed":
			document.getElementById("hovertext").innerHTML = "Feed your VChild for 30%. Over feeding leads to obesity.";
			break;

		case "vpneedclean":
			document.getElementById("hovertext").innerHTML = "Clean your VChild, the learning AI, if you feed it shit, it will produce shit.";
			break;

		case "vpneedwrestle":
			document.getElementById("hovertext").innerHTML = "Wrestle with your VChild. It will improve Discipline and fix some Obesity.";
			break;
		case "vpneedgame":
			document.getElementById("hovertext").innerHTML = "Play games with your VChild, improve its already instantaneous reflexes and infinitely fast decision making.";
			break;
		case "vpneeddiscip":
			document.getElementById("hovertext").innerHTML = "Teach boring things like responsbility and integrity to your VChild.";
			break;
		case "vpneedpract":
			document.getElementById("hovertext").innerHTML = "Force your VChild to practice, perfecting its craft. Your VChild should practice 40 hours a day.";
			break;
		case "vpneedint":
			document.getElementById("hovertext").innerHTML = "Allow your VChild to connect Internets. Each time will result in catastrophic devastation or amazing improvement.";
			break;
		case "vpneededucate":
			document.getElementById("hovertext").innerHTML = "Teach your VChild a book. This button does nothing.";
			break;



		case "mfstart":
			document.getElementById("hovertext").innerHTML = "Start a new minefield, or resume current one.";
			break;

	}
}






		//Bad naming convention ahead, not gonna merge them.
		function tooltiprange(range) {
			var rv = 0;
			switch (range) {
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
					document.getElementById("hovertext").innerHTML = "Minefield will be " + rv1 + " rows and " + rv2 + " columns and " + rv3 + "% will be mines.<br>You will be rewarded up to " +
						Math.floor(((rv1 * rv2) / 100) * rv3) + " random posters if you win!";
					break;
			}

		}










function cleartooltip() {
	document.getElementById("hovertext").innerHTML = "Are you winning?";
}
