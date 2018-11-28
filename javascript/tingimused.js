// if-else - tingimused

// function defineeritaks ekujul function tema nimi sulud, mida kasutatakse parameetrite kirjutamiseks, aga meie praegu ei kasuta neid ja loogilised sulud

// function on plokk, mida kasutatakse koodis eri osade eristamiseks ja submit nupu sidumiseks

function shoe() {

// see mida kasutaja sisestab kasti, siis saadakse see väärtus, mida siis hakatakse mujal koodis kasutama

	var resultMax = document.getElementById("size").value;

	if (resultMax > 60) {
		showResult = "<p>Sinu kinganumber on liiga suur. Oled sa kindel, et sisestasid õige arvu</p>";
	}
	else {
		showResult = "Sinu kinganumber on " + resultMax; 
	}

	document.getElementById("result").innerHTML = showResult; 

}


