
		var VChild = {
			happiness: 100,
			hunger: 100,
			discipline: 50,
			hp: 25,

			age: 0,
			birth: 0,
			alive: false,
			emojidiv: "",
			emoji: emojify("Baby"),
			quality: 100,

			obesity: 0,
			shitmeter: 0,
			shits: 0,

			slack: 0,


		};

		var vchildtimelast = 0;
		var vchildtimenext = 0;


		function dateInt() {
			//retuns in minutes since January 1, 1970
			var d = new Date();
			var n = parseInt(d.getTime() / 60000);
			return n;
		}

		function vpneedbtnclick(a) {
			switch (a) {
				case "new":
					rollnewvchild();
					break;
				case "clean":
					if (VChild.alive) {
						VChild.shits--;
					}
					break;
				case "feed":
					if (VChild.alive && VChild.discipline > 0) {
						VChild.hunger += 30;
						if (VChild.hunger > 100) {
							VChild.obesity = parseInt((VChild.hunger - 100) / 2);
						}
					}
					break;
				case "wrestle":
					if (VChild.alive && VChild.discipline > 0) {
						VChild.hunger -= 15;
						VChild.obesity -= 5;
						VChild.discipline += 5;
						VChild.slack -= 5;
						if (VChild.age < 7) {
							VChild.alive = false;
							alert("You crush VChilds tiny body with a spectacular Greco-Roman headlock. It explodes into tiny bits of code. Maybe it was too young for this.");
						}
					}
					break;
			}
		}


		var vfamily = [];


		function rollnewvchild() {
			VChild.happiness = 100;
			VChild.hunger = 100;
			VChild.discipline = 50;
			VChild.hp = 25;

			VChild.age = 0;
			VChild.birth = dateInt();
			VChild.alive = true;
			VChild.emojidiv = document.getElementById("vchildemoji");
			VChild.emoji = emojify("Baby");
			VChild.quality = 100;

			VChild.obesity = 0;
			VChild.shitmeter = 0;
			VChild.shits = 0;

			VChild.slack = 0;
			VChild.emojidiv.innerHTML = VChild.emoji;
			document.getElementById("vchildemoji2").innerHTML = "";
		}

		setInterval(function () {
			if (VChild.alive) {

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
				if (VChild.hunger < 0) {
					VChild.obesity -= 2;
					VChild.happiness -= 1;
				}

				if (VChild.hunger > 0) {
					VChild.shitmeter += 1;
				}

				if (VChild.shitmeter > 30) {
					VChild.shitmeter = 0;
					VChild.shits++;
				}

				if (VChild.shits > 0) {
					VChild.happiness -= 1;
					VChild.hp -= 1;
					VChild.slack += 1;
				}

				if (VChild.hunger <= 100 && VChild.obesity > 0) {
					VChild.obesity -= 0.5;
					VChild.hp += 0.5;
				}

				if (VChild.obesity > 99) {

					addVChildtoTown(CBlob);
				}
				if (VChild.obesity < -99) {
					addVChildtoTown(CSkeleton);
				}
				if (VChild.happiness < -99) {
					addVChildtoTown(CEdgey);
				}
				if (VChild.shits > 4) {
					addVChildtoTown(CRevolutionary);
				}
			}

			document.getElementById("vchildemoji2").innerHTML = "";
			for (let i = 0; i < VChild.shits; i++)
				document.getElementById("vchildemoji2").innerHTML += emojify("Poo");
		}, 10);

		function addVChildtoTown(c) {
			VChild.emojidiv.innerHTML = emojify(c.name);
			var s = c.birth + "<br><br>Added to Network:<br>" + emojify(c.name) + " " + c.tooltip;
			popalert(s, "alert");
			VChild.alive = false;
			addInterloper(c);
		}